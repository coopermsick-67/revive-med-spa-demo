"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial { name: string; text: string; rating: number; }
interface TrustSectionProps { rating?: number; reviewCount?: number; testimonials?: Testimonial[]; badges?: string[]; }

export default function TrustSection({ rating = 4.8, reviewCount = 100, testimonials = [], badges = [] }: TrustSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className={`w-6 h-6 ${i <= Math.floor(rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`} />)}</div>
            <span className="text-2xl font-bold text-gray-900">{rating}</span>
          </div>
          <p className="text-gray-600">Based on {reviewCount}+ reviews from happy customers</p>
          {badges.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {badges.map((b, i) => <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">{b}</span>)}
            </div>
          )}
        </motion.div>
        {testimonials.length > 0 && (
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex mb-4">{[1,2,3,4,5].map(j => <Star key={j} className={`w-4 h-4 ${j <= t.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`} />)}</div>
                <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <span className="font-semibold text-gray-900">{t.name}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
