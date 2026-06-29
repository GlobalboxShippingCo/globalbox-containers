import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type CartItem = {
  containerType: string;
  price: string;
  quantity: number;
};

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      address,
      notes,
      cart,
    }: {
      name: string;
      email: string;
      phone: string;
      address: string;
      notes: string;
      cart: CartItem[];
    } = await request.json();

    const totalContainers = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const orderItems = cart
      .map(
        (item) => `
          <li style="margin-bottom:12px;">
            <strong>${item.containerType}</strong><br/>
            Price: ${item.price}<br/>
            Quantity: ${item.quantity}
          </li>
        `
      )
      .join("");

    const { error } = await resend.emails.send({
      from: "GlobalBox Containers <onboarding@resend.dev>",
      to: ["conglobalshippingcompanies@gmail.com"],
      subject: `🛒 New Container Order from ${name}`,
      html: `
        <h2>New Container Order</h2>

        <hr />

        <h3>Customer Information</h3>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Delivery Address:</strong> ${address}</p>

        <hr />

        <h3>Order Summary</h3>

        <p><strong>Total Containers:</strong> ${totalContainers}</p>

        <ul>
          ${orderItems}
        </ul>

        <hr />

        <h3>Customer Notes</h3>

        <p>${notes || "No additional notes."}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Order sent successfully.",
    });
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