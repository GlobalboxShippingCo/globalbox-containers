"use client";

import { useState } from "react";

type Props = {
  containerType: string;
  price: string;
};

export default function AddToCartButton({
  containerType,
  price,
}: Props) {
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push({
      containerType,
      price,
      quantity: 1,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      onClick={addToCart}
      className="primary-button"
      style={{
        background: added ? "#16a34a" : "#0f172a",
      }}
    >
      {added ? "✅ Added to Cart" : "🛒 Add to Cart"}
    </button>
  );
}