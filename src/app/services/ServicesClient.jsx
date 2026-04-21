"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { House, Buildings, Package, Car, Warehouse, ShieldCheck, Check, ArrowRight } from "@phosphor-icons/react";

const PageHero = ({ title, subtitle, breadcrumb }) => (
  <section style={{ background: "var(--navy)", padding: "5rem 0 4rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
    <div className="container-custom">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "#D1D5DB", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "#ff5a00", textDecoration: "none", fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: "#9CA3AF" }}>{breadcrumb}</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: "#FFFFFF", margin: "0 0 1.25rem", lineHeight: 1.1 }}>{title}</h1>
      <p style={{ color: "#E5E7EB", fontSize: "1.1rem", maxWidth: 600, lineHeight: 1.7, margin: 0 }}>{subtitle}</p>
    </div>
  </section>
);

const services = [
  {
    icon: House, title: "Home Relocation", color: "icon-blue",
    desc: "Complete household shifting services within Chennai and across Tamil Nadu with professional packing and safe delivery.",
    features: ["Furniture dismantling & reassembly", "Secure multi-layer packing", "Floor & door protection", "Safe transportation", "Unpacking assistance"],
    price: "Starting ₹3,999",
  },
  {
    icon: Buildings, title: "Office Relocation", color: "icon-orange",
    desc: "Efficient corporate moving with minimal downtime. We handle IT equipment, furniture, and sensitive documents with expert care.",
    features: ["IT equipment handling", "Server room relocation", "Minimal business disruption", "Weekend & night moves", "Setup & cable management"],
    price: "Starting ₹7,999",
  },
  {
    icon: Package, title: "Packing Services", color: "icon-green",
    desc: "Expert packing using premium materials — bubble wrap, corrugated boxes, and specialized packaging for fragile and antique items.",
    features: ["High-quality carton boxes", "Bubble wrap & foam packing", "Fragile item special care", "TV & electronics wrapping", "Labeling & inventory list"],
    price: "Starting ₹1,499",
  },
  {
    icon: Car, title: "Vehicle Transport", color: "icon-purple",
    desc: "Safe car and bike transportation across India with enclosed carriers, hydraulic loaders, and real-time GPS tracking.",
    features: ["Door-to-door service", "Enclosed carriers available", "Two-wheeler transport", "Insurance coverage", "Real-time tracking"],
    price: "Starting ₹4,999",
  },
  {
    icon: Warehouse, title: "Storage Services", color: "icon-blue",
    desc: "Secure, climate-controlled warehousing for short-term and long-term storage with 24/7 CCTV monitoring and access control.",
    features: ["Climate controlled rooms", "24/7 CCTV surveillance", "pest-free facility", "Flexible rental periods", "Easy retrieval access"],
    price: "Starting ₹999/month",
  },
  {
    icon: ShieldCheck, title: "Insurance Coverage", color: "icon-orange",
    desc: "Comprehensive transit insurance for all your valuables with full value protection, zero deductible options, and claim assistance.",
    features: ["All-risk transit coverage", "Full replacement value", "Zero deductible plans", "Claim within 48 hours", "3rd party insurance"],
    price: "Starting ₹299",
  },
];

