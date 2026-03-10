"use client";

import { useInView } from "@/hooks/useInView";

const credentials = [
  { label: "Degree", value: "Doctor of Audiology (Au.D.)" },
  { label: "University", value: "Western University, London ON" },
  { label: "Specialty", value: "Diagnostic & Rehabilitative Audiology" },
  { label: "Member", value: "Canadian Academy of Audiology" },
];

function MaleHeadshot() {
  return (
    <svg
      viewBox="0 0 200 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Dr. John Smith, Audiologist"
    >
      {/* Suit / shoulders */}
      <path
        d="M0 270 L0 198 Q42 180 72 174 L88 168 Q100 218 100 218 Q100 218 112 168 L128 174 Q158 180 200 198 L200 270 Z"
        fill="#1A2830"
      />
      {/* Lapels */}
      <path d="M88 174 L100 162 L100 218 L88 218 Z" fill="#243340" />
      <path d="M112 174 L100 162 L100 218 L112 218 Z" fill="#1A2830" />
      {/* White shirt */}
      <path d="M94 174 L100 165 L106 174 L104 218 L96 218 Z" fill="white" opacity="0.92" />
      {/* Tie */}
      <path d="M98 168 L102 168 L106 192 L100 215 L94 192 Z" fill="#D4924A" />
      {/* Tie knot */}
      <path d="M97 168 L100 164 L103 168 L100 172 Z" fill="#C07A30" />

      {/* Neck */}
      <rect x="88" y="156" width="24" height="30" rx="6" fill="#E2A87A" />

      {/* Head */}
      <ellipse cx="100" cy="108" rx="52" ry="60" fill="#E2A87A" />

      {/* Hair — short, professional, dark */}
      <path
        d="M48 100 Q52 44 100 40 Q148 44 152 100 Q138 68 100 65 Q62 68 48 100 Z"
        fill="#1C1208"
      />
      {/* Hair sides */}
      <path d="M48 100 Q45 120 49 138 Q53 116 58 104 Z" fill="#1C1208" />
      <path d="M152 100 Q155 120 151 138 Q147 116 142 104 Z" fill="#1C1208" />
      {/* Hair temples */}
      <path d="M48 100 Q50 85 56 78 Q52 90 55 102 Z" fill="#1C1208" />
      <path d="M152 100 Q150 85 144 78 Q148 90 145 102 Z" fill="#1C1208" />

      {/* Ears */}
      <ellipse cx="49" cy="116" rx="8" ry="11" fill="#D49A6A" />
      <path d="M51 110 Q54 116 51 122" stroke="#C08860" strokeWidth="1" fill="none" />
      <ellipse cx="151" cy="116" rx="8" ry="11" fill="#D49A6A" />
      <path d="M149 110 Q146 116 149 122" stroke="#C08860" strokeWidth="1" fill="none" />

      {/* Eyebrows — dark, slightly arched */}
      <path d="M70 93 Q80 87 90 91" stroke="#1C1208" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M110 91 Q120 87 130 93" stroke="#1C1208" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Eyes */}
      <ellipse cx="82" cy="106" rx="9" ry="6.5" fill="white" />
      <ellipse cx="118" cy="106" rx="9" ry="6.5" fill="white" />
      {/* Irises */}
      <circle cx="82" cy="106" r="5" fill="#3D2A1A" />
      <circle cx="118" cy="106" r="5" fill="#3D2A1A" />
      {/* Pupils */}
      <circle cx="82" cy="106" r="2.5" fill="#0D0800" />
      <circle cx="118" cy="106" r="2.5" fill="#0D0800" />
      {/* Catchlights */}
      <circle cx="84" cy="104" r="1.3" fill="white" />
      <circle cx="120" cy="104" r="1.3" fill="white" />
      {/* Lower eyelid shadow */}
      <path d="M73 110 Q82 113 91 110" stroke="#D49A6A" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M109 110 Q118 113 127 110" stroke="#D49A6A" strokeWidth="0.8" fill="none" opacity="0.6" />

      {/* Nose */}
      <path d="M100 115 Q97 126 93 130 Q100 134 107 130 Q103 126 100 115" fill="#D49A6A" opacity="0.7" />
      <circle cx="94" cy="129" r="3" fill="#D49A6A" opacity="0.5" />
      <circle cx="106" cy="129" r="3" fill="#D49A6A" opacity="0.5" />

      {/* Mouth / subtle smile */}
      <path d="M88 148 Q100 157 112 148" stroke="#B07850" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M93 148 Q100 152 107 148" fill="#C08868" opacity="0.4" />

      {/* Subtle cheek shading */}
      <ellipse cx="72" cy="128" rx="12" ry="8" fill="#E89060" opacity="0.15" />
      <ellipse cx="128" cy="128" rx="12" ry="8" fill="#E89060" opacity="0.15" />

      {/* Chin shadow */}
      <ellipse cx="100" cy="162" rx="22" ry="5" fill="#1B4F5A" opacity="0.25" />
    </svg>
  );
}

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
                style={{
                  background: "linear-gradient(180deg, #2A7080 0%, #1B4F5A 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Headshot SVG fills the card */}
                <div className="absolute inset-0">
                  <MaleHeadshot />
                </div>

                {/* Name overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-5"
                  style={{ background: "linear-gradient(to top, rgba(13,45,56,0.95) 0%, transparent 100%)" }}
                >
                  <div className="text-white font-serif text-xl font-bold">Dr. John Smith</div>
                  <div className="text-white/60 text-sm mt-0.5">Au.D. · Audiologist</div>
                  <div className="mt-2 inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <circle cx="6" cy="6" r="5" stroke="#D4924A" strokeWidth="1.5" />
                      <path d="M6 4v3l2 1" stroke="#D4924A" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span className="text-white/70 text-xs">Western University</span>
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
