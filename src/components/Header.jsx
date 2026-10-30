import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useBakery } from "../context/BakeryContext";

function Header() {
  const { cart } = useBakery();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem("recentSearches");
    return saved ? JSON.parse(saved) : [];
  });
  const [showUserMenu, setShowUserMenu] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const newRecentSearches = [
        searchQuery,
        ...recentSearches.filter((item) => item !== searchQuery),
      ].slice(0, 5);
      setRecentSearches(newRecentSearches);
      localStorage.setItem("recentSearches", JSON.stringify(newRecentSearches));
      // TODO: Implement actual search functionality
      console.log("Searching for:", searchQuery);
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/our-story", label: "Our Story" },
    { to: "/seasonal", label: "Seasonal" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header style={{ backgroundColor: "#fff", borderBottom: "1px solid #e8f4f8" }}>
      {/* Top Bar - Simplified */}
      <div
        style={{
          backgroundColor: "#f0f8ff",
          padding: "10px 0",
          fontSize: "13px",
          borderBottom: "1px solid #e8f4f8",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "#333" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#4a90e2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Addis Ababa, Ethiopia
            </span>
            <span style={{ color: "#4a90e2", fontWeight: "500" }}>
              Free delivery on orders over 1000 ETB
            </span>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        
            {/* Social Media Icons */}
            <a href="#" style={{ color: "#357abd", textDecoration: "none", fontSize: "16px", transition: "color 0.3s ease" }} 
               onMouseEnter={(e) => e.currentTarget.style.color = "#2f6fab"} 
               onMouseLeave={(e) => e.currentTarget.style.color = "#357abd"}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#357abd">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" style={{ color: "#357abd", textDecoration: "none", fontSize: "16px", transition: "color 0.3s ease" }}
               onMouseEnter={(e) => e.currentTarget.style.color = "#2f6fab"} 
               onMouseLeave={(e) => e.currentTarget.style.color = "#357abd"}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#357abd">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" style={{ color: "#357abd", textDecoration: "none", fontSize: "16px", transition: "color 0.3s ease" }}
               onMouseEnter={(e) => e.currentTarget.style.color = "#2f6fab"} 
               onMouseLeave={(e) => e.currentTarget.style.color = "#357abd"}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#357abd">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            
            {/* Cart */}
            <Link
              to="/cart"
              style={{
                color: "#357abd",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "500",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#2f6fab"} 
              onMouseLeave={(e) => e.currentTarget.style.color = "#357abd"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#357abd">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              Cart ({totalItems})
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "25px 0",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#4a90e2",
                  fontFamily: "Arial, sans-serif",
                  display: "block",
                  lineHeight: "1",
                  letterSpacing: "2px",
                }}
              >
                TIKUS
              </span>
              <span
                style={{
                  fontSize: "18px",
                  color: "#357abd",
                  fontFamily: "Arial, sans-serif",
                  display: "block",
                  marginTop: "2px",
                  letterSpacing: "4px",
                  fontWeight: "600",
                }}
              >
                BAKERY
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav style={{ display: "flex", gap: "40px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  textDecoration: "none",
                  color: location.pathname === link.to ? "#4a90e2" : "#333",
                  fontWeight: location.pathname === link.to ? "700" : "500",
                  borderBottom: location.pathname === link.to ? "3px solid #4a90e2" : "none",
                  paddingBottom: "5px",
                  transition: "all 0.3s ease",
                  fontSize: "16px",
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== link.to) {
                    e.currentTarget.style.color = "#4a90e2";
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.to) {
                    e.currentTarget.style.color = "#333";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
            {/* Search */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              style={{
                background: "none",
                border: "2px solid #8b4513",
                cursor: "pointer",
                padding: "10px",
                borderRadius: "50%",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#8b4513";
                e.currentTarget.querySelector('svg').style.fill = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.querySelector('svg').style.fill = '#8b4513';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#8b4513">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
              
            {showSearch && (
              <div
                style={{
                  position: "absolute",
                  bottom: "100%",
                  right: "0",
                  background: "white",
                  border: "2px solid #4a90e2",
                  borderRadius: "8px",
                  padding: "15px",
                  minWidth: "320px",
                  boxShadow: "0 4px 20px rgba(74,144,226,0.15)",
                  zIndex: 1000,
                  marginBottom: "10px",
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
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      marginBottom: "15px",
                      fontSize: "14px",
                    }}
                    autoFocus
                  />
                </form>
                
                {recentSearches.length > 0 && (
                  <div>
                    <p style={{ fontSize: "12px", color: "#4a90e2", marginBottom: "8px", fontWeight: "600" }}>
                      Recent searches:
                    </p>
                    {recentSearches.map((search, index) => (
                      <div
                        key={index}
                        onClick={() => setSearchQuery(search)}
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                          fontSize: "13px",
                          color: "#666",
                          borderBottom: "1px solid #eee",
                          borderRadius: "3px",
                          transition: "background 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#f8f8f8";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {search}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* User Account */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                style={{
                  background: "none",
                  border: "2px solid #4a90e2",
                  cursor: "pointer",
                  padding: "10px",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#4a90e2";
                  e.currentTarget.querySelector('svg').style.fill = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.querySelector('svg').style.fill = '#4a90e2';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a90e2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </button>
              
              {showUserMenu && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: "0",
                    background: "white",
                    border: "2px solid #4a90e2",
                    borderRadius: "8px",
                    padding: "15px",
                    minWidth: "200px",
                    boxShadow: "0 4px 20px rgba(74,144,226,0.15)",
                    zIndex: 1000,
                    marginTop: "10px",
                  }}
                >
                  <Link
                    to="/login"
                    style={{
                      display: "block",
                      padding: "10px 0",
                      textDecoration: "none",
                      color: "#8b4513",
                      borderBottom: "1px solid #eee",
                      fontWeight: "500",
                      transition: "color 0.2s ease",
                    }}
                    onClick={() => setShowUserMenu(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#6b3410";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#8b4513";
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    style={{
                      display: "block",
                      padding: "10px 0",
                      textDecoration: "none",
                      color: "#8b4513",
                      fontWeight: "500",
                      transition: "color 0.2s ease",
                    }}
                    onClick={() => setShowUserMenu(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#6b3410";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#8b4513";
                    }}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
