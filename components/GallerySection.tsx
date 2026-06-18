"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

interface GalleryImage { alt: string; caption: string; }
interface GallerySectionProps { images?: GalleryImage[]; headline?: string; }

export default function GallerySection({ images = [], headline = "See Our Work" }: GallerySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [lightbox, setLightbox] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="max-w-2xl mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Gallery</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{headline}</h2>
        </motion.div>
        {images.length > 0 && (
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <button key={i} onClick={() => setLightbox(i)} className="group relative aspect-square bg-gray-200 rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                <div className="absolute inset-0 flex items-center justify-center"><span className="text-gray-400 text-sm">{img.alt}</span></div>
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-colors flex items-end">
                  <p className="p-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.caption}</p>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {lightbox !== null && images[lightbox] && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2" onClick={() => setLightbox(null)}><X className="w-6 h-6" /></button>
            <div className="max-w-3xl w-full aspect-video bg-gray-800 rounded-xl flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <span className="text-white/40">{images[lightbox].alt}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
