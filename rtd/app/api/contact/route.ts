import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Initialize Resend with API key check
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("RESEND_API_KEY is not set in environment variables");
}

const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!resend || !apiKey) {
      console.error("Resend is not configured. RESEND_API_KEY is missing.");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email using Resend
    // Use your verified domain instead of onboarding@resend.dev
    console.log("Attempting to send email via Resend...");
    console.log("API Key exists:", !!apiKey);
    
    // Try sending to multiple addresses to test delivery
    // Note: You can also use 'cc' or 'bcc' fields if needed
    const { data, error } = await resend.emails.send({
      from: "Red Tower Contact Form <noreply@redtowerdigital.com>", // Use your verified domain
      to: ["ben@redtowerdigital.com"],
      cc: ["sam@redtowerdigital.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || JSON.stringify(error)}` },
        { status: 500 }
      );
    }

    console.log("Email sent successfully. Resend ID:", data?.id);

    return NextResponse.json(
      { success: true, message: "Email sent successfully", emailId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Full error:", JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: `Internal server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
