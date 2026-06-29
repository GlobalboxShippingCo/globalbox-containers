"use client";

import Link from "next/link";

type MobileMenuProps = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({
  setMenuOpen,
}: MobileMenuProps) {
  const closeMenu = () => setMenuOpen(false);

  const menuStyle = {
    padding: "16px 0",
    fontSize: "18px",
    fontWeight: 600,
    textDecoration: "none",
    color: "#0f172a",
    borderBottom: "1px solid #f1f5f9",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "15px 25px 25px",
        background: "#ffffff",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Link href="/" style={menuStyle} onClick={closeMenu}>
        🏠 Home
      </Link>

      <Link href="/gallery" style={menuStyle} onClick={closeMenu}>
        🖼 Gallery
      </Link>

      <Link href="/about" style={menuStyle} onClick={closeMenu}>
        ℹ️ About
      </Link>

      <Link href="/services" style={menuStyle} onClick={closeMenu}>
        🛠 Services
      </Link>

      <Link href="/contact" style={menuStyle} onClick={closeMenu}>
        📞 Contact
      </Link>

      <Link href="/wishlist" style={menuStyle} onClick={closeMenu}>
        ❤️ Wishlist
      </Link>

      <Link href="/cart" style={menuStyle} onClick={closeMenu}>
        🛒 Cart
      </Link>
    </div>
  );
}