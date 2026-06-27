import ContactForm from "@/app/components/ContactForm";
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

      <h2 style={{ marginTop: "40px" }}>Office Location</h2>

<p>📍 Orlando, Florida, USA</p>

<p>📞 +1 (860) 689-7427</p>

<p>📧 conglobalshippingcompanies@gmail.com</p>

<p>🕒 Monday – Friday: 8:00 AM – 6:00 PM</p>

<p>🕒 Saturday: 9:00 AM – 2:00 PM</p>

<p>🕒 Sunday: Closed</p>

<h2 style={{ marginTop: "40px" }}>Find Us</h2>

<iframe
  src="https://www.google.com/maps?q=Orlando,Florida&output=embed"
  width="100%"
  height="350"
  style={{
    border: 0,
    borderRadius: "10px",
    marginTop: "20px",
    marginBottom: "40px",
  }}
  loading="lazy"
/>

     <ContactForm />

    </div>
  );
}