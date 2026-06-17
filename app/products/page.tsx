'use client';

import { ArrowRight, Leaf, Users } from 'lucide-react';
import { loadData, addLead, type Product } from '@/lib/store';
import { useState, useEffect } from 'react';

function ProductCard({ product }: { product: Product }) {
  const data = loadData();
  const whatsappLink = `https://wa.me/${data.contact.whatsappNumber}?text=${encodeURIComponent(
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
      {/* Image */}
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

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Name & Price */}
        <div className="mb-4">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-forest tracking-tight">
            {product.name}
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-2xl font-bold text-gold">₹{product.price.toLocaleString()}</span>
            <span className="text-xs px-2 py-0.5 bg-forest/10 text-forest rounded-full font-medium">
              Ayurvedic
            </span>
          </div>
        </div>

        {/* Gold divider */}
        <div className="w-12 h-0.5 bg-gold mb-4" />

        {/* Description */}
        <p className="text-sm md:text-base text-forest/70 leading-relaxed mb-5">
          {product.description}
        </p>

        {/* Ingredients */}
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Leaf size={14} className="text-gold" />
            <span className="text-xs font-bold text-gold uppercase tracking-wider">Key Ingredients</span>
          </div>
          <p className="text-sm text-forest/70 leading-relaxed">{product.ingredients}</p>
        </div>

        {/* Who it's for */}
        <div className="mb-6 p-4 bg-forest/5 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Users size={14} className="text-forest" />
            <span className="text-xs font-bold text-forest uppercase tracking-wider">Who It's For</span>
          </div>
          <p className="text-sm text-forest/70 leading-relaxed">{product.for}</p>
        </div>

        {/* CTA */}
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

  useEffect(() => {
    setProducts(loadData().products);
    const handler = () => setProducts(loadData().products);
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  return (
    <div className="pb-16">
      {/* Page Header */}
      <section className="py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-forest mb-4">Products</h1>
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
              <ProductCard key={product.id} product={product} />
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
