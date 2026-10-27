import { NextRequest, NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import { validateContactForm, ContactFormData } from "@/lib/emailjs";

// In-memory sliding rate limiter: max 5 requests per 10 minutes per IP
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

function checkRateLimit(ip: string, limit = 5, windowMs = 10 * 60 * 1000): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();

  // Periodically clean expired entries to prevent memory growth
  if (rateLimitMap.size > 1000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (val.resetAt < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  const record = rateLimitMap.get(ip);
  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (record.count >= limit) {
    const retryAfter = Math.ceil((record.resetAt - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count += 1;
  return { allowed: true };
}

function sanitizeText(str: string): string {
  return str
    .replace(/[<>]/g, "") // strip dangerous angle brackets
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    // 1. Content-Type check
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Invalid Content-Type. Expected application/json." },
        { status: 415 }
      );
    }

    // 2. Request payload size check (max 10KB)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 10240) {
      return NextResponse.json(
        { success: false, message: "Payload too large. Maximum allowed size is 10KB." },
        { status: 413 }
      );
    }

    // 3. Origin check (CSRF defense for state-changing requests)
    const origin = req.headers.get("origin");
    if (origin) {
      const allowedOrigins = [
        "https://animeshsamanta.is-a.dev",
        "http://localhost:3000",
        "https://animesh-portfolio-nu.vercel.app"
      ];
      const isAllowed =
        allowedOrigins.includes(origin) || origin.endsWith(".vercel.app");
      if (!isAllowed) {
        return NextResponse.json(
          { success: false, message: "Cross-origin request rejected." },
          { status: 403 }
        );
      }
    }

    // 4. Rate Limiting per Client IP
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown-client";

    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: `Too many submissions. Please wait ${rateLimit.retryAfter} seconds before trying again.`
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfter || 60)
          }
        }
      );
    }

    // 5. Verify BotID (blocks automated traffic and scrapers)
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

    // 6. Parse and validate request body
    const body = (await req.json()) as ContactFormData;

    // Honeypot spam check
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json(
        { success: false, message: "Spam submission rejected." },
        { status: 400 }
      );
    }

    const validation = validateContactForm(body);
    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0] || "Invalid form submission.";
      return NextResponse.json({ success: false, message: firstError }, { status: 400 });
    }

    // Sanitize user inputs
    const sanitizedName = sanitizeText(body.name);
    const sanitizedEmail = sanitizeText(body.email).replace(/[\r\n]/g, "");
    const sanitizedSubject = sanitizeText(body.subject).replace(/[\r\n]/g, "");
    const sanitizedMessage = sanitizeText(body.message);

    // 7. EmailJS Configuration
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

    // 8. Send Email via EmailJS REST API
    const emailPayload: Record<string, unknown> = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: sanitizedName,
        name: sanitizedName,
        from_email: sanitizedEmail,
        email: sanitizedEmail,
        reply_to: sanitizedEmail,
        subject: sanitizedSubject,
        message: sanitizedMessage,
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
    // Log complete diagnostics internally without leaking stack traces or internals to user
    console.error("API /contact server error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred. Please try again later or contact directly at animesh67samanta@gmail.com."
      },
      { status: 500 }
    );
  }
}
