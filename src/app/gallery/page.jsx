"use client";

import { useState } from "react";
import Link from "next/link";

const PageHero = () => (
  <section style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", padding: "4rem 0 3rem", borderBottom: "1px solid #DBEAFE" }}>
    <div className="container-custom">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "#6b7280", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "#1D4ED8", textDecoration: "none" }}>Home</Link>
        <span>›</span><span>Gallery</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0F172A", margin: "0 0 1rem" }}>Our Gallery</h1>
      <p style={{ color: "#6b7280", fontSize: "1.05rem", maxWidth: 560, lineHeight: 1.7, margin: 0 }}>
        See our team in action — from careful packing to safe delivery. Every move tells a story.
      </p>
    </div>
  </section>
);

const galleryItems = [
  { id: 1, category: "Packing", title: "Kitchen Packing", desc: "Fragile items carefully wrapped", emoji: "📦", bg: "linear-gradient(135deg, #DBEAFE, #EFF6FF)", icon: "🍳" },
  { id: 2, category: "Loading", title: "Truck Loading", desc: "Our team loads with care", emoji: "🚚", bg: "linear-gradient(135deg, #FFEDD5, #FEF3C7)", icon: "🚛" },
  { id: 3, category: "Office", title: "Office Relocation", desc: "Minimal downtime, maximum care", emoji: "🏢", bg: "linear-gradient(135deg, #DCFCE7, #D1FAE5)", icon: "💼" },
  { id: 4, category: "Vehicle", title: "Car Transport", desc: "Safe enclosed transportation", emoji: "🚗", bg: "linear-gradient(135deg, #F3E8FF, #EDE9FE)", icon: "🚙" },
  { id: 5, category: "Packing", title: "Furniture Wrapping", desc: "Premium stretch film protection", emoji: "🛋️", bg: "linear-gradient(135deg, #DBEAFE, #EFF6FF)", icon: "🪑" },
  { id: 6, category: "Loading", title: "Intercity Move", desc: "Long-haul GPS tracked delivery", emoji: "🗺️", bg: "linear-gradient(135deg, #FEF3C7, #FFEDD5)", icon: "📍" },
  { id: 7, category: "Office", title: "Server Room Move", desc: "IT equipment handled with care", emoji: "💻", bg: "linear-gradient(135deg, #DCFCE7, #D1FAE5)", icon: "🖥️" },
  { id: 8, category: "Packing", title: "Wardrobe Packing", desc: "Clothes packed dust-free", emoji: "👕", bg: "linear-gradient(135deg, #F3E8FF, #EDE9FE)", icon: "👗" },
  { id: 9, category: "Vehicle", title: "Bike Transport", desc: "Two-wheeler special handling", emoji: "🏍️", bg: "linear-gradient(135deg, #DBEAFE, #EFF6FF)", icon: "🛵" },
  { id: 10, category: "Loading", title: "Warehouse Storage", desc: "Climate-controlled facility", emoji: "🏭", bg: "linear-gradient(135deg, #FFEDD5, #FEF3C7)", icon: "🏗️" },
  { id: 11, category: "Office", title: "Workstation Setup", desc: "Post-move setup & organization", emoji: "⚙️", bg: "linear-gradient(135deg, #DCFCE7, #D1FAE5)", icon: "🔧" },
  { id: 12, category: "Packing", title: "Antique Item Care", desc: "Special packaging for valuables", emoji: "🏺", bg: "linear-gradient(135deg, #F3E8FF, #EDE9FE)", icon: "🎨" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Packing", "Loading", "Office", "Vehicle"];

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeFilter);

  return (
    <main>
      <PageHero />

      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container-custom">
          {/* Filter tabs */}
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginBottom: "3rem" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "8px 24px",
                  borderRadius: 99,
                  border: "2px solid",
                  borderColor: activeFilter === cat ? "#1D4ED8" : "#E5E7EB",
                  background: activeFilter === cat ? "#1D4ED8" : "#fff",
                  color: activeFilter === cat ? "#fff" : "#6b7280",
                  fontWeight: 600, fontSize: "0.875rem", cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className={`reveal delay-${(i % 4 + 1) * 100}`}
                style={{
                  borderRadius: 16, overflow: "hidden", border: "1px solid #E5E7EB",
                  transition: "all 0.3s", cursor: "pointer",
                }}
              >
                {/* Illustration panel */}
                <div
                  style={{
                    height: 180,
                    background: item.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "4.5rem",
                    position: "relative",
                  }}
                >
                  {item.icon}
                  <span
                    style={{
                      position: "absolute",
                      top: 12, left: 12,
                      background: "rgba(255,255,255,0.9)",
                      borderRadius: 99,
                      padding: "3px 10px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#374151",
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Info */}
                <div style={{ padding: "1.25rem", background: "#fff" }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, color: "#0F172A", marginBottom: 4 }}>
                    {item.emoji} {item.title}
                  </div>
                  <p style={{ color: "#6b7280", fontSize: "0.82rem", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats below gallery */}
          <div
            className="reveal"
            style={{
              marginTop: "4rem",
              background: "#F8FAFC",
              borderRadius: 20,
              padding: "2.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "1rem",
              textAlign: "center",
              border: "1px solid #E5E7EB",
            }}
          >
            {[
              { value: "10,000+", label: "Moves Completed", icon: "✅" },
              { value: "50+", label: "Cities Covered", icon: "🌍" },
              { value: "0", label: "Damage Incidents", icon: "🛡️" },
              { value: "4.9★", label: "Google Rating", icon: "⭐" },
            ].map(({ value, label, icon }) => (
              <div key={label}>
                <div style={{ fontSize: "1.75rem", marginBottom: 4 }}>{icon}</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#1D4ED8" }}>{value}</div>
                <div style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
