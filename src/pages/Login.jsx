import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      navigate("/");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#2c1e1e",
          fontFamily: "Georgia, serif",
        }}
      >
        Login to Tikus Bakery
      </h2>

      {error && (
        <div
          style={{
            backgroundColor: "#f8d7da",
            color: "#721c24",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#2c1e1e",
              fontWeight: "500",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "16px",
            }}
            placeholder="Enter your email"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#2c1e1e",
              fontWeight: "500",
            }}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "16px",
            }}
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#8b4513",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#666",
        }}
      >
        <p>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#8b4513",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Register here
          </Link>
        </p>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          paddingTop: "20px",
          borderTop: "1px solid #eee",
        }}
      >
        <p style={{ color: "#666", marginBottom: "15px" }}>Or login with</p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            style={{
              padding: "10px 20px",
              border: "1px solid #ddd",
              backgroundColor: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Google
          </button>
          <button
            style={{
              padding: "10px 20px",
              border: "1px solid #ddd",
              backgroundColor: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
