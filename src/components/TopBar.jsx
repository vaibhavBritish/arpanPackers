"use client";

import { Phone, EnvelopeSimple, MapPin, FacebookLogo, InstagramLogo } from "@phosphor-icons/react";

export const TopBar = () => (
  <div className="topbar" data-testid="topbar">
    <div
      className="container-custom"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <div className="flex items-center gap-6">
        <a
          href="tel:+919876543210"
          style={{ display: "flex", alignItems: "center", gap: 6, color: "#cbd5e1", textDecoration: "none", fontSize: "0.82rem" }}
        >
          <Phone size={14} weight="fill" style={{ color: "#EA580C" }} />
          +91 81990 02004
        </a>
        <a
          href="mailto:info@arpanpackers.com"
          style={{ alignItems: "center", gap: 6, color: "#cbd5e1", textDecoration: "none", fontSize: "0.82rem" }}
          className="hidden sm:flex"
        >
          <EnvelopeSimple size={14} weight="fill" style={{ color: "#EA580C" }} />
          info@arpanpackers.com
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div style={{ alignItems: "center", gap: 5, fontSize: "0.8rem", color: "#94a3b8" }} className="hidden lg:flex">
          <MapPin size={13} weight="fill" style={{ color: "#EA580C" }} />
          Anna Salai, Chennai - 600002
        </div>
        <div className="flex gap-3">
          <a href="#" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#fff"} onMouseLeave={e => e.target.style.color = "#94a3b8"} aria-label="Facebook">
            <FacebookLogo size={18} weight="fill" />
          </a>
          <a href="#" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#fff"} onMouseLeave={e => e.target.style.color = "#94a3b8"} aria-label="Instagram">
            <InstagramLogo size={18} weight="fill" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
