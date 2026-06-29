"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type WishlistItem = {
  containerType: string;
  price: string;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  wishlistCount: number;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (containerType: string) => void;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    setWishlist(saved);
  }, []);

  const addToWishlist = (item: WishlistItem) => {
    const exists = wishlist.find(
      (i) => i.containerType === item.containerType
    );

    if (exists) return;

    const updated = [...wishlist, item];

    setWishlist(updated);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );
  };

  const removeFromWishlist = (
    containerType: string
  ) => {
    const updated = wishlist.filter(
      (item) => item.containerType !== containerType
    );

    setWishlist(updated);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}