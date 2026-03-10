"use client";

import { useEffect, useRef } from "react";
import BookButton from "@/components/BookButton";

function SonarRings() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[700px] h-[700px] pointer-events-none hidden lg:block">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-white/10"
          style={{
            animation: `sonar 4s ease-out ${i * 1}s infinite`,
          }}
        />
      ))}
      {/* Center ear icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <EarIcon />
        </div>
      </div>
    </div>
  );
}

function EarIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden
    >
      {/* Stylized audiogram / hearing waveform */}
      <circle cx="36" cy="36" r="28" fill="rgba(255,255,255,0.05)" />
      {/* Frequency bars — an audiogram-inspired graphic */}
      <rect x="14" y="44" width="6" height="12" rx="3" fill="white" opacity="0.5" />
      <rect x="24" y="36" width="6" height="20" rx="3" fill="white" opacity="0.6" />
      <rect x="34" y="28" width="6" height="28" rx="3" fill="#D4924A" opacity="0.9" />
      <rect x="44" y="32" width="6" height="24" rx="3" fill="white" opacity="0.6" />
      <rect x="54" y="38" width="6" height="18" rx="3" fill="white" opacity="0.5" />
      {/* Curve connecting the bars */}
      <path
        d="M17 44 Q27 28 37 22 Q47 28 57 38"
        stroke="#D4924A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

function WaveformDecoration() {
  return (
    <div className="absolute bottom-24 left-0 right-0 flex items-end justify-center gap-1 opacity-20 pointer-events-none">
      {Array.from({ length: 40 }, (_, i) => {
        const heights = [12, 24, 18, 36, 28, 44, 32, 20, 40, 26, 16, 38, 22, 48, 30, 36, 20, 44, 18, 28, 40, 16, 32, 24, 48, 20, 36, 12, 28, 40, 18, 32, 24, 44, 16, 38, 22, 30, 20, 14];
        return (
          <div
            key={i}
            className="w-1.5 rounded-full bg-white"
            style={{
              height: `${heights[i % heights.length]}px`,
              animation: `waveBar ${1.5 + (i % 5) * 0.2}s ease-in-out ${i * 0.05}s infinite`,
              transformOrigin: "bottom",
            }}
          />
        );
      })}
    </div>
  );
}

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".hero-item");
    children.forEach((child, i) => {
      (child as HTMLElement).style.animationDelay = `${i * 120}ms`;
      child.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #08202A 0%, #0D3040 30%, #1B4F5A 70%, #0A2530 100%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Sonar rings + ear icon — decorative right side */}
      <SonarRings />

      {/* Waveform decoration at bottom */}
      <WaveformDecoration />

      {/* Main content */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-32">
        <div className="max-w-2xl">
          {/* Pill label */}
          <div
            className="hero-item opacity-0 inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-sm text-white/80"
            style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            Bradford&apos;s Premier Audiology Clinic
          </div>

          {/* Headline */}
          <h1 className="hero-item opacity-0 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[1.05] tracking-tight mb-6">
            Hear Clearly.
            <br />
            <span style={{ color: "#D4924A" }}>Live Fully.</span>
          </h1>

          {/* Subline */}
          <p className="hero-item opacity-0 text-lg sm:text-xl text-white/65 mb-10 max-w-lg leading-relaxed">
            Compassionate, expert audiology care from{" "}
            <span className="text-white/90 font-medium">Dr. John Smith, Au.D.</span>{" "}
            Personalized hearing solutions for every stage of life, right here in Bradford, Ontario.
          </p>

          {/* CTAs */}
          <div className="hero-item opacity-0 flex flex-wrap gap-4 mb-16">
            <BookButton
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #D4924A, #C07A30)",
                boxShadow: "0 8px 32px rgba(212,146,74,0.35)",
              }}
            >
              Book an Appointment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </BookButton>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-300 hover:bg-white/15"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Explore Services
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-item opacity-0 flex flex-wrap gap-8 pt-8 border-t border-white/10">
            {[
              { value: "500+", label: "Patients Served" },
              { value: "6", label: "Services Offered" },
              { value: "5", label: "Insurance Plans" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/45 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave transition into next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: "88px", display: "block" }}
        >
          <path
            d="M0 88L80 76C160 65 320 42 480 36C640 30 800 42 960 52C1120 62 1280 70 1360 74L1440 78V88H0Z"
            fill="#F8F7F4"
          />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-5 h-8 rounded-full border border-white/50 flex justify-center pt-1.5">
          <div
            className="w-1 h-2 rounded-full bg-white"
            style={{ animation: "float 2s ease-in-out infinite" }}
          />
        </div>
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
