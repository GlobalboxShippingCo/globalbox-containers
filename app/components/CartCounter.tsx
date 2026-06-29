"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CartItem = {
  quantity: number;
};

export default function CartCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const cart: CartItem[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      const total = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      setCount(total);
    };

    updateCart();

    const interval = setInterval(updateCart, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link href="/cart">
      🛒 Cart ({count})
    </Link>
  );
}