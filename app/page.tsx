import Image from "next/image";
import TestimonialsSlider from "@/app/components/TestimonialsSlider";
import FeaturedContainers from "@/app/components/FeaturedContainers";
export default function Home() {
  return (
   <main style={{
  fontFamily: "Arial",
  background: "#f7f8fa",
  minHeight: "100vh",
  padding: "0",
  margin: "0",
}}>

       {/* NAV BAR */}
    <nav style={{
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  flexWrap: "wrap",
  gap: "10px",
  background: "white",
  position: "sticky",
  top: "0",
  zIndex: 1000,
  borderBottom: "1px solid #eee"
}}>
 <Image
  src="/images/logo.png"
  alt="Globalbox Containers"
  width={300}
  height={100}
  style={{
    height: "75px",
    width: "auto",
  }}
/>
  <div style={{ display: "flex", gap: "20px" }}>
    <a href="/">Home</a>
    <a href="/gallery">Gallery</a>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact</a>
  </div>
</nav>

      {/* HERO */}
     <section style={{
  color: "white",
  padding: "220px 20px",
  textAlign: "center",
  backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/hero-container.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
}}>
  <h1 style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "20px" }}>
  Premium Shipping Containers Across the World
</h1>

<p style={{ fontSize: "24px", color: "#ddd", maxWidth: "700px", margin: "0 auto" }}>
  Buy New & Used Containers at Competitive Prices Worldwide.
</p>

  <a
  href="https://wa.me/18606897427"
  target="_blank"
  className="whatsapp-button"
  style={{
    marginTop: "25px",
  }}
>
  Chat on WhatsApp
</a>
</section>

{/* TRUST SECTION */}
<section
  style={{
    padding: "50px 20px",
    background: "#f8fafc",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      textAlign: "center",
    }}
  >
    <div className="service-card">
      🌍
      <h3>Worldwide Delivery</h3>
      <p>Fast and reliable container delivery worldwide.</p>
    </div>

    <div className="service-card">
      🔒
      <h3>Secure Payments</h3>
      <p>Safe and trusted payment methods for every order.</p>
    </div>

    <div className="service-card">
      📦
      <h3>Premium Containers</h3>
      <p>High-quality new and used containers at great prices.</p>
    </div>

    <div className="service-card">
      💬
      <h3>24/7 Support</h3>
      <p>Our team is always available to assist customers.</p>
    </div>
  </div>
</section>

   {/* SERVICES */}
<section style={{
  padding: "40px 15px",
  maxWidth: "1100px",
  margin: "0 auto"
}}>
  <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
    Our Services
  </h2>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  }}>

    <div className="service-card">
      🚢 <h3>Container Sales</h3>
      <p>High-quality shipping containers for all business needs.</p>
    </div>

    <div className="service-card">
      📦 <h3>Storage Solutions</h3>
      <p>Secure and affordable storage containers.</p>
    </div>

    <div className="service-card">
      🔧 <h3>Modifications</h3>
      <p>Custom container designs tailored to your needs.</p>
    </div>

    <div className="service-card">
      🚚 <h3>Delivery Services</h3>
      <p>Fast and reliable delivery to your location.</p>
    </div>

  </div>
</section>

      {/* ABOUT US */}
<section
  style={{
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
  }}
