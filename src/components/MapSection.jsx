export const MapSection = () => {
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
          style={{ 
            borderRadius: 16, 
            overflow: "hidden", 
            border: "1px solid #E5E7EB", 
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            background: "#111" // Dark background for the loading state/filter
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7823908!2d80.2585!3d13.0712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzE2LjMiTiA4MMKwMTUnMzAuNiJF!5e0!3m2!1sen!2sin!4v1617000000000!5m2!1sen!2sin"
            className="w-full h-[250px] md:h-[450px] border-0"
            loading="eager"
            fetchPriority="high"
            style={{ 
              filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
              display: "block"
            }}
            title="Arpan Packers and Movers Location"
          />
        </div>
      </div>
    </section>
  );
};
