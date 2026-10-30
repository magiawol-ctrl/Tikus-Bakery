import { Link, useLocation, useNavigate } from "react-router-dom";
import { useBakery } from "../context/BakeryContext";
import { useEffect, useState } from "react";

function Navigation() {
  const {
    cart,
    getCartTotal,
  } = useBakery();

  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          padding: "1rem 0",
          transition: "all 0.3s ease",
          background: scrolled ? "#ffffffcc" : "transparent",
          backdropFilter: "blur(8px)",
          boxShadow: scrolled
            ? "0 6px 25px rgba(0,0,0,0.08)"
            : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
          }}
        >
          {/* LOGO */}
          <div style={{ justifySelf: "start" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontSize: "1.7rem",
                fontWeight: "600",
                fontFamily: "Georgia, serif",
                color: "#2c1e1e",
              }}
            >
              Tikus <span style={{ color: "#c69c6d" }}>Bakery</span>
            </Link>
          </div>

          {/* NAV LINKS */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              justifyContent: "center",
            }}
          >
            <NavLink to="/" label="Home" active={location.pathname === "/"} />
            <NavLink
              to="/orders"
              label="Orders"
              active={location.pathname === "/orders"}
            />
            <NavLink
              to="/contact"
              label="Contact"
              active={location.pathname === "/contact"}
            />
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              justifySelf: "end",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {/* 🔍 MODERN SEARCH ICON */}
            <span
              onClick={() => setShowSearch(true)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f3e9dc";
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.querySelector("svg").style.stroke = "#c69c6d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.querySelector("svg").style.stroke = "#2c1e1e";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2c1e1e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>

            {/* CART */}
            <Link
              to="/cart"
              style={{
                position: "relative",
                textDecoration: "none",
                color: "#2c1e1e",
                fontSize: "0.95rem",
              }}
            >
              Cart

              {totalItems > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-14px",
                    background: "#6b4f3b",
                    color: "#fff",
                    borderRadius: "50%",
                    fontSize: "0.7rem",
                    padding: "3px 7px",
                  }}
                >
                  {totalItems}
                </span>
              )}

              <span style={{ marginLeft: "8px", color: "#6b4f3b" }}>
                {getCartTotal().toFixed(0)} ETB
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* SEARCH MODAL */}
      {showSearch && (
        <SearchModal
          onClose={() => setShowSearch(false)}
          navigate={navigate}
        />
      )}
    </>
  );
}

/* NAV LINK */
function NavLink({ to, label, active }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        fontSize: "0.95rem",
        color: active ? "#6b4f3b" : "#2c1e1e",
        fontWeight: active ? "600" : "400",
      }}
    >
      {label}
    </Link>
  );
}

/* SEARCH MODAL */
function SearchModal({ onClose, navigate }) {
  const { products, recentSearches, addRecentSearch } = useBakery();
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(6px)",
        zIndex: 2000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "600px",
          margin: "10vh auto",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "12px",
        }}
      >
        <input
          autoFocus
          placeholder="Search breads, cakes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            marginBottom: "1rem",
          }}
        />

        {/* RECENT SEARCHES */}
        {query === "" && recentSearches.length > 0 && (
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ fontSize: "0.8rem", color: "#888" }}>
              Recent searches
            </p>

            {recentSearches.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  setQuery(item);
                  addRecentSearch(item);
                }}
                style={{
                  margin: "5px",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  border: "none",
                  background: "#f3e9dc",
                  cursor: "pointer",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* RESULTS */}
        {filtered.map((p) => (
          <div
            key={p.id}
            onClick={() => {
              navigate(`/product/${p.id}`);
              addRecentSearch(query);
              onClose();
            }}
            style={{
              padding: "10px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#f8f5f2")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            {p.name} - {p.price} ETB
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;