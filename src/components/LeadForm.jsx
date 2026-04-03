"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, EnvelopeSimple, User, ArrowRight, CheckCircle, CircleNotch } from "@phosphor-icons/react";
import axios from "axios";
import { toast } from "sonner";

const API = "/api";

const SERVICES = [
  "Home Relocation",
  "Office Relocation",
  "Vehicle Transport",
  "Packing Only",
  "Storage Services",
  "Intercity Move",
  "Other",
];

export const LeadForm = () => {
  const pathname = usePathname();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Name and phone number are required.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        ...form,
        source_page: pathname,
      });
      setSubmitted(true);
      toast.success("Thanks! We'll call you back.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      data-testid="lead-form-section"
      style={{
        background: "#FFFFFF",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #F3F4F6",
      }}
    >
      {/* Background decorative circles */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(255, 90, 0, 0.05)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(0, 8, 20, 0.03)", pointerEvents: "none" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* ── LEFT: Text ── */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(234,88,12,0.15)",
                border: "1px solid rgba(234,88,12,0.3)",
                color: "#fb923c",
                borderRadius: 99,
                padding: "6px 16px",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "1.25rem",
                letterSpacing: "0.04em",
              }}
            >
              📞 FREE CALLBACK · 30-MIN RESPONSE
            </div>

            <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
                  color: "#111827",
                  margin: "0 0 1rem",
                  lineHeight: 1.25,
                }}
              >
                Get a Free Quote &amp;<br />
                <span style={{ color: "var(--primary)" }}>Expert Advice</span> Today
              </h2>

            <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 420 }}>
              Tell us a little about your move and our relocation expert will call you
              back within 30 minutes with a personalised quote — absolutely free.
            </p>

            {/* Benefits list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "Free survey at your doorstep",
                "Detailed quote within 2 hours",
                "No obligation, no hidden charges",
                "Available 7 days a week",
              ].map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, color: "#4B5563", fontSize: "0.92rem" }}>
                  <CheckCircle size={18} weight="fill" style={{ color: "#10B981", flexShrink: 0 }} />
                  {b}
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginTop: "2rem" }}>
              {["⭐ 4.9/5 Rating", "🛡️ ISO Certified", "✅ 10K+ Moves", "🔒 Insured"].map((b) => (
                <span key={b} style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)", color: "#6B7280", padding: "5px 12px", borderRadius: 99, fontSize: "0.78rem" }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div
            style={{
              background: "var(--navy)",
              borderRadius: 20,
              padding: "2.5rem",
              boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {submitted ? (
              /* Success state */
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                  <div
                  style={{
                    width: 72, height: 72, borderRadius: "50%",
                    background: "rgba(22, 163, 74, 0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  <CheckCircle size={40} weight="fill" style={{ color: "#16a34a" }} />
                </div>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.35rem", color: "#FFFFFF", margin: "0 0 0.65rem" }}>
                  We'll Call You Shortly! 🎉
                </h3>
                <p style={{ color: "#A1A1AA", fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
                  Your request has been received. Our moving expert will call you within
                  <strong> 30 minutes</strong> with a free personalised quote.
                </p>
                <a
                  href="tel:+918199002004"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "var(--primary)", color: "#fff",
                    padding: "12px 24px", borderRadius: 8,
                    fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                  }}
                >
                  <Phone size={17} weight="fill" />
                  Or Call Us Now
                </a>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                  style={{ display: "block", margin: "0.75rem auto 0", background: "none", border: "none", color: "#6b7280", cursor: "pointer", fontSize: "0.82rem" }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              /* Form */
              <>
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#FFFFFF", marginBottom: 4 }}>
                    Request a Free Callback
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#A1A1AA" }}>
                    Fill in your details and we'll reach you within 30 min.
                  </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <div style={inputWrap}>
                      <User size={16} style={inputIcon} />
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        style={inputStyle}
                        data-testid="lead-name-input"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <div style={inputWrap}>
                      <Phone size={16} style={inputIcon} />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 81990 02004"
                        required
                        type="tel"
                        style={inputStyle}
                        data-testid="lead-phone-input"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Email (optional)</label>
                    <div style={inputWrap}>
                      <EnvelopeSimple size={16} style={inputIcon} />
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        type="email"
                        style={inputStyle}
                        data-testid="lead-email-input"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label style={labelStyle}>Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, paddingLeft: "0.85rem", appearance: "none", background: "#001219", borderColor: "rgba(255,255,255,0.1)" }}
                      data-testid="lead-service-select"
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Quick message (optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="e.g. Moving from T. Nagar to Velachery, 2BHK…"
                      rows={3}
                      style={{ ...inputStyle, paddingLeft: "0.85rem", resize: "vertical", fontFamily: "inherit" }}
                      data-testid="lead-message-textarea"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{ justifyContent: "center", padding: "14px", fontSize: "1rem", opacity: loading ? 0.7 : 1 }}
                    data-testid="lead-submit-btn"
                  >
                    {loading ? (
                      <><CircleNotch size={20} style={{ animation: "spin 1s linear infinite" }} /> Sending…</>
                    ) : (
                      <>Get Free Callback <ArrowRight size={18} weight="bold" /></>
                    )}
                  </button>

                  <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#9ca3af", margin: 0 }}>
                    🔒 Your details are safe with us. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Shared input styles ── */
const labelStyle = {
  display: "block",
  fontSize: "0.78rem",
  fontWeight: 600,
  color: "#A1A1AA",
  marginBottom: "0.35rem",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

const inputWrap = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const inputIcon = {
  position: "absolute",
  left: "0.85rem",
  color: "#9ca3af",
  pointerEvents: "none",
  flexShrink: 0,
};

const inputStyle = {
  width: "100%",
  padding: "10px 0.85rem 10px 2.5rem",
  border: "1.5px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
  fontSize: "0.9rem",
  color: "#FFFFFF",
  background: "#001219",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
  fontFamily: "inherit",
};
