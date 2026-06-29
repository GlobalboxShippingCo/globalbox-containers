"use client";

import { useEffect, useState } from "react";

type WishlistButtonProps = {
  containerType: string;
};

export default function WishlistButton({
  containerType,
}: WishlistButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setSaved(favorites.includes(containerType));
  }, [containerType]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    let updatedFavorites;

    if (favorites.includes(containerType)) {
      updatedFavorites = favorites.filter(
        (item: string) => item !== containerType
      );
      setSaved(false);
    } else {
      updatedFavorites = [...favorites, containerType];
      setSaved(true);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <button
      onClick={toggleFavorite}
      className="primary-button"
      style={{
        background: saved ? "#dc2626" : "#0f172a",
      }}
    >
      {saved ? "❤️ Saved" : "🤍 Save Container"}
    </button>
  );
}