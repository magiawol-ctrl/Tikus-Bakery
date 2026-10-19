function OurStory() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#2c1e1e",
          fontFamily: "Georgia, serif",
          fontSize: "36px",
        }}
      >
        Our Story
      </h1>

      <div style={{ lineHeight: "1.8", color: "#333" }}>
        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          Welcome to Tikus Bakery, where tradition meets passion in every bite. 
          Our journey began in the heart of Addis Ababa, with a simple dream to bring 
          the finest baked goods to our community.
        </p>

        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          Founded in 2010, Tikus Bakery started as a small family-run establishment 
          with just one oven and a handful of cherished family recipes. Today, we've 
          grown into a beloved local institution, but our commitment to quality and 
          authenticity remains unchanged.
        </p>

        <div style={{ margin: "40px 0", textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/600x400/8b4513/ffffff?text=Tikus+Bakery+Story"
            alt="Tikus Bakery History"
            style={{
              maxWidth: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        <h2
          style={{
            color: "#8b4513",
            marginBottom: "20px",
            fontFamily: "Georgia, serif",
          }}
        >
          Our Philosophy
        </h2>

        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          At Tikus Bakery, we believe that great baking is both an art and a science. 
          We use only the finest ingredients sourced from local Ethiopian farmers and 
          international suppliers, ensuring that every product meets our exacting standards.
        </p>

        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          Our master bakers combine time-honored techniques with innovative approaches, 
          creating unique flavors that celebrate Ethiopia's rich culinary heritage while 
          embracing global baking traditions.
        </p>

        <h2
          style={{
            color: "#8b4513",
            marginBottom: "20px",
            fontFamily: "Georgia, serif",
          }}
        >
          Community Impact
        </h2>

        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          We're more than just a bakery – we're proud members of the Addis Ababa community. 
          We partner with local schools, support charitable initiatives, and provide training 
          opportunities for aspiring bakers. Every purchase you make helps us continue this 
          important work.
        </p>

        <div
          style={{
            backgroundColor: "#f8f8f8",
            padding: "30px",
            borderRadius: "10px",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#8b4513",
              marginBottom: "15px",
              fontFamily: "Georgia, serif",
            }}
          >
            Visit Us Today
          </h3>
          <p style={{ fontSize: "16px", marginBottom: "10px" }}>
            Experience the warmth and aroma of freshly baked goodness
          </p>
          <p style={{ fontSize: "16px", fontWeight: "600" }}>
            Open Daily: 6:00 AM - 9:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
