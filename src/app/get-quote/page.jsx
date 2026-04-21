import QuoteClient from "./QuoteClient";

export const metadata = {
  title: "Get Free Moving Quote | Arpan India Packers & Movers Chennai",
  description: "Get a free moving quote from Arpan India. No hidden charges, fast response, and expert advice. Fill the form for a quick callback.",
  alternates: {
    canonical: "https://arpanpackerschennai.com/get-quote",
  },
  openGraph: {
    title: "Request a Free Moving Quote - Arpan India Chennai",
    description: "Get best-in-class relocation services at affordable prices. Fill our quick form for a personalized estimate.",
    url: "https://arpanpackerschennai.com/get-quote",
    type: "website",
  },
  keywords: "free moving quote Chennai, packers movers Chennai quote, moving estimate Chennai, affordable packers movers quote, relocate Chennai free quote, shifting cost Chennai"
};

export default function QuotePage() {
  return <QuoteClient />;
}
