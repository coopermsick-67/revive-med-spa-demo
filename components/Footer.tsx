import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

interface FooterProps { businessName?: string; category?: string; serviceArea?: string; phone?: string; address?: string; }

export default function Footer({ businessName = "Business", category = "Service", serviceArea = "Your Area", phone = "", address = "" }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-xl font-bold text-white mb-2">{businessName}</p>
            <p className="text-sm leading-relaxed">Professional {category} services in {serviceArea}. Locally owned and operated.</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Quick Links</p>
            <div className="space-y-2 text-sm">
              <Link href="#services" className="block hover:text-white transition-colors">Services</Link>
              <Link href="#about" className="block hover:text-white transition-colors">About</Link>
              <Link href="#gallery" className="block hover:text-white transition-colors">Gallery</Link>
              <Link href="#faq" className="block hover-white transition-colors">FAQ</Link>
              <Link href="#contact" className="block hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Contact</p>
            <div className="space-y-2 text-sm">
              {phone && <a href={`tel:${phone.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="w-4 h-4" /> {phone}</a>}
              {address && <span className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> {address}</span>}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {year} {businessName}. All rights reserved.</p>
          <p>Website by <span className="text-white font-medium">Sick Web Studio</span></p>
        </div>
      </div>
    </footer>
  );
}
