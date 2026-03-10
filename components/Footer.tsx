import Link from "next/link";
import BookButton from "@/components/BookButton";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About Dr. Smith", href: "#about" },
  { label: "Insurance", href: "#insurance" },
];

const services = [
  "Hearing Tests",
  "Hearing Aids",
  "Ear Wax Removal",
  "Tinnitus Assessment",
  "Repairs & Maintenance",
  "Custom Hearing Protection",
];

function FooterLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.06)" />
        <rect x="10" y="25" width="5" height="10" rx="2.5" fill="white" opacity="0.6" />
        <rect x="17" y="17" width="5" height="18" rx="2.5" fill="#D4924A" />
        <rect x="24" y="21" width="5" height="14" rx="2.5" fill="white" opacity="0.6" />
      </svg>
      <div>
        <div className="font-serif text-xl font-bold text-white">Hear &amp; Now</div>
        <div className="text-white/40 text-xs">Audiology Clinic</div>
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "linear-gradient(180deg, #0A2030 0%, #071620 100%)" }}
      className="text-white"
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <FooterLogo />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mt-5 mb-6">
              Expert audiology care with a personal touch. Serving Bradford and surrounding communities across Simcoe County.
            </p>
            {/* Contact blurb */}
            <div className="space-y-2">
              <a href="tel:9055550142" className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm group">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="flex-shrink-0">
                  <path d="M2.5 2h3l1.2 2.7-1.5 1C5.8 7.3 7.2 8.7 8.8 9.3l1-1.5L12.5 9v3C12.5 12.8 12 13.5 11.5 13.5 5 13.5.5 9 .5 2.5.5 2 1.2 1.5 2 1.5l.5.5z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                </svg>
                (905) 555-0142
              </a>
              <a href="mailto:hello@hearandnow.ca" className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm group">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="flex-shrink-0">
                  <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <path d="M1 5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                hello@hearandnow.ca
              </a>
              <p className="flex items-start gap-2 text-white/60 text-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="flex-shrink-0 mt-0.5">
                  <path d="M7 1C4.8 1 3 2.8 3 5c0 2.8 4 8 4 8s4-5.2 4-8c0-2.2-1.8-4-4-4z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <circle cx="7" cy="5" r="1.2" fill="currentColor"/>
                </svg>
                123 Holland St W, Bradford ON
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-accent text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <BookButton className="text-white/50 hover:text-accent text-sm transition-colors cursor-pointer bg-transparent p-0 border-0">
                  Book Appointment
                </BookButton>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-accent text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Office Hours
            </h3>
            <div className="space-y-2 text-sm">
              {[
                { days: "Mon – Thu", time: "8:30 am – 5:00 pm" },
                { days: "Friday", time: "8:30 am – 4:00 pm" },
                { days: "Saturday", time: "By appointment" },
                { days: "Sunday", time: "Closed" },
              ].map(({ days, time }) => (
                <div key={days} className="flex justify-between gap-4">
                  <span className="text-white/40">{days}</span>
                  <span className={`text-right ${time === "Closed" ? "text-white/25" : "text-white/60"}`}>
                    {time}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <BookButton className="mt-8 inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-accent/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-900/20">
              Book Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </BookButton>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-6"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center">
            &copy; {year} Hear &amp; Now Audiology Clinic. All rights reserved.
            <span className="mx-2">·</span>
            Dr. John Smith, Au.D.
          </p>
          <p className="text-white/20 text-xs">
            123 Holland St W, Bradford, Ontario
          </p>
        </div>
      </div>
    </footer>
  );
}
