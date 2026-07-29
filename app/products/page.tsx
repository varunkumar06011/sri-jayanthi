'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Leaf, MessageCircle } from 'lucide-react';
import { loadData, addLead, defaultContact, type Product } from '@/lib/store';

const classicalProducts = [
  {
    name: 'Guduchyadhi Rasayanam',
    benefit: 'For rejuvenation of memory and cognition',
    description: 'Guduchyadhi Rasayanam is useful in memory enhancement and has anti-stress, anti-depressant and anxiolytic properties. It is helpful in treating memory impairment that occurs as part of normal aging process.',
  },
  {
    name: 'Kalyanakavaleham Churnam Tablets',
    benefit: 'Effective in Speech disorders and promotes intelligence',
    description: 'Kalyanakavaleh is useful in Pharingitis, Laryngitis, Hoarseness of voice and slurred speech. It is useful in promoting memory and intelligence.',
  },
  {
    name: 'Sapthamrutha Lauham',
    benefit: 'Helps improve Eye Health',
    description: 'Sapthamrutha Lauham helps in improving vision by giving strength to the eyes. It is useful in burning and itching of the eyes due to constant exposure to electronics. It is used in the treatment of gastritis, abdominal colic, nausea, headache, fatigue and eye infections. It is also used in treating anaemia and low haemoglobin levels.',
  },
  {
    name: 'Vasa',
    benefit: 'Helps relieve respiratory congestion',
    description: 'Vasa helps in relieving chest congestion and reducing bronchial inflammation, suppressing cough, helping in discharge of phlegm, reducing thirst, aiding respiratory function and combating epistaxis.',
  },
  {
    name: 'Ashwagandha',
    benefit: 'Helps in Stress, Anxiety and General Wellness',
    description: 'Ashwagandha is a rasayana known to have anti-inflammatory, anti-stress, antioxidant, immunomodulatory, hemopoietic and rejuvenating properties. It is a safe natural supplement with a positive influence on the endocrine, cardiopulmonary and central nervous systems. It relieves stress, anxiety, enhances general immunity and helps improve quality of sleep. It is advisable to be taken under Physician’s supervision in case of pregnancy, nursing, or any medical conditions that require special attention and care.',
  },
  {
    name: 'Yashtimadhu',
    benefit: 'Helps improve Gastric and Respiratory Wellness',
    description: 'Yashtimadhu has multiple medicinal properties such as promoting vision, general strength, complexion, hair growth and good voice. It is useful in reducing nausea and thirst and improving general immunity. Yashtimadhu helps in digestive and respiratory disorders, acts as an expectorant relieving cough and is useful in treating stomatitis and as an adjunct therapy in mucositis.',
  },
  {
    name: 'Shatavari',
    benefit: 'Promotes Women’s Wellness',
    description: 'Shatavari is useful in improving general immunity. It helps combat hormonal imbalances, promotes female reproductive health and reduces symptoms of menopause. It is useful in anxiety and depression and is used as a galactogogue.',
  },
  {
    name: 'Triphala',
    benefit: 'Promotes overall wellness and rejuvenation',
    description: 'Triphala helps relieve constipation, supports healthy digestion and gut health, aids natural detoxification thus enhancing immunity and helps in weight management when combined with proper diet and exercise.',
  },
];

