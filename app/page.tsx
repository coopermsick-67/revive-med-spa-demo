import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const BUSINESS_DATA = {
  businessName: "Revive Med Spa",
  businessNameShort: "Revive Med Spa",
  tagline: "Look as Good as You Feel.",
  phone: "(513) 555-2304",
  address: "60 Medical Plaza, Milford, OH 45150",
  email: "glow@revivemilford.com",
  serviceArea: "Milford, OH and surrounding areas",
  hours: "Mon-Fri 9am-6pm, Sat 9am-2pm",
  category: "Medical Spa",
  ownerName: "Dr. Lauren Mitchell, DO",
  yearsInBusiness: 6,
  rating: 4.8,
  reviewCount: 165,
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Explore Treatments",
  heroHeadline: "Science-Backed Beauty. Personalized for You.",
  heroSubheadline: "Board-certified treatments in a luxury setting — right here in Milford.",
  trustBadges: ["Board-Certified", "FDA-Approved Products", "Free Consultations"],
  services: [
    {
      title: "Botox & Fillers",
      description:
        "FDA-approved injectables administered by board-certified providers. Natural-looking results tailored to your face. Free consultation includes a custom treatment plan.",
    },
    {
      title: "Laser Treatments",
      description:
        "Advanced laser technology for hair removal, skin resurfacing, and pigmentation correction. Minimal downtime, maximum results. All skin types welcome.",
    },
    {
      title: "Chemical Peels",
      description:
        "Medical-grade peels that rejuvenate, brighten, and smooth. From light lunchtime peels to deep resurfacing — we customize strength to your skin's needs.",
    },
    {
      title: "Microneedling",
      description:
        "Collagen induction therapy for scars, fine lines, and texture. Our SkinPen device is FDA-cleared and delivers consistent, safe results with minimal recovery.",
    },
    {
      title: "IV Therapy",
      description:
        "Hydration, energy, and wellness drips formulated by our medical team. From hangover recovery to immune support — feel the difference in 30 minutes.",
    },
    {
      title: "Weight Loss Programs",
      description:
        "Medically supervised weight management including Semaglutide, personalized nutrition plans, and body composition tracking. Real results, not fads.",
    },
  ],
  testimonials: [
    {
      name: "Nicole A.",
      text: "Dr. Mitchell is incredible. She took the time to understand exactly what I wanted and the results exceeded my expectations. I look refreshed, not 'done.' This place is a gem.",
      rating: 5,
    },
    {
      name: "Patricia H.",
      text: "I've been getting laser treatments here for 6 months and my skin has never looked better. The staff is professional, the facility is spotless, and they always make me feel comfortable.",
      rating: 5,
    },
    {
      name: "Amanda R.",
      text: "Tried the IV therapy after a recommendation from a friend and I'm hooked. I have more energy, better sleep, and my skin is glowing. The weight loss program has helped me lose 20 lbs in 3 months.",
      rating: 5,
    },
  ],
  stats: [
    { value: "6", label: "Years of Expertise" },
    { value: "165+", label: "Five-Star Reviews" },
    { value: "5,000+", label: "Treatments Performed" },
    { value: "100%", label: "Board-Certified Staff" },
  ],
  galleryImages: [
    { alt: "Treatment Room", caption: "State-of-the-art treatment rooms with medical-grade equipment" },
    { alt: "Laser Treatment", caption: "Advanced laser skin resurfacing procedure" },
    { alt: "IV Therapy Lounge", caption: "Comfortable IV therapy lounge with reclining chairs" },
    { alt: "Consultation", caption: "One-on-one consultation with Dr. Mitchell" },
    { alt: "Before & After Skin", caption: "Real patient results after chemical peel series" },
    { alt: "Spa Interior", caption: "Luxurious, calming reception and waiting area" },
  ],
  faqItems: [
    {
      question: "Is a consultation required before treatment?",
      answer:
        "Yes. Every new patient receives a complimentary consultation with one of our medical providers. We assess your skin, discuss your goals, and create a personalized treatment plan. No pressure, no obligation.",
    },
    {
      question: "How much does Botox cost?",
      answer:
        "Botox is priced per unit, and most patients need 20-40 units depending on the treatment area. We offer package discounts and membership pricing. Your exact cost will be discussed during your free consultation.",
    },
    {
      question: "Are your providers board-certified?",
      answer:
        "Yes. All treatments at Revive Med Spa are performed or supervised by board-certified medical professionals. Dr. Lauren Mitchell, DO oversees every treatment protocol and patient plan.",
    },
    {
      question: "Is there any downtime after treatments?",
      answer:
        "It depends on the treatment. Botox and fillers have virtually no downtime. Chemical peels and laser treatments may involve 3-7 days of redness or peeling. We provide detailed aftercare instructions for every procedure.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes. We accept all major credit cards, HSA/FSA cards, and offer financing through CareCredit. We also have a membership program that gives you monthly discounts on treatments and products.",
    },
  ],
  aboutHeadline: "Milford's Premier Medical Spa",
  aboutStory:
    "Founded by Dr. Lauren Mitchell, DO, Revive Med Spa was built on a simple belief: everyone deserves access to safe, effective, aesthetic treatments — delivered by qualified medical professionals in a welcoming environment. After six years of serving the Milford community, we've performed over 5,000 treatments and earned 165+ five-star reviews. Every treatment plan is personalized, every provider is board-certified, and every patient leaves feeling like the best version of themselves.",
};

export default function Home() {
  const d = BUSINESS_DATA;
  return (
    <>
      <Navbar businessName={d.businessNameShort} phone={d.phone} />
      <main>
        <Hero
          businessName={d.businessName}
          headline={d.heroHeadline}
          subheadline={d.heroSubheadline}
          primaryCta={d.primaryCta}
          secondaryCta={d.secondaryCta}
          phone={d.phone}
          serviceArea={d.serviceArea}
          trustBadges={d.trustBadges}
        />
        <ServicesSection
          services={d.services}
          headline="Our Treatments"
          subheadline="Every treatment is performed or supervised by board-certified medical providers using FDA-approved products and technology."
        />
        <TrustSection
          rating={d.rating}
          reviewCount={d.reviewCount}
          testimonials={d.testimonials}
          badges={d.trustBadges}
        />
        <AboutSection
          headline={d.aboutHeadline}
          story={d.aboutStory}
          ownerName={d.ownerName}
          stats={d.stats}
        />
        <GallerySection images={d.galleryImages} headline="Inside Revive Med Spa" />
        <FAQSection items={d.faqItems} headline="Frequently Asked Questions" />
        <ContactSection
          phone={d.phone}
          address={d.address}
          email={d.email}
          hours={d.hours}
          serviceArea={d.serviceArea}
        />
      </main>
      <Footer
        businessName={d.businessName}
        category={d.category}
        serviceArea={d.serviceArea}
        phone={d.phone}
        address={d.address}
      />
    </>
  );
}
