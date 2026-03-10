"use client";

import { useInView } from "@/hooks/useInView";

const providers = [
  {
    name: "OHIP",
    description: "Ontario Health Insurance Plan",
    note: "Covered services",
    color: "#1B4F5A",
  },
  {
    name: "Green Shield",
    description: "Green Shield Canada",
    note: "Direct billing",
    color: "#2A7040",
  },
  {
    name: "Sun Life",
    description: "Sun Life Financial",
    note: "Direct billing",
    color: "#E8A020",
  },
  {
    name: "Manulife",
    description: "Manulife Financial",
    note: "Direct billing",
    color: "#C8201A",
  },
  {
    name: "Blue Cross",
    description: "Blue Cross Canada",
    note: "Direct billing",
    color: "#0050A0",
  },
];

function ShieldCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10 2L3 5v6c0 4.2 3 7.9 7 9 4-1.1 7-4.8 7-9V5L10 2z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M10 2L3 5v6c0 4.2 3 7.9 7 9 4-1.1 7-4.8 7-9V5L10 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M7 10l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Insurance() {
  const { ref, inView } = useInView(0.12);

  return (
    <section id="insurance" className="py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Coverage &amp; Billing
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-5">
            We Accept Your Insurance
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We work directly with major Canadian insurance providers so you can focus on
            your hearing health — not the paperwork. Direct billing available.
          </p>
        </div>

        {/* Provider badges */}
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {providers.map((p, i) => (
            <InsuranceBadge key={p.name} provider={p} index={i} parentInView={inView} />
          ))}
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: "💳",
              title: "Direct Billing",
              body: "We bill most insurance companies directly so you don't have to submit claims yourself.",
            },
            {
              icon: "🏥",
              title: "OHIP Eligible",
              body: "Certain diagnostic procedures are covered under the Ontario Health Insurance Plan.",
            },
            {
              icon: "📞",
              title: "Coverage Questions?",
              body: "Call us at (905) 555-0142 and we'll help you understand your coverage before your appointment.",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className={`rounded-2xl p-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                background: "#EBF5F8",
                transitionDelay: `${(i + 2) * 120}ms`,
              }}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-semibold text-ink mb-2">{card.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsuranceBadge({
  provider,
  index,
  parentInView,
}: {
  provider: (typeof providers)[number];
  index: number;
  parentInView: boolean;
}) {
  return (
    <div
      className={`group flex items-center gap-3 bg-white rounded-xl px-6 py-4 transition-all duration-500 hover:-translate-y-1 cursor-default ${
        parentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        boxShadow: "0 2px 16px rgba(27,79,90,0.08)",
        border: "1px solid rgba(27,79,90,0.06)",
        transitionDelay: `${index * 80}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 8px 32px ${provider.color}22`;
        (e.currentTarget as HTMLDivElement).style.borderColor =
          `${provider.color}33`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 16px rgba(27,79,90,0.08)";
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(27,79,90,0.06)";
      }}
    >
      {/* Color dot */}
      <div
        className="w-3 h-3 rounded-full flex-shrink-0"
        style={{ background: provider.color }}
      />
      <div>
        <div
          className="font-bold text-sm"
          style={{ color: provider.color }}
        >
          {provider.name}
        </div>
        <div className="text-muted text-xs">{provider.description}</div>
      </div>
      <div className="ml-1" style={{ color: provider.color }}>
        <ShieldCheck />
      </div>
    </div>
  );
}
