"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "@/data/heroImages";
import { heroContent } from "@/data/siteConfig";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // Swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next image
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
      } else {
        // Swipe right - previous image
        setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Actual image */}
            {heroImages[currentIndex]?.src && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={heroImages[currentIndex].src}
                alt={heroImages[currentIndex].alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: heroImages[currentIndex]?.mobilePosition || "center" }}
              />
            )}

            {/* Dark overlay for text readability */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: `rgba(0, 0, 0, ${(heroImages[currentIndex]?.overlayOpacity ?? 65) / 100})` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Optional caption */}
        {heroImages[currentIndex]?.caption && (
          <motion.div
            key={`caption-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-8 right-4 sm:right-8 text-white/70 text-xs sm:text-sm font-light"
          >
            {heroImages[currentIndex].caption}
          </motion.div>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          {heroContent.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 mx-auto leading-relaxed"
        >
          Building products and leveraging data for<br className="sm:hidden" /> <span className="whitespace-nowrap">state & local government</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={heroContent.ctaPrimary.href}
            className="w-36 sm:w-[152px] py-3 sm:py-4 bg-olive text-white font-medium rounded-lg hover:bg-olive/90 transition-colors min-h-[44px] flex items-center justify-center"
          >
            {heroContent.ctaPrimary.text}
          </a>
          <a
            href={heroContent.ctaSecondary.href}
            className="w-36 sm:w-[152px] py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border border-white/30 hover:bg-white/20 transition-colors min-h-[44px] flex items-center justify-center"
          >
            {heroContent.ctaSecondary.text}
          </a>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
