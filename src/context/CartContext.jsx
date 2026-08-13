import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext(void 0);
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("skymart_cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("skymart_cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map(
          (item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(
      (prev) => prev.map(
        (item) => item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  return <CartContext.Provider
    value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      isCartOpen,
      setIsCartOpen,
      cartCount,
      cartTotal
    }}
  >
      {children}
    </CartContext.Provider>;
};
const useCart = () => {
  const context = useContext(CartContext);
  if (context === void 0) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
export {
  CartProvider,
  useCart
};
