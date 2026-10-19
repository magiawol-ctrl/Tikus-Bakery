import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import OurStory from "./pages/OurStory";
import Bestsellers from "./pages/Bestsellers";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* SCROLL RESET */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ANIMATED ROUTES */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/bestsellers" element={<Bestsellers />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

/* MAIN APP */
function App() {
  return (
    <AuthProvider>
      <Router>
        <div
          style={{
            background: "#f5e6d3",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />
          <ScrollToTop />

          {/* MAIN CONTENT */}
          <div style={{ flex: 1 }}>
            <AnimatedRoutes />
          </div>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;