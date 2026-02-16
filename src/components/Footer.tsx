"use client";

import { Mail, Github } from "lucide-react";
import { siteConfig, footerContent } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name / Brand */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">{siteConfig.name}</p>
            <p className="text-white/60 text-sm mt-1">
              Government Technology & Policy Consultant
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <p className="text-center text-white/50 text-sm">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
