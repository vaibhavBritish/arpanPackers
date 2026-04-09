"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  WhatsappLogo,
  ChatCircle,
  User,
  PaperPlaneTilt,
  CircleNotch,
} from "@phosphor-icons/react";
import axios from "axios";
import { toast } from "sonner";

/* ---------------- HERO ---------------- */
const PageHero = () => (
  <section style={{ background: "var(--navy)", padding: "5rem 0 4rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
    <div className="container-custom">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "#D1D5DB", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "#ff5a00", textDecoration: "none", fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: "#9CA3AF" }}>Contact</span>
      </div>

      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: "#FFFFFF", margin: "0 0 1.25rem", lineHeight: 1.1 }}>
        Contact Us
      </h1>

      <p style={{ color: "#E5E7EB", fontSize: "1.1rem", maxWidth: 600, lineHeight: 1.7, margin: 0 }}>
        Have questions or ready to move? We're here 24/7.
      </p>
    </div>
  </section>
);

/* ---------------- CONTACT DATA ---------------- */
const contacts = [
  { icon: Phone, label: "Call Us", value: "+91 81990 02004", sub: "+91 44 2345 6789", href: "tel:+918199002004", color: "text-orange-600" },
  { icon: WhatsappLogo, label: "WhatsApp", value: "+91 81990 02004", sub: "Quick response", href: "https://wa.me/918199002004", color: "text-[#25D366]" },
  { icon: EnvelopeSimple, label: "Email", value: "info@arpanpackerschennai.com", sub: "Reply within 2 hours", href: "mailto:info@arpanpackerschennai.com", color: "text-orange-600" },
  { icon: MapPin, label: "Visit Us", value: "Anna Salai", sub: "Chennai", color: "text-orange-600" },
  { icon: Clock, label: "Hours", value: "Mon–Sun", sub: "24/7", color: "text-orange-600" },
  { icon: ChatCircle, label: "Live Chat", value: "Chat now", sub: "Instant support", color: "text-orange-600" },
];

/* ---------------- FORM ---------------- */
const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/contact", form);
      setSubmitted(true);
      toast.success("Message sent!");
    } catch {
      toast.error("Failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#001219] border border-white/10 rounded-xl p-6 text-center">
        <PaperPlaneTilt size={32} className="mx-auto text-orange-500 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <button onClick={() => setSubmitted(false)} className="text-orange-500">
          Send another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#001219] border border-white/10 rounded-xl p-5 md:p-6 shadow-2xl">
      <h3 className="font-bold text-white mb-4">Send Message</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input name="name" placeholder="Name" onChange={handleChange} required className="bg-black/20 border border-white/10 p-3 rounded-lg text-white outline-none focus:border-orange-500 transition" />
          <input name="phone" placeholder="Phone" onChange={handleChange} required className="bg-black/20 border border-white/10 p-3 rounded-lg text-white outline-none focus:border-orange-500 transition" />
        </div>

        <input name="email" placeholder="Email" onChange={handleChange} required className="bg-black/20 border border-white/10 p-3 rounded-lg text-white outline-none focus:border-orange-500 transition" />

        <textarea name="message" rows={4} placeholder="Message" onChange={handleChange} required className="bg-black/20 border border-white/10 p-3 rounded-lg text-white outline-none focus:border-orange-500 transition" />

        <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg flex justify-center items-center gap-2 transition-colors">
          {loading ? <CircleNotch className="animate-spin" size={18} /> : "Send Message"}
        </button>
      </form>
    </div>
  );
};

/* ---------------- MAP ---------------- */
const OfficeMap = () => (
  <section style={{ background: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.05)" }} className="py-10 md:py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-white mb-6">
        Find Us
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5774327381614!2d80.11354967460517!3d13.06254791287878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c3ec745e27%3A0x390e2c30972109df!2sArpan%20India%20Packers%20%26%20Movers!5e0!3m2!1sen!2sin!4v1775721689577!5m2!1sen!2sin"
        className="w-full h-[250px] md:h-[400px] rounded-xl border border-white/10"
        loading="lazy"
        style={{ filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
      />
    </div>
  </section>
);

/* ---------------- MAIN ---------------- */
export default function ContactPage() {
  return (
    <main>
      <PageHero />

      <section className="bg-white py-10 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reach Us</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {contacts.map((c) => {
                const Wrapper = c.href ? "a" : "div";
                return (
                  <Wrapper
                    key={c.label}
                    href={c.href}
                    className="flex gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-orange-500/50 transition-colors shadow-sm"
                  >
                    <div className={`p-2 rounded bg-orange-50 ${c.color}`}>
                      <c.icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{c.label}</div>
                      <div className="text-xs text-gray-500">{c.value}</div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:sticky lg:top-24">
            <ContactForm />
          </div>

        </div>
      </section>

      <OfficeMap />
    </main>
  );
}