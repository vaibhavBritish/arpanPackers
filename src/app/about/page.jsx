"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Medal, UsersThree, ShieldCheck, Globe, ArrowRight } from "@phosphor-icons/react";

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

const Story = () => (
  <section className="bg-white py-10 md:py-16 px-4">
    <div className="max-w-7xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left Content */}
        <div>
          <div className="text-sm text-primary mb-2">📖 Our Story</div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            15 Years of Trusted Moving
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Arpan India Packers & Movers was founded in 2010 by Mr. Deepak Kumar with a single truck and a big dream —
            to make moving a stress-free experience for the people of Chennai.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            What started as a small team of 3 has grown into Chennai's most trusted relocation company
            with a fleet of 50+ vehicles, 200+ trained professionals, and 10,000+ successful moves.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Our philosophy is simple: treat every customer's belongings as if they were our own.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {["ISO 9001 Certified", "IBA Approved", "Google Guaranteed", "5-Star Rated"].map((b) => (
              <span
                key={b}
                className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold"
              >
                ✓ {b}
              </span>
            ))}
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {[
            { value: "2010", label: "Founded", icon: "🏢", bg: "bg-gray-50", color: "text-primary" },
            { value: "50+", label: "Vehicles", icon: "🚚", bg: "bg-gray-50", color: "text-orange-600" },
            { value: "200+", label: "Team Members", icon: "👷", bg: "bg-gray-50", color: "text-green-600" },
            { value: "10K+", label: "Happy Moves", icon: "😊", bg: "bg-gray-50", color: "text-purple-600" },
          ].map((s) => (
            <div
              key={s.label}
              className={`${s.bg} border border-gray-100 rounded-xl p-4 md:p-6 text-center`}
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className={`text-xl md:text-2xl font-bold ${s.color}`}>
                {s.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

const Values = () => (
  <section style={{ background: "var(--navy)", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
    <div className="container-custom">
      <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="section-badge" style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", border: "1px solid rgba(255, 90, 0, 0.2)" }}>💡 Our Values</div>
        <h2 className="section-title" style={{ color: "#fff" }}>What Drives Us</h2>
        <div className="divider" style={{ background: "#ff5a00", margin: "0.75rem auto 0" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
        {[
          { icon: ShieldCheck, title: "Integrity First", desc: "We are honest and transparent. No hidden charges, no false promises. What we quote is what you pay.", color: "icon-orange" },
          { icon: Medal, title: "Excellence Always", desc: "We never settle for 'good enough'. Every move is executed with the same care and attention you deserve.", color: "icon-orange" },
          { icon: UsersThree, title: "People-Centric", desc: "Our customers are family. We listen, we care, and we go the extra mile to exceed expectations.", color: "icon-orange" },
          { icon: Globe, title: "Community Impact", desc: "We believe in building Chennai. From green vehicles to local hiring — we invest in our community.", color: "icon-orange" },
        ].map((v, i) => (
          <div key={v.title} className={`feature-card reveal delay-${(i + 1) * 100}`} style={{ background: "var(--navy-mid)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className={`icon-box ${v.color}`} style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00" }}><v.icon size={26} weight="duotone" /></div>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#FFFFFF", margin: "0 0 0.5rem" }}>{v.title}</h3>
            <p style={{ color: "#D1D5DB", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Timeline = () => (
  <section style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "1px solid #F3F4F6" }}>
    <div className="container-custom">
      <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="section-badge" style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", border: "1px solid rgba(255, 90, 0, 0.2)" }}>📅 Milestones</div>
        <h2 className="section-title" style={{ color: "#111827" }}>Our Journey</h2>
        <div className="divider" style={{ background: "#ff5a00", margin: "0.75rem auto 0" }} />
      </div>
      <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 0 }}>
        {[
          { year: "2010", title: "Founded in Chennai", desc: "Mr. Deepak Kumar starts Arpan India Packers & Movers with 1 truck, 3 staff, and a dream." },
          { year: "2013", title: "Fleet Expansion", desc: "Grew to 10 vehicles and moved to a larger warehouse. First 1,000 successful moves." },
          { year: "2016", title: "ISO Certification", desc: "Received ISO 9001:2015 certification for quality management systems." },
          { year: "2018", title: "Pan-India Launch", desc: "Expanded beyond Tamil Nadu to cover Bangalore, Hyderabad, and Mumbai routes." },
          { year: "2021", title: "Digital Transformation", desc: "Launched GPS tracking, real-time quote system, and 24/7 customer app." },
          { year: "2024", title: "10,000+ Moves & 200+ Team", desc: "Reached major milestones: 10,000 moves, 50+ fleet, 200+ team members." },
        ].map((m, i) => (
          <div key={m.year} className={`reveal delay-${(i % 3 + 1) * 100}`} style={{ display: "flex", gap: "1.5rem", paddingBottom: "2rem", position: "relative" }}>
            {/* Line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#ff5a00", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0, zIndex: 1 }}>{m.year}</div>
              {i < 5 && <div style={{ width: 2, flex: 1, background: "#F3F4F6", marginTop: 4 }} />}
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: 12, padding: "1.25rem 1.5rem", border: "1px solid #F3F4F6", flex: 1, marginTop: 6, boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, color: "#111827", marginBottom: 4 }}>{m.title}</div>
              <p style={{ color: "#4B5563", fontSize: "0.875rem", margin: 0, lineHeight: 1.65 }}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section style={{ background: "var(--navy)", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
    <div className="container-custom">
      <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="section-badge" style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", border: "1px solid rgba(255, 90, 0, 0.2)" }}>👥 Our Team</div>
        <h2 className="section-title" style={{ color: "#fff" }}>Meet Our Leadership</h2>
        <div className="divider" style={{ background: "#ff5a00", margin: "0.75rem auto 0" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
        {[
          { name: "Deepak Kumar", role: "Founder & CEO", exp: "15+ years", color: "#ff5a00", init: "AK" },
          { name: "Kailash Sharma", role: "Operations Head", exp: "10+ years", color: "#ff5a00", init: "PN" },
          { name: "Ramesh S.", role: "Fleet Manager", exp: "12+ years", color: "#22c55e", init: "RS" },
          { name: "Divya M.", role: "Customer Success", exp: "8+ years", color: "#a855f7", init: "DM" },
        ].map((t, i) => (
          <div key={t.name} className={`card reveal delay-${(i + 1) * 100}`} style={{ textAlign: "center", background: "var(--navy-mid)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.4rem", margin: "0 auto 1rem", border: "2px solid #ff5a00" }}>{t.init}</div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#FFFFFF", marginBottom: 4 }}>{t.name}</div>
            <div style={{ color: "#ff5a00", fontSize: "0.82rem", fontWeight: 600, marginBottom: 4 }}>{t.role}</div>
            <div style={{ color: "#D1D5DB", fontSize: "0.78rem" }}>{t.exp} experience</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function AboutPage() {
  const router = useRouter();
  return (
    <main>
      <PageHero
        title="About Arpan India Packers & Movers"
        subtitle="15 years of trust, care, and excellence. Discover our story, values, and the people who make every move memorable."
        breadcrumb="About"
      />
      <Story />
      <Values />
      <Timeline />
      <Team />
      <section style={{ background: "var(--primary)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container-custom">
          <div className="reveal">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#000000", margin: "0 0 1rem" }}>
              Join 10,000+ Happy Families
            </h2>
            <p style={{ color: "rgba(0,0,0,0.7)", marginBottom: "2rem", fontWeight: 500 }}>Experience the Arpan difference — where your move is our priority.</p>
            <button onClick={() => router.push("/get-quote")} className="btn-secondary" style={{ background: "#000814", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8, border: "none", padding: "12px 24px", borderRadius: "4px", fontWeight: 600 }}>
              Get Your Free Quote <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
