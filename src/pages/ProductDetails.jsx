import { useParams, Link } from "react-router-dom";
import { useBakery } from "../context/BakeryContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "../context/ToastContext";

function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart } = useBakery();
  const { showToast } = useToast();

  const product = products.find((p) => p.id === parseInt(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h2 style={{ color: "#2c1e1e" }}>Product not found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      {/* BACK LINK */}
      <Link to="/" style={{ color: "#6b4f3b", textDecoration: "none" }}>
        ← Back to Collection
      </Link>

      <div
        style={{
          display: "flex",
          gap: "3rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* IMAGE */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          src={product.image}
          alt={product.name}
          style={{
            width: "450px",
            maxWidth: "100%",
            height: "450px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        {/* DETAILS */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              color: "#2c1e1e",
              fontSize: "2.3rem",
              marginBottom: "1rem",
            }}
          >
            {product.name}
          </h1>

          <h2
            style={{
              color: "#6b4f3b",
              marginBottom: "1.5rem",
            }}
          >
            {product.price} ETB
          </h2>

          {/* STOCK */}
          <div
            style={{
              marginBottom: "1.5rem",
              padding: "1rem",
              background: "#f8f5f2",
              borderRadius: "12px",
            }}
          >
            {product.stock > 0 ? "Available" : "Out of stock"}
          </div>

          {/* DESCRIPTION */}
          <p
            style={{
              lineHeight: "1.7",
              color: "#555",
              marginBottom: "2rem",
            }}
          >
            {product.description}
          </p>

          {/* QUANTITY */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1.5rem",
              alignItems: "center",
            }}
          >
            <span>Quantity:</span>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => {
                const value = Math.max(1, parseInt(e.target.value) || 1);
                setQty(value);
              }}
              style={{
                width: "70px",
                padding: "0.5rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          {/* BUTTON */}
          {product.stock > 0 && (
            <button
              onClick={() => {
                for (let i = 0; i < qty; i++) {
                  addToCart(product);
                }

                 showToast(`${qty} × ${product.name} added to cart`);
              }}
              style={{
                width: "100%",
                padding: "1.2rem",
                background: "#6b4f3b",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.background = "#5a3f2d")
              }
              onMouseOut={(e) =>
                (e.target.style.background = "#6b4f3b")
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;