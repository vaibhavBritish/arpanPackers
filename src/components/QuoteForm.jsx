"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { CalendarBlank, Check, CircleNotch } from "@phosphor-icons/react";
import { format } from "date-fns";
import axios from "axios";
import { toast } from "sonner";

const API = "/api";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    moving_from: "",
    moving_to: "",
    move_type: "",
    preferred_date: null,
    additional_details: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        preferred_date: formData.preferred_date
          ? format(formData.preferred_date, "yyyy-MM-dd")
          : ""
      };

      await axios.post(`${API}/quotes`, payload);
      setSubmitted(true);
      toast.success("Quote request submitted successfully! We'll contact you soon.");
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast.error("Failed to submit quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section
        id="quote-form"
        style={{ background: "#EFF6FF", padding: "5rem 0" }}
        data-testid="quote-form-section"
      >
        <div className="container-custom" style={{ maxWidth: 640, margin: "0 auto" }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #DBEAFE",
              borderRadius: "20px",
              padding: "3.5rem 2.5rem",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(29,78,216,0.10)",
            }}
          >
            <div
              style={{
                width: 72, height: 72,
                background: "#DCFCE7",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <Check size={36} weight="bold" style={{ color: "#16a34a" }} />
            </div>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#0F172A", marginBottom: "0.75rem" }}>
              Quote Request Submitted! 🎉
            </h3>
            <p style={{ color: "#6b7280", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Thank you for choosing Arpan Packers. Our team will review your request and
              contact you within 2 hours with a detailed quote.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ full_name: "", phone_number: "", email: "", moving_from: "", moving_to: "", move_type: "", preferred_date: null, additional_details: "" }); }}
              className="btn-primary"
              data-testid="submit-another-quote-btn"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quote-form"
      style={{ background: "#EFF6FF", padding: "5rem 0" }}
      data-testid="quote-form-section"
    >
      <div className="container-custom">
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Form Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-badge" style={{ justifyContent: "center" }}>
              📝 Free Quote
            </div>
            <h2 className="section-title">Get Your Free Moving Quote</h2>
            <div className="divider" style={{ margin: "0.75rem auto 1rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Fill in the details below and we'll provide you with a free, no-obligation quote within 2 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: "20px", padding: "2.5rem", border: "1px solid #DBEAFE", boxShadow: "0 10px 40px rgba(29,78,216,0.08)", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Name and Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-gray-700 mb-2 block">
                  Full Name *
                </label>
                <Input
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="rounded-sm border-gray-300 focus:border-[#FF5A00] focus:ring-[#FF5A00]"
                  data-testid="quote-full-name-input"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-gray-700 mb-2 block">
                  Phone Number *
                </label>
                <Input
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  placeholder="+91 81990 02004"
                  required
                  className="rounded-sm border-gray-300 focus:border-[#FF5A00] focus:ring-[#FF5A00]"
                  data-testid="quote-phone-input"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs uppercase tracking-wider font-medium text-gray-700 mb-2 block">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                className="rounded-sm border-gray-300 focus:border-[#FF5A00] focus:ring-[#FF5A00]"
                data-testid="quote-email-input"
              />
            </div>

            {/* Moving From and To */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-gray-700 mb-2 block">
                  Moving From *
                </label>
                <Input
                  name="moving_from"
                  value={formData.moving_from}
                  onChange={handleInputChange}
                  placeholder="T Nagar, Chennai"
                  required
                  className="rounded-sm border-gray-300 focus:border-[#FF5A00] focus:ring-[#FF5A00]"
                  data-testid="quote-moving-from-input"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-gray-700 mb-2 block">
                  Moving To *
                </label>
                <Input
                  name="moving_to"
                  value={formData.moving_to}
                  onChange={handleInputChange}
                  placeholder="Anna Nagar, Chennai"
                  required
                  className="rounded-sm border-gray-300 focus:border-[#FF5A00] focus:ring-[#FF5A00]"
                  data-testid="quote-moving-to-input"
                />
              </div>
            </div>

            {/* Move Type and Date */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-gray-700 mb-2 block">
                  Move Type *
                </label>
                <Select
                  value={formData.move_type}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, move_type: value }))}
                >
                  <SelectTrigger
                    className="rounded-sm border-gray-300"
                    data-testid="quote-move-type-select"
                  >
                    <SelectValue placeholder="Select move type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Home Relocation</SelectItem>
                    <SelectItem value="office">Office Relocation</SelectItem>
                    <SelectItem value="vehicle">Vehicle Transportation</SelectItem>
                    <SelectItem value="storage">Storage Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-gray-700 mb-2 block">
                  Preferred Move Date
                </label>
                <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal rounded-sm border-gray-300 hover:border-gray-400"
                      data-testid="quote-date-picker-btn"
                    >
                      <CalendarBlank className="mr-2 h-4 w-4" />
                      {formData.preferred_date ? (
                        format(formData.preferred_date, "dd/MM/yyyy")
                      ) : (
                        <span className="text-gray-500">Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.preferred_date}
                      onSelect={(date) => {
                        setFormData(prev => ({ ...prev, preferred_date: date }));
                        setDatePickerOpen(false);
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      data-testid="quote-calendar"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label className="text-xs uppercase tracking-wider font-medium text-gray-700 mb-2 block">
                Additional Details
              </label>
              <Textarea
                name="additional_details"
                value={formData.additional_details}
                onChange={handleInputChange}
                placeholder="Tell us about your moving requirements..."
                rows={4}
                className="rounded-sm border-gray-300 focus:border-[#FF5A00] focus:ring-[#FF5A00]"
                data-testid="quote-details-textarea"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !formData.full_name || !formData.phone_number || !formData.email || !formData.moving_from || !formData.moving_to || !formData.move_type}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "1rem", opacity: (loading || !formData.full_name || !formData.phone_number || !formData.email || !formData.moving_from || !formData.moving_to || !formData.move_type) ? 0.6 : 1 }}
              data-testid="quote-submit-btn"
            >
              {loading ? (
                <>
                  <CircleNotch style={{ animation: "spin 1s linear infinite" }} size={20} />
                  Submitting...
                </>
              ) : (
                "🚀 Get Free Quote Now"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
