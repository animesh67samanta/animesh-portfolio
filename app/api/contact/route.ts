import { NextRequest, NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import { validateContactForm, ContactFormData } from "@/lib/emailjs";

export async function POST(req: NextRequest) {
  try {
    // 1. Verify BotID (blocks bots, scrapers, and malicious scripts)
    const verification = await checkBotId();
    if (verification.isBot) {
      return NextResponse.json(
        {
          success: false,
          message: "Bot protection check failed. Your submission was blocked as automated traffic."
        },
        { status: 403 }
      );
    }

    // 2. Parse request body
    const body = (await req.json()) as ContactFormData;

    // 3. Validation and honeypot spam check
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0] || "Invalid form submission.";
      return NextResponse.json({ success: false, message: firstError }, { status: 400 });
    }

    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json(
        { success: false, message: "Spam submission rejected." },
        { status: 400 }
      );
    }

    // 4. EmailJS Configuration
    const serviceId =
      process.env.EMAILJS_SERVICE_ID ||
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      "service_lz916ok";
    const templateId =
      process.env.EMAILJS_TEMPLATE_ID ||
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      "template_s0qct88";
    const publicKey =
      process.env.EMAILJS_PUBLIC_KEY ||
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
      "FO50ce2ZmWgQGlQmx";
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    const isConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== "YOUR_SERVICE_ID" &&
      templateId !== "YOUR_TEMPLATE_ID" &&
      publicKey !== "YOUR_PUBLIC_KEY";

    if (!isConfigured) {
      return NextResponse.json({
        success: true,
        isMock: true,
        message:
          "Message received in demo mode! (Configure EmailJS keys in .env.local to receive live messages)."
      });
    }

    // 5. Send Email via EmailJS REST API
    const emailPayload: Record<string, unknown> = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: body.name.trim(),
        name: body.name.trim(),
        from_email: body.email.trim(),
        email: body.email.trim(),
        reply_to: body.email.trim(),
        subject: body.subject.trim(),
        message: body.message.trim(),
        to_name: "Animesh Samanta"
      }
    };

    if (privateKey) {
      emailPayload.accessToken = privateKey;
    }

    const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailPayload)
    });

    if (emailResponse.ok) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent successfully."
      });
    } else {
      const errorText = await emailResponse.text();
      console.error("EmailJS API Error:", emailResponse.status, errorText);
      return NextResponse.json(
        {
          success: false,
          message: "Email dispatch failed. Please contact directly at animesh67samanta@gmail.com."
        },
        { status: 502 }
      );
    }
  } catch (error: unknown) {
    console.error("API /contact error:", error);
    const errText = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        success: false,
        message: `An unexpected server error occurred (${errText}). Please reach out directly.`
      },
      { status: 500 }
    );
  }
}
