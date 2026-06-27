"use client";

import { useState } from "react";

export default function ContactForm() {
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

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Failed to send message.");
      setLoading(false);
      return;
    }

    const whatsappMessage = `New Contact Request

Name: ${name}
Email: ${email}

Message:
${message}`;

    window.open(
      `https://wa.me/18606897427?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    form.reset();
    setLoading(false);

    alert("Your message has been sent successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "25px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
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
        name="message"
        placeholder="Your Message"
        rows={6}
        required
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
        style={{
          marginTop: "20px",
          padding: "15px 25px",
          background: "#0f172a",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}