import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBakery } from "../context/BakeryContext";
import { useToast } from "../context/ToastContext";

function Checkout() {
  const { cart, placeOrder, getCartTotal } = useBakery();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  // VALIDATION
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const total = getCartTotal(); // store before clearing cart

      placeOrder(formData);

      // TOAST CONFIRMATION
      showToast(`Order placed successfully! Total: ${total.toFixed(0)} ETB`);

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        address: "",
      });

      navigate("/orders");
    }
  };

  // EMPTY CART PROTECTION
  if (cart.length === 0) {
    return (
      <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ color: "#2c1e1e" }}>No items to checkout</h2>
        <Link to="/cart" style={{ color: "#6b4f3b" }}>
          Back to cart →
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          color: "#2c1e1e",
          fontFamily: "Georgia, serif",
        }}
      >
        Checkout
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
        }}
      >
        {/* ORDER SUMMARY */}
        <div
          style={{
            background: "#fffaf5",
            padding: "2rem",
            borderRadius: "16px",
            border: "1px solid rgba(198,156,109,0.15)",
          }}
        >
          <h3 style={{ marginBottom: "1.5rem", color: "#2c1e1e" }}>
            Order Summary
          </h3>

          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.8rem 0",
                borderBottom: "1px solid #eee",
                fontSize: "0.95rem",
              }}
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{(item.price * item.quantity).toFixed(0)} ETB</span>
            </div>
          ))}

          <div
            style={{
              marginTop: "1.5rem",
              fontSize: "1.4rem",
              fontWeight: "600",
              textAlign: "right",
              color: "#6b4f3b",
            }}
          >
            Total: {getCartTotal().toFixed(0)} ETB
          </div>
        </div>

        {/* FORM */}
        <div
          style={{
            background: "#fffaf5",
            padding: "2rem",
            borderRadius: "16px",
            border: "1px solid rgba(198,156,109,0.15)",
          }}
        >
          <h3 style={{ marginBottom: "1.5rem", color: "#2c1e1e" }}>
            Delivery Details
          </h3>

          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div style={{ marginBottom: "1.2rem" }}>
              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  borderRadius: "10px",
                  border: errors.name
                    ? "1px solid #c62828"
                    : "1px solid #ddd",
                }}
              />
              {errors.name && (
                <p style={{ color: "#c62828", fontSize: "0.8rem" }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div style={{ marginBottom: "1.2rem" }}>
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  borderRadius: "10px",
                  border: errors.email
                    ? "1px solid #c62828"
                    : "1px solid #ddd",
                }}
              />
              {errors.email && (
                <p style={{ color: "#c62828", fontSize: "0.8rem" }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* ADDRESS */}
            <div style={{ marginBottom: "1.5rem" }}>
              <textarea
                placeholder="Delivery address"
                rows="3"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  borderRadius: "10px",
                  border: errors.address
                    ? "1px solid #c62828"
                    : "1px solid #ddd",
                }}
              />
              {errors.address && (
                <p style={{ color: "#c62828", fontSize: "0.8rem" }}>
                  {errors.address}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "1rem",
                background: "#6b4f3b",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Place Order • {getCartTotal().toFixed(0)} ETB
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;