'use client';

import Link from 'next/link';
import { ArrowRight, Stethoscope, Package, CalendarCheck, ChevronDown, Heart, Shield, Leaf } from 'lucide-react';
import HeroSlideshow from '@/components/HeroSlideshow';

const quickTiles = [
  {
    icon: Stethoscope,
    title: 'Services',
    description: 'Panchakarma, spine care, skin treatments',
    href: '/services',
  },
  {
    icon: Package,
    title: 'Products',
    description: 'Ayurvedic oils, powders, and remedies',
    href: '/products',
  },
  {
    icon: CalendarCheck,
    title: 'Book a Camp',
    description: 'Upcoming medical camps near you',
    href: '/services#camps',
  },
];

const pillars = [
  {
    icon: Shield,
    title: 'Preventive Care',
    text: 'Swasthasya Swasthya Rakshanam — preserving the health of the healthy through daily routines, seasonal wisdom, and balanced living.',
  },
  {
    icon: Heart,
    title: 'Curative Care',
    text: 'Aturasya Vikara Prashamanam — alleviating disease with authentic Ayurvedic consultations, Panchakarma, and classical medicines.',
  },
  {
    icon: Leaf,
    title: 'Holistic Balance',
    text: 'Restoring harmony of Doshas, Agni, Dhatus, and Malas while nurturing the mind, senses, and spirit for complete wellbeing.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[45vh] sm:min-h-[55vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-14 py-10">
          <div className="max-w-lg">
            <h1
              className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-1"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
            >
              Sri Jayanthi
            </h1>
            <span
              className="block font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
            >
              Wellbeing
            </span>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-white/50" />
              <svg viewBox="0 0 120 20" fill="none" className="w-16 h-4 text-white/50">
                <path d="M10 10 Q20 2 30 10 Q40 18 50 10 Q60 2 70 10 Q80 18 90 10 Q100 2 110 10" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <circle cx="60" cy="10" r="2.5" fill="currentColor" />
              </svg>
            </div>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-sm" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
              Preventive and Curative treatment through proven wisdom.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/919177816622?text=Hi, I'd like to book a consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-cream text-sm font-medium rounded-sm hover:bg-forest transition-colors"
                style={{ textShadow: 'none' }}
              >
                Book Consultation
                <ArrowRight size={16} />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/60 text-white text-sm font-medium rounded-sm hover:bg-white hover:text-forest transition-colors"
                style={{ textShadow: 'none' }}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        <a
          href="#philosophy"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown size={28} className="animate-bounce-scroll" />
        </a>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-16 md:py-24 border-t border-[#e8dcc8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center">
            <img
              src="/SJ.cdr.png"
              alt="Sri Jayanthi"
              className="h-14 w-auto object-contain mix-blend-multiply opacity-80"
            />
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gold mb-3 tracking-wide">
            Welcome to an Incredible Ayurveda Journey
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
            Preventive and Curative Treatment Through Proven Wisdom
          </h2>
          <div className="my-8 p-6 md:p-8 bg-parchment border border-[#e8dcc8] rounded-lg">
            <p className="text-xl md:text-2xl font-bold text-forest mb-2">
              स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं
            </p>
            <p className="text-sm md:text-base text-forest/70 italic">
              Swasthasya Swasthya Rakshanam, Aturasya Vikara Prashamanam
            </p>
            <p className="text-sm text-forest/60 mt-2">
              To preserve the health of the healthy and to alleviate the ailments of those who are ill.
            </p>
          </div>
          <div className="space-y-4 text-sm md:text-base text-forest/80 leading-relaxed mb-8 max-w-3xl mx-auto text-left">
            <p>
              <span className="font-semibold text-forest">समदोषः समाग्निश्च समधातु मलक्रियाः।<br />प्रसन्नात्मेन्द्रिय मनः स्वस्थ इत्यभिधीयते॥</span>
            </p>
            <p className="italic text-forest/70">
              Samadoṣaḥ samāgniśca samadhātu malakriyāḥ<br />
              Prasannātmendriya manaḥ svastha ityabhidhīyate
            </p>
            <p>
              Ayurveda views health as far more than the mere absence of disease. It is a state of complete harmony in which the Doshas (Vata, Pitta, and Kapha) are in balance, Agni (the digestive and metabolic fire) functions optimally, the Dhatus (body tissues) are well nourished, and the Malas (natural waste elimination processes) are maintained efficiently.
            </p>
            <p>
              Equally important is the wellbeing of the Atma (spirit), Indriyas (sense organs), and Manas (mind), all of which should remain calm, clear, and content. This holistic perspective recognises health as a dynamic balance of physical, mental, emotional, and spiritual wellbeing, empowering individuals to live with vitality, resilience, and harmony.
            </p>
            <p>
              The above principles from Ayurvedic literature, <span className="font-semibold text-forest">Charaka Samhita</span> and <span className="font-semibold text-forest">Sushrutha Samhita</span>, form the foundation of our philosophy at Sri Jayanthi Wellbeing. We are committed not only to treating disease but also to promoting preventive healthcare, restoring balance, and empowering every individual to achieve lifelong health and holistic wellbeing.
            </p>
          </div>
          <div className="inline-block px-6 py-3 bg-forest text-cream rounded-sm">
            <p className="text-lg font-semibold">सर्वे सन्तु निरामयाः</p>
            <p className="text-sm text-cream/80">Sarve Santhu Niramaya — May All be free from disease</p>
          </div>
        </div>
      </section>

      {/* Quick Access Tiles */}
      <section className="py-10 md:py-14 border-t border-[#e8dcc8] bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickTiles.map((tile) => (
              <Link
                key={tile.title}
                href={tile.href}
                prefetch={true}
                className="group p-6 paper-card hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mb-4 group-hover:bg-forest group-hover:text-cream transition-colors">
                  <tile.icon size={22} className="text-forest group-hover:text-cream" />
                </div>
                <h3 className="font-sans text-xl font-semibold text-forest mb-2">{tile.title}</h3>
                <p className="text-sm text-forest/60">{tile.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 border-t border-[#e8dcc8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-forest mb-3">
              Our Approach
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="relative p-6 md:p-8 paper-card">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mb-4 text-forest">
                  <p.icon size={20} />
                </div>
                <h3 className="font-sans text-xl font-semibold text-forest mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-forest/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#e8dcc8] bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-cream mb-4">
            Begin Your Journey to Holistic Wellbeing
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Book a consultation today and discover how authentic Ayurveda can restore balance, prevent illness, and renew your vitality.
          </p>
          <a
            href="https://wa.me/919177816622?text=Hi, I'd like to book a consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-cream font-medium rounded-sm hover:bg-cream hover:text-forest transition-colors"
          >
            Book Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
