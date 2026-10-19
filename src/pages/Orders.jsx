import { Link } from "react-router-dom";
import { useBakery } from "../context/BakeryContext";

function Orders() {
  const { orders } = useBakery();

  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
      
      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          color: "#2c1e1e",
          marginBottom: "3rem",
          fontFamily: "Georgia, serif",
        }}
      >
        Your Orders
      </h1>

      {/* EMPTY STATE */}
      {orders.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <h3 style={{ color: "#5a3f2d" }}>No orders yet</h3>

          <Link
            to="/"
            style={{
              color: "#6b4f3b",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Start shopping →
          </Link>
        </div>
      ) : (
        <div>
          {[...orders].reverse().map((order) => (
            <div
              key={order.id}
              style={{
                background: "#fffaf5",
                padding: "2rem",
                borderRadius: "16px",
                border: "1px solid rgba(198,156,109,0.15)",
                marginBottom: "1.5rem",
              }}
            >
              {/* HEADER */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <h3 style={{ margin: 0, color: "#2c1e1e" }}>
                    Order #{String(order.id).slice(-6)}
                  </h3>

                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#8d6e63" }}>
                    {order.date}
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.4rem",
                      fontWeight: "600",
                      color: "#6b4f3b",
                    }}
                  >
                    {order.total.toFixed(0)} ETB
                  </p>
                </div>
              </div>

              {/* ITEMS */}
              <div
                style={{
                  display: "flex",
                  gap: "0.8rem",
                  flexWrap: "wrap",
                  marginTop: "1rem",
                }}
              >
                {order.items?.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: "0.8rem 1rem",
                      background: "#f3e9dc",
                      borderRadius: "10px",
                      minWidth: "160px",
                    }}
                  >
                    <div style={{ fontWeight: "500", color: "#2c1e1e" }}>
                      {item.name}
                    </div>

                    <div style={{ fontSize: "0.85rem", color: "#6b4f3b" }}>
                      Qty: {item.quantity}
                    </div>

                    <div style={{ fontSize: "0.9rem" }}>
                      {(item.price * item.quantity).toFixed(0)} ETB
                    </div>
                  </div>
                ))}
              </div>

              {/* DELIVERY INFO */}
              <div
                style={{
                  marginTop: "1.2rem",
                  fontSize: "0.85rem",
                  color: "#8d6e63",
                }}
              >
                Delivered to: {order.customer?.name}, {order.customer?.address}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;