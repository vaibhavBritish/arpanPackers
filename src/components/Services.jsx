"use client";

import { House, Buildings, Package, Car, Warehouse, ShieldCheck, Check, ArrowRight } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const Services = () => {
  const sectionRef = useScrollReveal();

  const services = [
    {
      icon: House,
      title: "Home Relocation",
      description: "Complete household shifting within Chennai and across Tamil Nadu with professional packing and safe delivery.",
      features: ["Furniture dismantling", "Secure packing", "Safe transportation"],
      color: "icon-blue",
      delay: "delay-100",
    },
    {
      icon: Buildings,
      title: "Office Relocation",
      description: "Efficient corporate moving with minimal downtime. IT equipment, furniture, and sensitive documents handled with care.",
      features: ["IT equipment handling", "Minimal disruption", "Setup assistance"],
      color: "icon-orange",
      delay: "delay-200",
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "Expert packing using premium materials — bubble wrap, cartons, and specialized packaging for fragile items.",
      features: ["Quality materials", "Fragile item care", "Labeling & inventory"],
      color: "icon-green",
      delay: "delay-300",
    },
    {
      icon: Car,
      title: "Vehicle Transport",
      description: "Safe car and bike transportation across India with enclosed carriers and real-time GPS tracking.",
      features: ["Door-to-door service", "Insurance coverage", "Real-time tracking"],
      color: "icon-purple",
      delay: "delay-100",
    },
    {
      icon: Warehouse,
      title: "Storage Services",
      description: "Secure, climate-controlled warehousing for short-term and long-term storage with 24/7 monitoring.",
      features: ["Climate controlled", "24/7 security", "Flexible duration"],
      color: "icon-blue",
      delay: "delay-200",
    },
    {
      icon: ShieldCheck,
      title: "Insurance Coverage",
      description: "Comprehensive transit insurance for all your valuables with full value protection and claim assistance.",
      features: ["Full value protection", "Claim assistance", "Peace of mind"],
      color: "icon-orange",
      delay: "delay-300",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ background: "#FFFFFF", padding: "5rem 0" }}
      data-testid="services-section"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-badge">
            <Package size={14} weight="fill" />
            Our Services
          </div>
          <h2 className="section-title">
            Complete Relocation Solutions
          </h2>
          <div className="divider" style={{ margin: "0.75rem auto 1rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            From local shifts to intercity moves, we provide end-to-end moving services
            tailored to your needs and budget.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal service-card-new ${svc.delay}`}
              data-testid={`service-card-${svc.title.toLowerCase().replace(" ", "-")}`}
            >
              <div className={`icon-box ${svc.color}`} style={{ transition: "all 0.3s" }}>
                <svc.icon size={26} weight="duotone" />
              </div>

              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "var(--text-dark)",
                  margin: 0,
                }}
              >
                {svc.title}
              </h3>

              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                {svc.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {svc.features.map((f) => (
                  <span key={f} className="service-feature-tag" style={{ background: "rgba(255, 90, 0, 0.05)", color: "#4B5563", border: "1px solid rgba(255, 90, 0, 0.15)" }}>
                    <Check size={11} weight="bold" />
                    {f}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                  cursor: "pointer",
                  marginTop: "auto",
                }}
              >
                Learn more <ArrowRight size={14} className="animate-bounce-x" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
