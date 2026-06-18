"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  businessName?: string;
  phone?: string;
}

export default function Navbar({ businessName = "Business", phone = "" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="#hero" className="flex items-center gap-2">
            <span className={cn("text-xl font-bold transition-colors", scrolled ? "text-gray-900" : "text-white")}>
              {businessName}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className={cn("text-sm font-medium transition-colors", scrolled ? "text-gray-700 hover:text-orange-500" : "text-white/90 hover:text-white")}>
                {link.label}
              </Link>
            ))}
            {phone && (
              <a href={`tel:${phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)}
            className={cn("lg:hidden p-2 transition-colors", scrolled ? "text-gray-700" : "text-white")}
            aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden">
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                  {link.label}
                </Link>
              ))}
              {phone && (
                <a href={`tel:${phone.replace(/\D/g, "")}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg">
                  <Phone className="w-4 h-4" /> Call {phone}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
