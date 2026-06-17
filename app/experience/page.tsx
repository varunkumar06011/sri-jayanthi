import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Experience — Ayurvedic Treatment Results in Telangana',
  description: 'Real patient outcomes from Ayurvedic treatment for spine, skin, and lifestyle conditions, from our clinic serving patients across Telangana.',
  alternates: { canonical: '/experience' },
};

const stats = [
  { number: '15+', label: 'Years in Practice' },
  { number: '8,000+', label: 'Patients Treated' },
  { number: '120+', label: 'Camps Conducted' },
];

const caseStudies = [
  {
    title: 'Spine Recovery',
    patient: 'Ramesh, 52',
    condition: 'Chronic lower back pain and sciatica for 6 years.',
    before: 'Unable to sit for more than 20 minutes. Pain radiated to left leg. Had been advised surgery.',
    after: 'After 21 days of Panchakarma and 3 months of internal medicines, he returned to work. No surgery needed. He now does light yoga daily.',
  },
  {
    title: 'Skin Clearing',
    patient: 'Priya, 34',
    condition: 'Psoriasis covering 40% of body.',
    before: 'Had been on steroids for 4 years. Flare-ups every winter. Skin was thin and sensitive.',
    after: 'Three months of blood purification, diet change, and herbal applications. Cleared by 80%. Now manages with diet alone.',
  },
  {
    title: 'Lifestyle Shift',
    patient: 'Anil, 45',
    condition: 'Type 2 diabetes and obesity.',
    before: 'HbA1c at 9.2, weight 98 kg, constantly fatigued.',
    after: 'Six months of structured Ayurvedic diet, daily routine changes, and herbal support. HbA1c down to 6.8. Weight 84 kg. Energy restored.',
  },
];

export default function ExperiencePage() {
  return (
    <div className="pb-16">
      {/* Page Header */}
      <section className="py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-forest mb-4">Experience</h1>
          <p className="text-forest/60 max-w-2xl mx-auto">
            Numbers matter, but stories matter more. Here is what years of practice look like in real lives.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 text-center">
            {stats.map((s) => (
              <div key={s.label} className="p-6 md:p-8 bg-white border border-gray-200 rounded-lg">
                <div className="font-serif text-3xl md:text-5xl font-bold text-gold mb-2">{s.number}</div>
                <div className="text-xs md:text-sm text-forest/60 font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 border-t border-gray-100 bg-gray-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-serif text-3xl font-bold text-forest mb-6">Our Story</h2>
          <div className="space-y-4 text-forest/70 leading-relaxed">
            <p>
              I started this practice because I saw people suffering from conditions that Ayurveda had already solved centuries ago. 
              Back pain that made a 40-year-old unable to work. Skin diseases that left teenagers hiding at home. 
              Lifestyle diseases that modern medicine only managed, never reversed.
            </p>
            <p>
              I trained in classical Panchakarma under traditional vaidyas and then worked in a government Ayurvedic hospital for several years. 
              That experience taught me what works in a real clinic, not just in textbooks.
            </p>
            <p>
              Sri Jayanthi was started with a simple idea: treat people the way you would treat your own family. 
              Be honest about what Ayurveda can and cannot do. Do not chase trends. Stick to the fundamentals.
            </p>
            <p>
              Today, our team sees patients from across the region. We run medical camps in villages where people still believe 
              good healthcare is out of reach. And every day, we try to live up to the trust placed in us.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Transformations */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-forest mb-3">Patient Transformations</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="p-6 md:p-8 paper-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-gold font-serif font-bold text-sm">
                    {cs.patient.split(',')[0][0]}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-forest">{cs.title}</h3>
                    <p className="text-xs text-forest/50">{cs.patient}</p>
                  </div>
                </div>
                <p className="text-xs text-gold uppercase tracking-wide mb-3">{cs.condition}</p>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-forest/60">Before:</span>
                  <p className="text-sm text-forest/60 leading-relaxed">{cs.before}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gold">After:</span>
                  <p className="text-sm text-forest/70 leading-relaxed">{cs.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
