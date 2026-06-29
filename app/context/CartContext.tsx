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
};

const CartContext = createContext<CartContextType>({
  cart: [],
  cartCount: 0,
  refreshCart: () => {},
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}