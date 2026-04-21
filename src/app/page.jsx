import HomeClient from "./HomeClient";

export const metadata = {
  title: "Arpan India Packers & Movers - Chennai",
  description: "Arpan India Best Packers & Movers Chennai trusted home, office & vehicle relocation. Safe packing, timely delivery. Get your FREE quote today!",
  alternates: {
    canonical: "https://arpanpackerschennai.com/",
  },
  openGraph: {
    title: "Arpan India Packers & Movers - Chennai",
    description: "Arpan India Best Packers & Movers Chennai trusted home, office & vehicle relocation. Safe packing, timely delivery. Get your FREE quote today!",
    url: "https://arpanpackerschennai.com/",
    siteName: "Arpan India Packers & Movers",
    images: [
      {
        url: "https://arpanpackerschennai.com/mainLogo.png",
        width: 1200,
        height: 630,
        alt: "Arpan India Packers & Movers - Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon-main.png",
    shortcut: "/favicon-main.png",
    apple: "/favicon-main.png",
  },
  keywords: "packers and movers Chennai, packers movers in Chennai, best packers and movers Chennai, home shifting Chennai, house relocation Chennai, movers and packers Chennai, Arpan India Packers, affordable packers movers Chennai, reliable packers movers Chennai",
};


export default function HomePage() {
  return <HomeClient />;
}
