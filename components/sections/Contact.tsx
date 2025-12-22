"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Github,
  Linkedin,
  Youtube,
  Send,
  GraduationCap,
  CheckCircle,
  XCircle,
} from "lucide-react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // REPLACE THESE VALUES WITH YOUR EMAILJS CREDENTIALS
      await emailjs.sendForm(
        "service_j38aw0r", // e.g., "service_x9s2z"
        "template_mlvl35i", // e.g., "template_8d2x9"
        formRef.current!,
        "9Om0NKQMWA5y34NgK" // e.g., "user_8s9d8s9d8"
      );

      setNotificationType("success");
      setShowNotification(true);
      setFormData({ name: "", email: "", message: "" });

      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setNotificationType("error");
      setShowNotification(true);

      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-[#0ea5e9]/5 to-[#14b8a6]/5 dark:from-[#10b981]/5 dark:to-[#06b6d4]/5"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Success/Error Notification */}
        {showNotification && (
          <div
            className={`fixed top-8 right-8 z-50 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in-right ${
              notificationType === "success"
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                : "bg-gradient-to-r from-red-500 to-rose-500 text-white"
            }`}
            style={{
              animation: "slideInRight 0.3s ease-out",
            }}
          >
            {notificationType === "success" ? (
              <>
                <CheckCircle className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Message Sent Successfully!</p>
                  <p className="text-sm opacity-90">
                    I&apos;ll get back to you soon.
                  </p>
                </div>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Failed to Send Message</p>
                  <p className="text-sm opacity-90">Please try again later.</p>
                </div>
              </>
            )}
            <button
              onClick={() => setShowNotification(false)}
              className="ml-4 hover:opacity-80 transition-opacity"
            >
              ✕
            </button>
          </div>
        )}

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:rifat8851@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className="p-3 bg-[#0ea5e9]/10 dark:bg-[#10b981]/10 rounded-full group-hover:bg-[#0ea5e9] dark:group-hover:bg-[#10b981] transition-colors">
                    <Mail className="w-6 h-6 text-[#0ea5e9] dark:text-[#10b981] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Email
                    </p>
                    <p>rifat8851@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/RifatHossaiN47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className="p-3 bg-[#0ea5e9]/10 dark:bg-[#10b981]/10 rounded-full group-hover:bg-[#0ea5e9] dark:group-hover:bg-[#10b981] transition-colors">
                    <Github className="w-6 h-6 text-[#0ea5e9] dark:text-[#10b981] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      GitHub
                    </p>
                    <p>@RifatHossaiN47</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/rifathossain47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className="p-3 bg-[#0ea5e9]/10 dark:bg-[#10b981]/10 rounded-full group-hover:bg-[#0ea5e9] dark:group-hover:bg-[#10b981] transition-colors">
                    <Linkedin className="w-6 h-6 text-[#0ea5e9] dark:text-[#10b981] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      LinkedIn
                    </p>
                    <p>rifathossain47</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@RifatHossaiNBro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className="p-3 bg-[#0ea5e9]/10 dark:bg-[#10b981]/10 rounded-full group-hover:bg-[#0ea5e9] dark:group-hover:bg-[#10b981] transition-colors">
                    <Youtube className="w-6 h-6 text-[#0ea5e9] dark:text-[#10b981] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      YouTube
                    </p>
                    <p>@RifatHossaiNBro</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl">
                  <div className="p-3 bg-[#0ea5e9]/10 dark:bg-[#10b981]/10 rounded-full">
                    <GraduationCap className="w-6 h-6 text-[#0ea5e9] dark:text-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      University
                    </p>
                    <p>
                      CUET (Chittagong University of Engineering & Technology)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl mb-6">Send a Message</h3>
            {/* Added ref to the form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // This name must match the variable in your EmailJS template
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] dark:focus:ring-[#10b981] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" // This name must match the variable in your EmailJS template
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] dark:focus:ring-[#10b981] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // This name must match the variable in your EmailJS template
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] dark:focus:ring-[#10b981] transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
