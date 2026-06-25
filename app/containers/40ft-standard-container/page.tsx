import Image from "next/image";

export default function ContainerPage() {
  return (
    <main
      style={{
        fontFamily: "Arial",
        padding: "40px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <a
        href="/"
        style={{
          textDecoration: "none",
          color: "#2563eb",
          fontWeight: "bold",
        }}
      >
        ← Back to Home
      </a>

      <h1
        style={{
          fontSize: "42px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        40ft Standard Shipping Container
      </h1>

      <Image
        src="/images/container2.jpg"
        alt="40ft Standard Container"
        width={900}
        height={500}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "12px",
        }}
      />

      <h2 style={{ marginTop: "30px" }}>
        Price: $4,000
      </h2>

      <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
        Our 40ft Standard Shipping Container is ideal for storage,
        transportation, construction sites, and business use. Built from
        durable steel, it offers excellent security and weather resistance.
      </p>

      <h2>Specifications</h2>

      <ul
        style={{
          lineHeight: "2",
          fontSize: "18px",
        }}
      >
        <li>External Length: 40ft</li>
        <li>External Width: 8ft</li>
        <li>External Height: 8.6ft</li>
        <li>Weatherproof Steel Construction</li>
        <li>Secure Locking Doors</li>
        <li>Excellent Condition</li>
      </ul>

      <h2>Delivery Information</h2>

      <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
        We offer fast and reliable delivery worldwide. Delivery costs may vary
        depending on your location.
      </p>

      <a
        href="https://wa.me/18606897427?text=Hello,%20I'm%20interested%20in%20the%2020ft%20Standard%20Container."
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "15px 30px",
          background: "#25D366",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Get Quote on WhatsApp
      </a>
    </main>
  );
}