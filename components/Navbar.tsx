"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BookButton from "@/components/BookButton";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insurance", href: "#insurance" },
  { label: "Contact", href: "#contact" },
];

function LogoIcon({ dark }: { dark?: boolean }) {
  const color = dark ? "#1B4F5A" : "white";
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="18" fill={dark ? "#EBF5F8" : "rgba(255,255,255,0.15)"} />
      <rect x="9" y="21" width="4" height="9" rx="2" fill={color} />
      <rect x="15" y="14" width="4" height="16" rx="2" fill="#D4924A" />
      <rect x="21" y="17" width="4" height="13" rx="2" fill={color} />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-ink" : "text-white";
  const mutedColor = scrolled ? "text-muted" : "text-white/60";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <LogoIcon dark={scrolled} />
          <div>
            <div
              className={`font-serif text-lg font-bold leading-tight transition-colors ${textColor}`}
            >
              Hear &amp; Now
            </div>
            <div className={`text-xs transition-colors ${mutedColor}`}>
              Audiology Clinic
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-ink/70 hover:text-accent" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <BookButton
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-px ${
              scrolled
                ? "bg-accent text-white hover:bg-accent/90"
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            Book Appointment
          </BookButton>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-ink" : "bg-white"
                } ${
                  menuOpen && i === 0
                    ? "translate-y-2 rotate-45"
                    : menuOpen && i === 1
                    ? "opacity-0"
                    : menuOpen && i === 2
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }`}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-ink/70 hover:text-primary font-medium py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <BookButton
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold mt-2"
          >
            Book Appointment
          </BookButton>
        </div>
      </div>
    </header>
  );
}
