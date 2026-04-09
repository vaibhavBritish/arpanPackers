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
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5774327381614!2d80.11354967460517!3d13.06254791287878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c3ec745e27%3A0x390e2c30972109df!2sArpan%20India%20Packers%20%26%20Movers!5e0!3m2!1sen!2sin!4v1775721689577!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5774327381614!2d80.11354967460517!3d13.06254791287878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c3ec745e27%3A0x390e2c30972109df!2sArpan%20India%20Packers%20%26%20Movers!5e0!3m2!1sen!2sin!4v1775721689577!5m2!1sen!2sin"
            className="w-full h-[250px] md:h-[450px] border-0"
            loading="eager"
            fetchPriority="high"
            style={{ 
              filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
              display: "block"
            }}
            title="Arpan India Packers & Movers Location"
          />
        </div>
      </div>
    </section>
  );
};
