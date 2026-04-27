"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/data/portfolio";
import { useIsMobile } from "@/hooks/useIsMobile";

const INITIAL_COUNT = 6;

function ProjectImage({ image, title }: { image: string; title: string }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src={image}
        alt={title}
        width={1420}
        height={722}
        className="w-full h-auto"
      />
    </div>
  );
}

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="selected-work" className="py-20 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Selected Work
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.25, delay: isMobile ? 0 : index * 0.05 }}
              className="group bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-olive/5"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                {project.image && (
                  <div className="p-4 pb-0">
                    <ProjectImage image={project.image} title={project.title} />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-lg md:text-xl font-semibold text-charcoal group-hover:text-olive transition-colors">
                      {project.title}
                    </h3>
                    {project.demo && (
                      <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium text-warm-brown bg-warm-brown/10 rounded-full">
                        Demo
                      </span>
                    )}
                  </div>

                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {hasMore && (
          <motion.div
            initial={isMobile ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center mt-4"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-olive font-medium hover:text-olive/70 transition-colors min-h-[44px] cursor-pointer"
            >
              {showAll ? (
                <>Show less <ChevronUp size={16} /></>
              ) : (
                <>Show more <ChevronDown size={16} /></>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
