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

import { MapSection } from "@/components/MapSection";
import { ArrowRight, Star, Quotes } from "@phosphor-icons/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const QuickStats = () => (
  <div style={{ background: "#000", padding: "2.5rem 0", borderBottom: "1px solid #111" }}>
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
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#ff5a00", lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: "0.78rem", color: "#A1A1AA", marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CTABanner = () => {
  const router = useRouter();
  return (
    <section style={{ background: "#ff5a00", padding: "4rem 0" }}>
      <div className="container-custom" style={{ textAlign: "center" }}>
        <div className="reveal">
          <div style={{ fontSize: "0.82rem", color: "rgba(0,0,0,0.6)", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
            🚚 FREE ESTIMATES · NO OBLIGATION
          </div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.5rem)", color: "#000", margin: "0 0 1rem" }}>
            Ready to Move? Let's Make It Happen!
          </h2>
          <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "1rem", marginBottom: "2rem", maxWidth: 560, margin: "0 auto 2rem", fontWeight: 500 }}>
            Get a free quote in minutes. Our team is standing by to plan your perfect move.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => router.push("/get-quote")}
              style={{ background: "#000", color: "#fff", border: "none", borderRadius: 4, padding: "14px 32px", fontWeight: 700, fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = ""}
            >
              Get Free Quote <ArrowRight size={18} weight="bold" />
            </button>
            <a href="tel:+918199002004" style={{ background: "rgba(0,0,0,0.05)", color: "#000", border: "2px solid rgba(0,0,0,0.2)", borderRadius: 4, padding: "14px 32px", fontWeight: 700, fontSize: "1rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              📞 +91 81990 02004
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedTestimonials = () => (
  <section style={{ background: "#000", padding: "5rem 0", borderBottom: "1px solid #111" }}>
    <div className="container-custom">
      <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="section-badge" style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", border: "1px solid rgba(255, 90, 0, 0.2)", margin: "0 auto 0.75rem", justifyContent: "center" }}>
          <Star size={13} weight="fill" /> Happy Customers
        </div>
        <h2 className="section-title" style={{ color: "#fff", margin: "0" }}>What People Say</h2>
        <div className="divider" style={{ background: "#ff5a00", margin: "1rem auto" }} />
        <Link href="/testimonials" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#ff5a00", borderColor: "#222", background: "#111", borderRadius: 4, padding: "8px 20px", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", marginTop: "1rem" }}>
          View All Reviews <ArrowRight size={15} />
        </Link>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <CarouselContent className="-ml-4">
          {[
            { name: "Priya Sharma", loc: "T Nagar → Velachery", text: "Outstanding service! Punctual, professional and took great care of all my furniture. Highly recommended!", rating: 5, color: "rgba(255, 90, 0, 0.1)" },
            { name: "Rajesh Kumar", loc: "Office – Anna Nagar", text: "Moved our entire office with zero downtime. Team worked through the weekend. Exceptional!", rating: 5, color: "rgba(255, 90, 0, 0.1)" },
            { name: "Lakshmi V.", loc: "Adyar → Bangalore", text: "GPS tracking was reassuring. All items delivered safely. Transparent pricing with no hidden charges.", rating: 5, color: "rgba(255, 90, 0, 0.1)" },
            { name: "Arun V.", loc: "Anna Nagar → OMR", text: "Reliable and fast. The team was very professional and handled our household goods with care. Best price in Chennai.", rating: 5, color: "rgba(255, 90, 0, 0.1)" },
            { name: "Senthil M.", loc: "Vehicle Shifting", text: "Moved my car from Chennai to Delhi. Safe and secure transit. Extremely happy with the service.", rating: 5, color: "rgba(255, 90, 0, 0.1)" },
            { name: "Meera K.", loc: "Home Relocation", text: "Stress-free moving experience. Arpan India Packers & Movers made it so easy. Punctual and polite staff.", rating: 5, color: "rgba(255, 90, 0, 0.1)" },
            { name: "Deepak R.", loc: "Local Shifting", text: "Great local shifting experience. No damage and very quick. Highly recommended for any move in Chennai!", rating: 5, color: "rgba(255, 90, 0, 0.1)" },
          ].map((t, i) => (
            <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="reveal h-full" style={{ background: "#111", borderRadius: 4, border: "1px solid #222", padding: "2rem 1.5rem", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: "1rem" }}>
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={15} weight="fill" style={{ color: "#ff5a00" }} />)}
                </div>
                <p style={{ color: "#E5E7EB", fontSize: "0.92rem", lineHeight: 1.7, margin: "0 0 1.5rem", fontStyle: "italic", flexGrow: 1 }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", borderTop: "1px solid #18181b", paddingTop: "1rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: t.color, color: "#ff5a00", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1.1rem", fontFamily: "Poppins", border: "1px solid #ff5a00" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#FFFFFF", fontSize: "0.95rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "#A1A1AA" }}>{t.loc}</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex justify-center gap-4 mt-8">
          <CarouselPrevious className="relative left-0 translate-y-0" />
          <CarouselNext className="relative right-0 translate-y-0" />
        </div>
      </Carousel>
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
