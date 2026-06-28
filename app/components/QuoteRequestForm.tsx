"use client";

import { useState } from "react";

type QuoteRequestFormProps = {
  containerType: string;
};

export default function QuoteRequestForm({
  containerType,
}: QuoteRequestFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value;

    const location = (
      form.elements.namedItem("location") as HTMLInputElement
    ).value;

    const quantity = (
      form.elements.namedItem("quantity") as HTMLInputElement
    ).value;

    const notes = (
      form.elements.namedItem("notes") as HTMLTextAreaElement
    ).value;

    // Send email first
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        location,
        containerType,
        quantity,
        notes,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Failed to send quote request.");
      setLoading(false);
      return;
    }

    // Then open WhatsApp
    const whatsappMessage = `📦 New Quote Request

Container: ${containerType}

Name: ${name}

Email: ${email}

Phone: ${phone}

Delivery Location: ${location}

Quantity: ${quantity}

Additional Notes:
${notes}`;

    window.open(
      `https://wa.me/18606897427?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    form.reset();

    setLoading(false);

    alert("Quote request sent successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />

      <input
        type="text"
        name="location"
        placeholder="Delivery Location"
        required
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        min="1"
        defaultValue="1"
        required
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />

      <textarea
        name="notes"
        placeholder="Additional Notes"
        rows={5}
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />

      <button
        type="submit"
        disabled={loading}
        className="primary-button"
        style={{
          marginTop: "20px",
          width: "100%",
        }}
      >
        {loading ? "Sending..." : "Request Quote"}
      </button>
    </form>
  );
}