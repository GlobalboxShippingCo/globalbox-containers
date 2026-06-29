"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type CartItem = {
  containerType: string;
  price: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  cartCount: number;
  refreshCart: () => void;
  addToCart: (item: CartItem) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  cartCount: 0,
  refreshCart: () => {},
  addToCart: () => {},
});

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const refreshCart = () => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  };

  useEffect(() => {
    refreshCart();

    window.addEventListener("storage", refreshCart);

    return () => {
      window.removeEventListener("storage", refreshCart);
    };
  }, []);

  const addToCart = (item: CartItem) => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");

    const existing = saved.find(
      (cartItem: CartItem) =>
        cartItem.containerType === item.containerType
    );

    if (existing) {
      existing.quantity += item.quantity;
    } else {
      saved.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(saved));

    refreshCart();
  };

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        refreshCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}