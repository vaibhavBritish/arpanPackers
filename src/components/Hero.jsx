"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, ArrowRight, CheckCircle, Star } from "@phosphor-icons/react";

export const Hero = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const checks = ["Licensed & Insured", "GPS Tracked Vehicles", "No Hidden Charges"];

  return (
    <section
      id="home"
      className="hero-section"
      data-testid="hero-section"
      style={{ padding: "3.5rem 0 4rem" }}
    >
      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Two-column: Text LEFT | GIF RIGHT ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >

          {/* ════ LEFT: Text Content ════ */}
          <div
            className="flex flex-col items-center text-center md:items-start md:text-left"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateY(20px)",
              transition: "opacity 0.85s ease, transform 0.85s ease",
            }}
          >
            {/* Top badge */}
            <div className="hero-badge" style={{ marginBottom: "1.25rem", fontSize: "0.78rem" }}>
              <Star size={14} weight="fill" />
              &nbsp;#1 Packers &amp; Movers in Chennai · 10,000+ Happy Customers
            </div>

            {/* Heading */}
            <h1 className="hero-title" style={{ marginBottom: "1.1rem" }}>
              Safe &amp; Reliable<br />
              <span className="gradient-text">Moving Services</span><br />
              in Chennai
            </h1>

            {/* Sub-text */}
            <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: 480 }}>
              Stress-free relocation for homes, offices &amp; vehicles. Trusted by
              thousands of families across Tamil Nadu with 15+ years of excellence.
            </p>

            {/* Check list */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginBottom: "1.75rem" }}>
              {checks.map((c) => (
                <span key={c} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.875rem", color: "#374151", fontWeight: 500 }}>
                  <CheckCircle size={18} weight="fill" style={{ color: "#16a34a" }} />
                  {c}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginBottom: "2.25rem" }}>
              <button
                onClick={() => router.push("/get-quote")}
                className="btn-primary"
                data-testid="hero-get-quote-btn"
                style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
              >
                Get Free Quote <ArrowRight size={17} weight="bold" />
              </button>
              <a
                href="tel:+919876543210"
                className="btn-secondary"
                data-testid="hero-call-btn"
                style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
              >
                <Phone size={17} weight="fill" />
                Call Now
              </a>
            </div>

            {/* Stat pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
              {[
                { value: "15+",   label: "Years of Experience" },
                { value: "10K+",  label: "Happy Customers" },
                { value: "98%",   label: "Satisfaction Rate" },
                { value: "50+",   label: "Cities Covered" },
              ].map(({ value, label }) => (
                <div key={label} className="hero-stat-pill">
                  <div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#1D4ED8", lineHeight: 1 }}>
                      {value}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#6b7280", marginTop: 2 }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT: Animated Illustration ════ */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 0.85s ease 0.2s, transform 0.85s ease 0.2s",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Decorative ring behind image */}
            <div
              style={{
                position: "absolute",
                width: "90%",
                height: "90%",
                top: "5%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)",
              }}
            />

            {/* Main illustration */}
            <div
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(29,78,216,0.18)",
                background: "#fff",
                width: "100%",
                animation: "float 5s ease-in-out infinite",
              }}
            >
              <img
                src="/hero-truck.png"
                alt="Professional movers loading packages into a truck"
                style={{ width: "100%", height: "auto", display: "block" }}
                data-testid="hero-image"
              />

              {/* On-Time badge */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "#fff",
                  borderRadius: 12,
                  padding: "8px 14px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  animation: "float 3.5s ease-in-out infinite 0.5s",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>✅</span>
                <div>
                  <div style={{ fontSize: "0.65rem", color: "#6b7280" }}>Delivery</div>
                  <div style={{ fontWeight: 700, color: "#16a34a", fontSize: "0.82rem", fontFamily: "Poppins" }}>On Time</div>
                </div>
              </div>

              {/* Insurance badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  background: "#1D4ED8",
                  borderRadius: 12,
                  padding: "8px 14px",
                  boxShadow: "0 4px 16px rgba(29,78,216,0.3)",
                  animation: "float 4s ease-in-out infinite 1s",
                }}
              >
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.75)" }}>Every move is</div>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.82rem", fontFamily: "Poppins" }}>🛡️ Fully Insured</div>
              </div>
            </div>

            {/* Reviews row below image */}
            <div
              style={{
                marginTop: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "#fff",
                borderRadius: 14,
                padding: "12px 20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid #E5E7EB",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" style={{ color: "#F59E0B" }} />
                ))}
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0F172A" }}>4.9/5</div>
              <div style={{ width: 1, height: 20, background: "#E5E7EB" }} />
              <div style={{ fontSize: "0.82rem", color: "#6b7280" }}>2,400+ Reviews on Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
