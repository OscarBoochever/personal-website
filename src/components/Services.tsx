"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, LineChart, Users, LucideIcon } from "lucide-react";
import { services } from "@/data/services";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Code2,
  BarChart3,
  LineChart,
  Users,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Services
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="group bg-offwhite rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-olive/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-olive/10 rounded-lg flex items-center justify-center group-hover:bg-olive/20 transition-colors">
                    <Icon className="w-6 h-6 text-olive" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-charcoal mb-2 group-hover:text-olive transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
