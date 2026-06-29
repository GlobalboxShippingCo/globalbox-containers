"use client";

import Link from "next/link";
import toast from "react-hot-toast";
type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  link: string;
  stock: string;
};

export default function ProductCard({
  name,
  price,
  image,
  link,
  stock,
}: ProductCardProps) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existing = cart.find(
      (item: any) => item.containerType === link
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        containerType: link,
        price,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("storage"));

   toast.success(`${name} added to cart!`);
  };

  return (
    <div
      className="service-card"
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          border: "none",
          background: "white",
          cursor: "pointer",
          fontSize: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,.15)",
        }}
      >
        ❤️
      </button>

      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "240px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      <div
        style={{
          paddingTop: "18px",
        }}
      >
        <h3>{name}</h3>

        <div
          style={{
            color: "#f59e0b",
            margin: "8px 0",
            fontSize: "18px",
          }}
        >
          ⭐⭐⭐⭐⭐
        </div>

        <h2>{price}</h2>

        <div style={{ margin: "18px 0" }}>
          <span
            style={{
              background:
                stock === "Limited Stock"
                  ? "#f59e0b"
                  : "#16a34a",
              color: "white",
              padding: "8px 14px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            {stock === "Limited Stock"
              ? "⚠️ Limited Stock"
              : "✅ In Stock"}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <button
            onClick={addToCart}
            className="primary-button"
            style={{
              flex: 1,
            }}
          >
            🛒 Add
          </button>

          <Link
            href={link}
            className="outline-button"
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            👁 View
          </Link>
        </div>
      </div>
    </div>
  );
}