>
  <h2
    style={{
      fontSize: "32px",
      marginBottom: "20px",
      textAlign: "center",
    }}
  >
    About Globalbox Containers
  </h2>

  <p
    style={{
      fontSize: "18px",
      lineHeight: "1.8",
      textAlign: "center",
      color: "#555",
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    Globalbox Containers provides reliable shipping containers for storage,
    logistics, and custom business solutions. We are committed to delivering
    durable, secure, and affordable containers with excellent customer service.
  </p>
</section>

     <FeaturedContainers />

      {/* TESTIMONIALS */}
<section
  style={{
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
  }}
>
  <h2
    style={{
      fontSize: "32px",
      textAlign: "center",
      marginBottom: "30px",
    }}
  >
    Customer Feedback
  </h2>

  <TestimonialsSlider />
</section>

      {/* FAQ SECTION */}
<section
  style={{
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "0 auto"
  }}
>
  <h2
    style={{
      fontSize: "32px",
      textAlign: "center",
      marginBottom: "30px"
    }}
  >
    Frequently Asked Questions
  </h2>

  <div className="service-card">
    <h3>Do you deliver nationwide?</h3>
    <p>Yes, we provide container delivery services across worldwide.</p>
  </div>

  <div className="service-card">
    <h3>Do you sell both 20ft and 40ft containers?</h3>
    <p>Yes, we offer 20ft, 40ft, and High Cube containers.</p>
  </div>

  <div className="service-card">
    <h3>Can containers be modified?</h3>
    <p>Yes, we provide custom modifications for offices, storage, and other uses.</p>
  </div>
</section>

      {/* WHY CHOOSE US */}
<section
  style={{
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "32px",
      marginBottom: "40px",
    }}
  >
    Why Choose Globalbox Containers?
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    }}
  >
    <div className="service-card">
      <h3>🏆 Premium Quality</h3>
      <p>Strong and durable containers for every need.</p>
    </div>

    <div className="service-card">
      <h3>🚚 Fast Delivery</h3>
      <p>Reliable nationwide delivery services.</p>
    </div>

    <div className="service-card">
      <h3>💰 Affordable Pricing</h3>
      <p>Competitive prices with excellent value.</p>
    </div>

    <div className="service-card">
      <h3>⭐ Trusted Service</h3>
      <p>Customer satisfaction is our top priority.</p>
    </div>
  </div>
</section>

{/* PAYMENT METHODS */}
<section
  style={{
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  }}
>
  <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
    Accepted Payment Methods
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      fontSize: "20px",
    }}
  >
    <div>💳 Visa</div>
    <div>💳 Mastercard</div>
    <div>💳 American Express</div>
    <div>📱 PayPal</div>
    <div>💵 Cash App</div>
    <div>🏦 Bank Transfer</div>
  </div>
</section>


       {/* CONTACT SECTION */}
<section style={{
  padding: "60px 40px",
  maxWidth: "800px",
  margin: "0 auto"
}}>
  <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
    Contact Us
  </h2>

  <p>Get in touch for pricing and container solutions.</p>

  <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px"
  }}>

    <input
      type="text"
      placeholder="Your Name"
      style={{ padding: "10px", border: "1px solid #ccc" }}
    />

    <input
      type="email"
      placeholder="Your Email"
      style={{ padding: "10px", border: "1px solid #ccc" }}
    />

    <textarea
      placeholder="Your Message"
      rows={4}
      style={{ padding: "10px", border: "1px solid #ccc" }}
    />

    <button style={{
      padding: "12px",
      background: "black",
      color: "white",
      border: "none",
      cursor: "pointer"
    }}>
      Send Message
    </button>

  </form>
</section>

     {/* FOOTER */}
<footer
  style={{
    background: "#111",
    color: "white",
    padding: "40px 20px",
    marginTop: "60px",
    textAlign: "center",
  }}
>
  <h2>Globalbox Containers</h2>

  <p style={{ marginTop: "15px" }}>
    Reliable Shipping Containers | Storage Solutions | Fast Delivery
  </p>

  <p style={{ marginTop: "10px" }}>
    📍 Orlando, Florida
  </p>

  <p>
    📞 +1 860 689 7427 
  </p>

  <p>
    📧 conglobalshippingcompanies@gmail.com
  </p>

  <div style={{ marginTop: "20px" }}>
    <a
      href="https://wa.me/18606897427"
      target="_blank"
      style={{
        color: "#25D366",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Chat With Us on WhatsApp
    </a>
  </div>

  <p
    style={{
      marginTop: "30px",
      color: "#aaa",
      fontSize: "14px",
    }}
  >
    © 2026 Globalbox Containers. All Rights Reserved.
  </p>
</footer>

    </main>
  );
}