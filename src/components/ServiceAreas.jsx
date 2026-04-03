"use client";

import { MapPin, Phone, Clock } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const ServiceAreas = () => {
  const sectionRef = useScrollReveal();

  const areas = [
    "T. Nagar", "Anna Nagar", "Adyar", "Velachery", "Tambaram",
    "Porur", "OMR", "ECR", "Chromepet", "Medavakkam",
    "Sholinganallur", "Perungudi", "Mylapore", "Nungambakkam", "Egmore",
    "Guindy", "Besant Nagar", "Thiruvanmiyur", "Perambur", "Ambattur",
  ];

  const intercity = [
    "Chennai → Bangalore", "Chennai → Hyderabad", "Chennai → Mumbai",
    "Chennai → Delhi", "Chennai → Coimbatore", "Chennai → Madurai",
  ];

  return (
    <section
      id="service-areas"
      ref={sectionRef}
      className="bg-white py-10 md:py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 text-sm text-blue-600 mb-2">
            <MapPin size={14} weight="fill" />
            Coverage
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            Areas We Serve
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
            We provide door-to-door moving services across Chennai and intercity across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Local Areas */}
          <div className="bg-gray-50 rounded-2xl p-5 md:p-8 border">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                <MapPin size={20} weight="fill" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Within Chennai</div>
                <div className="text-xs text-gray-500">All major localities</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <span
                  key={a}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs border hover:bg-blue-600 hover:text-white transition"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Intercity */}
          <div className="bg-gray-50 rounded-2xl p-5 md:p-8 border">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-orange-100 text-orange-600 p-2 rounded-lg">
                <Phone size={20} weight="fill" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Intercity Moves</div>
                <div className="text-xs text-gray-500">Pan India coverage</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {intercity.map((r) => (
                <div
                  key={r}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-500 transition"
                >
                  🚚 {r}
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="mt-5 bg-blue-600 text-white p-4 rounded-lg flex items-center gap-3">
              <Clock size={18} weight="fill" className="text-blue-200" />
              <div className="text-sm">
                <strong>Available 24/7</strong> · Mon – Sun
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};