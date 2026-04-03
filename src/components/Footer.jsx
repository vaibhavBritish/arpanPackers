"use client";

import Link from "next/link";
import {
  FacebookLogo, InstagramLogo, TwitterLogo, LinkedinLogo, YoutubeLogo,
  Phone, EnvelopeSimple, MapPin, ArrowRight,
} from "@phosphor-icons/react";

export const Footer = () => {
  const quickLinks = [
    { label: "Home",          to: "/" },
    { label: "Services",      to: "/services" },
    { label: "About Us",      to: "/about" },
    { label: "Gallery",       to: "/gallery" },
    { label: "Testimonials",  to: "/testimonials" },
    { label: "Get Quote",     to: "/get-quote" },
    { label: "Contact",       to: "/contact" },
  ];

  const services = [
    "Home Relocation", "Office Relocation", "Packing Services",
    "Vehicle Transport", "Storage Services", "Insurance Coverage",
  ];

  const socials = [
    { Icon: FacebookLogo,  href: "#", label: "Facebook" },
    { Icon: InstagramLogo, href: "#", label: "Instagram" },
    { Icon: TwitterLogo,   href: "#", label: "Twitter" },
    { Icon: LinkedinLogo,  href: "#", label: "LinkedIn" },
    { Icon: YoutubeLogo,   href: "#", label: "YouTube" },
  ];

  return (
    <footer className="site-footer" data-testid="footer">
      {/* Main grid */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "4rem 0" }}>
        <div
          className="container-custom"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "2.5rem" }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1rem", display: "inline-block", background: "#fff", borderRadius: 12, padding: "6px 12px" }}>
              <img
                src="/logo.png"
                alt="Arpan Packers & Movers"
                style={{ height: 72, width: "auto", objectFit: "contain", display: "block" }}
              />
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#64748b", marginBottom: "1.25rem" }}>
              Professional and reliable packers and movers serving Chennai and Tamil Nadu since 2010.
              Your trusted partner for safe, stress-free relocations.
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} className="footer-social" aria-label={label} data-testid={`social-${label.toLowerCase()}`}>
                  <Icon size={16} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-heading">Quick Links</div>
            {quickLinks.map((l) => (
              <Link key={l.label} href={l.to} className="footer-link" data-testid={`footer-link-${l.label.toLowerCase().replace(" ", "-")}`}>
                <span style={{ marginRight: 6, color: "#EA580C" }}>›</span>{l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="footer-heading">Our Services</div>
            {services.map((s) => (
              <Link key={s} href="/services" className="footer-link">
                <span style={{ marginRight: 6, color: "#EA580C" }}>›</span>{s}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="footer-heading">Contact Info</div>
            <a href="tel:+919876543210" style={{ display: "flex", alignItems: "flex-start", gap: 10, textDecoration: "none", marginBottom: "1rem" }}>
              <Phone size={16} weight="fill" style={{ color: "#EA580C", marginTop: 2 }} />
              <div>
                <div style={{ color: "#cbd5e1", fontSize: "0.85rem" }}>+91 81990 02004</div>
                <div style={{ color: "#64748b", fontSize: "0.78rem" }}>+91 44 2345 6789</div>
              </div>
            </a>
            <a href="mailto:info@arpanpackers.com" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: "1rem" }}>
              <EnvelopeSimple size={16} weight="fill" style={{ color: "#EA580C" }} />
              <div style={{ color: "#cbd5e1", fontSize: "0.85rem" }}>info@arpanpackers.com</div>
            </a>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <MapPin size={16} weight="fill" style={{ color: "#EA580C", marginTop: 2, flexShrink: 0 }} />
              <div style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6 }}>
                Ground Floor, Sakthi Garden Phase 2, No 27B, Senneer Kuppam, Poonamallee, Chennai <br />Chennai – 600056, Tamil Nadu
              </div>
            </div>

            {/* Newsletter */}
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "0.5rem" }}>Get moving tips &amp; offers</div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input type="email" placeholder="Your email" style={{ flex: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "6px", padding: "8px 12px", color: "#fff", fontSize: "0.82rem", outline: "none" }} />
                <button style={{ background: "#EA580C", border: "none", borderRadius: "6px", padding: "8px 12px", cursor: "pointer", display: "flex", alignItems: "center", color: "#fff", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "#c2410c"} onMouseLeave={(e) => e.currentTarget.style.background = "#EA580C"} aria-label="Subscribe">
                  <ArrowRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: "1.25rem 0" }}>
        <div className="container-custom" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#475569", margin: 0 }}>
            © 2026 Arpan Packers &amp; Movers. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((l) => (
              <a key={l} href="#" style={{ fontSize: "0.78rem", color: "#475569", textDecoration: "none", transition: "color 0.2s" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
