"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
    return typeof value === "string" && value && value.length <= maxLength;
}

export const sendEmail = async (formData: FormData) => {
  "use server";

  const message = formData.get("message");
  const email = formData.get("senderEmail")

  if (!validateString(email, 500)){
    return {
        error: "Invalid email"
    }
  }
  if (!validateString(message, 5000)){
    return {
        error: "Invalid message"
    }
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "tugus.ibram@gmail.com",
    subject: "New message from your portfolio website!",
    reply_to: email as string,
    text: `From: ${email}\n\nMessage:\n${message}` as string
  });
};
