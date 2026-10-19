import { useBakery } from "../context/BakeryContext";
import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function Home() {
  const { products, isLoading } = useBakery();
  const productRef = useRef(null);
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
  });

  const handleSearch = ({ search, category }) => {
    setFilters({ search, category });
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchesCategory =
      filters.category === "All" ||
      p.category === filters.category;

    return matchesSearch && matchesCategory;
  });

  // LOADING STATE
  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <h2>Loading Products...</h2>
      </div>
    );
  }

  return (
    <div style={{ background: "#f5e6d3" }}>
      {/* HERO SECTION */}
      <section
        style={{
          height: "90vh",
          backgroundImage: "url('/images/bread-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "0 8%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle overlay to let image show through */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(62, 39, 35, 0.4) 0%, rgba(93, 64, 55, 0.2) 100%)",
          zIndex: 1,
        }} />
        
        {/* Subtle border frame */}
        <div style={{
          position: "absolute",
          top: "30px",
          left: "30px",
          right: "30px",
          bottom: "30px",
          border: "1px solid rgba(212, 165, 116, 0.15)",
          borderRadius: "15px",
          zIndex: 2,
          pointerEvents: "none",
        }} />
        
        {/* Subtle corner decorations */}
        <div style={{
          position: "absolute",
          top: "50px",
          left: "50px",
          width: "30px",
          height: "30px",
          borderTop: "2px solid rgba(212, 165, 116, 0.4)",
          borderLeft: "2px solid rgba(212, 165, 116, 0.4)",
          borderTopLeftRadius: "8px",
          zIndex: 3,
        }} />
        <div style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          width: "30px",
          height: "30px",
          borderTop: "2px solid rgba(212, 165, 116, 0.4)",
          borderRight: "2px solid rgba(212, 165, 116, 0.4)",
          borderTopRightRadius: "8px",
          zIndex: 3,
        }} />
        <div style={{
          position: "absolute",
          bottom: "50px",
          left: "50px",
          width: "30px",
          height: "30px",
          borderBottom: "2px solid rgba(212, 165, 116, 0.4)",
          borderLeft: "2px solid rgba(212, 165, 116, 0.4)",
          borderBottomLeftRadius: "8px",
          zIndex: 3,
        }} />
        <div style={{
          position: "absolute",
          bottom: "50px",
          right: "50px",
          width: "30px",
          height: "30px",
          borderBottom: "2px solid rgba(212, 165, 116, 0.4)",
          borderRight: "2px solid rgba(212, 165, 116, 0.4)",
          borderBottomRightRadius: "8px",
          zIndex: 3,
        }} />

        <div style={{ 
          maxWidth: "520px", 
          color: "#fff", 
          position: "relative",
          zIndex: 4,
          padding: "2rem",
          background: "rgba(62, 39, 35, 0.25)",
          backdropFilter: "blur(8px)",
          borderRadius: "20px",
          border: "1px solid rgba(212, 165, 116, 0.15)",
        }}>
          <h4 style={{ 
            letterSpacing: "2px", 
            marginBottom: "1rem",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            color: "#d4a574",
            fontWeight: "600"
          }}>
            FRESHLY BAKED, EVERY DAY
          </h4>

          <h1
            style={{
              fontSize: "4rem",
              lineHeight: "1.2",
              fontFamily: "'Pacifico', cursive",
              marginBottom: "1.5rem",
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Where Every Bite
            <br />
            Tells a Story
          </h1>

          <p style={{ 
            marginBottom: "2rem", 
            color: "#f3e9dc",
            fontSize: "1.1rem",
            lineHeight: "1.6"
          }}>
            Carefully crafted breads, pastries, and cakes.
          </p>

          <button
            onClick={() =>
              productRef.current.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "16px 32px",
              borderRadius: "30px",
              background: "linear-gradient(135deg, #3e2723, #5d4037)",
              border: "2px solid #d4a574",
              color: "#f5e6d3",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "Georgia, serif",
              fontWeight: "600",
              fontSize: "1rem",
              boxShadow: "0 4px 15px rgba(62, 39, 35, 0.3)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #5d4037, #3e2723)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(62, 39, 35, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #3e2723, #5d4037)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(62, 39, 35, 0.3)";
            }}
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section ref={productRef} style={{ 
        padding: "6rem 8%",
        position: "relative",
        background: "linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 100%)",
      }}>
         <div style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          right: "2rem",
          bottom: "2rem",
          border: "2px solid rgba(212, 165, 116, 0.2)",
          borderRadius: "25px",
          zIndex: 1,
          pointerEvents: "none",
        }} />
        
         <div style={{
          position: "absolute",
          top: "3rem",
          left: "3rem",
          width: "40px",
          height: "40px",
          borderTop: "3px solid #d4a574",
          borderLeft: "3px solid #d4a574",
          borderTopLeftRadius: "10px",
          zIndex: 2,
        }} />
        <div style={{
          position: "absolute",
          top: "3rem",
          right: "3rem",
          width: "40px",
          height: "40px",
          borderTop: "3px solid #d4a574",
          borderRight: "3px solid #d4a574",
          borderTopRightRadius: "10px",
          zIndex: 2,
        }} />
        <div style={{
          position: "absolute",
          bottom: "3rem",
          left: "3rem",
          width: "40px",
          height: "40px",
          borderBottom: "3px solid #d4a574",
          borderLeft: "3px solid #d4a574",
          borderBottomLeftRadius: "10px",
          zIndex: 2,
        }} />
        <div style={{
          position: "absolute",
          bottom: "3rem",
          right: "3rem",
          width: "40px",
          height: "40px",
          borderBottom: "3px solid #d4a574",
          borderRight: "3px solid #d4a574",
          borderBottomRightRadius: "10px",
          zIndex: 2,
        }} />

        <div style={{ position: "relative", zIndex: 3 }}>
          <div style={{
            textAlign: "center",
            marginBottom: "3rem",
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(212, 165, 116, 0.3)",
            maxWidth: "600px",
            margin: "0 auto 3rem auto"
          }}>
            <h4 style={{ 
              color: "#d4a574", 
              letterSpacing: "2px", 
              marginBottom: "1rem",
              fontSize: "0.9rem",
              textTransform: "uppercase",
              fontWeight: "600"
            }}>
              OUR FAVORITES
            </h4>

            <h2
              style={{
                fontSize: "2.5rem",
                fontFamily: "'Pacifico', cursive",
                color: "#3e2723",
                marginBottom: "1rem",
                fontWeight: "normal",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              Handpicked For You
            </h2>
            
            <div style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(90deg, #d4a574, #3e2723)",
              margin: "0 auto",
              borderRadius: "2px"
            }} />
          </div>

          {/* Search and Filter */}
          <SearchFilter onSearch={handleSearch} />

          {filteredProducts.length === 0 ? (
            <div style={{
              textAlign: "center", 
              padding: "3rem",
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: "15px",
              border: "1px solid rgba(212, 165, 116, 0.2)"
            }}>
              <p style={{ color: "#8d6e63", fontSize: "1.1rem" }}>
                No products found.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "2rem",
                padding: "0 1rem"
              }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "20px",
                    padding: "1rem",
                    border: "1px solid rgba(212, 165, 116, 0.2)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease"
                  }}
                  whileHover={{
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                    border: "1px solid rgba(212, 165, 116, 0.4)"
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SPACING */}
      <div style={{ height: "80px" }} />
    </div>
  );
}

export default Home;