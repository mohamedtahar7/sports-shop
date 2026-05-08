"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useMemo,
} from "react";

// Matches your PRODUCTS array exactly
export interface Product {
  id: number;
  name: string;
  category: string;
  gender: string;
  price: number;
  sizes: string[];
  img: string;
}

// Added selectedSize: items are now unique by ID + Size
export interface CartItem extends Omit<Product, "sizes"> {
  selectedSize: string;
  amount: number;
}

interface CartContextType {
  cart: CartItem[];
  itemAmount: number;
  total: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (id: number, size: string) => void;
  clearCart: () => void;
  increaseAmount: (id: number, size: string) => void;
  decreaseAmount: (id: number, size: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load from storage
  useEffect(() => {
    const savedCart = localStorage.getItem("aura_performance_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (err) {
        console.error("Failed to parse cart data", err);
      }
    }
  }, []);

  // Sync to storage
  useEffect(() => {
    localStorage.setItem("aura_performance_cart", JSON.stringify(cart));
  }, [cart]);

  // Totals calculation
  const { total, itemAmount } = useMemo(() => {
    return cart.reduce(
      (acc, item) => ({
        total: acc.total + item.amount * item.price,
        itemAmount: acc.itemAmount + item.amount,
      }),
      { total: 0, itemAmount: 0 },
    );
  }, [cart]);

  const addToCart = (product: Product, size: string) => {
    // Check for match on BOTH ID and Size
    const existingItem = cart.find(
      (item) => item.id === product.id && item.selectedSize === size,
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, amount: item.amount + 1 }
            : item,
        ),
      );
    } else {
      // Create new item, removing the original 'sizes' array to keep the cart object clean
      const { sizes, ...rest } = product;
      const newItem: CartItem = { ...rest, selectedSize: size, amount: 1 };
      setCart([...cart, newItem]);
    }
    setIsOpen(true); // Optional: Open cart drawer when item is added
  };

  const removeFromCart = (id: number, size: string) => {
    setCart(
      cart.filter((item) => !(item.id === id && item.selectedSize === size)),
    );
  };

  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear your bag?")) {
      setCart([]);
    }
  };

  const increaseAmount = (id: number, size: string) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, amount: item.amount + 1 }
          : item,
      ),
    );
  };

  const decreaseAmount = (id: number, size: string) => {
    const item = cart.find((i) => i.id === id && i.selectedSize === size);
    if (!item) return;

    if (item.amount > 1) {
      setCart(
        cart.map((i) =>
          i.id === id && i.selectedSize === size
            ? { ...i, amount: i.amount - 1 }
            : i,
        ),
      );
    } else {
      removeFromCart(id, size);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        itemAmount,
        total,
        isOpen,
        setIsOpen,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
