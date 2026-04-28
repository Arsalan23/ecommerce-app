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
      <PageHero eyebrow="Get in Touch" title="Contact Us" subtitle="Have a question about containers, trailers, or cabins? We're here to help with your project." />

      <section className="py-20 container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
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
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-2">Send us a Message</h2>
                  <p className="text-gray-500">Fill out the form below and we'll respond as soon as possible.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <ModernInput
                      label="Full Name"
                      required
                      icon={<User className="h-5 w-5" />}
                      value={formData.name}
                      onChange={(v) => handleChange("name", v)}
                      placeholder="John Smith"
                    />
                    <ModernInput
                      label="Email Address"
                      type="email"
                      required
                      icon={<Mail className="h-5 w-5" />}
                      value={formData.email}
                      onChange={(v) => handleChange("email", v)}
                      placeholder="john@example.com"
                    />
                  </div>

                  <ModernInput
                    label="Phone Number"
                    type="tel"
                    icon={<Phone className="h-5 w-5" />}
                    value={formData.phone}
                    onChange={(v) => handleChange("phone", v)}
                    placeholder="+1 (555) 000-0000"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <ModernSelect
                      label="Subject"
                      required
                      icon={<MessageSquare className="h-5 w-5" />}
                      value={formData.subject}
                      onChange={(v) => handleChange("subject", v)}
                      options={[
                        { value: "", label: "Select a subject" },
                        { value: "quote", label: "Request a Quote" },
                        { value: "shipping", label: "Shipping Question" },
                        { value: "custom", label: "Custom Order" },
                        { value: "support", label: "Customer Support" },
                        { value: "other", label: "Other Inquiry" }
                      ]}
                    />
                    <ModernSelect
                      label="Product Interest"
                      icon={<ChevronDown className="h-5 w-5" />}
                      value={formData.containerType}
                      onChange={(v) => handleChange("containerType", v)}
                      options={[
                        { value: "", label: "Select product type" },
                        { value: "20ft", label: "20ft Container" },
                        { value: "40ft", label: "40ft Container" },
                        { value: "high-cube", label: "High Cube Container" },
                        { value: "reefer", label: "Refrigerated Container" },
                        { value: "trailer", label: "Enclosed Trailer" },
                        { value: "cabin", label: "Modular Cabin" },
                        { value: "other", label: "Other / Not Sure" }
                      ]}
                    />
                  </div>

                  <ModernTextarea
                    label="Your Message"
                    required
                    value={formData.message}
                    onChange={(v) => handleChange("message", v)}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                  />

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-orange hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange/30 hover:shadow-xl hover:shadow-orange/40 hover:-translate-y-0.5"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <a href={SITE.phoneHref} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange transition-colors">
                    <Phone className="h-5 w-5 text-orange group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Phone</div>
                    <div className="font-semibold text-lg">{SITE.phone}</div>
                  </div>
                </a>

                <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange transition-colors">
                    <Mail className="h-5 w-5 text-orange group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Email</div>
                    <div className="font-semibold">{SITE.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Address</div>
                    <div className="font-semibold">{SITE.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Business Hours</div>
                    <div className="font-semibold">Mon - Fri: 8AM - 6PM</div>
                    <div className="text-sm text-white/60">Sat: 9AM - 2PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange/10 rounded-2xl p-6 border border-orange/20">
              <h4 className="font-bold text-navy mb-2">Need Urgent Help?</h4>
              <p className="text-sm text-gray-600 mb-4">For immediate assistance, call us directly. Our team is ready to help!</p>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 text-orange font-semibold hover:underline">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
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
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange focus:bg-white transition-all duration-200"
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
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full pl-12 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <ChevronDown className="h-5 w-5" />
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
        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange focus:bg-white transition-all duration-200 resize-none"
      />
    </div>
  );
}
