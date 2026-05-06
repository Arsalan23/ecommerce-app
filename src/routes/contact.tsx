import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, ChevronDown } from "lucide-react";
import { SITE } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact BoxCraft — Get Your Free Quote Today" },
      { name: "description", content: "Contact BoxCraft for premium shipping containers, trailers, and cabins. Free quotes within 1 hour. Call +1 (435) 229-9359." },
    ],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    containerType: "",
    message: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Get In Touch" subtitle="Have a question about a container, trailer, or cabin? Our team is here to help. Fill out the form and we will get back to you within 1 business day." />

      <section className="py-16 bg-white">
        <div className="container-px mx-auto max-w-6xl">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden grid lg:grid-cols-[320px,1fr]">
            <aside className="bg-gray-50 p-10 lg:border-r border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-10 text-sm leading-relaxed">
                Have a question about a container, trailer, or cabin? Our team is here to help.
                Fill out the form and we will get back to you within 1 business day.
              </p>

              <div className="space-y-7 text-sm">
                <div className="flex items-start gap-4">
                  <span className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mt-0.5 shrink-0 shadow-sm">
                    <MapPin className="h-4 w-4 text-orange" />
                  </span>
                  <div>
                    <p className="text-navy font-semibold uppercase text-xs tracking-wide mb-1">Location</p>
                    <p className="text-gray-600 leading-relaxed">{SITE.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mt-0.5 shrink-0 shadow-sm">
                    <Phone className="h-4 w-4 text-orange" />
                  </span>
                  <div>
                    <p className="text-navy font-semibold uppercase text-xs tracking-wide mb-1">Phone</p>
                    <a href={SITE.phoneHref} className="text-gray-600 leading-relaxed inline-block hover:text-orange">{SITE.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mt-0.5 shrink-0 shadow-sm">
                    <Mail className="h-4 w-4 text-orange" />
                  </span>
                  <div>
                    <p className="text-navy font-semibold uppercase text-xs tracking-wide mb-1">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-gray-600 leading-relaxed inline-block hover:text-orange">{SITE.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mt-0.5 shrink-0 shadow-sm">
                    <Clock className="h-4 w-4 text-orange" />
                  </span>
                  <div>
                    <p className="text-navy font-semibold uppercase text-xs tracking-wide mb-1">Business Hours</p>
                    <p className="text-gray-600 leading-relaxed">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 leading-relaxed">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600 leading-relaxed">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-navy mb-3">Thank You!</h2>
                  <p className="text-gray-600 text-lg">Your message has been sent successfully.</p>
                  <p className="text-gray-500 mt-2">We'll get back to you within 1 business day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <ModernInput
                      label="Your Name"
                      required
                      icon={<User className="h-5 w-5" />}
                      value={formData.name}
                      onChange={(v) => handleChange("name", v)}
                      placeholder="Full Name"
                    />
                    <ModernInput
                      label="Email Address"
                      type="email"
                      required
                      icon={<Mail className="h-5 w-5" />}
                      value={formData.email}
                      onChange={(v) => handleChange("email", v)}
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <ModernInput
                      label="Phone Number"
                      type="tel"
                      icon={<Phone className="h-5 w-5" />}
                      value={formData.phone}
                      onChange={(v) => handleChange("phone", v)}
                      placeholder="Phone Number"
                    />
                    <ModernSelect
                      label="Subject"
                      required
                      icon={<MessageSquare className="h-5 w-5" />}
                      value={formData.subject}
                      onChange={(v) => handleChange("subject", v)}
                      options={[
                        { value: "", label: "General Inquiry" },
                        { value: "quote", label: "Request a Quote" },
                        { value: "shipping", label: "Shipping Question" },
                        { value: "return", label: "Return / Refund" },
                        { value: "custom", label: "Custom Order" },
                        { value: "other", label: "Other" }
                      ]}
                    />
                  </div>

                  <ModernSelect
                    label="Container Type of Interest"
                    icon={<ChevronDown className="h-5 w-5" />}
                    value={formData.containerType}
                    onChange={(v) => handleChange("containerType", v)}
                    options={[
                      { value: "", label: "-- Select a Container Type --" },
                      { value: "20ft", label: "20ft Standard Container" },
                      { value: "40ft", label: "40ft Standard Container" },
                      { value: "high-cube", label: "High Cube Container" },
                      { value: "reefer", label: "Refrigerated Container" },
                      { value: "modified", label: "Modified / Custom Container" },
                      { value: "trailer", label: "Enclosed Trailer" },
                      { value: "horse", label: "Horse Trailer" },
                      { value: "cabin", label: "Modular Cabin" },
                      { value: "other", label: "Other / Not Sure" }
                    ]}
                  />

                  <ModernTextarea
                    label="Message"
                    required
                    value={formData.message}
                    onChange={(v) => handleChange("message", v)}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                  />

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-orange hover:bg-orange-600 text-white font-bold uppercase text-xs tracking-widest rounded-md transition-colors"
                  >
                    <Send className="h-4 w-4 inline-block mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Modern Input Component
function ModernInput({ label, required, icon, value, onChange, type = "text", placeholder }: {
  label: string;
  required?: boolean;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <label className="block text-sm font-semibold text-navy mb-2">
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
        />
      </div>
    </div>
  );
}

// Modern Select Component
function ModernSelect({ label, required, icon, value, onChange, options }: {
  label: string;
  required?: boolean;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <label className="block text-sm font-semibold text-navy mb-2">
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full pl-10 pr-10 py-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors appearance-none cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

// Modern Textarea Component
function ModernTextarea({ label, required, value, onChange, placeholder, rows = 4 }: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div className="relative">
      <label className="block text-sm font-semibold text-navy mb-2">
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors resize-none"
      />
    </div>
  );
}
