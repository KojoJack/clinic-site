"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const hours = [
  { day: "Monday", time: "8:30 am – 5:00 pm" },
  { day: "Tuesday", time: "8:30 am – 5:00 pm" },
  { day: "Wednesday", time: "8:30 am – 5:00 pm" },
  { day: "Thursday", time: "8:30 am – 5:00 pm" },
  { day: "Friday", time: "8:30 am – 4:00 pm" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

const services = [
  "Hearing Test",
  "Hearing Aid Fitting",
  "Ear Wax Removal",
  "Tinnitus Assessment",
  "Repairs & Maintenance",
  "Custom Hearing Protection",
  "General Inquiry",
];

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M3.5 3h4l1.5 3.5L7.5 8c.8 1.6 2.4 3.2 4 4l1.5-1.5L16.5 12v4c0 .8-.7 1.5-1.5 1.5C7.5 17.5.5 10.5.5 3 .5 2.2 1.2 1.5 2 1.5h1.5V3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="1.5" y="3.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M1.5 6l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M9 1.5C6.5 1.5 4.5 3.5 4.5 6c0 3.5 4.5 10.5 4.5 10.5S13.5 9.5 13.5 6c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="9" cy="6" r="1.5" fill="currentColor"/>
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M9 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Contact() {
  const { ref: leftRef, inView: leftIn } = useInView(0.1);
  const { ref: rightRef, inView: rightIn } = useInView(0.1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toLocaleDateString("en-CA", { weekday: "long" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Get In Touch
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-5">
            Book Your Appointment
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Ready to take the first step toward better hearing? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — info panel */}
          <div
            ref={leftRef}
            className={`lg:col-span-2 transition-all duration-700 ${
              leftIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Contact details */}
            <div
              className="rounded-2xl p-8 mb-6"
              style={{ background: "linear-gradient(135deg, #0D2D38, #1B4F5A)", color: "white" }}
            >
              <h3 className="font-serif text-xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                {[
                  { Icon: IconPhone, label: "Phone", value: "(905) 555-0142", href: "tel:9055550142" },
                  { Icon: IconMail, label: "Email", value: "hello@hearandnow.ca", href: "mailto:hello@hearandnow.ca" },
                  { Icon: IconPin, label: "Address", value: "123 Holland St W\nBradford, ON", href: "https://www.google.com/maps/search/?api=1&query=123+Holland+St+W+Bradford+ON" },
                ].map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-3 group"
                    target={label === "Address" ? "_blank" : undefined}
                    rel={label === "Address" ? "noopener noreferrer" : undefined}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white transition-colors group-hover:bg-white/20"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <Icon />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs mb-0.5">{label}</div>
                      <div className="text-white text-sm font-medium whitespace-pre-line leading-snug">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours card */}
            <div
              className="rounded-2xl p-6 bg-white"
              style={{ boxShadow: "0 4px 24px rgba(27,79,90,0.08)" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="text-primary">
                  <IconClock />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink">Office Hours</h3>
              </div>

              <div className="space-y-2">
                {hours.map(({ day, time }) => {
                  const isToday = day === today;
                  const isClosed = time === "Closed";
                  return (
                    <div
                      key={day}
                      className={`flex justify-between items-center text-sm py-2 px-3 rounded-lg transition-colors ${
                        isToday ? "bg-[#EBF5F8]" : ""
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          isToday ? "text-primary" : isClosed ? "text-muted/60" : "text-ink"
                        }`}
                      >
                        {day}
                        {isToday && (
                          <span className="ml-2 text-xs font-normal text-accent">(Today)</span>
                        )}
                      </span>
                      <span
                        className={
                          isClosed
                            ? "text-muted/60"
                            : isToday
                            ? "text-primary font-semibold"
                            : "text-muted"
                        }
                      >
                        {time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div
            ref={rightRef}
            className={`lg:col-span-3 transition-all duration-700 ${
              rightIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className="bg-white rounded-2xl p-8 lg:p-10"
              style={{ boxShadow: "0 4px 24px rgba(27,79,90,0.08)" }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "#EBF5F8" }}
                  >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
                      <circle cx="18" cy="18" r="17" stroke="#1B4F5A" strokeWidth="2" />
                      <path d="M10 18l6 6 10-12" stroke="#1B4F5A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                    Request Received!
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Thank you, {form.name.split(" ")[0]}! We&apos;ll be in touch within one business day to confirm your appointment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-primary underline hover:text-accent transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl font-bold text-ink mb-2">
                    Request an Appointment
                  </h3>
                  <p className="text-muted text-sm mb-8">
                    Fill out the form below and we&apos;ll get back to you promptly to confirm your booking.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field
                        label="Full Name"
                        name="name"
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <Field
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        placeholder="(905) 555-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                      {/* Service select */}
                      <div>
                        <label className="block text-xs font-semibold text-ink/60 uppercase tracking-wider mb-1.5">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-sm text-ink bg-[#F8F7F4] border border-ink/10 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink/60 uppercase tracking-wider mb-1.5">
                        Message <span className="font-normal normal-case">(optional)</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your hearing concerns, preferred appointment times, or any questions you have…"
                        className="w-full px-4 py-3 rounded-xl text-sm text-ink bg-[#F8F7F4] border border-ink/10 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                      style={{
                        background: "linear-gradient(135deg, #1B4F5A, #2A7D8E)",
                        boxShadow: "0 4px 20px rgba(27,79,90,0.3)",
                      }}
                    >
                      Send Appointment Request
                    </button>

                    <p className="text-center text-xs text-muted">
                      Or call us directly at{" "}
                      <a href="tel:9055550142" className="text-primary font-semibold hover:text-accent transition-colors">
                        (905) 555-0142
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-ink/60 uppercase tracking-wider mb-1.5"
      >
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl text-sm text-ink bg-[#F8F7F4] border border-ink/10 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
      />
    </div>
  );
}
