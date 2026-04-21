import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Packing & Moving Chennai | Home, Office & Vehicle",
  description: "Arpan India offers home shifting, office relocation, car & bike transport,and packing services across Chennai. Professional, insured, and affordable. Book now!",
  alternates: {
    canonical: "https://arpanpackerschennai.com/services",
  },
  openGraph: {
    title: "Our Moving Services - Comprehensive Relocation Solutions",
    description: "From local shifting to pan-India moving, Arpan India provides expert services for every relocation need.",
    url: "https://arpanpackerschennai.com/services",
    type: "website",
  },
  keywords:"home shifting Chennai, office relocation Chennai, car transport Chennai, bike transport Chennai, packing services Chennai, household shifting Chennai, corporate relocation Chennai, furniture shifting Chennai, local packers movers Chennai"
};

export default function ServicesPage() {
  return <ServicesClient />;
}
