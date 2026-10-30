/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useCallback } from "react";

const BakeryContext = createContext();

export function BakeryProvider({ children }) {
  // ---------------- STATE ----------------
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("tikus-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("tikus-orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });
  const [recentSearches, setRecentSearches] = useState(() => {
    const savedSearches = localStorage.getItem("tikus-recent-searches");
    if (!savedSearches) return [];

    const searches = JSON.parse(savedSearches);
    return searches.filter((search) => search && search.trim().length > 2);
  });

    const [sessionCategory, setSessionCategory] = useState(
    () => sessionStorage.getItem("tikus-category") || "All"
  );

  useEffect(() => {
    sessionStorage.setItem("tikus-category", sessionCategory);
  }, [sessionCategory]);

  // ---------------- SAVE TO LOCAL STORAGE ----------------
  useEffect(() => {
    localStorage.setItem("tikus-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("tikus-orders", JSON.stringify(orders));
  }, [orders]);

  // ---------------- PRODUCT CACHING ----------------
  const loadProducts = useCallback(async () => {
    setIsLoading(true);

    const cache = localStorage.getItem("tikus-products-cache");
    const now = Date.now();

    if (cache) {
      const { data, timestamp } = JSON.parse(cache);
      const fiveMinutes = 5 * 60 * 1000;

      if (now - timestamp < fiveMinutes) {
        setProducts(data);
        setIsLoading(false);
        return;
      }
    }

    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const { products: hardcodedProducts } = await import("../data/products.js");

    setProducts(hardcodedProducts);

    localStorage.setItem(
      "tikus-products-cache",
      JSON.stringify({
        data: hardcodedProducts,
        timestamp: now,
      })
    );

    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(loadProducts, 0);
    return () => clearTimeout(timeoutId);
  }, [loadProducts]);

  // ---------------- CART FUNCTIONS ----------------
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // ---------------- SEARCH CACHE ----------------
  const addRecentSearch = (query) => {
    const trimmed = query.trim();
    
    // Only cache if it's a valid search (more than 2 characters)
    if (!trimmed || trimmed.length <= 2) return;

    setRecentSearches((prev) => {
      // Remove duplicates and add to front, keep only last 3 unique searches
      const uniqueSearches = prev.filter((s) => s.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...uniqueSearches].slice(0, 3);
      
      // Save to localStorage
      localStorage.setItem("tikus-recent-searches", JSON.stringify(updated));
      return updated;
    });
  };

  // ---------------- CATEGORY ----------------
  const handleCategoryChange = (category) => {
    setSessionCategory(category);
  };

  // ---------------- CHECKOUT ----------------
  const placeOrder = (customerData) => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      customer: customerData,
      items: [...cart],
      total: getCartTotal(),
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
  };

   const value = {
    // products
    products,  
    isLoading,

    // cart
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    getCartTotal,

    // search
    recentSearches,
    addRecentSearch,

    // category
    sessionCategory,
    setSessionCategory: handleCategoryChange,

    // orders
    orders,
    placeOrder,

    // cache
    refreshProducts: loadProducts,
  };

  return (
    <BakeryContext.Provider value={value}>
      {children}
    </BakeryContext.Provider>
  );
}

export const useBakery = () => useContext(BakeryContext);