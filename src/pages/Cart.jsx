import { Link } from "react-router-dom";
import { useBakery } from "../context/BakeryContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useBakery();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ color: "#2c1e1e", marginBottom: "1rem" }}>
          Your cart is empty
        </h2>

        <Link
          to="/"
          style={{
            color: "#6b4f3b",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Continue shopping →
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "4rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          color: "#2c1e1e",
          marginBottom: "3rem",
          fontFamily: "Georgia, serif",
        }}
      >
        Shopping Cart
      </h1>

      {/* ITEMS */}
      <div style={{ marginBottom: "3rem" }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "1.5rem",
              padding: "1.8rem",
              background: "#fffaf5",
              borderRadius: "16px",
              border: "1px solid rgba(198,156,109,0.15)",
              marginBottom: "1.2rem",
              alignItems: "center",
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />

            {/* INFO */}
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: "0.4rem", color: "#2c1e1e" }}>
                {item.name}
              </h3>

              <p style={{ color: "#8d6e63" }}>
                {item.price} ETB
              </p>
            </div>

            {/* QUANTITY */}
            <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value)) {
                    updateQuantity(item.id, value);
                  }
                }}
                style={{
                  width: "60px",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              />

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#e8dcd0",
                  color: "#5a3f2d",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>

            {/* ITEM TOTAL */}
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "#6b4f3b",
                minWidth: "120px",
                textAlign: "right",
              }}
            >
              Subtotal: {(item.price * item.quantity).toFixed(0)} ETB
            </div>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div
        style={{
          background: "#fffaf5",
          padding: "2rem",
          borderRadius: "16px",
          border: "1px solid rgba(198,156,109,0.15)",
          textAlign: "right",
        }}
      >
        <h2
          style={{
            color: "#2c1e1e",
            marginBottom: "1.5rem",
            fontSize: "2rem",
          }}
        >
          Total: {getCartTotal().toFixed(0)} ETB
        </h2>

        <Link to="/checkout">
          <button
            style={{
              width: "100%",
              padding: "1.2rem",
              background: "#6b4f3b",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;