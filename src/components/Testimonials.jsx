"use client";

import { Star, Quotes, ArrowRight } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const avatarColors = ["#1D4ED8", "#EA580C", "#16a34a", "#9333ea", "#0891b2"];

export const Testimonials = () => {
  const sectionRef = useScrollReveal();

  const testimonials = [
    {
      name: "Priya Sharma",
      initial: "P",
      location: "T Nagar → Velachery",
      rating: 5,
      text: "Excellent service! The team was punctual, professional, and handled all my furniture with great care. Highly recommend Arpan India Packers & Movers for anyone looking for reliable packers.",
      date: "January 2026",
      avatarColor: avatarColors[0],
    },
    {
      name: "Rajesh Kumar",
      initial: "R",
      location: "Office Move – Anna Nagar",
      rating: 5,
      text: "We relocated our entire office with zero downtime. The team worked over the weekend and had everything set up by Monday morning. Outstanding service!",
      date: "December 2025",
      avatarColor: avatarColors[1],
    },
    {
      name: "Lakshmi Venkatesh",
      initial: "L",
      location: "Adyar → Bangalore",
      rating: 5,
      text: "Moved from Chennai to Bangalore with Arpan India Packers & Movers. GPS tracking was really helpful. All items arrived safely. Pricing was transparent — no hidden charges at all.",
      date: "January 2026",
      avatarColor: avatarColors[2],
    },
    {
      name: "Arun V.",
      initial: "A",
      location: "Anna Nagar → OMR",
      rating: 5,
      text: "Reliable and fast. The team was very professional and handled our household goods with care. Best price in Chennai.",
      date: "February 2026",
      avatarColor: avatarColors[3],
    },
    {
      name: "Senthil M.",
      initial: "S",
      location: "Vehicle Shifting",
      rating: 5,
      text: "Moved my car from Chennai to Delhi. Safe and secure transit. Extremely happy with the service.",
      date: "January 2026",
      avatarColor: avatarColors[4],
    },
    {
      name: "Meera K.",
      initial: "M",
      location: "Home Relocation",
      rating: 5,
      text: "Stress-free moving experience. Arpan India Packers & Movers made it so easy. Punctual and polite staff.",
      date: "March 2026",
      avatarColor: avatarColors[0],
    },
    {
      name: "Deepak R.",
      initial: "D",
      location: "Local Shifting",
      rating: 5,
      text: "Great local shifting experience. No damage and very quick. Highly recommended for any move in Chennai!",
      date: "February 2026",
      avatarColor: avatarColors[1],
    },
  ];

  const delays = ["delay-100", "delay-200", "delay-300"];

  return (
    <section
      ref={sectionRef}
      style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "1px solid #F3F4F6" }}
      data-testid="testimonials-section"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-badge" style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", border: "1px solid rgba(255, 90, 0, 0.2)", justifyContent: "center" }}>
            <Star size={14} weight="fill" />
            Testimonials
          </div>
          <h2 className="section-title" style={{ color: "#111827" }}>What Our Customers Say</h2>
          <div className="divider" style={{ background: "#ff5a00", margin: "0.75rem auto 1rem" }} />
          <p className="section-subtitle" style={{ color: "#374151", margin: "0 auto" }}>
            Real reviews from real customers across Chennai. Your trust is our greatest achievement.
          </p>
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
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                  className={`reveal h-full`}
                  style={{ background: "#FFFFFF", borderRadius: 4, border: "1px solid #F3F4F6", padding: "2rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}
                  data-testid={`testimonial-${i}`}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Quotes size={32} weight="fill" style={{ color: "rgba(255, 90, 0, 0.1)" }} />
                    <div style={{ display: "flex", gap: 2 }}>
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={15} weight="fill" style={{ color: "#ff5a00" }} />
                      ))}
                    </div>
                  </div>

                  <p
                    style={{
                      color: "#374151",
                      fontSize: "0.92rem",
                      lineHeight: 1.7,
                      margin: 0,
                      fontStyle: "italic",
                      flexGrow: 1,
                    }}
                  >
                    "{t.text}"
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid #F3F4F6",
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "Poppins", flexShrink: 0, border: "1px solid #ff5a00" }}>
                      {t.initial}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.92rem" }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "#6B7280" }}>
                        {t.location} · {t.date}
                      </div>
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
};
