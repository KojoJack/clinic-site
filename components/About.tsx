"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const credentials = [
  { label: "Degree", value: "Doctor of Audiology (Au.D.)" },
  { label: "University", value: "Western University, London ON" },
  { label: "Specialty", value: "Diagnostic & Rehabilitative Audiology" },
  { label: "Member", value: "Canadian Academy of Audiology" },
];


export default function About() {
  const { ref: leftRef, inView: leftIn } = useInView(0.15);
  const { ref: rightRef, inView: rightIn } = useInView(0.15);

  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D2D38 0%, #1B4F5A 60%, #0F3844 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: "radial-gradient(circle, white, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #D4924A, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase">
            <span className="w-8 h-px bg-accent" />
            Meet Your Audiologist
            <span className="w-8 h-px bg-accent" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — headshot card */}
          <div
            ref={leftRef}
            className={`relative transition-all duration-700 ${
              leftIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative mx-auto max-w-sm">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{ background: "radial-gradient(ellipse, #D4924A, transparent)" }}
              />

              {/* Card */}
              <div
                className="relative rounded-3xl overflow-hidden aspect-[3/4]"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {/* Photo */}
                <Image
                  src="/pexels-konrads-photo-32351209.jpg"
                  alt="Dr. John Smith, Au.D. — Audiologist"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />

                {/* Subtle teal tint overlay for brand consistency */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(13,45,56,0.08) 0%, rgba(13,45,56,0.0) 40%, rgba(13,45,56,0.75) 100%)" }}
                />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                  <div className="text-white font-serif text-xl font-bold drop-shadow">Dr. John Smith</div>
                  <div className="text-white/80 text-sm mt-0.5 drop-shadow">Au.D. · Audiologist</div>
                  <div className="mt-2 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <circle cx="6" cy="6" r="5" stroke="#D4924A" strokeWidth="1.5" />
                      <path d="M6 4v3l2 1" stroke="#D4924A" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span className="text-white/80 text-xs">Western University</span>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, #D4924A, #E8B87A, #D4924A)" }} />
              </div>

              {/* Floating credential badge */}
              <div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-5 py-3 shadow-xl"
                style={{ animation: "float 5s ease-in-out 0.5s infinite" }}
              >
                <div className="text-xs text-muted font-medium">Licensed by</div>
                <div className="text-primary font-bold text-sm">CAA · OAO</div>
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 ${
              rightIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Expertise You Can{" "}
              <span style={{ color: "#D4924A" }}>Trust</span>
            </h2>

            <p className="text-white/65 text-lg leading-relaxed mb-6">
              Dr. John Smith is a Doctor of Audiology (Au.D.) who earned his degree from{" "}
              <span className="text-white/90 font-medium">Western University</span> in London, Ontario. With years of clinical experience, he brings warmth, precision, and genuine care to every patient interaction.
            </p>

            <p className="text-white/65 leading-relaxed mb-10">
              Dr. Smith founded Hear &amp; Now with a simple mission: to make expert hearing care accessible, welcoming, and deeply personal for every patient in Bradford and the surrounding communities. He believes healthy hearing is foundational to quality of life at every age.
            </p>

            {/* Quote */}
            <blockquote
              className="relative pl-6 mb-10"
              style={{ borderLeft: "3px solid #D4924A" }}
            >
              <p className="text-white/80 text-lg italic leading-relaxed">
                &ldquo;Every patient&apos;s hearing journey is unique. My goal is to truly listen — to your concerns, your lifestyle, and your goals — before we ever talk about solutions.&rdquo;
              </p>
              <footer className="mt-3 text-accent text-sm font-semibold">
                — Dr. John Smith, Au.D.
              </footer>
            </blockquote>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">{c.label}</div>
                  <div className="text-white text-sm font-medium leading-snug">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
