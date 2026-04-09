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
          href="tel:+918199002004"
          style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600 }}
        >
          <Phone size={14} weight="fill" style={{ color: "#fff" }} />
          +91 81990 02004
        </a>
        <a
          href="mailto:info@arpanpackerschennai.com"
          style={{ alignItems: "center", gap: 6, color: "#fff", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600 }}
          className="hidden sm:flex"
        >
          <EnvelopeSimple size={14} weight="fill" style={{ color: "#fff" }} />
          info@arpanpackerschennai.com
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div style={{ alignItems: "center", gap: 5, fontSize: "0.80rem", color: "#fff", fontWeight: 600 }} className="hidden lg:flex">
          <MapPin size={13} weight="fill" style={{ color: "#fff" }} />
          Chennai - 600056
        </div>
        <div className="flex gap-3">
          <a href="#" style={{ color: "#fff", transition: "opacity 0.2s" }} onMouseEnter={e => e.target.style.opacity = "0.7"} onMouseLeave={e => e.target.style.opacity = "1"} aria-label="Facebook">
            <FacebookLogo size={18} weight="fill" />
          </a>
          <a href="#" style={{ color: "#fff", transition: "opacity 0.2s" }} onMouseEnter={e => e.target.style.opacity = "0.7"} onMouseLeave={e => e.target.style.opacity = "1"} aria-label="Instagram">
            <InstagramLogo size={18} weight="fill" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
