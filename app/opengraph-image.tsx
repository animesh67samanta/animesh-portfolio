import { ImageResponse } from "next/og";

export const alt = "Animesh Samanta — Laravel & PHP Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#090b10",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(6, 182, 212, 0.22) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(99, 102, 241, 0.2) 0%, transparent 45%)",
          color: "#f8fafc",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "2px solid rgba(6, 182, 212, 0.3)",
        }}
      >
        {/* Top Header Tag */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(6, 182, 212, 0.4)",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#22d3ee",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#22d3ee",
                textTransform: "uppercase",
              }}
            >
              Production Portfolio
            </span>
          </div>

          <span
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              fontFamily: "monospace",
            }}
          >
            animeshsamanta.is-a.dev
          </span>
        </div>

        {/* Center Name and Titles */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
          <h1
            style={{
              fontSize: "68px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Animesh Samanta
          </h1>
          <div
            style={{
              fontSize: "34px",
              fontWeight: 700,
              color: "#38bdf8",
              letterSpacing: "-0.01em",
            }}
          >
            Laravel & PHP Developer
          </div>
          <p
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              maxWidth: "960px",
              lineHeight: 1.4,
              marginTop: "8px",
            }}
          >
            Architecting scalable REST APIs, database query optimization, municipal tax automation platforms, and author of DevGit CLI.
          </p>
        </div>

        {/* Bottom Tech Pills and Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(148, 163, 184, 0.15)",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["Laravel", "PHP 8+", "REST APIs", "MySQL & Redis", "Clean Architecture", "DevGit CLI"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 18px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(30, 41, 59, 0.8)",
                  border: "1px solid rgba(148, 163, 184, 0.25)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#e2e8f0",
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "17px",
              color: "#38bdf8",
              fontWeight: 600,
            }}
          >
            Kolkata, India
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
