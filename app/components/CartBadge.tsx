"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartBadge() {
  const { cartCount } = useCart();

  return (
    <Link
      href="/cart"
      style={{
        position: "relative",
        textDecoration: "none",
        fontSize: "26px",
        display: "flex",
        alignItems: "center",
      }}
    >
      🛒

      {cartCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-10px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#dc2626",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "11px",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,.2)",
          }}
        >
          {cartCount}
        </span>
      )}
    </Link>
  );
}