'use server';

import { Resend } from 'resend';
import { EmailTemplate } from './components/EmailTemplate';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: { name: string; email: string; subject: string; message: string }) {
  try {
    const { name, email, subject, message } = formData;

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ugendransakthivel@gmail.com'],
      subject: `New Message: ${subject}`,
      react: <EmailTemplate name={name} email={email} subject={subject} message={message} />,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}
