import { Link } from "react-router-dom";
import { useBakery } from "../context/BakeryContext";
import { useToast } from "../context/ToastContext";

function ProductCard({ product }) {
  const { addToCart } = useBakery();
  const { showToast } = useToast();

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "14px",
        overflow: "hidden",
        transition: "all 0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
       <div style={{ position: "relative" }}>
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <div style={{ overflow: "hidden" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "190px", 
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.im/400x300?text=Bakery";
              }}
            />
          </div>
        </Link>

         {product.stock > 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
              showToast(`${product.name} added to cart`);
            }}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "#6b4f3b",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.background = "#c69c6d";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "#6b4f3b";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div style={{ padding: "1rem" }}>
        <h3
          style={{
            margin: "0 0 0.3rem",
            fontSize: "1rem", 
            fontFamily: "Georgia, serif",
            color: "#2c1e1e",
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            margin: "0 0 0.6rem",
            fontSize: "0.8rem",
            color: "#9c7b6b",
          }}
        >
          {product.category}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              color: "#6b4f3b",
            }}
          >
            {product.price} ETB
          </span>

          <span
            style={{
              fontSize: "0.65rem",
              padding: "3px 8px",
              borderRadius: "20px",
              background:
                product.stock > 0 ? "#f3efe9" : "#fceaea",
              color: product.stock > 0 ? "#6b4f3b" : "#c62828",
            }}
          >
            {product.stock > 0 ? "In stock" : "Sold out"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;