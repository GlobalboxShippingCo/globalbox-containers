import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      location,
      containerType,
      quantity,
      notes,
    } = await request.json();

    const { error } = await resend.emails.send({
      from: "GlobalBox Containers <onboarding@resend.dev>",
      to: ["conglobalshippingcompanies@gmail.com"],
      subject: `New Quote Request - ${containerType}`,
      html: `
        <h2>New Container Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Delivery Location:</strong> ${location}</p>

        <p><strong>Container Type:</strong> ${containerType}</p>

        <p><strong>Quantity:</strong> ${quantity}</p>

        <p><strong>Additional Notes:</strong></p>

        <p>${notes || "None"}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to send email.",
      },
      { status: 500 }
    );
  }
}