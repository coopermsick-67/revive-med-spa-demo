"use client";
import Link from "next/link";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroProps {
  businessName?: string;
  headline?: string;
  subheadline?: string;
  primaryCta?: string;
  secondaryCta?: string;
  phone?: string;
  serviceArea?: string;
  trustBadges?: string[];
  accentColor?: string;
}

export default function Hero({
  businessName = "Business Name",
  headline = "Your Headline Here",
  subheadline = "Your subheadline goes here.",
  primaryCta = "Get Started",
  secondaryCta = "Learn More",
  phone = "",
  serviceArea = "Your Area",
  trustBadges = [],
  accentColor = "#ea580c",
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? { opacity: 1 as const, y: 0 as const }
      : { opacity: 1 as const, y: 0 as const, transition: { duration: 0.6, delay, ease: "easeOut" as const } };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl">
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} animate={fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" /> Serving {serviceArea}
          </motion.div>
          <motion.h1 initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }} animate={fadeUp(0.1)}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {headline}
          </motion.h1>
          <motion.p initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }} animate={fadeUp(0.2)}
            className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
            {subheadline}
          </motion.p>
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }} animate={fadeUp(0.3)}
            className="mt-8 flex flex-col sm:flex-row gap-4">
            {phone && (
              <a href={`tel:${phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-lg rounded-xl hover:opacity-90 transition-opacity"
                style={{ backgroundColor: accentColor }}>
                <Phone className="w-5 h-5" /> {primaryCta}
              </a>
            )}
            <Link href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl hover:bg-white/20 transition-colors border border-white/20">
              {secondaryCta} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          {trustBadges.length > 0 && (
            <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }} animate={fadeUp(0.5)}
              className="mt-10 flex flex-wrap items-center gap-4">
              {trustBadges.map((badge, i) => (
                <span key={i} className="text-white/70 text-sm font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                  {badge}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
