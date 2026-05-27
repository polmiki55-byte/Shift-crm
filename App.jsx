import React from "react";

export default function App() {
  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "#020617",
      color: "white",
      fontFamily: "Arial"
    }}>
      <section style={{
        padding: "80px 24px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "80px"
        }}>
          <h1 style={{fontSize: "32px"}}>ShiftCRM</h1>
          <button style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "14px",
            cursor: "pointer"
          }}>
            קבע פיילוט
          </button>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center"
        }}>
          <div>
            <div style={{
              display: "inline-block",
              background: "rgba(37,99,235,0.15)",
              color: "#93c5fd",
              padding: "8px 16px",
              borderRadius: "999px",
              marginBottom: "20px"
            }}>
              מערכת SaaS לניהול עובדים ותפעול
            </div>

            <h2 style={{
              fontSize: "64px",
              lineHeight: "1.1",
              marginBottom: "24px"
            }}>
              ShiftCRM
              <br />
              ניהול. חיבור. צמיחה.
            </h2>

            <p style={{
              color: "#cbd5e1",
              fontSize: "20px",
              lineHeight: "1.8",
              marginBottom: "32px"
            }}>
              שליטה מלאה על עובדים, נוכחות, שיבוצים, דוחות,
              משימות ותקשורת — בזמן אמת.
            </p>

            <div style={{display: "flex", gap: "16px"}}>
              <button style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "16px 28px",
                borderRadius: "16px",
                cursor: "pointer",
                fontSize: "18px"
              }}>
                התחל פיילוט
              </button>

              <button style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "16px 28px",
                borderRadius: "16px",
                cursor: "pointer",
                fontSize: "18px"
              }}>
                צפו בדמו
              </button>
            </div>
          </div>

          <div style={{
            background: "linear-gradient(135deg,#111827,#0f172a)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "32px",
            padding: "32px",
            boxShadow: "0 20px 60px rgba(37,99,235,0.25)"
          }}>
            <h3 style={{fontSize: "28px", marginBottom: "24px"}}>
              Live Dashboard
            </h3>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px"
            }}>
              {[
                ["42", "משובצים"],
                ["31", "נוכחים"],
                ["4", "מאחרים"],
                ["12", "בקשות"]
              ].map(([num, label]) => (
                <div key={label} style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "24px",
                  borderRadius: "20px"
                }}>
                  <div style={{
                    fontSize: "36px",
                    fontWeight: "bold"
                  }}>
                    {num}
                  </div>
                  <div style={{color: "#cbd5e1"}}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
