"use client";

import { Phone, EnvelopeSimple, MapPin, Clock, WhatsappLogo, ChatCircle } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const Contact = () => {
  const sectionRef = useScrollReveal();

  const contacts = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 81990 02004",
      sub: "+91 44 2345 6789",
      href: "tel:+919876543210",
      color: "icon-blue",
    },
    {
      icon: WhatsappLogo,
      label: "WhatsApp",
      value: "+91 81990 02004",
      sub: "Quick response",
      href: "https://wa.me/919876543210",
      color: "icon-green",
    },
    {
      icon: EnvelopeSimple,
      label: "Email Us",
      value: "info@arpanpackers.com",
      sub: "We reply within hours",
      href: "mailto:info@arpanpackers.com",
      color: "icon-orange",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Ground Floor, Sakthi Garden Phase 2, No 27B, Senneer Kuppam, Poonamallee, Chennai",
      sub: "Chennai - 600056, TN",
      href: "#",
      color: "icon-purple",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon–Sun: 6AM – 9PM",
      sub: "Emergency: 24/7",
      href: null,
      color: "icon-blue",
    },
    {
      icon: ChatCircle,
      label: "Live Chat",
      value: "Chat with us",
      sub: "Instant support",
      href: "#",
      color: "icon-orange",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ background: "#F8FAFC", padding: "5rem 0" }}
      data-testid="contact-section"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-badge">
            <Phone size={14} weight="fill" />
            Contact Us
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <div className="divider" style={{ margin: "0.75rem auto 1rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Have a question or ready to book? Reach us through any of the channels below.
            We're available 24/7 for emergencies.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {contacts.map((c, i) => {
            const Wrapper = c.href && c.href !== "#" ? "a" : "div";
            const wrapperProps = c.href && c.href !== "#"
              ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
              : {};

            return (
              <Wrapper
                key={c.label}
                {...wrapperProps}
                className={`reveal delay-${(i + 1) * 100}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  border: "1px solid #E5E7EB",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.3s",
                  cursor: c.href ? "pointer" : "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(29,78,216,0.10)";
                  e.currentTarget.style.borderColor = "#1D4ED8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.borderColor = "#E5E7EB";
                }}
                data-testid={`contact-${c.label.toLowerCase().replace(" ", "-")}`}
              >
                <div className={`icon-box ${c.color}`} style={{ flexShrink: 0, width: 46, height: 46 }}>
                  <c.icon size={22} weight="fill" />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "#6b7280", marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontWeight: 600, color: "#0F172A", fontSize: "0.92rem" }}>{c.value}</div>
                  <div style={{ fontSize: "0.78rem", color: "#6b7280" }}>{c.sub}</div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
