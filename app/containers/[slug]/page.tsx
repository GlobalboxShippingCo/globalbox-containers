import Image from "next/image";
import QuoteForm from "@/app/components/QuoteForm";
import ContainerGallery from "@/app/components/ContainerGallery";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ContainerPage({ params }: Props) {
   const { slug } = await params;

const containerData = {
  "20ft-standard-container": {
    image: "/images/20ft/20ft-1.jpg",
    price: "$2,500",
  },

  "40ft-standard-container": {
    image: "/images/40ft/40ft-1.jpg",
    price: "$4,000",
  },

  "40ft-high-cube-container": {
    image: "/images/high-cube/high-cube-1.jpg",
    price: "$4,800",
  },

  "reefer-container": {
    image: "/images/reefer/reefer-1.jpg",
    price: "$5,500",
  },
};

const galleryImages = {
  "20ft-standard-container": [
    "/images/20ft/20ft-1.jpg",
    "/images/20ft/20ft-2.jpg",
    "/images/20ft/20ft-3.jpg",
    "/images/20ft/20ft-4.jpg",
  ],

  "40ft-standard-container": [
    "/images/40ft/40ft-1.jpg",
    "/images/40ft/40ft-2.jpg",
    "/images/40ft/40ft-3.jpg",
    "/images/40ft/40ft-4.jpg",
  ],

  "40ft-high-cube-container": [
    "/images/high-cube/high-cube-1.jpg",
    "/images/high-cube/high-cube-2.jpg",
    "/images/high-cube/high-cube-3.jpg",
  ],

  "reefer-container": [
    "/images/reefer/reefer-1.jpg",
    "/images/reefer/reefer-2.jpg",
    "/images/reefer/reefer-3.jpg",
    "/images/reefer/reefer-4.jpg",
  ],
};

const images =
  galleryImages[slug as keyof typeof galleryImages] ??
  galleryImages["20ft-standard-container"];

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

    <ContainerGallery images={images} />

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

  {slug === "20ft-standard-container" && (
    <>
      <p><strong>External Length:</strong> 20ft</p>
      <p><strong>External Width:</strong> 8ft</p>
      <p><strong>External Height:</strong> 8.6ft</p>
    </>
  )}

  {slug === "40ft-standard-container" && (
    <>
      <p><strong>External Length:</strong> 40ft</p>
      <p><strong>External Width:</strong> 8ft</p>
      <p><strong>External Height:</strong> 8.6ft</p>
    </>
  )}

  {slug === "40ft-high-cube-container" && (
    <>
      <p><strong>External Length:</strong> 40ft</p>
      <p><strong>External Width:</strong> 8ft</p>
      <p><strong>External Height:</strong> 9.6ft</p>
    </>
  )}

  <p><strong>Material:</strong> Corten Steel</p>
  <p><strong>Condition:</strong> New / Cargo Worthy</p>
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

<h2 style={{ marginTop: "40px" }}>Container Features</h2>

<ul
  style={{
    lineHeight: "2",
    fontSize: "18px",
  }}
>
  <li>✔ Wind and Watertight</li>
  <li>✔ Heavy-Duty Corten Steel Construction</li>
  <li>✔ Secure Locking Cargo Doors</li>
  <li>✔ Forklift Pockets for Easy Handling</li>
  <li>✔ Suitable for Storage & Shipping</li>
  <li>✔ Long Service Life</li>
</ul>
<h2>Worldwide Delivery</h2>

<p style={{ fontSize: "18px", lineHeight: "1.8" }}>
We provide fast and reliable container delivery across the United States and international locations. Delivery schedules vary by location.
</p>

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

  <QuoteForm />
</div>
    </div>
  );
}