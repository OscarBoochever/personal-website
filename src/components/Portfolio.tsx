"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

function ProjectImage({ image, title, link }: { image: string; title: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        width={1420}
        height={722}
        className="w-full h-auto"
      />
    </a>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto rounded-full" />
          <p className="mt-6 text-charcoal/70 max-w-2xl mx-auto text-lg">
            Selected projects showcasing web development, data visualization, and government technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="group bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-olive/5"
            >
              {/* Static Image Preview */}
              {project.image && (
                <div className="p-4 pb-0">
                  <ProjectImage image={project.image} title={project.title} link={project.link} />
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                {/* Header with title and featured badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-charcoal group-hover:text-olive transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium text-olive bg-olive/10 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium text-warm-brown bg-warm-brown/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-olive font-medium hover:text-olive/80 transition-colors min-h-[44px] group/link"
                >
                  {project.linkText || "Visit Site"}
                  <ExternalLink
                    size={16}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
