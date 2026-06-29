"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const removeFavorite = (container: string) => {
    const updated = favorites.filter((item) => item !== container);

    setFavorites(updated);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
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
        ❤️ My Favorite Containers
      </h1>

      {favorites.length === 0 ? (
        <p
          style={{
            fontSize: "20px",
          }}
        >
          You haven't saved any containers yet.
        </p>
      ) : (
        favorites.map((container) => (
          <div
            key={container}
            className="service-card"
            style={{
              marginBottom: "25px",
            }}
          >
            <h2>
              {container.replace(/-/g, " ").toUpperCase()}
            </h2>

            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              <Link
                href={`/containers/${container}`}
                className="primary-button"
              >
                View Container
              </Link>

              <button
                onClick={() => removeFavorite(container)}
                className="primary-button"
                style={{
                  background: "#dc2626",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </main>
  );
}