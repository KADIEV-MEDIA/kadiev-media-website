import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      website,
      services,
      budget,
      timeline,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !message ||
      !budget ||
      !Array.isArray(services) ||
      services.length === 0
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Kadiev Media <contact@kadievmedia.com>",

      to: ["kadievmedia.support@gmail.com"],

      replyTo: email,

      subject: `New Kadiev Media inquiry — ${name}`,

      text: `
NEW PROJECT INQUIRY

Name:
${name}

Email:
${email}

Company:
${company || "Not provided"}

Website:
${website || "Not provided"}

Services:
${services.join(", ")}

Estimated Budget:
${budget}

Timeline:
${timeline || "Not provided"}

Project Description:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send inquiry." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}