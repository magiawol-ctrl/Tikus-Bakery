import { useState } from "react";
import { useBakery } from "../context/BakeryContext";
import SearchFilter from "../components/SearchFilter";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

function Shop() {
  const { products, addToCart } = useBakery();
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

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", background: "#f5e6d3" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#3e2723",
          fontFamily: "Georgia, serif",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        Our Products
      </h1>

      {/* Search and Filter */}
      <SearchFilter onSearch={handleSearch} />

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#777" }}>
          <p>No products found matching your criteria.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
