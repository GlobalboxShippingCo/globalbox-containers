"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () =>
      window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
        }}
      >
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Globalbox Containers"
            width={220}
            height={70}
            style={{
              width: "170px",
              height: "auto",
              cursor: "pointer",
            }}
          />
        </Link>

        {isMobile ? (
          <MobileNav
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        ) : (
          <DesktopNav />
        )}
      </div>

      {isMobile && menuOpen && (
        <MobileMenu setMenuOpen={setMenuOpen} />
      )}
    </nav>
  );
}