import { createContext, useState, useContext, useEffect } from "react";
import type { Product, CartItem } from "../lib/type";
import { getOrCreateUserId } from "../utils/userId";
const apiUrl = import.meta.env.VITE_APP_URL;

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const userId = parseInt(getOrCreateUserId(), 10);

  // Sync to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch cart from backend once userId is ready
  useEffect(() => {
    if (userId === null) return; // wait for userId

    const fetchCart = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/cart?userId=${userId}`);
        if (!res.ok) throw new Error("Failed to fetch cart");
        const data = await res.json();

        const formatted = data.map(
          (item: any): CartItem => ({
            ...item.product,
            qty: item.quantity,
          })
        );

        setCart(formatted);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };

    fetchCart();
  }, [userId]);

  const addToCart = (product: Product) => {
    if (userId === null) {
      console.warn("User ID not ready yet");
      return;
    }

    setCart((prev: CartItem[]) => {
      const existing = prev.find((item) => item.id === product.id);
      const updatedCart = existing
        ? prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...prev, { ...product, qty: 1 }];

      fetch(`${apiUrl}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId: product.id, quantity: 1 }),
      });

      return updatedCart;
    });
  };

  const removeFromCart = async (productId: number | string) => {
    if (userId === null) {
      console.warn("User ID not ready yet");
      return;
    }

    setCart((prev) => prev.filter((item) => item.id !== productId));

    try {
      await fetch(`${apiUrl}/api/cart/${userId}/${productId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Failed to remove item from backend cart:", error);
    }
  };

  const clearCart = async () => {
    if (userId === null) {
      console.warn("User ID not ready yet");
      return;
    }

    setCart([]);

    try {
      const res = await fetch(`${apiUrl}/api/cart/user/${userId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        console.error(
          "Server responded with an error while clearing cart",
          res
        );
      }
    } catch (error) {
      console.error("Failed to clear backend cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
