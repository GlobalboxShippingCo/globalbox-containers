"use client";

export default function QuoteForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    // Send email
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

console.log(result);

if (!response.ok) {
  alert(result.error || "Email failed to send.");
  return;
}

    // Open WhatsApp
    const whatsappMessage = `New Container Quote Request

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

    alert("Your quote request has been sent successfully!");
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
          marginTop: "15px",
          borderRadius: "8px",
          border: "1px solid #ddd",
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
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        required
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "15px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

      <button
        type="submit"
        style={{
          marginTop: "20px",
          padding: "15px 25px",
          background: "#25D366",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Send Quote Request
      </button>
    </form>
  );
}