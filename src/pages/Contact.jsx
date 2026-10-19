import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      
      {/* TITLE */}
      <h1 style={{
        textAlign: "center",
        marginBottom: "2rem",
        color: "#2c1e1e",
        fontFamily: "Georgia, serif"
      }}>
        Contact Us
      </h1>

      <p style={{
        textAlign: "center",
        color: "#6b4f3b",
        marginBottom: "3rem"
      }}>
        We'd love to hear from you. Whether it's an order inquiry or feedback.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem"
      }}>
        
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fffaf5",
            padding: "2rem",
            borderRadius: "16px",
            border: "1px solid rgba(198,156,109,0.15)"
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            required
          />

          <textarea
            placeholder="Your message"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={inputStyle}
            required
          />

          <button style={buttonStyle}>
            Send Message
          </button>
        </form>

        {/* INFO */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          color: "#5a3f2d"
        }}>
          <h3>Visit Us</h3>
          <p>Addis Ababa, Ethiopia</p>

          <h3>Call</h3>
          <p>+251 901 100 110</p>

          <h3>Email</h3>
          <p>info@tikusbakery.com</p>

          <h3>Opening Hours</h3>
          <p>Mon - Sat: 7:00 AM - 8:00 PM</p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.9rem",
  marginBottom: "1rem",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontFamily: "inherit"
};

const buttonStyle = {
  width: "100%",
  padding: "1rem",
  background: "#6b4f3b",
  color: "#fff",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer"
};

export default Contact;