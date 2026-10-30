import { useBakery } from "../context/BakeryContext";
import ProductCard from "../components/ProductCard";
import { motion as Motion } from "framer-motion";

function Bestsellers() {
  const { products } = useBakery();

  // Bestsellers - top rated and most popular items
  const bestsellerProducts = [
    // Sourdough Bread
    products.find(p => p.id === 1),
    // Chocolate Cake
    products.find(p => p.id === 6),
    // Croissant
    products.find(p => p.id === 11),
    // Vanilla Cake
    products.find(p => p.id === 7),
    // Baguette
    products.find(p => p.id === 2),
    // Mango Cream Cake
    products.find(p => p.id === 16),
    // Cinnamon Roll
    products.find(p => p.id === 12),
    // Red Velvet Cake
    products.find(p => p.id === 8),
  ].filter(Boolean); // Remove any undefined products

  const categories = [
    { name: "Breads", products: bestsellerProducts.filter(p => p.category === "Breads") },
    { name: "Cakes", products: bestsellerProducts.filter(p => p.category.includes("Cake")) },
    { name: "Pastries", products: bestsellerProducts.filter(p => p.category === "Pastries") },
    { name: "Sweets", products: bestsellerProducts.filter(p => p.category === "Sweets") },
  ].filter(cat => cat.products.length > 0);

  return (
    <div style={{ background: "#f5e6d3", minHeight: "100vh", padding: "2rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1
            style={{
              color: "#3e2723",
              fontFamily: "'Pacifico', cursive",
              fontSize: "3.5rem",
              marginBottom: "1rem",
              fontWeight: "normal",
            }}
          >
            Our Bestsellers
          </h1>
          <p style={{ color: "#6b4f3b", fontSize: "1.2rem", marginBottom: "2rem" }}>
            Discover our most loved and popular bakery items
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "2rem"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#d4a574",
                fontFamily: "Georgia, serif"
              }}>
                {bestsellerProducts.length}
              </div>
              <div style={{ color: "#6b4f3b", fontSize: "0.9rem" }}>
                Bestselling Items
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#d4a574",
                fontFamily: "Georgia, serif"
              }}>
                4.8
              </div>
              <div style={{ color: "#6b4f3b", fontSize: "0.9rem" }}>
                Average Rating
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#d4a574",
                fontFamily: "Georgia, serif"
              }}>
                1000+
              </div>
              <div style={{ color: "#6b4f3b", fontSize: "0.9rem" }}>
                Happy Customers
              </div>
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        <div style={{
          background: "linear-gradient(135deg, #3e2723, #5d4037)",
          color: "#f5e6d3",
          padding: "1.5rem",
          borderRadius: "15px",
          textAlign: "center",
          marginBottom: "3rem",
          boxShadow: "0 4px 15px rgba(62, 39, 35, 0.3)"
        }}>
          <h2 style={{
            fontFamily: "'Pacifico', cursive",
            fontSize: "1.8rem",
            marginBottom: "0.5rem",
            fontWeight: "normal"
          }}>
            Customer Favorites
          </h2>
          <p style={{ margin: 0, opacity: 0.9 }}>
            These items are handpicked by our customers and are our most popular choices
          </p>
        </div>

        {/* Bestsellers Grid */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{
            color: "#3e2723",
            fontFamily: "Georgia, serif",
            fontSize: "2rem",
            marginBottom: "2rem",
            textAlign: "center"
          }}>
            All Bestsellers
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {bestsellerProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ position: "relative" }}
              >
                {/* Bestseller Badge */}
                <div style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  background: "#d4a574",
                  color: "#3e2723",
                  padding: "0.5rem 1rem",
                  borderRadius: "25px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  zIndex: 10,
                  boxShadow: "0 2px 10px rgba(212, 165, 116, 0.5)"
                }}>
                  BESTSELLER
                </div>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div>
          <h2 style={{
            color: "#3e2723",
            fontFamily: "Georgia, serif",
            fontSize: "2rem",
            marginBottom: "2rem",
            textAlign: "center"
          }}>
            Bestsellers by Category
          </h2>
          {categories.map((category, catIndex) => (
            <div key={category.name} style={{ marginBottom: "3rem" }}>
              <h3 style={{
                color: "#3e2723",
                fontFamily: "'Pacifico', cursive",
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                textAlign: "center",
                fontWeight: "normal"
              }}>
                {category.name}
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {category.products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: catIndex * 0.2 + index * 0.1 
                    }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          background: "#fff",
          padding: "3rem",
          borderRadius: "15px",
          textAlign: "center",
          marginTop: "4rem",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
        }}>
          <h2 style={{
            color: "#3e2723",
            fontFamily: "'Pacifico', cursive",
            fontSize: "2rem",
            marginBottom: "1rem",
            fontWeight: "normal"
          }}>
            Try Our Bestsellers Today!
          </h2>
          <p style={{ color: "#6b4f3b", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Join thousands of satisfied customers who love our most popular items
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "#3e2723",
              color: "#f5e6d3",
              border: "2px solid #d4a574",
              padding: "1rem 2rem",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontFamily: "Georgia, serif",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onClick={() => window.location.href = "/shop"}
          >
            View Full Menu
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
