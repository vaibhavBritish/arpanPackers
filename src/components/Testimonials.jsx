"use client";

import { Star, Quotes } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const avatarColors = ["#1D4ED8", "#EA580C", "#16a34a", "#9333ea", "#0891b2"];

export const Testimonials = () => {
  const sectionRef = useScrollReveal();

  const testimonials = [
    {
      name: "Priya Sharma",
      initial: "P",
      location: "T Nagar → Velachery",
      rating: 5,
      text: "Excellent service! The team was punctual, professional, and handled all my furniture with great care. Highly recommend Arpan Packers for anyone looking for reliable packers.",
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
      text: "Moved from Chennai to Bangalore with Arpan Packers. GPS tracking was really helpful. All items arrived safely. Pricing was transparent — no hidden charges at all.",
      date: "January 2026",
      avatarColor: avatarColors[2],
    },
  ];

  const delays = ["delay-100", "delay-200", "delay-300"];

  return (
    <section
      ref={sectionRef}
      style={{ background: "#EFF6FF", padding: "5rem 0" }}
      data-testid="testimonials-section"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-badge">
            <Star size={14} weight="fill" />
            Testimonials
          </div>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="divider" style={{ margin: "0.75rem auto 1rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Real reviews from real customers across Chennai. Your trust is our greatest achievement.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card reveal ${delays[i]}`}
              data-testid={`testimonial-${i}`}
            >
              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <Quotes size={32} weight="fill" style={{ color: "#DBEAFE" }} />
                <div style={{ display: "flex", gap: 2 }}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={15} weight="fill" style={{ color: "#F59E0B" }} />
                  ))}
                </div>
              </div>

              {/* Review text */}
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

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <div
                  className="testimonial-avatar"
                  style={{ background: t.avatarColor }}
                >
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "#0F172A", fontSize: "0.92rem" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#6b7280" }}>
                    {t.location} · {t.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: "inline-flex" }}
          >
            <Star size={16} weight="fill" />
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};
