"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import BookButton from "@/components/BookButton";

type Service = {
  title: string;
  description: string;
  detail: string;
  bullets: string[];
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Hearing Tests",
    description:
      "Comprehensive audiological evaluations using state-of-the-art equipment. We assess your hearing across all frequencies to create a complete picture of your hearing health.",
    detail:
      "A full hearing evaluation at Hear & Now is a relaxed, unhurried experience. Dr. Smith will review your hearing history, then guide you through a series of simple tests in our sound-treated booth.",
    bullets: [
      "Pure-tone audiometry across all frequencies",
      "Speech recognition and discrimination testing",
      "Middle ear function (tympanometry)",
      "Detailed results explained in plain language",
      "Personalized report and recommendations",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="2" y="17" width="4" height="9" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="8" y="11" width="4" height="15" rx="2" fill="currentColor" opacity="0.7" />
        <rect x="14" y="5" width="4" height="21" rx="2" fill="currentColor" />
        <rect x="20" y="9" width="4" height="17" rx="2" fill="currentColor" opacity="0.7" />
        <path d="M4 17 Q10 7 16 3 Q22 7 22 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Hearing Aids",
    description:
      "Latest hearing aid technology fitted and tuned precisely for your unique hearing profile. We carry top brands and provide ongoing support, adjustments, and follow-up care.",
    detail:
      "Finding the right hearing aid is a journey, and Dr. Smith walks every step with you. We fit and program devices from leading manufacturers, then fine-tune them to your real-world listening environments.",
    bullets: [
      "Top-brand devices including Oticon, Phonak, Starkey & more",
      "Custom fitting and precision programming",
      "Trial periods so you can test before committing",
      "Ongoing adjustments and follow-up appointments",
      "Repair and maintenance support",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4C9 4 5 8 5 13c0 2.5 1 4.8 2.6 6.5L9 22h5l1.4-2.2c.4-.6.6-1.3.6-2V14h-3v4l-.6 1H10l-.8-1C8 16.6 7 15 7 13c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="20" cy="8" r="3" fill="currentColor" opacity="0.3" />
        <path d="M18 8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ear Wax Removal",
    description:
      "Safe, effective, and gentle earwax removal using microsuction and irrigation methods. A quick procedure that can dramatically improve hearing clarity immediately.",
    detail:
      "Excess earwax is one of the most common and correctable causes of temporary hearing loss. Our clinic offers two professional removal methods, chosen based on what's safest and most comfortable for you.",
    bullets: [
      "Microsuction — the gold standard, no water needed",
      "Gentle irrigation for appropriate cases",
      "Immediate improvement in most patients",
      "Safe for patients with perforated eardrums (microsuction)",
      "No referral required — book directly",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 3C9.5 3 6 6.5 6 11c0 2.8 1.5 5.3 3.7 6.7L11 22h6l1.3-4.3C20.5 16.3 22 13.8 22 11c0-4.5-3.5-8-8-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M11 22v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 22v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="11" r="3" fill="currentColor" opacity="0.3" />
        <path d="M14 9v4M12 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Tinnitus Assessment",
    description:
      "Thorough evaluation and evidence-based management for tinnitus. Dr. Smith provides personalized strategies including sound therapy and counselling to help you find relief.",
    detail:
      "Tinnitus — ringing, buzzing, or humming in the ears — can be exhausting to live with. Dr. Smith offers a structured assessment to understand your tinnitus and build a management plan that fits your life.",
    bullets: [
      "Comprehensive tinnitus characterization",
      "Underlying cause identification",
      "Sound therapy and masking strategies",
      "Tinnitus Retraining Therapy (TRT) guidance",
      "Ongoing monitoring and support",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" fill="none" opacity="0.5" />
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" fill="none" opacity="0.3" />
        <path d="M10 14c0-2.2 1.8-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Repairs & Maintenance",
    description:
      "Expert repair service for all major hearing aid brands. From cleaning and tubing replacement to complex technical repairs — keep your devices performing at their best.",
    detail:
      "A well-maintained hearing aid performs better and lasts longer. Our clinic handles everything from routine cleaning to in-depth repairs, keeping your investment in top condition.",
    bullets: [
      "Repairs on all major hearing aid brands",
      "Professional deep cleaning and sanitization",
      "Tubing, dome, and wax filter replacement",
      "Battery and rechargeable system support",
      "Loaner devices available during extended repairs",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M20 4L17 7l1 1 3-3 1 1-3 3 1 1 3-3c1.1 1.1 1.1 2.9 0 4l-8 8c-1.1 1.1-2.9 1.1-4 0s-1.1-2.9 0-4l8-8c1.1-1.1 2.9-1.1 4 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M4 20l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="7" cy="21" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M21 16l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Custom Hearing Protection",
    description:
      "Custom-moulded earplugs for musicians, hunters, swimmers, and industrial workers. Superior comfort and protection compared to off-the-shelf alternatives.",
    detail:
      "Your ears are irreplaceable. Custom hearing protection is moulded precisely to the shape of your ear canal, offering a far superior fit, comfort, and noise seal compared to generic foam earplugs.",
    bullets: [
      "Ear impressions taken in-clinic by Dr. Smith",
      "Musician plugs with flat attenuation filters",
      "Shooter's plugs with impulse noise protection",
      "Swim plugs to keep water out",
      "Industrial and occupational protection options",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 3L5 7v7c0 5 4 9.5 9 11 5-1.5 9-6 9-11V7L14 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M14 3L5 7v7c0 5 4 9.5 9 11 5-1.5 9-6 9-11V7L14 3z" fill="currentColor" opacity="0.1" />
        <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const { ref, inView } = useInView(0.1);
  const [activeService, setActiveService] = useState<Service | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeService]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveService(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            What We Offer
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-5">
            Comprehensive Hearing Care
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From diagnosis to treatment, we provide full-spectrum audiology services
            tailored to your individual needs and lifestyle.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              onLearnMore={() => setActiveService(service)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </section>
  );
}

function ServiceCard({
  service,
  index,
  onLearnMore,
}: {
  service: Service;
  index: number;
  onLearnMore: () => void;
}) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl p-8 border border-transparent transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        boxShadow: "0 2px 16px rgba(27,79,90,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(27,79,90,0.14)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "#D4924A";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(27,79,90,0.06)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-primary transition-all duration-300 group-hover:text-accent"
        style={{ background: "#EBF5F8" }}
      >
        {service.icon}
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl font-bold text-ink mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{service.description}</p>

      {/* Learn more button */}
      <button
        onClick={onLearnMore}
        className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 group/btn cursor-pointer"
      >
        <span>Learn more</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden
          className="transition-transform duration-200 group-hover/btn:translate-x-1"
        >
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm"
        style={{ animation: "fadeIn 0.2s ease-out" }}
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
          style={{ animation: "fadeUp 0.3s cubic-bezier(0.16,1,0.3,1)" }}
          role="dialog"
          aria-modal="true"
          aria-label={service.title}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-ink hover:bg-ink/8 transition-colors z-10"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {/* Header band */}
          <div
            className="rounded-t-3xl px-8 pt-8 pb-7"
            style={{ background: "linear-gradient(135deg, #0D2D38, #1B4F5A)" }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              {service.icon}
            </div>
            <h2 className="font-serif text-2xl font-bold text-white mb-2">{service.title}</h2>
            <p className="text-white/65 text-sm leading-relaxed">{service.detail}</p>
          </div>

          {/* Body */}
          <div className="px-8 py-7">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
              What&apos;s included
            </h3>
            <ul className="space-y-3 mb-8">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink/80">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: "#EBF5F8" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 5l2.5 2.5 3.5-4" stroke="#1B4F5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <BookButton
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #D4924A, #C07A30)",
                boxShadow: "0 4px 20px rgba(212,146,74,0.3)",
              }}
            >
              Book an Appointment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </BookButton>
          </div>
        </div>
      </div>
    </>
  );
}
