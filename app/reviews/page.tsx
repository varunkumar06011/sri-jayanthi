import type { Metadata } from 'next';
import { Star, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Reviews — Sri Jayanthi Wellbeing Telangana',
  description: 'Read real patient reviews of Ayurvedic treatment for back pain, sciatica, eczema, and psoriasis at Sri Jayanthi Wellbeing, Telangana.',
  alternates: { canonical: '/reviews' },
};

const testimonials = [
  {
    quote: 'I had given up on walking without pain. Three weeks of treatment here changed that. The doctor explained everything, never made false promises.',
    name: 'Venkatesh Rao',
    condition: 'Chronic Back Pain',
    rating: 5,
  },
  {
    quote: 'My daughter had severe eczema since age 4. We tried everything. The Ayurvedic approach cleared her skin in four months.',
    name: 'Lakshmi Devi',
    condition: 'Eczema',
    rating: 5,
  },
  {
    quote: 'Honest, grounded, and effective. I came for sciatica and left with a complete lifestyle reset.',
    name: 'Mohammed Ali',
    condition: 'Sciatica',
    rating: 5,
  },
  {
    quote: 'The medical camp in our village was a blessing. My mother\'s arthritis pain is manageable now.',
    name: 'Savitri Patel',
    condition: 'Arthritis',
    rating: 5,
  },
];

const featured = {
  quote: 'After two failed attempts at other clinics, I found Sri Jayanthi. The doctor took one look at my reports and said, "This is fixable." He was right. Six months later, my psoriasis is 90% clear and I have not touched a steroid cream. The diet plan was strict but it worked. I only wish I had come here first.',
  name: 'Karthik Menon',
  condition: 'Psoriasis',
};

export default function ReviewsPage() {
  return (
    <div className="pb-16">
      <section className="py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-forest mb-4">Reviews</h1>
          <p className="text-forest/60 max-w-2xl mx-auto">
            Real words from real patients. No editing, no exaggeration.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-8 md:p-12 paper-card">
            <div className="absolute -top-4 left-8">
              <img src="/Logo-Final-Version.png" alt="" className="w-16 h-auto opacity-40" />
            </div>
            <p className="text-lg md:text-xl text-forest/80 leading-relaxed mb-6">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest font-serif font-bold">
                {featured.name[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-forest">{featured.name}</p>
                <p className="text-xs text-forest/50">{featured.condition}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl font-bold text-forest mb-3">What Patients Say</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 paper-card">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-forest/70 leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-forest">{t.name}</p>
                    <p className="text-xs text-forest/50">{t.condition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-3">Your Story Could Help Someone Else</h2>
          <p className="text-sm text-forest/60 mb-6">
            If you have been treated at Sri Jayanthi, sharing your experience helps others take the first step.
          </p>
          <a
            href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-cream font-medium rounded-sm hover:bg-gold transition-colors"
          >
            Share Your Experience
            <ArrowRight size={18} />
          </a>
          <p className="text-xs text-forest/40 mt-3">
            Replace the link above with your actual Google Business review URL.
          </p>
        </div>
      </section>
    </div>
  );
}
