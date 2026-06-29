"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CartItem = {
  containerType: string;
  price: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const removeItem = (index: number) => {
    const updated = [...cart];
    updated.splice(index, 1);

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const changeQuantity = (index: number, amount: number) => {
    const updated = [...cart];

    updated[index].quantity += amount;

    if (updated[index].quantity <= 0) {
      updated.splice(index, 1);
    }

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "40px",
        }}
      >
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div>
          <p
            style={{
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            Your shopping cart is empty.
          </p>

          <Link href="/" className="primary-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="service-card"
            style={{
              marginBottom: "25px",
            }}
          >
            <h2>{item.containerType.replace(/-/g, " ").toUpperCase()}</h2>

            <p
              style={{
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Price: {item.price}
            </p>

            <p>Quantity: {item.quantity}</p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              <button
                className="primary-button"
                onClick={() => changeQuantity(index, 1)}
              >
                ➕
              </button>

              <button
                className="primary-button"
                onClick={() => changeQuantity(index, -1)}
              >
                ➖
              </button>

              <button
                className="primary-button"
                style={{
                  background: "#dc2626",
                }}
                onClick={() => removeItem(index)}
              >
                🗑 Remove
              </button>
            </div>
          </div>
        ))
      )}

      <div
  style={{
    marginTop: "40px",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    background: "#f8fafc",
  }}
>
  <h2>Total Containers: {cart.reduce((sum, item) => sum + item.quantity, 0)}</h2>

  <div
    style={{
      marginTop: "20px",
    }}
  >
    <a
      href="/checkout"
      className="primary-button"
    >
      🚀 Proceed to Checkout
    </a>
  </div>
</div>
    </main>
  );
}