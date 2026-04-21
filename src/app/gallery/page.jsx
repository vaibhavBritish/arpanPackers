import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Our Gallery | Arpan India Packers & Movers Chennai",
  description: "See Arpan India Packers & Movers in action - our Chennai relocation gallery shows professional packing, safe loading, and on-time deliveries across Tamil Nadu.",
  alternates: {
    canonical: "https://arpanpackerschennai.com/gallery",
  },
  openGraph: {
    title: "Gallery - Arpan India Packers & Movers Excellence",
    description: "See Arpan India Packers & Movers in action - our Chennai relocation gallery shows professional packing, safe loading, and on-time deliveries across Tamil Nadu.",
    url: "https://arpanpackerschennai.com/gallery",
    type: "website",
  },
  keywords:"packers movers Chennai gallery, moving photos Chennai, packing services photos Chennai, Arpan India gallery, relocation photos Chennai"
};

export default function GalleryPage() {
  return <GalleryClient />;
}
