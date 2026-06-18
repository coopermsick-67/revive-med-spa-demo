"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface Stat { value: string; label: string; }
interface AboutSectionProps { headline?: string; story?: string; ownerName?: string; stats?: Stat[]; }

export default function AboutSection({ headline = "About Us", story = "Our story goes here.", ownerName = "Owner", stats = [] }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="about" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">{headline}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{story}</p>
            <p className="text-gray-500 font-medium">— {ownerName}, Owner</p>
          </motion.div>
          {stats.length > 0 && (
            <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
