"use client"

import Link from "next/link";

const PageHero = () => (
  <section style={{ background: "var(--navy)", padding: "5rem 0 4rem" }}>
    <div className="container-custom">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "#D1D5DB", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "#ff5a00", textDecoration: "none", fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: "#9CA3AF" }}>Gallery</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: "#FFFFFF", margin: "0 0 1.25rem", lineHeight: 1.1 }}>Our Gallery</h1>
      <p style={{ color: "#E5E7EB", fontSize: "1.1rem", maxWidth: 600, lineHeight: 1.7, margin: 0 }}>
        See our team in action — from careful packing to safe delivery. Every move tells a story.
      </p>
    </div>
  </section>
);

export default function GalleryClient() {
  return (
    <main>
      <PageHero />

      <section style={{ background: "#FFFFFF", padding: "4rem 0 0" }}>
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-poppins">
             Our Work in Chennai
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 leading-relaxed">
              Explore our journey of delivering safety and trust. From careful packing
              of fragile items to seamless intercity transportation, our gallery
              showcases the commitment and precision that defined every move
              we've handled across India.
            </p>
          </div>

          {/* Marquee Iframe Section */}
          <div className="mb-20 -mx-4 md:mx-0 overflow-hidden">
            <iframe 
              src="/gallery-marquee" 
              style={{ 
                width: "100%", 
                height: "480px", 
                border: "none",
                background: "transparent",
                overflow: "hidden" 
              }}
              scrolling="no"
              title="Work Progress Marquee"
            />
          </div>

          <div
            className="reveal stats-grid"
            style={{
              marginTop: "4rem",
              background: "var(--navy)",
              borderRadius: 4,
              padding: "4rem 2rem",
              display: "grid",
              gap: "2.5rem",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <style jsx>{`
              @media (min-width: 768px) {
                div.stats-grid {
                  grid-template-columns: repeat(4, 1fr) !important;
                }
              }
            `}</style>
            {[
              { value: "10,000+", label: "Moves Completed", icon: "✅" },
              { value: "50+", label: "Cities Covered", icon: "🌍" },
              { value: "0", label: "Damage Incidents", icon: "🛡️" },
              { value: "4.9★", label: "Google Rating", icon: "⭐" },
            ].map(({ value, label, icon }) => (
              <div key={label}>
                <div style={{ fontSize: "1.75rem", marginBottom: 4 }}>{icon}</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#ff5a00" }}>{value}</div>
                <div style={{ fontSize: "0.78rem", color: "#D1D5DB", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
