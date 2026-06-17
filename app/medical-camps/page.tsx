'use client';

import { useEffect, useState, useCallback } from 'react';
import { loadData, type CampImage } from '@/lib/store';
import { ArrowRight, ChevronLeft, ChevronRight, HeartHandshake, Users, MapPin, CalendarDays } from 'lucide-react';

const stats = [
  { label: 'Camps Conducted', value: '30+' },
  { label: 'Patients Seen', value: '2,000+' },
  { label: 'Districts Covered', value: '5+' },
  { label: 'Years of Service', value: '10+' },
];

const whyWeCamp = [
  {
    icon: HeartHandshake,
    title: 'Healthcare Reaches You',
    text: 'Not everyone can travel to a clinic. We bring qualified Ayurvedic assessment to villages, community halls, and public gatherings — free of cost.',
  },
  {
    icon: Users,
    title: 'Collective Empowerment',
    text: 'Camps are not just about treatment. We educate families on diet, daily routines, and early warning signs — so communities can make better health decisions together.',
  },
  {
    icon: MapPin,
    title: 'Rooted in the Region',
    text: "We focus on Telangana's rural pockets where lifestyle diseases go undiagnosed for years. Our work is local, consistent, and deeply committed.",
  },
];

function CampCarousel({ images }: { images: CampImage[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [images.length, next]);

  if (images.length === 0) return null;

  const img = images[current];

  return (
    <div className="relative bg-forest overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 min-h-[320px] md:min-h-[420px]">
          {/* Image */}
          <div className="relative h-64 md:h-auto bg-gray-100">
            <img
              src={img.url}
              alt={img.caption}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="%23e5e7eb" width="600" height="400"/><text fill="%239ca3af" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em">Image not found</text></svg>';
              }}
            />
          </div>
          {/* Content */}
          <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
            <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 bg-gold/20 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-xs font-medium text-cream/90 tracking-wide uppercase">
                Camp Highlight · {img.date}
              </span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-cream mb-4 leading-snug">
              {img.caption}
            </h3>
            <div className="flex items-center gap-4 text-sm text-cream/60 mb-6">
              {img.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {img.location}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center text-cream hover:bg-cream/10 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center text-cream hover:bg-cream/10 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
              <div className="flex gap-2 ml-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? 'bg-gold' : 'bg-cream/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MedicalCampsPage() {
  const [images, setImages] = useState<CampImage[]>([]);

  useEffect(() => {
    const data = loadData();
    setImages(data.campImages);
    const handleStorage = () => setImages(loadData().campImages);
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-xs font-medium text-forest tracking-wide uppercase">
                Community Outreach · Andhra Pradesh
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
              Taking Ayurveda<br />to the Community
            </h1>
            <p className="text-base md:text-lg text-forest/70 leading-relaxed mb-8 max-w-2xl">
              Sri Jayanthi Wellbeing runs regular free medical camps across Andhra Pradesh — bringing qualified Ayurvedic consultations directly to people who need it most. No fee, no appointment, no barrier.
            </p>
            <a
              href="https://wa.me/919177816622?text=Hi, I'd like to know about the next medical camp."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-cream font-medium rounded-sm hover:bg-forest transition-colors"
            >
              Ask About Next Camp
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Auto-Scrolling Camp Carousel */}
      <CampCarousel images={images} />

      {/* Stats */}
      <section className="py-10 border-b border-gray-100 bg-forest">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-1">{s.value}</div>
                <div className="text-sm text-cream/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Run Camps */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-3">Why We Run Camps</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyWeCamp.map((item) => (
              <div key={item.title} className="relative p-6 md:p-8 paper-card">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-forest" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-forest mb-3">{item.title}</h3>
                <p className="text-sm text-forest/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-3">From the Field</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
            <p className="text-sm text-forest/60 max-w-xl mx-auto">
              Real consultations. Real patients. Real communities. These are moments from our camps — not staged, not curated.
            </p>
          </div>
          {images.length === 0 ? (
            <div className="text-center py-16 text-forest/40">
              <CalendarDays size={40} className="mx-auto mb-3 opacity-40" />
              <p className="text-sm">Camp photos will appear here once added from the admin panel.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img) => (
                <div key={img.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="%23f3f4f6" width="400" height="300"/><text fill="%239ca3af" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em">Image not found</text></svg>';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-forest/80 leading-relaxed mb-3">{img.caption}</p>
                    <div className="flex items-center gap-4 text-xs text-forest/50">
                      {img.location && (
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {img.location}
                        </span>
                      )}
                      {img.date && (
                        <span className="flex items-center gap-1">
                          <CalendarDays size={11} />
                          {img.date}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-forest mb-4">
            Want to host a camp in your area?
          </h2>
          <p className="text-forest/60 text-sm mb-6 max-w-lg mx-auto">
            We partner with panchayats, welfare organisations, and educational institutions. Reach out and we'll work out the details.
          </p>
          <a
            href="https://wa.me/919177816622?text=Hi, I'd like to organise a medical camp in my area."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-cream font-medium rounded-sm hover:bg-gold transition-colors"
          >
            Partner With Us
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
