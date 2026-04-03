"use client";

const marqueeItems = [
  { id: 1, url: "/gallery/unamed2.webp" },
  { id: 2, url: "/gallery/unamed3.webp" },
  { id: 3, url: "/gallery/unamed4.webp" },
  { id: 4, url: "/gallery/unamed5.webp" },
  { id: 5, url: "/gallery/unamed8.webp" },
  { id: 6, url: "/gallery/unamed7.webp" },
  { id: 7, url: "/gallery/unamed8.webp" },
  { id: 8, url: "/gallery/unnamed.webp" },
];

export default function MarqueePage() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      overflow: "hidden",
      background: "transparent",
      height: "480px",
      display: "flex",
      alignItems: "center"
    }}>
      <style>{`
        .marquee-container {
          display: flex;
          width: fit-content;
          animation: marquee 60s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
        .marquee-item {
          flex-shrink: 0;
          width: 500px;
          height: 350px;
          margin: 0 20px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.1);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .marquee-item:hover {
          transform: scale(1.03);
        }
        .marquee-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="marquee-container">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={`${item.id}-${index}`} className="marquee-item">
            <img src={item.url} alt={`Gallery ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
