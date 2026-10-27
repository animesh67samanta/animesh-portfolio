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

  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  } else if (data.name.trim().length > 100) {
    errors.name = "Name must not exceed 100 characters.";
  }

  // Strict email validation and prevention of header injection (\r or \n)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const rawEmail = typeof data.email === "string" ? data.email.trim() : "";
  if (!rawEmail || !emailRegex.test(rawEmail) || /[\r\n]/.test(rawEmail)) {
    errors.email = "Please enter a valid email address.";
  } else if (rawEmail.length > 100) {
    errors.email = "Email address must not exceed 100 characters.";
  }

  const rawSubject = typeof data.subject === "string" ? data.subject.trim() : "";
  if (!rawSubject || rawSubject.length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  } else if (rawSubject.length > 200) {
    errors.subject = "Subject must not exceed 200 characters.";
  } else if (/[\r\n]/.test(rawSubject)) {
    errors.subject = "Subject must not contain line breaks.";
  }

  const rawMessage = typeof data.message === "string" ? data.message.trim() : "";
  if (!rawMessage || rawMessage.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (rawMessage.length > 3000) {
    errors.message = "Message must not exceed 3000 characters.";
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
