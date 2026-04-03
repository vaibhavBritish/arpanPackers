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
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="logo"
              className={`transition-all duration-300 ${scrolled ? "h-28 md:h-28 md:w-28" : "h-28 md:h-36 md:w-36"
                }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${isActive(item.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="text-sm font-semibold text-blue-700"
            >
              📞 +91 81990 02004
            </a>
            <button
              onClick={handleGetQuote}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="bg-white w-[80%] max-w-sm h-full p-6 flex flex-col relative">

            {/* Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              ✕
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-6 mt-4">
              <img
                src="/logo.png"
                alt="logo"
                className="h-12 object-contain"
              />
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`p-3 rounded-full font-medium text-lg ${isActive(item.href)
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700"
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
                className="w-full bg-orange-500 text-white py-4 rounded-full text-lg font-medium"
              >
                Get Free Quote
              </button>
              <a
                href="tel:+919876543210"
                className="w-full border py-4 rounded-full text-center text-lg"
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