"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

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
        padding: "70px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        Featured Containers
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Browse our most popular shipping containers.
      </p>

      <input
        type="text"
        placeholder="🔍 Search containers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "block",
          margin: "0 auto 45px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          fontSize: "17px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        {filteredContainers.map((container) => (
          <ProductCard
            key={container.name}
            name={container.name}
            price={container.price}
            image={container.image}
            link={container.link}
            stock={container.stock}
          />
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