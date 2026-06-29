"use client";

import CartBadge from "./CartBadge";

type MobileNavProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNav({
  menuOpen,
  setMenuOpen,
}: MobileNavProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "18px",
      }}
    >
      <a
        href="/wishlist"
        style={{
          textDecoration: "none",
          fontSize: "24px",
        }}
      >
        ❤️
      </a>

      <CartBadge />

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        ☰
      </button>
    </div>
  );
}