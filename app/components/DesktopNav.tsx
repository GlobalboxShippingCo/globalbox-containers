"use client";

import Link from "next/link";
import CartBadge from "./CartBadge";

export default function DesktopNav() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "28px",
        fontWeight: 600,
        fontSize: "16px",
      }}
    >
      <Link href="/">Home</Link>

      <Link href="/gallery">Gallery</Link>

      <Link href="/about">About</Link>

      <Link href="/services">Services</Link>

      <Link href="/contact">Contact</Link>

      <Link
        href="/wishlist"
        style={{
          textDecoration: "none",
          fontSize: "24px",
        }}
      >
        ❤️
      </Link>

      <CartBadge />
    </div>
  );
}