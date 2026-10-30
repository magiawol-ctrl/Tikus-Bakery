import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useBakery } from "../context/BakeryContext";

function Navbar() {
  const { cart, addRecentSearch } = useBakery();
  const location = useLocation();
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/our-story", label: "Our Story" },
    { to: "/bestsellers", label: "Bestsellers" },
    { to: "/orders", label: "Orders" },
    { to: "/contact", label: "Contact" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add to recent searches
      addRecentSearch(searchQuery.trim());
      
      // Navigate to shop with search query
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      
      // Close search dropdown
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  return (
    <nav style={{
      backgroundColor: "#3e2723",
      padding: "1rem 2rem",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 10px rgba(62, 39, 35, 0.3)",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#f5e6d3",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: "0.8",
          }}>
            <span style={{
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "'Pacifico', cursive",
            }}>T</span>
            <span style={{
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "'Pacifico', cursive",
              marginTop: "-4px"
            }}>B</span>
          </div>
          <span style={{
            fontSize: "20px",
            fontWeight: "normal",
            fontFamily: "'Pacifico', cursive",
            letterSpacing: "1px",
          }}>
            TIKUS BAKERY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}>
          {/* Navigation Links */}
          <div style={{
            display: showMobileMenu ? "none" : "flex",
            gap: "2rem",
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  textDecoration: "none",
                  color: location.pathname === link.to ? "#f5e6d3" : "#d4a574",
                  fontWeight: location.pathname === link.to ? "700" : "500",
                  borderBottom: location.pathname === link.to ? "2px solid #f5e6d3" : "none",
                  paddingBottom: "4px",
                  transition: "all 0.3s ease",
                  fontSize: "16px",
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== link.to) {
                    e.currentTarget.style.color = "#f5e6d3";
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.to) {
                    e.currentTarget.style.color = "#d4a574";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}>
            {/* Search Icon */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowSearch(!showSearch)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#f5e6d3",
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(245, 230, 211, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>
              
              {/* Search Dropdown */}
              {showSearch && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: "0",
                    background: "white",
                    border: "2px solid #d4a574",
                    borderRadius: "8px",
                    padding: "15px",
                    minWidth: "300px",
                    boxShadow: "0 4px 20px rgba(62, 39, 35, 0.15)",
                    zIndex: 1000,
                    marginTop: "10px",
                  }}
                >
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #d4a574",
                        borderRadius: "5px",
                        fontSize: "14px",
                        color: "#3e2723",
                      }}
                      autoFocus
                    />
                  </form>
                </div>
              )}
            </div>

            {/* User Account */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                style={{
                  background: "none",
                  border: "1px solid #d4a574",
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(245, 230, 211, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#f5e6d3">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </button>
              
              {/* User Dropdown */}
              {showUserMenu && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: "0",
                    background: "white",
                    border: "2px solid #d4a574",
                    borderRadius: "8px",
                    padding: "8px 0",
                    minWidth: "150px",
                    boxShadow: "0 4px 20px rgba(62, 39, 35, 0.15)",
                    zIndex: 1000,
                    marginTop: "10px",
                  }}
                >
                  <Link
                    to="/login"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      textDecoration: "none",
                      color: "#3e2723",
                      fontSize: "14px",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    onClick={() => setShowUserMenu(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      textDecoration: "none",
                      color: "#3e2723",
                      fontSize: "14px",
                      transition: "background-color 0.3s ease",
                      borderTop: "1px solid #f0f0f0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    onClick={() => setShowUserMenu(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              style={{
                color: "#f5e6d3",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                padding: "8px 16px",
                borderRadius: "25px",
                backgroundColor: "rgba(212, 165, 116, 0.2)",
                border: "1px solid #d4a574",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              Cart ({totalItems})
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            style={{
              display: window.innerWidth > 768 ? "none" : "block",
              background: "none",
              border: "none",
              color: "#f5e6d3",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            {showMobileMenu ? "×" : "||"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div style={{
          display: window.innerWidth <= 768 ? "block" : "none",
          marginTop: "1rem",
          borderTop: "1px solid #d4a574",
          paddingTop: "1rem",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                display: "block",
                textDecoration: "none",
                color: location.pathname === link.to ? "#f5e6d3" : "#d4a574",
                fontWeight: location.pathname === link.to ? "700" : "500",
                padding: "0.5rem 0",
                transition: "all 0.3s ease",
                fontSize: "16px",
              }}
              onClick={() => setShowMobileMenu(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
