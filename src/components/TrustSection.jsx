"use client";

import { ArrowRight, CheckCircle, Shield } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const TrustSection = () => {
  const sectionRef = useScrollReveal();

  const steps = [
    {
      num: "01",
      title: "Request a Quote",
      desc: "Call, WhatsApp, or fill our quick form. Get a free detailed quote within minutes.",
    },
    {
      num: "02",
      title: "Schedule & Plan",
      desc: "Our team surveys your items, plans the packing strategy and schedules move date.",
    },
    {
      num: "03",
      title: "Professional Packing",
      desc: "Trained crew packs everything using high-quality materials, labelled and inventoried.",
    },
    {
      num: "04",
      title: "Safe Delivery",
      desc: "GPS-tracked vehicle delivers your belongings safely. Unpacking support included.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{ background: "#FFFFFF", padding: "5rem 0" }}
      data-testid="trust-section"
    >
      <div className="container-custom">
        {/* Top: CTA banner */}
        <div
          className="reveal"
          style={{
            background: "linear-gradient(135deg, #FF5A00 0%, #CC4800 100%)",
            borderRadius: "20px",
            padding: "3rem 2.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "4rem",
            boxShadow: "0 20px 40px rgba(255, 90, 0, 0.2)",
          }}
        >
          <div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              ⚡ Fast Response · No Hidden Charges
            </div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: "#fff",
                margin: "0 0 0.75rem",
              }}
            >
              Ready to Move? Get Your Free Quote Today!
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {["No obligation", "Same-day response", "Best price guarantee"].map((t) => (
                <span
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.85rem",
                  }}
                >
                  <CheckCircle size={16} weight="fill" style={{ color: "#FFFFFF" }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="tel:+918199002004"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#000000",
                color: "#ff5a00",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
                transition: "all 0.3s",
                whiteSpace: "nowrap",
                border: "2px solid #000000",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#000"; e.currentTarget.style.color = "#ff5a00"; }}
            >
              📞 Call Now
            </a>
            <a
              href="#quote-form"
              onClick={(e) => { e.preventDefault(); document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
                border: "2px solid rgba(255,255,255,0.5)",
                transition: "all 0.3s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              Get Quote <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </div>

        {/* How it works */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-badge" style={{ margin: "0 auto 1rem", justifyContent: "center" }}>
            <Shield size={14} weight="fill" />
            How It Works
          </div>
          <h2 className="section-title">Simple 4-Step Moving Process</h2>
          <div className="divider" style={{ margin: "0.75rem auto 0" }} />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`reveal delay-${(i + 1) * 100}`}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "2rem 1.5rem",
                border: "1px solid #F3F4F6",
                textAlign: "center",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.borderColor = "var(--primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = "#F3F4F6"; }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--primary)",
                  color: "#fff",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                  boxShadow: "0 0 0 8px rgba(245, 158, 11, 0.15)",
                }}
              >
                {s.num}
              </div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "1rem", color: "var(--text-dark)", margin: "0 0 0.5rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
