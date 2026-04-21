"use client";

import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { CheckCircle, Phone, ShieldCheck } from "@phosphor-icons/react";

const PageHero = () => (
  <section style={{ background: "var(--navy)", padding: "5rem 0 4rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
    <div className="container-custom">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "#D1D5DB", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "#ff5a00", textDecoration: "none", fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: "#9CA3AF" }}>Get Quote</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: "#FFFFFF", margin: "0 0 1.25rem", lineHeight: 1.1 }}>
       Get Your Free Moving Quote in Chennai
      </h1>
      <p style={{ color: "#E5E7EB", fontSize: "1.1rem", maxWidth: 520, lineHeight: 1.7, margin: "0 0 1.5rem" }}>
        Fill in the form and receive a detailed, no-obligation quote within 2 hours.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
        {["Free quote, no obligation", "Response within 2 hours", "Best price guarantee"].map((b) => (
          <span key={b} style={{ display: "flex", alignItems: "center", gap: 6, color: "#D1D5DB", fontSize: "0.875rem" }}>
            <CheckCircle size={16} weight="fill" style={{ color: "#ff5a00" }} />{b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <div style={{ background: "#FFFFFF", padding: "1rem 0", borderBottom: "1px solid #F3F4F6" }}>
    <div className="container-custom" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", alignItems: "center" }}>
      {[
        { icon: "🛡️", label: "ISO 9001 Certified" },
        { icon: "⭐", label: "4.9/5 Google Rating" },
        { icon: "📞", label: "24/7 Support" },
        { icon: "✅", label: "0 Damage Claims" },
        { icon: "🔒", label: "Fully Insured Moves" },
      ].map((b) => (
        <span key={b.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem", color: "#6B7280", whiteSpace: "nowrap" }}>
          {b.icon} {b.label}
        </span>
      ))}
    </div>
  </div>
);

const SideInfo = () => (
  <div>
    <div style={{ background: "#FFFFFF", borderRadius: 4, padding: "1.75rem", border: "1px solid #F3F4F6", marginBottom: "1.25rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}>
      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111827", marginBottom: "1.25rem" }}>
        Why Request a Quote?
      </div>
      {[
        "100% free, no hidden costs",
        "Personalized pricing for your move",
        "Expert survey at your doorstep",
        "Flexible date options",
        "Payment after delivery",
      ].map((item) => (
        <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.65rem", fontSize: "0.875rem", color: "#4B5563" }}>
          <CheckCircle size={16} weight="fill" style={{ color: "#ff5a00", flexShrink: 0 }} />{item}
        </div>
      ))}
    </div>

    <div style={{ background: "#F9FAFB", borderRadius: 4, padding: "1.75rem", border: "1px solid #F3F4F6" }}>
      <ShieldCheck size={32} weight="fill" color="#ff5a00" style={{ marginBottom: "0.75rem", opacity: 0.8 }} />
      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111827", marginBottom: "0.5rem" }}>
        Prefer to talk?
      </div>
      <p style={{ color: "#4B5563", fontSize: "0.85rem", marginBottom: "1rem", lineHeight: 1.65 }}>
        Our moving experts are available 24/7 to answer questions and help plan your move.
      </p>
      <a href="tel:+918199002004" style={{ display: "flex", alignItems: "center", gap: 8, background: "#ff5a00", color: "#FFFFFF", padding: "12px 20px", borderRadius: 4, textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", transition: "background 0.2s" }}>
        <Phone size={18} weight="fill" />
        +91 81990 02004
      </a>
    </div>

    <div style={{ background: "#FFFFFF", borderRadius: 4, padding: "1.75rem", border: "1px solid #F3F4F6", marginTop: "1.25rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}>
      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111827", marginBottom: "1.25rem" }}>What Happens Next?</div>
      {[
        { step: "1", label: "Submit your details", status: "done" },
        { step: "2", label: "Our team calls within 2 hours", status: "next" },
        { step: "3", label: "Free survey & custom quote", status: "pending" },
        { step: "4", label: "Book your move date", status: "pending" },
      ].map((s) => (
        <div key={s.step} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
          <div style={{ width: 28, height: 28, borderRadius: 4, background: s.status === "done" ? "rgba(255, 90, 0, 0.1)" : s.status === "next" ? "#ff5a00" : "#F3F4F6", color: s.status === "done" ? "#ff5a00" : s.status === "next" ? "#FFFFFF" : "#9CA3AF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", fontFamily: "Poppins", flexShrink: 0, border: s.status === "done" ? "1px solid #ff5a00" : "none" }}>
            {s.step}
          </div>
          <div style={{ fontSize: "0.85rem", color: s.status === "pending" ? "#9CA3AF" : "#374151", fontWeight: s.status !== "pending" ? 500 : 400 }}>{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function QuoteClient() {
  return (
    <main>
      <PageHero />
      <TrustBar />

      <section style={{ background: "#FFFFFF", padding: "4rem 0" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "2.5rem", alignItems: "flex-start" }} className="lg:grid-cols-2">
            <QuoteForm />
            <div style={{ position: "sticky", top: "6rem" }}>
              <SideInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
