"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

interface ContactSectionProps { phone?: string; address?: string; email?: string; hours?: string; serviceArea?: string; accentColor?: string; }

export default function ContactSection({ phone = "", address = "", email = "", hours = "Mon-Fri: 8am-6pm", serviceArea = "Your Area", accentColor = "#ea580c" }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-900 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">Ready to Get Started?</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">Call us today and we&apos;ll get back to you within 24 hours. Serving {serviceArea} and surrounding areas.</p>
            {phone && (
              <a href={`tel:${phone.replace(/\D/g, "")}`} className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-lg rounded-xl hover:opacity-90 transition-opacity" style={{ backgroundColor: accentColor }}>
                <Phone className="w-5 h-5" /> Call {phone}
              </a>
            )}
          </motion.div>
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
            {phone && (
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: accentColor }}><Phone className="w-6 h-6 text-white" /></div>
                <div><p className="font-semibold text-lg">Phone</p><a href={`tel:${phone.replace(/\D/g, "")}`} className="text-white/80 hover:text-white">{phone}</a></div>
              </div>
            )}
            {address && (
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: accentColor }}><MapPin className="w-6 h-6 text-white" /></div>
                <div><p className="font-semibold text-lg">Location</p><p className="text-white/80">{address}</p></div>
              </div>
            )}
            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: accentColor }}><Clock className="w-6 h-6 text-white" /></div>
              <div><p className="font-semibold text-lg">Hours</p><p className="text-white/80">{hours}</p></div>
            </div>
            {email && (
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: accentColor }}><Mail className="w-6 h-6 text-white" /></div>
                <div><p className="font-semibold text-lg">Email</p><a href={`mailto:${email}`} className="text-white/80 hover:text-white">{email}</a></div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
