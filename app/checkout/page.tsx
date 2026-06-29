"use client";

import { useEffect, useState } from "react";

type CartItem = {
  containerType: string;
  price: string;
  quantity: number;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address
    ) {
      alert("Please complete all required fields.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          cart,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send order.");
      }

      localStorage.removeItem("cart");

      setCart([]);

      setSuccess(
        "✅ Your order has been placed successfully! Redirecting..."
      );

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);

    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        maxWidth: "750px",
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "30px",
        }}
      >
        🚚 Checkout
      </h1>

      <div
        className="service-card"
        style={{
          marginBottom: "30px",
        }}
      >
        <h2>Your Order</h2>

        {cart.length === 0 ? (
          <p>No containers in your cart.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <strong>
                  {item.containerType
                    .replace(/-/g, " ")
                    .toUpperCase()}
                </strong>

                <p>Price: {item.price}</p>

                <p>Quantity: {item.quantity}</p>
              </div>
            ))}

            <h3
              style={{
                marginTop: "20px",
              }}
            >
              Total Containers:{" "}
              {cart.reduce(
                (sum, item) => sum + item.quantity,
                0
              )}
            </h3>
          </>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="service-card"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="service-card"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="service-card"
        />

        <input
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="service-card"
        />

        <textarea
          name="notes"
          placeholder="Order Notes"
          rows={5}
          value={form.notes}
          onChange={handleChange}
          className="service-card"
        />

        <button
          className="primary-button"
          onClick={placeOrder}
          disabled={loading}
        >
          {loading
            ? "Sending Order..."
            : "🚀 Place Order"}
        </button>

        {success && (
          <p
            style={{
              color: "green",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {success}
          </p>
        )}
      </div>
    </main>
  );
}