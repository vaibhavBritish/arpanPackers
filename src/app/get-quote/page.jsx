"use client";

import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { CheckCircle, Phone, ShieldCheck } from "@phosphor-icons/react";

const PageHero = () => (
  <section style={{ background: "linear-gradient(135deg, #1D4ED8, #1e40af)", padding: "4rem 0 3rem" }}>
    <div className="container-custom">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "#93c5fd", textDecoration: "none" }}>Home</Link>
        <span>›</span><span>Get Quote</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", color: "#fff", margin: "0 0 0.75rem" }}>
        Get a Free Moving Quote
      </h1>
      <p style={{ color: "#bfdbfe", fontSize: "1rem", maxWidth: 520, lineHeight: 1.7, margin: "0 0 1.5rem" }}>
        Fill in the form and receive a detailed, no-obligation quote within 2 hours.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
        {["Free quote, no obligation", "Response within 2 hours", "Best price guarantee"].map((b) => (
          <span key={b} style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.9)", fontSize: "0.875rem" }}>
            <CheckCircle size={16} weight="fill" style={{ color: "#4ade80" }} />{b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <div style={{ background: "#0F172A", padding: "1rem 0" }}>
    <div className="container-custom" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", alignItems: "center" }}>
      {[
        { icon: "🛡️", label: "ISO 9001 Certified" },
        { icon: "⭐", label: "4.9/5 Google Rating" },
        { icon: "📞", label: "24/7 Support" },
        { icon: "✅", label: "0 Damage Claims" },
        { icon: "🔒", label: "Fully Insured Moves" },
      ].map((b) => (
        <span key={b.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem", color: "#94a3b8", whiteSpace: "nowrap" }}>
          {b.icon} {b.label}
        </span>
      ))}
    </div>
  </div>
);

const SideInfo = () => (
  <div>
    {/* Why choose us */}
    <div style={{ background: "#F8FAFC", borderRadius: 16, padding: "1.75rem", border: "1px solid #E5E7EB", marginBottom: "1.25rem" }}>
      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0F172A", marginBottom: "1.25rem" }}>
        Why Request a Quote?
      </div>
      {[
        "100% free, no hidden costs",
        "Personalized pricing for your move",
        "Expert survey at your doorstep",
        "Flexible date options",
        "Payment after delivery",
      ].map((item) => (
        <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.65rem", fontSize: "0.875rem", color: "#374151" }}>
          <CheckCircle size={16} weight="fill" style={{ color: "#16a34a", flexShrink: 0 }} />{item}
        </div>
      ))}
    </div>

    {/* Contact card */}
    <div style={{ background: "#1D4ED8", borderRadius: 16, padding: "1.75rem" }}>
      <ShieldCheck size={32} weight="fill" color="white" style={{ marginBottom: "0.75rem", opacity: 0.8 }} />
      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "0.5rem" }}>
        Prefer to talk?
      </div>
      <p style={{ color: "#bfdbfe", fontSize: "0.85rem", marginBottom: "1rem", lineHeight: 1.65 }}>
        Our moving experts are available 24/7 to answer questions and help plan your move.
      </p>
      <a href="tel:+919876543210" style={{ display: "flex", alignItems: "center", gap: 8, background: "#EA580C", color: "#fff", padding: "12px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", transition: "background 0.2s" }}>
        <Phone size={18} weight="fill" />
        +91 81990 02004
      </a>
    </div>

    {/* Process */}
    <div style={{ background: "#fff", borderRadius: 16, padding: "1.75rem", border: "1px solid #E5E7EB", marginTop: "1.25rem" }}>
      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0F172A", marginBottom: "1.25rem" }}>What Happens Next?</div>
      {[
        { step: "1", label: "Submit your details", status: "done" },
        { step: "2", label: "Our team calls within 2 hours", status: "next" },
        { step: "3", label: "Free survey & custom quote", status: "pending" },
        { step: "4", label: "Book your move date", status: "pending" },
      ].map((s) => (
        <div key={s.step} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: s.status === "done" ? "#DCFCE7" : s.status === "next" ? "#DBEAFE" : "#F1F5F9", color: s.status === "done" ? "#16a34a" : s.status === "next" ? "#1D4ED8" : "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", fontFamily: "Poppins", flexShrink: 0 }}>
            {s.step}
          </div>
          <div style={{ fontSize: "0.85rem", color: s.status === "pending" ? "#94a3b8" : "#374151", fontWeight: s.status !== "pending" ? 500 : 400 }}>{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function QuotePage() {
  return (
    <main>
      <PageHero />
      <TrustBar />

      <section style={{ background: "#EFF6FF", padding: "4rem 0" }}>
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
