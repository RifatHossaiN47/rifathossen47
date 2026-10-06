"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MapPin,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { siteConfig as defaultSiteConfig } from "../../lib/portfolio-data";
import { useSectionData } from "../../lib/use-section-data";

export function Contact() {
  const siteConfig = useSectionData("siteConfig", defaultSiteConfig);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_j38aw0r";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_mlvl35i";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "9Om0NKQMWA5y34NgK";

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      setNotification({
        show: true,
        type: "success",
        message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setNotification({ show: false, type: "success", message: "" }), 6000);
    } catch (error) {
      console.error("Email send failed:", error);
      setNotification({
        show: true,
        type: "error",
        message: "Failed to dispatch message. Please email directly at rifat8851@gmail.com.",
      });
      setTimeout(() => setNotification({ show: false, type: "error", message: "" }), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-5 sm:px-8 border-t border-[#E6E0D6] dark:border-[#2B2824] bg-neutral-50/50 dark:bg-[#151413]/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#D96B27] bg-[#D96B27]/10 border border-[#D96B27]/30 mb-2 uppercase">
            <MessageSquare className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>GET IN TOUCH & CONNECT</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 dark:text-[#F5EFE6] uppercase">
            07 // <span className="text-[#D96B27]">CONTACT & COLLABORATION</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A39E95] mt-1 max-w-2xl font-normal leading-relaxed">
            Available for software engineering positions, peer-reviewed academic research collaborations, and technical consulting.
          </p>
        </div>

        {/* Floating Notification */}
        {notification.show && (
          <div
            className={`mb-6 p-4 rounded-xl flex items-center justify-between gap-3 text-sm animate-in fade-in duration-200 font-mono ${
              notification.type === "success"
                ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800"
                : "bg-red-50 dark:bg-red-950/60 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800"
            }`}
          >
            <div className="flex items-center gap-2.5">
              {notification.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
              )}
              <p>{notification.message}</p>
            </div>
            <button
              onClick={() => setNotification({ show: false, type: "success", message: "" })}
              className="text-xs font-semibold hover:opacity-80"
            >
              ✕
            </button>
          </div>
        )}

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            {/* Quick Email Copy Card */}
            <div className="p-5 bg-white dark:bg-[#181716] rounded-2xl border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs space-y-3">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#D96B27]">
                DIRECT TELEMETRY // EMAIL
              </p>
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824]">
                <span className="text-xs font-mono text-neutral-800 dark:text-[#F5EFE6] truncate">
                  {siteConfig.personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-neutral-600 dark:text-[#A39E95] hover:text-[#D96B27] hover:bg-neutral-200 dark:hover:bg-[#201E1C] transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-[11px] font-mono text-neutral-400">
                {copied ? "Copied to clipboard!" : "Click icon to copy"}
              </p>
            </div>

            {/* Location & Institution */}
            <div className="p-5 bg-white dark:bg-[#181716] rounded-2xl border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs space-y-2.5 text-xs font-mono text-neutral-600 dark:text-[#A39E95]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D96B27] shrink-0" />
                <span>{siteConfig.personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D96B27] shrink-0" />
                <span>Software Engineering & AI Systems</span>
              </div>
            </div>

            {/* Professional Links */}
            <div className="p-5 bg-white dark:bg-[#181716] rounded-2xl border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs space-y-3 font-mono">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D96B27]">
                NETWORKS // CODE
              </p>
              <div className="flex gap-2 text-xs">
                <a
                  href={siteConfig.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-700 dark:text-[#F5EFE6] hover:text-[#D96B27] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#D96B27]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={siteConfig.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-700 dark:text-[#F5EFE6] hover:text-[#D96B27] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working EmailJS Form (7 Cols) */}
          <div className="md:col-span-7 bg-white dark:bg-[#181716] rounded-2xl p-6 sm:p-8 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs">
            <h3 className="font-display text-2xl tracking-wide text-neutral-900 dark:text-[#F5EFE6] mb-4 uppercase">
              Dispatch a Direct Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-medium text-neutral-700 dark:text-[#A39E95] mb-1.5 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your Name or Organization"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 dark:bg-[#121110] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D96B27] transition-colors font-mono"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono font-medium text-neutral-700 dark:text-[#A39E95] mb-1.5 uppercase">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your.email@organization.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 dark:bg-[#121110] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D96B27] transition-colors font-mono"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-medium text-neutral-700 dark:text-[#A39E95] mb-1.5 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Discuss a software engineering role, peer-reviewed research collaboration, or project inquiry..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 dark:bg-[#121110] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D96B27] transition-colors resize-none font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-[#D96B27] hover:bg-[#C85A17] text-white text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? "DISPATCHING MESSAGE..." : "SEND MESSAGE // EXECUTE"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
