import Link from 'next/link';
import { ArrowRight, Stethoscope, Package, CalendarCheck } from 'lucide-react';
import PeacockWalk from '@/components/PeacockWalk';

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
      {/* Announcement Bar */}
      <div className="bg-forest text-cream overflow-hidden py-2">
        <div className="animate-scroll-left whitespace-nowrap inline-block px-4 text-sm">
          Free spinal health camp this Saturday • New batch of Kesha Thailam now available • Monsoon detox packages open for booking
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-8 left-4 md:left-12 opacity-5">
          <img src="/Logo-Final-Version.png" alt="" className="w-32 h-auto" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-xs font-medium text-forest tracking-wide uppercase">
                  Ayurveda • Wellness • Empowerment
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-forest leading-tight mb-6">
                Ancient healing.<br />
                Real results.<br />
                Right here.
              </h1>
              <p className="text-base md:text-lg text-forest/70 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                We combine classical Ayurvedic knowledge with honest, practical care.
                Our focus is simple: treat the root, teach you to stay well, and never make promises we cannot keep.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://wa.me/919177816622?text=Hi, I'd like to book a consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-cream font-medium rounded-sm hover:bg-forest transition-colors"
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-forest text-forest font-medium rounded-sm hover:bg-forest hover:text-cream transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img src="/Logo-Final-Version.png" alt="Sri Jayanthi" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Tiles */}
      <section className="py-10 md:py-14 border-t border-gray-100">
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
                <h3 className="font-serif text-xl font-semibold text-forest mb-2">{tile.title}</h3>
                <p className="text-sm text-forest/60">{tile.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sri Jayanthi? */}
      <section className="py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-3">
              Why Sri Jayanthi?
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="relative p-6 md:p-8 paper-card">
                <div className="absolute -top-3 left-6 w-6 h-6 bg-gold rounded-full" />
                <h3 className="font-serif text-xl font-semibold text-forest mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-forest/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 md:py-24 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-3">
              Conditions We Treat
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {conditions.map((c) => (
              <div key={c.title} className="p-6 md:p-8 paper-card">
                <h3 className="font-serif text-xl font-semibold text-forest mb-2">{c.title}</h3>
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

      {/* Peacock Walk */}
      <section className="border-t border-gray-100 bg-gray-50 relative">
        <PeacockWalk />
      </section>
    </div>
  );
}
