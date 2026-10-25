import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // Spam protection
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
  isMock?: boolean;
}

export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: Partial<Record<keyof ContactFormData, string>> } {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  if (data.honeypot && data.honeypot.trim() !== "") {
    errors.honeypot = "Spam detection triggered.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export async function sendContactEmail(formData: ContactFormData): Promise<SendEmailResponse> {
  const validation = validateContactForm(formData);
  if (!validation.isValid) {
    const firstError = Object.values(validation.errors)[0] || "Invalid form submission.";
    return { success: false, message: firstError };
  }

  // Honeypot check
  if (formData.honeypot && formData.honeypot.trim() !== "") {
    return { success: false, message: "Spam submission rejected." };
  }

  const serviceId =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_lz916ok";
  const templateId =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_s0qct88";
  const publicKey =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "FO50ce2ZmWgQGlQmx";

  // Check if real EmailJS credentials are provided
  const isConfigured =
    serviceId &&
    templateId &&
    publicKey &&
    serviceId !== "YOUR_SERVICE_ID" &&
    templateId !== "YOUR_TEMPLATE_ID" &&
    publicKey !== "YOUR_PUBLIC_KEY";

  if (!isConfigured) {
    // Graceful client simulation for preview/demo when keys are not configured yet
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.info(
      "[EmailJS Notice] NEXT_PUBLIC_EMAILJS_SERVICE_ID is not configured in .env.local. Simulating successful message delivery."
    );
    return {
      success: true,
      isMock: true,
      message:
        "Message received in demo mode! (To receive emails in your inbox, configure your EmailJS keys in .env.local)."
    };
  }

  try {
    const templateParams = {
      from_name: formData.name.trim(),
      name: formData.name.trim(),
      from_email: formData.email.trim(),
      email: formData.email.trim(),
      reply_to: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      to_name: "Animesh Samanta"
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    if (response.status === 200 || response.text === "OK") {
      return {
        success: true,
        message: "Thank you! Your message has been sent successfully."
      };
    } else {
      return {
        success: false,
        message: `Email sending failed with status: ${response.status}. Please try emailing directly.`
      };
    }
  } catch (error: unknown) {
    console.error("EmailJS Error:", error);
    const errText = error instanceof Error ? error.message : "Network error";
    return {
      success: false,
      message: `Failed to dispatch email (${errText}). Please contact directly at animesh67samanta@gmail.com.`
    };
  }
}
