import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useBakery } from "../context/BakeryContext";

function SearchFilter({ onSearch }) {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [showRecent, setShowRecent] = useState(false);

  const { recentSearches, sessionCategory, setSessionCategory, addRecentSearch } = useBakery();
  
  // Use session category or URL category as fallback
  const category = sessionCategory || searchParams.get("category") || "All";
  
  const handleCategoryChange = (newCategory) => {
    setSessionCategory(newCategory);
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    setShowRecent(value.trim().length > 0);
  };

  const handleSearchSubmit = (query) => {
    if (query && query.trim().length > 0) {
      addRecentSearch(query.trim());
      setSearch(query);
      setShowRecent(false);
    }
  };

  const categories = [
    "All",
    "Breads",
    "Soft Cakes",
    "Cream Cakes",
    "Pastries",
    "Sweets",
   ];

  
  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch?.({ 
        search, 
        category
      });
    }, 400);

    return () => clearTimeout(delay);
  }, [search, category, onSearch]);

  return (
    <div
      style={{
        background: "#fffaf5",
        padding: "2rem",
        borderRadius: "20px",
        marginBottom: "2.5rem",
      }}
    >
      {/* SEARCH WITH SUGGESTIONS */}
      <div style={{ marginBottom: "1.5rem", position: "relative" }}>
        <input
          type="text"
          placeholder="Search breads, cakes..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={() => setShowRecent(true)}
          onBlur={() => setTimeout(() => setShowRecent(false), 200)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchSubmit(search);
            }
          }}
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "0.9rem 1.4rem",
            borderRadius: "30px",
            border: "1px solid #ddd",
            display: "block",
            margin: "0 auto",
          }}
        />

        {/* CLEAR BUTTON */}
        {search && (
          <span
            onClick={() => setSearch("")}
            style={{
              position: "absolute",
              right: "calc(50% - 200px)",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            ×
          </span>
        )}

        {/* SEARCH SUGGESTIONS DROPDOWN */}
        {showRecent && recentSearches.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "420px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderTop: "none",
              borderRadius: "0 0 15px 15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              zIndex: 100,
              maxHeight: "120px",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                padding: "8px 12px",
                fontSize: "12px",
                color: "#666",
                borderBottom: "1px solid #eee",
                fontWeight: "600"
              }}
            >
              Recent Searches
            </div>
            {recentSearches.map((query, index) => (
              <div
                key={index}
                onClick={() => handleSearchSubmit(query)}
                style={{
                  padding: "10px 12px",
                  cursor: "pointer",
                  fontSize: "14px",
                  borderBottom:
                    index < recentSearches.length - 1
                      ? "1px solid #f0f0f0"
                      : "none",
                  transition: "background-color 0.2s ease"
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#f8f9fa")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "white")
                }
              >
                {query}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CATEGORY */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.6rem",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => {
          const active = category === cat;

          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: "25px",
                border: active
                  ? "1px solid #6b4f3b"
                  : "1px solid #e0d6c8",
                background: active ? "#6b4f3b" : "#f3e9dc",
                color: active ? "#fff" : "#6b4f3b",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

       {showRecent && search === "" && recentSearches.length > 0 && (
        <div style={{ marginTop: "1.8rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", color: "#8d6e63" }}>
            Recent searches
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            {recentSearches.map((item, i) => (
              <button
                key={i}
                onClick={() => setSearch(item)}
                style={{
                  padding: "0.4rem 0.9rem",
                  borderRadius: "20px",
                  background: "#f3e9dc",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchFilter;