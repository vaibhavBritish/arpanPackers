"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TrustSection } from "@/components/TrustSection";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Testimonials } from "@/components/Testimonials";

const MapSection = dynamic(
  () => import("@/components/MapSection").then((mod) => mod.MapSection),
  { ssr: false }
);
import { ArrowRight, Star } from "@phosphor-icons/react";

const QuickStats = () => (
  <div style={{ background: "#0F172A", padding: "2.5rem 0" }}>
    <div className="container-custom">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "1rem", textAlign: "center" }}>
        {[
          { value: "15+", label: "Years Experience", icon: "🏆" },
          { value: "10K+", label: "Happy Customers", icon: "😊" },
          { value: "50+", label: "Cities Served", icon: "🌍" },
          { value: "98%", label: "On-Time Delivery", icon: "⏱️" },
          { value: "24/7", label: "Customer Support", icon: "📞" },
          { value: "0", label: "Damage Claims", icon: "🛡️" },
        ].map(({ value, label, icon }) => (
          <div key={label} className="reveal" style={{ padding: "0.75rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: 4 }}>{icon}</div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#fff", lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CTABanner = () => {
  const router = useRouter();
  return (
    <section style={{ background: "linear-gradient(135deg, #EA580C, #c2410c)", padding: "4rem 0" }}>
      <div className="container-custom" style={{ textAlign: "center" }}>
        <div className="reveal">
          <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.8)", fontWeight: 600, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
            🚚 FREE ESTIMATES · NO OBLIGATION
          </div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.5rem)", color: "#fff", margin: "0 0 1rem" }}>
            Ready to Move? Let's Make It Happen!
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginBottom: "2rem", maxWidth: 560, margin: "0 auto 2rem" }}>
            Get a free quote in minutes. Our team is standing by to plan your perfect move.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => router.push("/get-quote")}
              style={{ background: "#fff", color: "#EA580C", border: "none", borderRadius: 8, padding: "14px 32px", fontWeight: 700, fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = ""}
            >
              Get Free Quote <ArrowRight size={18} weight="bold" />
            </button>
            <a href="tel:+919876543210" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", borderRadius: 8, padding: "14px 32px", fontWeight: 600, fontSize: "1rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              📞 +91 81990 02004
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedTestimonials = () => (
  <section style={{ background: "#F8FAFC", padding: "5rem 0" }}>
    <div className="container-custom">
      <div className="reveal" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
        <div>
          <div className="section-badge"><Star size={13} weight="fill" /> Happy Customers</div>
          <h2 className="section-title" style={{ margin: "0.5rem 0 0" }}>What People Say</h2>
        </div>
        <Link href="/testimonials" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          View All Reviews <ArrowRight size={15} />
        </Link>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {[
          { name: "Priya Sharma", loc: "T Nagar → Velachery", text: "Outstanding service! Punctual, professional and took great care of all my furniture. Highly recommended!", rating: 5, color: "#1D4ED8" },
          { name: "Rajesh Kumar", loc: "Office – Anna Nagar", text: "Moved our entire office with zero downtime. Team worked through the weekend. Exceptional!", rating: 5, color: "#EA580C" },
          { name: "Lakshmi V.", loc: "Adyar → Bangalore", text: "GPS tracking was reassuring. All items delivered safely. Transparent pricing with no hidden charges.", rating: 5, color: "#16a34a" },
        ].map((t, i) => (
          <div key={t.name} className={`testimonial-card reveal delay-${(i + 1) * 100}`}>
            <div style={{ display: "flex", gap: 2, marginBottom: "0.75rem" }}>
              {[...Array(t.rating)].map((_, j) => <Star key={j} size={15} weight="fill" style={{ color: "#F59E0B" }} />)}
            </div>
            <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 1rem", fontStyle: "italic" }}>"{t.text}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", borderTop: "1px solid #F1F5F9", paddingTop: "0.75rem" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1rem", fontFamily: "Poppins" }}>
                {t.name[0]}
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "#0F172A", fontSize: "0.88rem" }}>{t.name}</div>
                <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>{t.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickStats />
      <Services />
      <WhyChooseUs />
      <TrustSection />
      <FeaturedTestimonials />
      <ServiceAreas />
      <CTABanner />
      <MapSection />
    </main>
  );
}
