"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleGetQuote = () => {
    setMobileOpen(false);
    router.push("/get-quote");
  };

  return (
    <>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white border-b border-gray-50"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-20 md:h-24 ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/mainLogo.png"
              alt="Arpan India Packers & Movers"
              className={`transition-all duration-300 py-3 pointer-events-none object-contain ${scrolled ? "h-16 md:h-20" : "h-20 md:h-24"
                }`}
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-3xl font-black text-navy font-poppins tracking-tighter uppercase">
                Arpan India
              </span>
              <span className="text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-[0.25em] -mt-0.5">
                Packers and Movers
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-200 ${isActive(item.href)
                  ? "text-primary"
                  : "text-[#000814] hover:text-primary"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918199002004"
              className="text-sm font-bold text-[#000814] hover:text-primary transition-colors"
            >
              📞 +91 81990 02004
            </a>
            <button
              onClick={handleGetQuote}
              className="bg-[#000814] hover:bg-black text-white px-6 py-2.5 rounded-md font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Free Quote
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
          >
            <span className="w-6 h-0.5 bg-zinc-900"></span>
            <span className="w-6 h-0.5 bg-zinc-900"></span>
            <span className="w-6 h-0.5 bg-zinc-900"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden backdrop-blur-sm">
          <div className="max-w-sm h-full p-6 flex flex-col relative border-r border-gray-100">

            {/* Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-2xl text-zinc-900"
            >
              ✕
            </button>

            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-10 mt-4">
              <img
                src="/mainLogo.png"
                alt="Arpan India Packers & Movers"
                className="h-14 object-contain"
              />
              <div className="flex flex-col leading-none text-left">
                <span className="text-2xl font-black text-navy font-poppins tracking-tighter uppercase">
                  Arpan
                </span>
                <span className="text-[9px] font-bold text-primary uppercase tracking-widest -mt-0.5">
                  Packers and Movers
                </span>
              </div>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`p-4 rounded-xl font-bold text-lg transition ${isActive(item.href)
                    ? "bg-primary/10 text-primary shadow-sm"
                    : "text-[#000814] hover:bg-gray-50"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="mt-auto flex flex-col gap-3 pt-6">
              <button
                onClick={handleGetQuote}
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-full text-lg font-medium transition-colors"
              >
                Get Free Quote
              </button>
              <a
                href="tel:+918199002004"
                className="w-full border border-gray-200 py-4 rounded-full text-center text-lg font-bold text-[#001219]"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};