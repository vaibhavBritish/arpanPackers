"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const MapSection = () => {
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef(null);
  const customIconRef = useRef(null);

  // Chennai coordinates (Anna Salai area)
  const chennaiPosition = [13.0569, 80.2425];

  useEffect(() => {
    // Fix for default marker icon - must run on client
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    // Create custom icon on client
    customIconRef.current = new L.Icon({
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Small delay to ensure container is mounted
    const timer = setTimeout(() => setMapReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="bg-white"
      data-testid="map-section"
      style={{ margin: "3rem 0" }}
    >
      <div className="container-custom">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div className="section-badge">📍 Find Us</div>
          <h2 className="section-title">Our Location in Chennai</h2>
          <div className="divider" style={{ margin: "0.75rem auto 0" }} />
        </div>

        <div
          className="map-container animate-fade-in-up"
          data-testid="map-container"
          style={{ height: 420, borderRadius: 16, overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
        >
          {mapReady && (
            <MapContainer
              ref={mapRef}
              center={chennaiPosition}
              zoom={11}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={chennaiPosition}
                icon={customIconRef.current}
              >
                <Popup>
                  <div style={{ textAlign: "center", padding: "4px" }}>
                    <strong style={{ display: "block", marginBottom: 4, color: "#1D4ED8" }}>
                      🚚 Arpan Packers &amp; Movers
                    </strong>
                    <span style={{ fontSize: "0.82rem", color: "#6b7280" }}>
                      Ground Floor, Sakthi Garden Phase 2, No 27B, Senneer Kuppam, Poonamallee, Chennai – 600056
                    </span>
                    <br />
                    <a href="tel:+9181990 02004" style={{ fontSize: "0.82rem", color: "#EA580C", fontWeight: 600 }}>
                      +91 81990 02004
                    </a>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </div>
    </section>
  );
};
