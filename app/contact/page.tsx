export default function ContactPage() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      <h1>Contact Us</h1>

      <p
        style={{
          fontSize: "18px",
          marginTop: "20px",
          lineHeight: "1.8",
        }}
      >
        Need a shipping container? Contact us today for a free quote.
      </p>

      <input
        type="text"
        placeholder="Your Name"
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
        placeholder="Your Email"
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />

      <textarea
        placeholder="Your Message"
        rows={6}
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />

      <button
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
        Send Message
      </button>

      <p style={{ marginTop: "40px" }}>
        📞 +1 860-689-7427
      </p>

      <p>
        📧 conglobalshippingcompanies@gmail.com
      </p>
      <p style={{ marginTop: "40px" }}>
  📞 +1 860-689-7427
</p>

<p>
  📧 conglobalshippingcompanies@gmail.com 
</p>

<h2 style={{ marginTop: "40px" }}>
  Service Area
</h2>

<iframe
  src="https://www.google.com/maps?q=United+States&output=embed"
  width="100%"
  height="450"
  style={{
    border: 0,
    borderRadius: "10px",
    marginTop: "20px",
  }}
  loading="lazy"
></iframe>
    </div>
  );
}