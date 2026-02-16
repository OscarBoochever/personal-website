"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { aboutContent } from "@/data/siteConfig";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {aboutContent.heading}
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start w-full lg:w-auto flex-shrink-0"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-olive/20 shadow-lg mx-auto lg:mx-0">
              <Image
                src={aboutContent.headshot}
                alt="Oscar Boochever"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                priority
              />
            </div>

            {/* Download CV Button - visible on desktop next to photo */}
            <a
              href={aboutContent.resumeLink}
              download
              className="hidden lg:flex items-center gap-2 mt-6 px-6 py-3 bg-olive text-white font-medium rounded-lg hover:bg-olive/90 transition-colors min-h-[48px]"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1"
          >
            <div className="space-y-5 text-charcoal/80 leading-relaxed">
              {aboutContent.bio.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Download CV Button - visible on mobile/tablet below text */}
            <a
              href={aboutContent.resumeLink}
              download
              className="lg:hidden inline-flex items-center gap-2 mt-8 px-6 py-3 bg-olive text-white font-medium rounded-lg hover:bg-olive/90 transition-colors min-h-[48px]"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
