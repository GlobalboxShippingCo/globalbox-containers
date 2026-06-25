import Image from "next/image";
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
  width={250}
  height={80}
  style={{
    height: "60px",
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
  background: "linear-gradient(to right, #111, #333)",
  color: "white",
  padding: "80px 20px",
  textAlign: "center"
}}>
  <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>
    Globalbox Containers
  </h1>

  <p style={{ fontSize: "18px", color: "#ddd", maxWidth: "600px", margin: "0 auto" }}>
    We provide durable, secure, and affordable shipping container solutions for businesses and personal use.
  </p>

   <a
  href="https://wa.me/18606897427"
  target="_blank"
  style={{
    marginTop: "25px",
    padding: "14px 28px",
    background: "#25D366",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    display: "inline-block",
    fontWeight: "bold",
  }}
>
  Chat on WhatsApp
</a>
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

<section
  style={{
    textAlign: "center",
    padding: "80px 20px",
  }}
>
  <h1
    style={{
      fontSize: "48px",
      marginBottom: "20px",
    }}
  >
    Premium Shipping Containers Across the World
  </h1>

  <p
    style={{
      fontSize: "22px",
      marginBottom: "30px",
      color: "#555",
    }}
  >
    Buy New & Used Containers at Competitive Prices Worldwide
  </p>

  <a
    href="https://wa.me/18606897427"
    target="_blank"
    style={{
      display: "inline-block",
      padding: "15px 30px",
      background: "#25D366",
      color: "white",
      textDecoration: "none",
      borderRadius: "8px",
      fontWeight: "bold",
    }}
  >
    Get a Free Quote
  </a>
</section>

     {/* FEATURED CONTAINERS */}
<section
  style={{
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  }}
>
  <h2
    style={{
      fontSize: "32px",
      marginBottom: "30px",
      textAlign: "center",
    }}
  >
    Featured Containers
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    }}
  >
   {/* 20ft Container */}
<div className="service-card">

  <div
    style={{
      background: "#ef4444",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      display: "inline-block",
      fontSize: "12px",
      fontWeight: "bold",
      marginBottom: "15px",
    }}
  >
    NEW
  </div>

  <Image
    src="/images/container1.jpg"
    alt="20ft Standard Container"
    width={400}
    height={250}
    style={{
      width: "100%",
      height: "220px",
      objectFit: "cover",
      borderRadius: "10px",
    }}
  />

  <h3 style={{ marginTop: "15px" }}>
    20ft Standard Container
  </h3>

  <p>Strong and secure for storage and transport.</p>

  <h4>$2,500</h4>

  <a
    href="https://wa.me/18606897427?text=Hello,%20I'm%20interested%20in%20the%2020ft%20Standard%20Container."
    target="_blank"
    style={{
      display: "inline-block",
      marginTop: "15px",
      padding: "12px 20px",
      background: "#25D366",
      color: "white",
      textDecoration: "none",
      borderRadius: "8px",
      fontWeight: "bold",
      width: "100%",
      textAlign: "center",
    }}
  >
    Get Quote on WhatsApp
  </a>

  <a
  href="/containers/20ft-standard-container"
  style={{
    display: "block",
    marginTop: "10px",
    padding: "12px 20px",
    border: "1px solid #0f172a",
    background: "white",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
    color: "#0f172a",
    fontWeight: "bold",
  }}
>
  View Details
</a>

</div>

    {/* 40ft Container */}
<div className="service-card">
  
  <div
    style={{
      background: "#ef4444",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      display: "inline-block",
      fontSize: "12px",
      fontWeight: "bold",
      marginBottom: "15px",
    }}
  >
    NEW
  </div>

  <Image
    src="/images/container2.jpg"
    alt="40ft Standard Container"
    width={400}
    height={250}
    style={{
      width: "100%",
      height: "220px",
      objectFit: "cover",
      borderRadius: "10px",
    }}
  />

  <h3 style={{ marginTop: "15px" }}>
    40ft Standard Container
  </h3>

  <p>Ideal for commercial and industrial use.</p>

  <h4>$4,000</h4>

  <a
    href="https://wa.me/18606897427?text=Hello,%20I'm%20interested%20in%20the%2040ft%20Standard%20Container."
    target="_blank"
    style={{
      display: "inline-block",
      marginTop: "15px",
      padding: "12px 20px",
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
  href="/containers/40ft-standard-container"
  style={{
    display: "block",
    marginTop: "10px",
    padding: "12px 20px",
    border: "1px solid #0f172a",
    background: "white",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
    color: "#0f172a",
    fontWeight: "bold",
  }}
>
  View Details
</a>
</div>

    {/* High Cube Container */}
<div className="service-card">

  <div
    style={{
      background: "#ef4444",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      display: "inline-block",
      fontSize: "12px",
      fontWeight: "bold",
      marginBottom: "15px",
    }}
  >
    NEW
  </div>

  <Image
    src="/images/container3.jpg"
    alt="40ft High Cube Container"
    width={400}
    height={250}
    style={{
      width: "100%",
      height: "220px",
      objectFit: "cover",
      borderRadius: "10px",
    }}
  />

  <h3 style={{ marginTop: "15px" }}>
    40ft High Cube Container
  </h3>

  <p>Extra height and larger storage capacity.</p>

  <h4>$4,800</h4>

  <a
    href="https://wa.me/18606897427?text=Hello,%20I'm%20interested%20in%20the%2040ft%20High%20Cube%20Container."
    target="_blank"
    style={{
      display: "inline-block",
      marginTop: "15px",
      padding: "12px 20px",
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
  href="/containers/40ft-high-cube-container"
  style={{
    display: "block",
    marginTop: "10px",
    padding: "12px 20px",
    border: "1px solid #0f172a",
    background: "white",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
    color: "#0f172a",
    fontWeight: "bold",
  }}
>
  View Details
</a>
</div>
</div>
</section>

      {/* TESTIMONIALS */}
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
    What Our Customers Say
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px"
    }}
  >
    <div className="service-card">
      <p>
        "Excellent service and fast delivery. Highly recommended."
      </p>
      <h4>- Michael A.</h4>
    </div>

    <div className="service-card">
      <p>
        "Their containers are strong and affordable."
      </p>
      <h4>- Sarah K.</h4>
    </div>

    <div className="service-card">
      <p>
        "Professional team and smooth delivery process."
      </p>
      <h4>- David O.</h4>
    </div>
  </div>
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