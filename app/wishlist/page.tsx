"use client";

import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div
          className="service-card"
          style={{
            textAlign: "center",
            padding: "50px",
          }}
        >
          <h2>Your wishlist is empty.</h2>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            Save your favourite containers by clicking ❤️
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          {wishlist.map((item, index) => (
            <div
              key={index}
              className="service-card"
            >
              <img
                src="/images/container1.jpg"
                alt={item.containerType}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3
                style={{
                  marginTop: "18px",
                }}
              >
                {item.containerType
                  .replace("/containers/", "")
                  .replace(/-/g, " ")
                  .toUpperCase()}
              </h3>

              <div
                style={{
                  color: "#f59e0b",
                  margin: "10px 0",
                }}
              >
                ⭐⭐⭐⭐⭐
              </div>

              <h2>{item.price}</h2>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "20px",
                }}
              >
                <button
                  className="primary-button"
                  style={{
                    flex: 1,
                  }}
                  onClick={() => {
                    addToCart({
                      containerType: item.containerType,
                      price: item.price,
                      quantity: 1,
                    });

                    toast.success("Added to cart 🛒");
                  }}
                >
                  🛒 Move to Cart
                </button>

                <button
                  className="outline-button"
                  style={{
                    flex: 1,
                    color: "#dc2626",
                  }}
                  onClick={() => {
                    removeFromWishlist(item.containerType);

                    toast.success("Removed from wishlist ❤️");
                  }}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}