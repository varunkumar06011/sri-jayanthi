'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    id: 'panchakarma',
    title: 'Panchakarma',
    short: 'The five classical detox and rejuvenation procedures of Ayurveda, done properly.',
    subTreatments: [
      { name: 'Vamana', desc: 'Therapeutic emesis for Kapha disorders, skin issues, and respiratory conditions.' },
      { name: 'Virechana', desc: 'Controlled purgation for Pitta imbalances, liver detox, and chronic skin diseases.' },
      { name: 'Basti', desc: 'Medicated enemas — the cornerstone of Vata treatment. Highly effective for spine and neurological issues.' },
      { name: 'Nasya', desc: 'Nasal administration of medicines for sinusitis, migraines, and cervical problems.' },
      { name: 'Raktamokshana', desc: 'Bloodletting for localized inflammatory conditions when indicated.' },
    ],
  },
  {
    id: 'spine',
    title: 'Spine Issues',
    short: 'We see back pain every day. Most cases improve without surgery.',
    subTreatments: [
      { name: 'Back Pain', desc: 'Acute or chronic lumbar pain treated with external therapies, herbal medicines, and posture correction.' },
      { name: 'Sciatica', desc: 'Radiating leg pain from nerve compression. We reduce inflammation and relieve pressure naturally.' },
      { name: 'Cervical Spondylosis', desc: 'Neck stiffness and pain from disc degeneration and muscle weakness. Reversible in early stages.' },
      { name: 'Slip Disc', desc: 'Prolapsed disc management through spinal traction, medicated oils, and strengthening protocols.' },
    ],
  },
  {
    id: 'skin',
    title: 'Skin Issues',
    short: 'Ayurvedic approach to skin treats the blood, liver, and gut — not just the surface.',
    subTreatments: [
      { name: 'Psoriasis', desc: 'Chronic autoimmune skin condition. We manage flare-ups and prolong remission through detox and diet.' },
      { name: 'Eczema', desc: 'Inflammatory skin condition often linked to gut health and allergies. Treated from the root.' },
      { name: 'Acne', desc: 'Hormonal and dietary acne in adolescents and adults. Cleared with internal medicines and face packs.' },
    ],
  },
];

const camps = [
  { date: '22 June 2026', location: 'Community Hall, Main Road', focus: 'Spinal Health Screening' },
  { date: '06 July 2026', location: 'Zilla Parishad School, Village Center', focus: 'Skin & Allergy Camp' },
  { date: '20 July 2026', location: 'Town Hall, Near Bus Stand', focus: 'General Ayurvedic Check-up' },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | null>('panchakarma');
  const [formData, setFormData] = useState({ name: '', phone: '', concern: '', service: '' });

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { loadData, addLead } = require('@/lib/store');
    const data = loadData();
    const text = `Hi, I'm ${formData.name}. Phone: ${formData.phone}. I'm interested in ${formData.service || 'your services'}. Concern: ${formData.concern}`;
    addLead({
      type: 'form_submit',
      source: '/services',
      details: `Name: ${formData.name}, Phone: ${formData.phone}, Service: ${formData.service || 'General'}, Concern: ${formData.concern}`,
    });
    window.open(`https://wa.me/${data.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pb-16">
      {/* Page Header */}
      <section className="py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-forest mb-4">Services</h1>
          <p className="text-forest/60 max-w-2xl mx-auto">
            Everything we offer is grounded in classical Ayurvedic texts and adapted to modern lifestyles.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((svc) => (
            <div key={svc.id} className="paper-card overflow-hidden">
              <button
                onClick={() => toggle(svc.id)}
                className="w-full flex items-center justify-between p-5 md:p-8 text-left hover:bg-gray-50 transition-colors gap-4"
              >
                <div className="min-w-0">
                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-forest">{svc.title}</h2>
                  <p className="text-sm text-forest/60 mt-1">{svc.short}</p>
                </div>
                {expanded === svc.id ? (
                  <ChevronUp size={24} className="text-gold shrink-0" />
                ) : (
                  <ChevronDown size={24} className="text-gold shrink-0" />
                )}
              </button>
              {expanded === svc.id && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gold/10">
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    {svc.subTreatments.map((sub) => (
                      <div key={sub.name} className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-serif text-lg font-semibold text-forest mb-1">{sub.name}</h3>
                        <p className="text-sm text-forest/60 leading-relaxed">{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/919177816622?text=Hi, I'm interested in ${svc.title}. Please share details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-cream text-sm font-medium rounded-sm hover:bg-forest transition-colors"
                    >
                      Enquire on WhatsApp
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Medical Camps */}
      <section id="camps" className="py-12 md:py-16 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-forest mb-3">Medical Camps</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
            <p className="text-sm text-forest/60 mt-4 max-w-xl mx-auto">
              We conduct regular camps in nearby villages and towns. Free basic consultation. Medicines at subsidized rates.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {camps.map((camp) => (
              <div key={camp.date} className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="text-gold font-serif text-lg font-semibold mb-2">{camp.date}</div>
                <div className="text-sm text-forest/80 font-medium mb-1">{camp.location}</div>
                <div className="text-xs text-forest/50 uppercase tracking-wide">{camp.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Contact Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-10">
            <h2 className="font-serif text-2xl font-semibold text-forest mb-2">Ask About a Service</h2>
            <p className="text-sm text-forest/60 mb-6">Fill this and we will connect with you on WhatsApp.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-forest mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-forest placeholder:text-forest/30 focus:outline-none focus:border-forest"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-forest placeholder:text-forest/30 focus:outline-none focus:border-forest"
                  placeholder="+91 ..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest mb-1">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Medical Camp">Medical Camp</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-forest mb-1">Brief Concern</label>
                <textarea
                  rows={3}
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-forest placeholder:text-forest/30 focus:outline-none focus:border-forest"
                  placeholder="Describe your condition briefly..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-gold text-cream font-medium rounded-sm hover:bg-forest transition-colors"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
