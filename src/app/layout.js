import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";

export const metadata = {
  title: "Arpan Packers and Movers - Reliable Moving Services in Chennai",
  description: "Arpan Packers and Movers offers top-notch relocation services in Chennai. Get a free quote for household, office, and vehicle moving.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import { ScrollReveal } from "@/components/ScrollReveal";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JNVSG7V14G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JNVSG7V14G');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <div className="App" data-testid="app-container">
          <ScrollReveal />
          <TopBar />
          <Header />
          <main>{children}</main>
          <LeadForm />
          <Footer />
          <Toaster />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210?text=Hello%2C%20I%20need%20moving%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    data-testid="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
      <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.68 4.8 1.84 6.8L2 30l7.4-1.8C11.28 29.36 13.6 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.6c-2.2 0-4.32-.6-6.16-1.72l-.44-.26-4.4 1.08 1.12-4.28-.28-.44C4.6 20.28 4 18.2 4 16 4 9.37 9.37 4 16 4s12 5.37 12 12-5.37 11.6-12 11.6zm6.6-8.72c-.36-.18-2.12-1.04-2.44-1.16-.32-.12-.56-.18-.8.18s-.92 1.16-1.12 1.4c-.2.24-.4.26-.76.08-.36-.18-1.52-.56-2.9-1.78-1.07-.96-1.8-2.14-2.01-2.5-.2-.36-.02-.56.16-.74.16-.16.36-.42.54-.62.18-.2.24-.34.36-.58.12-.24.06-.44-.02-.62-.08-.18-.8-1.92-1.1-2.62-.28-.7-.58-.6-.8-.6h-.68c-.24 0-.62.08-.94.4-.32.32-1.22 1.18-1.22 2.9s1.26 3.36 1.42 3.58c.18.24 2.48 3.78 6 5.3.84.36 1.5.58 2.01.74.84.26 1.6.22 2.21.14.68-.1 2.08-.84 2.38-1.66.3-.82.3-1.52.2-1.66-.08-.16-.32-.24-.68-.42z" />
    </svg>
  </a>
);
