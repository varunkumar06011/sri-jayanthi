import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Kesha Thailam',
    description: 'A classical hair oil prepared with bhringraj, amla, and sesame base. Used for premature greying, hair fall, and scalp dryness.',
    ingredients: 'Bhringraj, Amla, Brahmi, Sesame oil, Coconut milk',
    for: 'Anyone with hair fall, dandruff, or early greying.',
  },
  {
    name: 'Pain Relief Lepam',
    description: 'External herbal paste for joint and muscle pain. Gives immediate warmth and relief when applied before a hot pack.',
    ingredients: 'Dashamoola, Nirgundi, Castor leaf, Rasna, Ajwain',
    for: 'Back pain, knee pain, sprains, and arthritic joints.',
  },
  {
    name: 'Skin Glow Lepam',
    description: 'Face and body pack for hyperpigmentation, acne scars, and uneven skin tone. Brightens without bleaching.',
    ingredients: 'Sandalwood, Turmeric, Manjistha, Lodhra, Rose water',
    for: 'Dull skin, acne marks, tan removal, and weekly skin care.',
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const whatsappLink = `https://wa.me/919177816622?text=${encodeURIComponent(
    `Hi, I'm interested in ${product.name}. Please share details.`
  )}`;

  return (
    <div className="p-6 md:p-8 bg-white border border-gray-200 rounded-lg flex flex-col">
      <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15 9H22L16 14L18 22L12 17L6 22L8 14L2 9H9L12 2Z" fill="#b8952a" />
        </svg>
      </div>
      <h2 className="font-serif text-2xl font-semibold text-forest mb-3">{product.name}</h2>
      <p className="text-sm text-forest/70 leading-relaxed mb-4 flex-1">{product.description}</p>
      <div className="mb-2">
        <span className="text-xs font-semibold text-gold uppercase tracking-wide">Key Ingredients</span>
        <p className="text-xs text-forest/60 mt-1">{product.ingredients}</p>
      </div>
      <div className="mb-6">
        <span className="text-xs font-semibold text-gold uppercase tracking-wide">Who It's For</span>
        <p className="text-xs text-forest/60 mt-1">{product.for}</p>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gold text-cream text-sm font-medium rounded-sm hover:bg-forest transition-colors"
      >
        Enquire on WhatsApp
        <ArrowRight size={16} />
      </a>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="pb-16">
      {/* Page Header */}
      <section className="py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-forest mb-4">Products</h1>
          <p className="text-forest/60 max-w-2xl mx-auto">
            Handmade, small-batch Ayurvedic preparations. No synthetic fragrances, no preservatives beyond what nature provides.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg text-center">
            <p className="text-sm text-forest/70">
              More products coming soon. If you are looking for something specific, message us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
