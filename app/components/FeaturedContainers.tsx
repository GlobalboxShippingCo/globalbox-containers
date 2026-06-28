"use client";

import { useState } from "react";

export default function FeaturedContainers() {
  const [search, setSearch] = useState("");

  const containers = [
    {
      name: "20ft Standard Container",
      price: "$2,500",
      image: "/images/container1.jpg",
      link: "/containers/20ft-standard-container",
      stock: "In Stock",
    },
    {
      name: "40ft Standard Container",
      price: "$4,000",
      image: "/images/container2.jpg",
      link: "/containers/40ft-standard-container",
      stock: "In Stock",
    },
    {
      name: "40ft High Cube Container",
      price: "$4,800",
      image: "/images/container3.jpg",
      link: "/containers/40ft-high-cube-container",
      stock: "Limited Stock",
    },
  ];

  const filteredContainers = containers.filter((container) =>
    container.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
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
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Featured Containers
      </h2>

      <input
        type="text"
        placeholder="Search containers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "block",
          margin: "0 auto 40px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          fontSize: "18px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {filteredContainers.map((container) => (
          <div key={container.name} className="service-card">
            <img
              src={container.image}
              alt={container.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3 style={{ marginTop: "15px" }}>
              {container.name}
            </h3>

            <h4>{container.price}</h4>

            <div
              style={{
                display: "inline-block",
                background:
                  container.stock === "Limited Stock"
                    ? "#f59e0b"
                    : "#16a34a",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px",
                marginBottom: "15px",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              {container.stock === "Limited Stock"
                ? "⚠️ Limited Stock"
                : "✅ In Stock"}
            </div>

            <a
              href={container.link}
              className="primary-button"
              style={{
                display: "block",
                textAlign: "center",
              }}
            >
              View Details
            </a>
          </div>
        ))}
      </div>

      {filteredContainers.length === 0 && (
        <p
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "18px",
          }}
        >
          No containers found.
        </p>
      )}
    </section>
  );
}