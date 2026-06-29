import Image from "next/image";
import QuoteForm from "@/app/components/QuoteForm";
import ContainerGallery from "@/app/components/ContainerGallery";
import QuoteRequestForm from "@/app/components/QuoteRequestForm";
import ShareButton from "@/app/components/ShareButton";
import WishlistButton from "@/app/components/WishlistButton";
import AddToCartButton from "@/app/components/AddToCartButton";
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

  <h3
  style={{
    marginBottom: "20px",
  }}
>
  Specifications
</h3>

<table
  style={{
    width: "100%",
    borderCollapse: "collapse",
  }}
>
  <tbody>
    <tr>
      <td style={{ padding: "12px", fontWeight: "bold" }}>
        External Length
      </td>
      <td style={{ padding: "12px" }}>
        {slug === "20ft-standard-container"
          ? "20ft"
          : "40ft"}
      </td>
    </tr>

    <tr
      style={{
        background: "#f8fafc",
      }}
    >
      <td style={{ padding: "12px", fontWeight: "bold" }}>
        External Width
      </td>
      <td style={{ padding: "12px" }}>
        8ft
      </td>
    </tr>

    <tr>
      <td style={{ padding: "12px", fontWeight: "bold" }}>
        External Height
      </td>
      <td style={{ padding: "12px" }}>
        {slug === "40ft-high-cube-container"
          ? "9.6ft"
          : "8.6ft"}
      </td>
    </tr>

    <tr
      style={{
        background: "#f8fafc",
      }}
    >
      <td style={{ padding: "12px", fontWeight: "bold" }}>
        Material
      </td>
      <td style={{ padding: "12px" }}>
        Corten Steel
      </td>
    </tr>

    <tr>
      <td style={{ padding: "12px", fontWeight: "bold" }}>
        Condition
      </td>
      <td style={{ padding: "12px" }}>
        Cargo Worthy
      </td>
    </tr>

    <tr
      style={{
        background: "#f8fafc",
      }}
    >
      <td style={{ padding: "12px", fontWeight: "bold" }}>
        Weatherproof
      </td>
      <td style={{ padding: "12px" }}>
        Yes
      </td>
    </tr>
  </tbody>
</table>
</div>

<div
  style={{
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    flexWrap: "wrap",
  }}
>
  <div
    style={{
      background:
        slug === "40ft-high-cube-container"
          ? "#f59e0b"
          : "#16a34a",
      color: "white",
      padding: "10px 18px",
      borderRadius: "20px",
      fontWeight: "bold",
    }}
  >
    {slug === "40ft-high-cube-container"
      ? "⚠️ Limited Stock"
      : "✅ In Stock"}
  </div>

  <div
    style={{
      background: "#22c55e",
      color: "white",
      padding: "10px 18px",
      borderRadius: "20px",
      fontWeight: "bold",
    }}
  >
    🚚 Available for Delivery
  </div>
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
  className="primary-button"
  style={{
    marginTop: "30px",
    background: "#25D366",
  }}
>
  Get Quote on WhatsApp
</a>

<div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "25px",
    marginBottom: "30px",
    alignItems: "center",
  }}
>
  <div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "25px",
    marginBottom: "30px",
    alignItems: "center",
  }}
>
  <ShareButton />

  <WishlistButton containerType={slug} />

  <AddToCartButton
    containerType={slug}
    price={container.price}
  />

  <a
    href="/"
    className="primary-button"
  >
    ⬅ Back to Home
  </a>
</div>
</div>

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

<div
  style={{
    marginTop: "60px",
  }}
>
  <h2
    style={{
      marginBottom: "25px",
    }}
  >
    ⭐ Customer Reviews
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "20px",
    }}
  >
    <div className="service-card">
      <div style={{ color: "#f59e0b", fontSize: "20px" }}>
        ⭐⭐⭐⭐⭐
      </div>

      <p
        style={{
          marginTop: "15px",
          lineHeight: "1.8",
        }}
      >
        The container arrived exactly as described. Excellent
        condition and very fast delivery.
      </p>

      <strong>- Michael T.</strong>
    </div>

    <div className="service-card">
      <div style={{ color: "#f59e0b", fontSize: "20px" }}>
        ⭐⭐⭐⭐⭐
      </div>

      <p
        style={{
          marginTop: "15px",
          lineHeight: "1.8",
        }}
      >
        Great communication throughout the purchase.
        Highly recommended.
      </p>

      <strong>- Sarah K.</strong>
    </div>

    <div className="service-card">
      <div style={{ color: "#f59e0b", fontSize: "20px" }}>
        ⭐⭐⭐⭐⭐
      </div>

      <p
        style={{
          marginTop: "15px",
          lineHeight: "1.8",
        }}
      >
        Professional service, quality container and smooth
        delivery process.
      </p>

      <strong>- David R.</strong>
    </div>
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

  <QuoteRequestForm
  containerType={slug.replace(/-/g, " ")}
/>
</div>
    </div>
  );
}