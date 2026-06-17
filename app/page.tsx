'use client';

import Link from 'next/link';
import { ArrowRight, Stethoscope, Package, CalendarCheck, ChevronDown } from 'lucide-react';
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
    title: 'Authentic Panchakarma',
    text: 'We perform classical Panchakarma the way it was written in the texts — not shortcuts, not spa versions. Proper pre-procedure, main procedure, and post-procedure care.',
  },
  {
    title: 'Spine & Skin Specialists',
    text: 'Back pain, sciatica, psoriasis, eczema — these are our daily cases. We know what works and what does not, and we will tell you honestly.',
  },
  {
    title: 'Community Medical Camps',
    text: 'We run regular camps so people who cannot visit the clinic still get quality Ayurvedic assessment and guidance.',
  },
];

const conditions = [
  {
    title: 'Spine Issues',
    items: 'Back pain, sciatica, cervical spondylosis, slip disc.',
    text: 'Most spine problems in adults are a result of posture, weak core muscles, and aggravated Vata. We use a combination of external therapies, internal medicines, and lifestyle corrections. Surgery is not the only option.',
  },
  {
    title: 'Skin Issues',
    items: 'Psoriasis, eczema, acne, hyperpigmentation.',
    text: 'Skin reflects what is happening inside the gut, liver, and blood. We treat the root — not just the cream. Ayurvedic blood purification and diet correction often do what years of topical steroids could not.',
  },
  {
    title: 'Lifestyle Disorders',
    items: 'Diabetes, hypertension, obesity, stress, insomnia.',
    text: 'These are not sudden diseases. They build over years of imbalance. Our approach is to reset your metabolism, improve digestion, and establish routines your body can sustain.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero — full-width Charaka-style banner */}
      <section className="relative min-h-[45vh] sm:min-h-[55vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background slideshow */}
        <HeroSlideshow />

        {/* Left-aligned content overlay */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-14 py-10">
          <div className="max-w-lg">
            <h1
              className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-1"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
            >
              Sri Jayanthi
            </h1>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4 tracking-wide"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
            >
              Wellness
            </span>

            {/* Decorative vine divider — left aligned */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-white/50" />
              <svg viewBox="0 0 120 20" fill="none" className="w-16 h-4 text-white/50">
                <path d="M10 10 Q20 2 30 10 Q40 18 50 10 Q60 2 70 10 Q80 18 90 10 Q100 2 110 10" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <circle cx="60" cy="10" r="2.5" fill="currentColor" />
              </svg>
            </div>

            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-sm" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
              A natural approach to better health.
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

        {/* Scroll down chevron */}
        <a
          href="#quick-tiles"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown size={28} className="animate-bounce-scroll" />
        </a>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 border-t border-[#e8dcc8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo icon */}
          <div className="mb-6 flex justify-center">
            <img
              src="/SJ.cdr.png"
              alt="Sri Jayanthi"
              className="h-14 w-auto object-contain mix-blend-multiply opacity-80"
            />
          </div>

          {/* Welcome line */}
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gold mb-3 tracking-wide">
            Welcome to an Incredible Ayurveda Journey
          </p>

          {/* Main headline */}
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
            Experience the Highest Standard of Authentic Ayurveda
          </h2>

          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-cream text-xs sm:text-sm font-medium tracking-wide mb-8">
            <span>Advanced Panchakarma</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>Precision Diagnosis</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>Transformative Healing</span>
          </div>

          {/* Body text */}
          <p className="text-sm md:text-base text-forest/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            At <strong className="text-forest">Sri Jayanthi Wellbeing</strong>, we bridge the gap between ancient wisdom and honest, practical care.
            We do not just offer wellness — we provide classical Ayurvedic treatment rooted in authentic texts,
            designed to reverse chronic spine and skin conditions and restore systemic balance.
            With years of clinical excellence across Telangana, our protocols are strictly
            <strong className="text-forest"> personalised, outcome-driven, and transformative.</strong>
          </p>

          {/* More About Us link */}
          <Link
            href="/about"
            className="inline-block text-sm text-gold hover:text-forest underline underline-offset-4 decoration-gold/50 hover:decoration-forest transition-colors"
          >
            More About Us
          </Link>
        </div>
      </section>

      {/* Quick Access Tiles */}
      <section className="py-10 md:py-14 border-t border-[#e8dcc8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickTiles.map((tile) => (
              <Link
                key={tile.title}
                href={tile.href}
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

      {/* Why Sri Jayanthi? */}
      <section className="py-16 md:py-24 border-t border-[#e8dcc8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-forest mb-3">
              Why Sri Jayanthi?
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="relative p-6 md:p-8 paper-card">
                <div className="absolute -top-3 left-6 w-6 h-6 bg-gold rounded-full" />
                <h3 className="font-sans text-xl font-semibold text-forest mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-forest/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 md:py-24 border-t border-[#e8dcc8] bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-forest mb-3">
              Conditions We Treat
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {conditions.map((c) => (
              <div key={c.title} className="p-6 md:p-8 paper-card">
                <h3 className="font-sans text-xl font-semibold text-forest mb-2">{c.title}</h3>
                <p className="text-xs font-medium text-gold uppercase tracking-wide mb-4">{c.items}</p>
                <p className="text-sm text-forest/70 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/919177816622?text=Hi, I have a specific condition I'd like to discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-forest text-forest font-medium rounded-sm hover:bg-forest hover:text-cream transition-colors"
            >
              Ask About Your Condition
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
