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
  <section className="bg-gradient-to-br from-blue-50 to-blue-100 border-b py-10 md:py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link href="/" className="text-blue-600">Home</Link>
        <span>›</span>
        <span>Contact</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
        Contact Us
      </h1>

      <p className="text-gray-600 max-w-xl">
        Have questions or ready to move? We're here 24/7.
      </p>
    </div>
  </section>
);

/* ---------------- CONTACT DATA ---------------- */
const contacts = [
  { icon: Phone, label: "Call Us", value: "+91 81990 02004", sub: "+91 44 2345 6789", href: "tel:+919876543210", color: "bg-blue-100 text-blue-600" },
  { icon: WhatsappLogo, label: "WhatsApp", value: "+91 81990 02004", sub: "Quick response", href: "https://wa.me/919876543210", color: "bg-green-100 text-green-600" },
  { icon: EnvelopeSimple, label: "Email", value: "info@arpanpackers.com", sub: "Reply within 2 hours", href: "mailto:info@arpanpackers.com", color: "bg-orange-100 text-orange-600" },
  { icon: MapPin, label: "Visit Us", value: "Anna Salai", sub: "Chennai", color: "bg-purple-100 text-purple-600" },
  { icon: Clock, label: "Hours", value: "Mon–Sun", sub: "24/7", color: "bg-blue-100 text-blue-600" },
  { icon: ChatCircle, label: "Live Chat", value: "Chat now", sub: "Instant support", color: "bg-orange-100 text-orange-600" },
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
      <div className="bg-white border rounded-xl p-6 text-center">
        <PaperPlaneTilt size={32} className="mx-auto text-green-600 mb-4" />
        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
        <button onClick={() => setSubmitted(false)} className="text-blue-600">
          Send another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-xl p-5 md:p-6 shadow-sm">
      <h3 className="font-bold mb-4">Send Message</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input name="name" placeholder="Name" onChange={handleChange} required className="input" />
          <input name="phone" placeholder="Phone" onChange={handleChange} required className="input" />
        </div>

        <input name="email" placeholder="Email" onChange={handleChange} required className="input" />

        <textarea name="message" rows={4} placeholder="Message" onChange={handleChange} required className="input" />

        <button className="bg-blue-600 text-white py-3 rounded-lg flex justify-center items-center gap-2">
          {loading ? <CircleNotch className="animate-spin" /> : "Send Message"}
        </button>
      </form>
    </div>
  );
};

/* ---------------- MAP ---------------- */
const OfficeMap = () => (
  <section className="py-10 md:py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-6">
        Find Us
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7823908!2d80.2585!3d13.0712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzE2LjMiTiA4MMKwMTUnMzAuNiJF!5e0!3m2!1sen!2sin!4v1617000000000!5m2!1sen!2sin"
        className="w-full h-[250px] md:h-[400px] rounded-xl"
        loading="lazy"
      />
    </div>
  </section>
);

/* ---------------- MAIN ---------------- */
export default function ContactPage() {
  return (
    <main>
      <PageHero />

      <section className="bg-gray-50 py-10 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Reach Us</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {contacts.map((c) => {
                const Wrapper = c.href ? "a" : "div";
                return (
                  <Wrapper
                    key={c.label}
                    href={c.href}
                    className="flex gap-3 bg-white p-4 rounded-xl border hover:shadow-sm"
                  >
                    <div className={`p-2 rounded ${c.color}`}>
                      <c.icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{c.label}</div>
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