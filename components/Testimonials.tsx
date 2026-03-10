"use client";

import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Patricia M.",
    location: "Bradford, ON",
    rating: 5,
    text: "Dr. Smith was incredibly thorough and patient with me. My new hearing aids have completely changed my life. I can finally hear my grandchildren clearly again — I didn't realize how much I had been missing. The whole team is so warm and welcoming.",
    service: "Hearing Aids",
  },
  {
    name: "James K.",
    location: "Barrie, ON",
    rating: 5,
    text: "After years of struggling with tinnitus, Dr. Smith's detailed assessment and personalized management plan gave me real, lasting relief. He took the time to actually explain everything and answer all my questions. Absolutely first-class care.",
    service: "Tinnitus Assessment",
  },
  {
    name: "Susan T.",
    location: "Newmarket, ON",
    rating: 5,
    text: "The ear wax removal was quick, completely painless, and made such a difference immediately. I can't believe how much better my hearing was after just one appointment. I'll definitely be coming back for my annual hearing tests.",
    service: "Ear Wax Removal",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 3.9L8 10.6l-3.6 1.8.7-3.9L2.2 5.7l4-.6L8 1.5z"
            fill={i < count ? "#D4924A" : "#E5E7EB"}
          />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="none" aria-hidden>
      <path
        d="M0 28V16.4C0 7.87 5.04 2.24 15.12 0l1.68 2.8C11.2 4.2 8.4 7.56 8.4 12.88V14H16V28H0zm20 0V16.4C20 7.87 25.04 2.24 35.12 0l1.68 2.8C31.2 4.2 28.4 7.56 28.4 12.88V14H36V28H20z"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="py-24 lg:py-32 bg-[#EBF5F8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Patient Stories
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-5">
            What Our Patients Say
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Real experiences from the people we&apos;re proud to care for every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

        {/* Google review CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-muted text-sm">
            Rated{" "}
            <span className="font-semibold text-ink">5.0 ★</span> on Google Reviews
          </p>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 flex flex-col transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        boxShadow: "0 4px 24px rgba(27,79,90,0.08)",
      }}
    >
      {/* Quote icon */}
      <div className="text-primary mb-6">
        <QuoteIcon />
      </div>

      {/* Stars */}
      <div className="mb-4">
        <StarRating count={testimonial.rating} />
      </div>

      {/* Text */}
      <p className="text-ink/75 leading-relaxed text-sm flex-1 mb-6 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center justify-between pt-5 border-t border-ink/8">
        <div>
          <div className="font-semibold text-ink text-sm">{testimonial.name}</div>
          <div className="text-muted text-xs mt-0.5">{testimonial.location}</div>
        </div>
        <div
          className="text-xs font-medium px-3 py-1 rounded-full"
          style={{ background: "#EBF5F8", color: "#1B4F5A" }}
        >
          {testimonial.service}
        </div>
      </div>
    </div>
  );
}
