"use server";
import { Resend } from "resend";
import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get("message");
    const email = formData.get("email");

    if (!validateString(email, 500)) {
        return {
            error: "invalid email"
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: "invalid message"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to:"bithug10@gmail.com",
            subject: "Message z portolia - Contact",
            reply_to: email as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string, email: email as string
            }),
        })
    }
    catch(error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }
    return {
        data
    };
  }