"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig, contactContent } from "@/data/siteConfig";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Using Formspree - replace YOUR_FORM_ID in siteConfig.ts with your actual form ID
      // Sign up at https://formspree.io and create a form to get your ID
      const response = await fetch(contactContent.formAction, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {contactContent.heading}
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto rounded-full" />
          <p className="mt-6 text-charcoal/70 max-w-2xl mx-auto text-lg">
            {contactContent.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-offwhite rounded-2xl shadow-sm p-6 md:p-10 border border-olive/5"
        >
          {/* Direct Email Link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-8 pb-8 border-b border-olive/10 text-center">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-olive" />
              <span className="text-charcoal/70">Or email me directly at</span>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-olive font-medium hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-charcoal mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-olive/20 bg-white text-charcoal text-base placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-olive/50 focus:border-transparent transition-all min-h-[48px]"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-charcoal mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-olive/20 bg-white text-charcoal text-base placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-olive/50 focus:border-transparent transition-all min-h-[48px]"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-charcoal mb-2"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-olive/20 bg-white text-charcoal text-base placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-olive/50 focus:border-transparent transition-all resize-y min-h-[120px]"
                placeholder="Tell me about your project or how I can help..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full md:w-auto px-8 py-4 bg-olive text-white font-medium rounded-lg hover:bg-olive/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all min-h-[52px] flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg"
              >
                <CheckCircle size={20} />
                <span>Message sent successfully! I&apos;ll be in touch soon.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg"
              >
                <AlertCircle size={20} />
                <span>
                  Something went wrong. Please try again or email me directly.
                </span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
