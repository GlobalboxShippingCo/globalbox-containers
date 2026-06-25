import Image from "next/image";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ContainerPage({ params }: Props) {
   const { slug } = await params;

const containerData = {
  "20ft-standard-container": {
    image: "/images/container1.jpg",
    price: "$2,500",
  },
  "40ft-standard-container": {
    image: "/images/container2.jpg",
    price: "$4,000",
  },
  "40ft-high-cube-container": {
    image: "/images/container3.jpg",
    price: "$4,800",
  },
};

const container =
  containerData[slug as keyof typeof containerData] ||
  containerData["20ft-standard-container"];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        {slug.replace(/-/g, " ").toUpperCase()}
      </h1>

     <Image
  src={container.image}
  alt="Container"
  width={900}
  height={500}
  style={{
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "30px",
  }}
/>

<p style={{ fontSize: "18px", lineHeight: "1.8" }}>
  Premium quality shipping container available for sale. Built for
  storage, transportation, and commercial applications.
</p>

   <h2
  style={{
    color: "#16a34a",
    marginTop: "20px",
    marginBottom: "20px",
  }}
>
     Starting From {container.price}
     </h2>

     <div
  style={{
    marginTop: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    background: "#f8fafc",
  }}
>
  <h3>Specifications</h3>

  <p><strong>Condition:</strong> New / Cargo Worthy</p>

  <p><strong>Material:</strong> Corten Steel</p>

  <p><strong>Usage:</strong> Storage & Shipping</p>

  <p><strong>Delivery:</strong> Available Nationwide</p>

  <p><strong>Weatherproof:</strong> Yes</p>
</div>

<div
  style={{
    marginTop: "20px",
    display: "inline-block",
    background: "#22c55e",
    color: "white",
    padding: "10px 18px",
    borderRadius: "20px",
    fontWeight: "bold",
  }}
>
  ✅ Available for Delivery
</div>

      <a
        href="https://wa.me/18606897427"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "15px 25px",
          background: "#25D366",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Get Quote on WhatsApp
      </a>
      <a
  href="/"
  style={{
    display: "inline-block",
    marginLeft: "15px",
    padding: "15px 25px",
    background: "#0f172a",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  }}
>
  Back to Home
</a>

<div
  style={{
    marginTop: "60px",
  }}
>
  <h2>Related Containers</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    }}
  >
    <a
      href="/containers/20ft-standard-container"
      className="service-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <h3>20ft Standard Container</h3>
      <p>Starting from $2,500</p>
    </a>

    <a
      href="/containers/40ft-standard-container"
      className="service-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <h3>40ft Standard Container</h3>
      <p>Starting from $4,000</p>
    </a>

    <a
      href="/containers/40ft-high-cube-container"
      className="service-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <h3>40ft High Cube Container</h3>
      <p>Starting from $4,800</p>
    </a>
  </div>
</div>
{/* REQUEST QUOTE */}
<div
  style={{
    marginTop: "60px",
    padding: "30px",
    background: "#f8fafc",
    borderRadius: "15px",
  }}
>
  <h2>Request a Quote</h2>

  <input
    type="text"
    placeholder="Your Name"
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
    placeholder="Your Email"
    style={{
      width: "100%",
      padding: "15px",
      marginTop: "15px",
      borderRadius: "8px",
      border: "1px solid #ddd",
    }}
  />

  <textarea
    placeholder="Message"
    rows={5}
    style={{
      width: "100%",
      padding: "15px",
      marginTop: "15px",
      borderRadius: "8px",
      border: "1px solid #ddd",
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
    Send Request
  </button>
</div>
    </div>
  );
}