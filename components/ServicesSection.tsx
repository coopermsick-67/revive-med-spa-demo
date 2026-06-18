"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
  price?: string;
}

interface ServicesSectionProps {
  services: Service[];
  headline?: string;
  subheadline?: string;
}

export default function ServicesSection({
  services,
  headline = "What We Do",
  subheadline,
}: ServicesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      };

  return (
    <section id="services" className="py-20 lg:py-28 bg-surface dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {subheadline}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="h-full border-gray-200 dark:border-gray-700 hover:border-accent/30 dark:hover:border-accent/30 transition-colors bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {service.price && (
                    <p className="text-accent font-bold text-lg">{service.price}</p>
                  )}
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors mt-4"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