const PricingTable = () => {
  const router = useRouter();
  const plans = [
    {
      name: "Basic Move",
      price: "₹2,999",
      desc: "Perfect for small homes (1 BHK)",
      features: ["Packing materials", "Loading & unloading", "Local transport (up to 15km)", "1 helper"],
      highlight: false,
    },
    {
      name: "Standard Move",
      price: "₹7,499",
      desc: "Ideal for 2-3 BHK homes",
      features: ["Premium packing", "Furniture dismantling", "City-wide transport", "Insurance coverage", "3 helpers", "Unpacking assistance"],
      highlight: true,
    },
    {
      name: "Premium Move",
      price: "₹14,999",
      desc: "Complete service for large homes",
      features: ["White-glove packing", "Full furniture handling", "Intercity transport", "Full insurance", "5 helpers", "Unpacking & setup", "Post-move cleaning"],
      highlight: false,
    },
  ];

  return (
    <section style={{ background: "var(--navy)", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container-custom">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-badge" style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", border: "1px solid rgba(255, 90, 0, 0.2)" }}>💰 Transparent Pricing</div>
          <h2 className="section-title" style={{ color: "#fff" }}>Affordable Pricing</h2>
          <div className="divider" style={{ background: "#ff5a00", margin: "0.75rem auto 1rem" }} />
          <p className="section-subtitle" style={{ color: "#D1D5DB", margin: "0 auto" }}>No hidden charges. What you see is what you pay. All plans include free survey.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal delay-${(i + 1) * 100}`}
              style={{
                background: p.highlight ? "#ff5a00" : "var(--navy-mid)",
                color: p.highlight ? "#000" : "#fff",
                borderRadius: 4, padding: "2rem",
                border: p.highlight ? "none" : "1px solid rgba(255,255,255,0.05)",
                boxShadow: p.highlight ? "0 20px 60px rgba(255, 90, 0, 0.2)" : "none",
                transition: "all 0.3s",
                transform: p.highlight ? "scale(1.04)" : "scale(1)",
              }}
            >
              {p.highlight && <div style={{ background: "var(--navy)", color: "#fff", fontSize: "0.72rem", fontWeight: 700, padding: "4px 12px", borderRadius: 4, display: "inline-block", marginBottom: "0.75rem" }}>MOST POPULAR</div>}
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.25rem" }}>{p.name}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "2rem", marginBottom: "0.25rem", color: p.highlight ? "var(--navy)" : "#ff5a00" }}>{p.price}</div>
              <div style={{ fontSize: "0.82rem", color: p.highlight ? "rgba(0,8,20,0.6)" : "#D1D5DB", marginBottom: "1.5rem" }}>{p.desc}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.875rem", color: p.highlight ? "rgba(0,8,20,0.8)" : "#E5E7EB" }}>
                    <Check size={16} weight="bold" style={{ color: p.highlight ? "var(--navy)" : "#ff5a00", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/get-quote")}
                style={{
                  width: "100%", border: p.highlight ? "2px solid var(--navy)" : "2px solid rgba(255,255,255,0.1)",
                  background: p.highlight ? "var(--navy)" : "transparent",
                  color: "#fff", borderRadius: 4, padding: "12px",
                  fontWeight: 600, cursor: "pointer", fontSize: "0.9rem", transition: "all 0.2s",
                }}
              >
                Get This Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How far in advance should I book?", a: "We recommend booking at least 7-14 days in advance for a smooth experience. However, we also handle last-minute moves with 24-48 hours notice." },
    { q: "Do you provide packing materials?", a: "Yes! We provide high-quality packing materials including carton boxes, bubble wrap, foam rolls, and stretch film. Materials are included in most packages." },
    { q: "Is there insurance for my belongings?", a: "Absolutely. We offer comprehensive transit insurance with all our packages. You can also opt for full replacement value coverage for high-value items." },
    { q: "Can I track my belongings during transit?", a: "Yes. All our vehicles are equipped with GPS tracking. You'll receive a live tracking link so you can monitor your goods in real time." },
    { q: "Do you handle intercity moves?", a: "Yes, we cover all major cities across India including Bangalore, Hyderabad, Mumbai, Delhi, Coimbatore, and Madurai from Chennai." },
    { q: "What payment methods do you accept?", a: "We accept cash, all major credit/debit cards, UPI (GPay, PhonePe, Paytm), and bank transfer. 50% advance at booking, balance on delivery." },
  ];

  return (
    <section className="bg-white py-10 md:py-16 px-4 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-sm text-orange-600 mb-2 font-semibold">❓ FAQ</div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="bg-gray-50 border border-gray-100 rounded-xl p-5 md:p-6 hover:border-orange-600/30 transition-colors"
            >
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                <span className="text-orange-600 mr-2">Q.</span>
                {f.q}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ServicesClient() {
  const router = useRouter();
  return (
    <main>
      <PageHero
        title="Professional Packing & Moving Services in Chennai"
        subtitle="From packing a single room to relocating an entire company — we have a service for every need and budget."
        breadcrumb="Services"
      />

      <section style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "1px solid #F3F4F6" }}>
        <div className="container-custom">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge" style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", border: "1px solid rgba(255, 90, 0, 0.2)" }}>📦 What We Offer</div>
            <h2 className="section-title" style={{ color: "#111827" }}>Pan-India Moving from Chennai</h2>
            <div className="divider" style={{ background: "#ff5a00", margin: "0.75rem auto 1rem" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.75rem" }}>
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`reveal delay-${(i % 3 + 1) * 100}`}
                style={{ background: "#FFFFFF", borderRadius: 4, border: "1px solid #F3F4F6", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div className={`icon-box ${svc.color}`} style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00" }}><svc.icon size={26} weight="duotone" /></div>
                  <span style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", padding: "4px 12px", borderRadius: 4, fontSize: "0.78rem", fontWeight: 600 }}>{svc.price}</span>
                </div>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#111827", margin: 0 }}>{svc.title}</h3>
                <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{svc.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {svc.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "#374151" }}>
                      <Check size={14} weight="bold" style={{ color: "#ff5a00", flexShrink: 0 }} />{f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => router.push("/get-quote")} style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#ff5a00", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", padding: 0 }}>
                  Book This Service <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingTable />
      <FAQ />

      <section style={{ background: "#ff5a00", padding: "4rem 0", textAlign: "center" }}>
        <div className="container-custom">
          <div className="reveal">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.2rem)", color: "var(--navy)", margin: "0 0 1rem" }}>Can't Find What You Need?</h2>
            <p style={{ color: "rgba(0,8,20,0.7)", marginBottom: "2rem", fontWeight: 500 }}>We offer custom packages tailored to your specific requirements. Contact us for a personalized quote.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => router.push("/get-quote")} className="btn-secondary" style={{ background: "var(--navy)", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8, border: "none", padding: "14px 28px", borderRadius: "4px", fontWeight: 600 }}>
                Get Custom Quote <ArrowRight size={16} />
              </button>
              <a href="tel:+918199002004" style={{ background: "rgba(0,8,20,0.1)", color: "var(--navy)", border: "2px solid rgba(0,8,20,0.2)", borderRadius: 4, padding: "14px 28px", fontWeight: 600, textDecoration: "none" }}>
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