function ProductCard({ product, whatsappNumber }: { product: Product; whatsappNumber: string }) {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi, I'm interested in ${product.name}. Please share details.`
  )}`;

  const handleEnquire = () => {
    addLead({
      type: 'product_enquiry',
      source: '/products',
      details: `Product: ${product.name}`,
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
      {product.image ? (
        <div className="w-full h-52 sm:h-60 md:h-72 bg-gray-50 flex items-center justify-center p-6 relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="w-full h-52 sm:h-60 md:h-72 bg-forest/5 flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15 9H22L16 14L18 22L12 17L6 22L8 14L2 9H9L12 2Z" fill="#b8952a" />
          </svg>
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="mb-4">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-forest tracking-tight">
            {product.name}
          </h2>
        </div>
        <div className="w-12 h-0.5 bg-gold mb-4" />
        <p className="text-sm md:text-base text-forest/80 leading-relaxed mb-5">
          {product.description}
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleEnquire}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-cream text-sm font-semibold rounded-lg hover:bg-forest transition-colors duration-300 mt-auto"
        >
          Enquire on WhatsApp
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [whatsappNumber, setWhatsappNumber] = useState(defaultContact.whatsappNumber);

  useEffect(() => {
    const data = loadData();
    setProducts(data.products);
    setWhatsappNumber(data.contact.whatsappNumber);
    const handler = () => {
      const next = loadData();
      setProducts(next.products);
      setWhatsappNumber(next.contact.whatsappNumber);
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  return (
    <div className="pb-16">
      {/* Page Header */}
      <section className="py-12 md:py-20 border-b border-gray-100 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sans text-2xl md:text-3xl font-bold text-forest mb-3">Products</h1>
          <p className="font-semibold text-forest/70 max-w-3xl mx-auto">
            Authentic Ayurveda and wellness products manufacturer with uncompromising quality.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-sm md:text-base text-forest/80 leading-relaxed text-left">
            <p>
              Our commitment to making holistic wellness accessible to everyone is rooted in the timeless wisdom of Ayurveda and enriched by over few decades of clinical experience and knowledge shared by renowned experts in the field. Guided by this legacy, we have established our pharmacy with a sole purpose to develop authentic, high quality Ayurvedic formulations that support preventive healthcare and overall wellbeing.
            </p>
            <p>
              Every product is manufactured by adhering to stringent quality standards and standardized processes to ensure consistency, safety and efficacy. We carefully source premium quality herbs and raw materials, employing validated manufacturing practices that preserve their natural potency and therapeutic value.
            </p>
            <p>
              Our thoughtfully formulated products are designed to complement a healthy lifestyle and may be used as supportive adjuncts to healthcare under professional guidance. They promote digestive and gut health, strengthen immunity, support the body&apos;s natural response to allergies and immune challenges and enhance overall vitality and resilience against infections.
            </p>
            <p className="font-semibold text-forest">
              At the heart of every formulation is our unwavering commitment to authenticity, quality and the enduring principles of Ayurveda — delivering simple, effective and trusted wellness solutions for healthier living.
            </p>
          </div>
        </div>
      </section>

      {/* Proprietary Products */}
      <section className="py-10 md:py-14 border-t border-[#e8dcc8] bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-sans text-xl md:text-2xl font-bold text-forest mb-3">Proprietary Medicines</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          {products.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} whatsappNumber={whatsappNumber} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-forest/70">
              <p className="text-sm md:text-base mb-4">Proprietary product details will appear here. For a detailed brochure, reach out to us.</p>
              <a
                href="https://wa.me/919177816622?text=Hi, I'd like to request the Proprietary Medicines brochure."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-cream font-medium rounded-sm hover:bg-forest transition-colors"
              >
                <MessageCircle size={18} />
                Request Brochure on WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Classical Products */}
      <section className="py-16 md:py-24 border-t border-[#e8dcc8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans text-xl md:text-2xl font-bold text-forest mb-3">Classical Products</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {classicalProducts.map((product, index) => (
              <div key={product.name} className="p-6 md:p-8 paper-card flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0 text-forest font-sans font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-forest">{product.name}</h3>
                    <p className="text-sm text-gold font-bold flex items-center gap-1 mt-1">
                      <Leaf size={12} />
                      {product.benefit}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-forest/80 leading-relaxed flex-1">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#e8dcc8] bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-cream mb-4">
            Looking for a specific product?
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Get in touch with us on WhatsApp for product availability, dosage guidance and professional advice.
          </p>
          <a
            href="https://wa.me/919177816622?text=Hi, I'd like to know more about your Ayurvedic products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-cream font-medium rounded-sm hover:bg-cream hover:text-forest transition-colors"
          >
            Enquire on WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
