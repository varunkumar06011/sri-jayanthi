'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    id: 'consultations',
    title: 'Consultations',
    short: 'Personalised Ayurvedic diagnosis and treatment plans for a wide range of health concerns.',
    items: [
      'Musculoskeletal Issues (Back pain, Sciatica)',
      'Neurological Disorders',
      'Gut Health',
      'Dermatological Issues',
      'Lifestyle & Chronic Disease Management',
      'Women’s Health',
    ],
  },
  {
    id: 'panchakarma',
    title: 'Panchakarma',
    short: 'The classical method of cleansing the body by removing toxins and rejuvenating the system.',
    intro: 'Panchakarma is the method of cleansing the body by removing toxins based on the disease condition and is an effective process for rejuvenation. The 5 main Karmas include:',
    mainKarmas: [
      'Vamana – Therapeutic emesis',
      'Virechana – Induced purgation',
      'Anuvasana Vasti – Enema using medicated oil',
      'Nasyam – Nasal instillation of medicated substances',
      'Asthapana Vasti – Enema using therapeutic decoctions',
    ],
    therapies: [
      'Udvarthanam',
      'Kati Vasti',
      'Greeva Vasti',
      'Janu Vasti',
      'Elakizhi (Patra Potali Pinda Swedam)',
      'Podikizhi',
      'Naadi Swedam',
      'Akshi Tarpanam',
      'Dhara',
    ],
  },
  {
    id: 'preventive',
    title: 'Preventive Health and Wellness Plans',
    short: 'Guidance to preserve health, prevent disease and live in rhythm with nature.',
    items: [
      'Ayurvedic lifestyle',
      'Dinacharya Guidance (Daily Healthy Routine)',
      'Ritucharya (Seasonal Lifestyle Guidance)',
      'Stress Management',
      'Lifestyle Disease Prevention (Diabetes, Hypertension, Obesity)',
      'Digestive Health Improvement',
      'Immunity Enhancement Counselling',
      'Community Wellness Camps',
      'Health Education & Wellness Sessions',
    ],
  },
  {
    id: 'online',
    title: 'Online Wellness Consultations',
    short: 'Accessible Ayurvedic care through video consultations from the comfort of your home.',
    items: [],
  },
  {
    id: 'medicines',
    title: 'Ayurveda Medicines and Supplements',
    short: 'Authentic classical and proprietary formulations to support treatment and daily wellness.',
    items: [],
  },
  {
    id: 'rasayana',
    title: 'Rasayana Therapy',
    short: 'Rejuvenation therapy to delay ageing, enhance vitality and promote healthy longevity.',
    intro: 'Jara Chikitsa (Geriatrics & Rejuvenation) is one of the 8 branches of Ayurveda. Rasayana therapy is one of the potential therapies for mankind to follow within the permissible age limits in order to delay aging process or age healthily. The aging process occurs over all the body. It does not occur in the same way in every human being. People’s lifestyles also have additional influence on aging.',
    items: [
      'Rasayanas help in improving metabolism, enhancing physical strength, memory power, intelligence, skin texture and strength, sweetness of voice',
      'Rasayanas keep the body and mind pleasant',
      'Rasayanas help in nourishes lymph and blood tissue thereby improving the activity and nourishment of other tissues in the body thus improving resistance against infections by increasing immunity power',
      'Rasayana prevents ageing, graying of hair, wasting of muscles; improves bone strength, blood circulation, appetite, sleep',
      'Use of Rasayanas helps in healthy ageing, prevents chronic degenerative disorders like Arthritis, Alzheimer’s and senile disorders',
    ],
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | null>('consultations');
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
      <section className="py-12 md:py-20 border-b border-gray-100 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-forest mb-4">Services</h1>
          <p className="text-forest/60 max-w-3xl mx-auto">
            As an Ayurveda and Wellbeing organization, we are committed to promoting holistic health through authentic Ayurvedic solutions and wellness programs.
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
                  <h2 className="font-sans text-xl md:text-2xl font-semibold text-forest">{svc.title}</h2>
                  <p className="text-sm text-forest/80 mt-1">{svc.short}</p>
                </div>
                {expanded === svc.id ? (
                  <ChevronUp size={24} className="text-gold shrink-0" />
                ) : (
                  <ChevronDown size={24} className="text-gold shrink-0" />
                )}
              </button>
              {expanded === svc.id && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gold/10">
                  {'intro' in svc && svc.intro && (
                    <p className="text-sm md:text-base text-forest/80 leading-relaxed mt-4 mb-4">{svc.intro}</p>
                  )}
                  {'mainKarmas' in svc && svc.mainKarmas && (
                    <div className="mb-4">
                      <h3 className="font-sans text-sm font-bold text-forest uppercase tracking-wide mb-2">The 5 Main Karmas</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {svc.mainKarmas.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-forest/90 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {'therapies' in svc && svc.therapies && (
                    <div className="mb-4">
                      <h3 className="font-sans text-sm font-bold text-forest uppercase tracking-wide mb-2">External Therapies</h3>
                      <ul className="grid md:grid-cols-3 gap-2">
                        {svc.therapies.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-forest/90 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {svc.items && svc.items.length > 0 && (
                    <ul className="grid md:grid-cols-2 gap-3 mt-4">
                      {svc.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-forest/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
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

      {/* Inline Contact Form */}
      <section className="py-12 md:py-16 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-10">
            <h2 className="font-sans text-2xl font-semibold text-forest mb-2">Ask About a Service</h2>
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
