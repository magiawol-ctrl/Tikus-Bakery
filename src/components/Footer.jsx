function Footer() {
  return (
    <footer style={{
      marginTop: "5rem",
      padding: "4rem 2rem 2rem",
      background: "linear-gradient(135deg, #3e2723 0%, #5d4037 100%)",
      color: "#f5e6d3",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "3rem",
        marginBottom: "3rem",
      }}>
        {/* About Section */}
        <div>
          <h3 style={{ 
            marginBottom: "1rem", 
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            color: "#fffacd",
            letterSpacing: "2px",
          }}>
            TIKUS BAKERY
          </h3>
          <p style={{ 
            marginBottom: "1rem", 
            color: "#f5deb3",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px"
          }}>
            Freshly baked with tradition and care since 2023. 
            We bring you the finest baked goods using the best ingredients 
            and time-honored techniques.
          </p>
          <div style={{ 
            display: "flex", 
            gap: "15px", 
            justifyContent: "flex-start",
            marginTop: "1rem"
          }}>
            <a href="#" style={{ 
              color: "white", 
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#fffacd"}
            onMouseLeave={(e) => e.currentTarget.style.color = "white"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" style={{ 
              color: "white", 
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#fffacd"}
            onMouseLeave={(e) => e.currentTarget.style.color = "white"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" style={{ 
              color: "white", 
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#fffacd"}
            onMouseLeave={(e) => e.currentTarget.style.color = "white"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ 
            marginBottom: "1rem", 
            fontSize: "18px",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",
            color: "#fffacd"
          }}>
            Quick Links
          </h4>
          <ul style={{ 
            listStyle: "none", 
            padding: 0, 
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>
            <li>
              <a href="/" style={{ 
                color: "#f5deb3", 
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "white"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#f5deb3"}>
                Home
              </a>
            </li>
            <li>
              <a href="/shop" style={{ 
                color: "#f5deb3", 
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "white"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#f5deb3"}>
                Shop
              </a>
            </li>
            <li>
              <a href="/our-story" style={{ 
                color: "#f5deb3", 
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "white"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#f5deb3"}>
                Our Story
              </a>
            </li>
            <li>
              <a href="/bestsellers" style={{ 
                color: "#f5deb3", 
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "white"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#f5deb3"}>
                Bestsellers
              </a>
            </li>
            <li>
              <a href="/contact" style={{ 
                color: "#f5deb3", 
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "white"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#f5deb3"}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ 
            marginBottom: "1rem", 
            fontSize: "18px",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",
            color: "#fffacd"
          }}>
            Contact Us
          </h4>
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "0.8rem",
            fontSize: "14px",
            color: "#f5deb3"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>+251 901 10 0110</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>info@tikusbakery.et</span>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 style={{ 
            marginBottom: "1rem", 
            fontSize: "18px",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",
            color: "#fffacd"
          }}>
            Opening Hours
          </h4>
          <div style={{ 
            fontSize: "14px",
            color: "#f5deb3",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Monday - Friday:</span>
              <span>6:00 AM - 9:00 PM</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Saturday:</span>
              <span>6:00 AM - 10:00 PM</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Sunday:</span>
              <span>7:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        paddingTop: "2rem",
        textAlign: "center",
        fontSize: "14px",
        color: "#f5deb3"
      }}>
        <p style={{ margin: "0 0 0.5rem 0" }}>
          {new Date().getFullYear()} Tikus Bakery. All rights reserved.
        </p>
        <p style={{ margin: 0, fontSize: "12px", color: "#d2b48c" }}>
          Made with love in Addis Ababa, Ethiopia
        </p>
      </div>
    </footer>
  );
}

export default Footer;