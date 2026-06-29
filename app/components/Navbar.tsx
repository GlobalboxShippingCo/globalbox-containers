"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <nav
      style={{
        background: "white",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
        }}
      >
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Globalbox"
            width={220}
            height={70}
            style={{
              width: "170px",
              height: "auto",
            }}
          />
        </Link>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "30px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "25px",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/cart">🛒 Cart</Link>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "15px",
            background: "white",
            borderTop: "1px solid #eee",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/cart">🛒 Cart</Link>
        </div>
      )}
    </nav>
  );
}