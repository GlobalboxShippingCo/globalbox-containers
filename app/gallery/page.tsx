import Image from "next/image";

export default function GalleryPage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Container Gallery
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {/* 20ft Container */}
        <div className="service-card">
          <Image
           src="/images/20ft/20ft-1.jpg"
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

          <h3>20ft Standard Container</h3>
          <p>Starting from $2,500</p>

          <a
  href="/containers/20ft-standard-container"
  className="primary-button"
  style={{
    display: "block",
    marginTop: "15px",
    textAlign: "center",
  }}
>
  View Details
</a>
        </div>

        {/* 40ft Container */}
        <div className="service-card">
          <Image
            src="/images/40ft/40ft-1.jpg"
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

          <h3>40ft Standard Container</h3>
          <p>Starting from $4,000</p>

          <a
       href="/containers/40ft-standard-container"
       className="primary-button"
       style={{
       display: "block",
       marginTop: "15px",
       textAlign: "center",
  }}
>
        View Details
        </a>
        </div>

        {/* High Cube Container */}
        <div className="service-card">
          <Image
            src="/images/high-cube/high-cube-1.jpg"
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

          <h3>40ft High Cube Container</h3>
          <p>Starting from $4,800</p>

          <a
  href="/containers/40ft-high-cube-container"
  className="primary-button"
  style={{
    display: "block",
    marginTop: "15px",
    textAlign: "center",
  }}
>
  View Details
</a>
        </div>

        {/* Reefer Container */}
<div className="service-card">
  <Image
    src="/images/reefer/reefer-1.jpg"
    alt="Reefer Container"
    width={400}
    height={250}
    style={{
      width: "100%",
      height: "220px",
      objectFit: "cover",
      borderRadius: "10px",
    }}
  />

  <h3>Reefer Container</h3>
  <p>Starting from $5,500</p>

  <a
  href="/containers/reefer-container"
  className="primary-button"
  style={{
    display: "block",
    marginTop: "15px",
    textAlign: "center",
  }}
>
  View Details
</a>
</div>
      </div>
    </div>
  );
}