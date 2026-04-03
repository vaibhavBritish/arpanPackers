"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, ArrowRight } from "@phosphor-icons/react";

const PageHero = () => (
  <section style={{ background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)", padding: "4rem 0 3rem", borderBottom: "1px solid #DBEAFE" }}>
    <div className="container-custom">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "#6b7280", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "#1D4ED8", textDecoration: "none" }}>Home</Link>
        <span>›</span><span>Testimonials</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0F172A", margin: "0 0 1rem" }}>Customer Reviews</h1>
      <p style={{ color: "#6b7280", fontSize: "1.05rem", maxWidth: 560, lineHeight: 1.7, margin: 0 }}>
        Over 2,400 verified Google reviews. Read what our customers say about their moving experience with Arpan Packers.
      </p>
    </div>
  </section>
);

const RatingBar = ({ label, count, total, color }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
    <div style={{ fontSize: "0.82rem", color: "#374151", width: 40, fontWeight: 500 }}>{label}</div>
    <div style={{ flex: 1, height: 8, background: "#E5E7EB", borderRadius: 99 }}>
      <div style={{ width: `${(count / total) * 100}%`, height: "100%", background: color, borderRadius: 99, transition: "width 1s ease" }} />
    </div>
    <div style={{ fontSize: "0.78rem", color: "#6b7280", width: 36, textAlign: "right" }}>{count}</div>
  </div>
);

const allTestimonials = [
  { name: "Priya Sharma", loc: "T Nagar → Velachery", rating: 5, service: "Home", date: "Jan 2026", color: "#1D4ED8", text: "Outstanding service from start to finish! The team arrived on time, packed everything professionally and delivered safely. Highly recommend Arpan Packers to anyone." },
  { name: "Rajesh Kumar", loc: "Office – Anna Nagar", rating: 5, service: "Office", date: "Dec 2025", color: "#EA580C", text: "We moved our entire office over one weekend with literally zero downtime. The team was organized, fast, and even helped set up the workstations at the new location." },
  { name: "Lakshmi V.", loc: "Adyar → Bangalore", rating: 5, service: "Intercity", date: "Jan 2026", color: "#16a34a", text: "Moved from Chennai to Bangalore and I was worried about my antiques. They wrapped each piece individually and everything arrived perfect. GPS tracking gave me peace of mind throughout." },
  { name: "Suresh Menon", loc: "Mylapore → Tambaram", rating: 5, service: "Home", date: "Nov 2025", color: "#9333ea", text: "Best packing I've ever seen! They wrapped my TV and glass items so carefully. The final bill matched the quote exactly — no surprise charges. Will definitely use again." },
  { name: "Ananya Reddy", loc: "Porur → OMR", rating: 5, service: "Home", date: "Feb 2026", color: "#0891b2", text: "Moved from Porur to OMR with a family of 4. The team handled 3 years of accumulated stuff in one day. Furniture was reassembled perfectly. Top notch!" },
  { name: "Vikram Nair", loc: "Chennai → Hyderabad", rating: 4, service: "Intercity", date: "Dec 2025", color: "#1D4ED8", text: "Good experience overall. Minor delay due to traffic but they kept me updated throughout. Everything arrived safe. Would recommend for intercity moves." },
  { name: "Meena S.", loc: "Velachery → Adyar", rating: 5, service: "Home", date: "Jan 2026", color: "#EA580C", text: "Quick, efficient, and very professional. The price was competitive and there were absolutely no hidden charges. Crew was polite and careful with my belongings." },
  { name: "Gopal Krishna", loc: "Guindy Office", rating: 5, service: "Office", date: "Nov 2025", color: "#16a34a", text: "Relocated our startup's office from Guindy to Perungudi. Server racks, 40 workstations, all handled flawlessly. IT setup was done within hours of arrival." },
  { name: "Deepa T.", loc: "Anna Nagar → Coimbatore", rating: 5, service: "Intercity", date: "Feb 2026", color: "#9333ea", text: "Interstate move done perfectly! They did a free survey, gave an accurate quote, and stuck to it. My bike was transported on a separate carrier and arrived spotless." },
];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("All");
  const router = useRouter();
  const filters = ["All", "Home", "Office", "Intercity"];
  const filtered = filter === "All" ? allTestimonials : allTestimonials.filter((t) => t.service === filter);

  return (
    <main>
      <PageHero />

      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container-custom">
          {/* Rating summary */}
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "3rem",
              background: "#F8FAFC",
              borderRadius: 20,
              padding: "2.5rem",
              border: "1px solid #E5E7EB",
              marginBottom: "3.5rem",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: "5rem", color: "#1D4ED8", lineHeight: 1 }}>4.9</div>
              <div style={{ display: "flex", gap: 3, justifyContent: "center", marginBottom: 6 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={20} weight="fill" style={{ color: "#F59E0B" }} />)}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#6b7280" }}>Based on 2,400+ Reviews</div>
              <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginTop: 4 }}>Google · Justdial · Sulekha</div>
            </div>
            <div>
              <RatingBar label="5 ★" count={2100} total={2400} color="#F59E0B" />
              <RatingBar label="4 ★" count={220} total={2400} color="#84cc16" />
              <RatingBar label="3 ★" count={60} total={2400} color="#94a3b8" />
              <RatingBar label="2 ★" count={15} total={2400} color="#f87171" />
              <RatingBar label="1 ★" count={5} total={2400} color="#ef4444" />
            </div>
          </div>

          {/* Filters */}
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", justifyContent: "center", marginBottom: "2.5rem" }}>
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding: "8px 22px", borderRadius: 99, border: "2px solid", borderColor: filter === f ? "#1D4ED8" : "#E5E7EB", background: filter === f ? "#1D4ED8" : "#fff", color: filter === f ? "#fff" : "#6b7280", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", transition: "all 0.2s" }}>
                {f} Moves
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {filtered.map((t, i) => (
              <div key={t.name + i} className={`testimonial-card reveal delay-${(i % 3 + 1) * 100}`}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} weight="fill" style={{ color: "#F59E0B" }} />)}
                  </div>
                  <span style={{ background: "#EFF6FF", color: "#1D4ED8", padding: "3px 10px", borderRadius: 99, fontSize: "0.7rem", fontWeight: 600 }}>{t.service}</span>
                </div>
                <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.7, fontStyle: "italic", margin: "0.5rem 0 0" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", borderTop: "1px solid #F1F5F9", paddingTop: "0.75rem", marginTop: "auto" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "Poppins", flexShrink: 0 }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#0F172A", fontSize: "0.88rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>{t.loc} · {t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal" style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <p style={{ color: "#6b7280", marginBottom: "1.25rem" }}>Ready to add your own success story?</p>
            <button onClick={() => router.push("/get-quote")} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              Book Your Move Today <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
