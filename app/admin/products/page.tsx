'use client';

import { useEffect, useState } from 'react';
import { loadData, saveData, type SiteData, type Product } from '@/lib/store';
import { Plus, Trash2, Save, X } from 'lucide-react';

export default function AdminProducts() {
  const [data, setData] = useState<SiteData | null>(null);
  const [editing, setEditing] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    setData(loadData());
  }, []);

  const refresh = () => setData(loadData());

  const handleSave = (product: Product) => {
    const current = loadData();
    const exists = current.products.find((p) => p.id === product.id);
    if (exists) {
      current.products = current.products.map((p) => (p.id === product.id ? product : p));
    } else {
      current.products = [...current.products, product];
    }
    saveData(current);
    refresh();
    setEditing(null);
    setIsAdding(false);
  };

  const handleDelete = (id: string) => {
    if (!confirm('Delete this product?')) return;
    const current = loadData();
    current.products = current.products.filter((p) => p.id !== id);
    saveData(current);
    refresh();
  };

  const emptyProduct: Product = {
    id: Date.now().toString(36),
    name: '',
    description: '',
    price: 0,
    image: '',
    ingredients: '',
    for: '',
  };

  if (!data) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sans text-3xl font-bold text-forest">Products</h1>
          <p className="text-forest/60">Manage products displayed on your website.</p>
        </div>
        <button
          onClick={() => { setIsAdding(true); setEditing(emptyProduct); }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-cream text-sm font-medium rounded-lg hover:bg-gold transition-colors"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {(isAdding || editing) && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-sans text-lg font-semibold text-forest">
              {isAdding ? 'Add Product' : 'Edit Product'}
            </h2>
            <button
              onClick={() => { setEditing(null); setIsAdding(false); }}
              className="text-forest/40 hover:text-forest"
            >
              <X size={20} />
            </button>
          </div>
          <ProductForm
            product={editing || emptyProduct}
            onSave={handleSave}
            onCancel={() => { setEditing(null); setIsAdding(false); }}
          />
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-sans text-lg font-semibold text-forest">{product.name}</h3>
                <span className="text-sm font-bold text-gold">₹{product.price.toLocaleString()}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditing(product)}
                  className="text-xs px-3 py-1 border border-forest text-forest rounded hover:bg-forest hover:text-cream transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-xs px-3 py-1 border border-red-300 text-red-600 rounded hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={14} className="inline" />
                </button>
              </div>
            </div>
            {product.image && (
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-3 bg-gray-100" />
            )}
            <p className="text-sm text-forest/60 mb-3 flex-1">{product.description}</p>
            <div className="text-xs text-forest/50 space-y-1">
              <p><span className="font-medium text-gold">Ingredients:</span> {product.ingredients}</p>
              <p><span className="font-medium text-gold">For:</span> {product.for}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductForm({
  product,
  onSave,
  onCancel,
}: {
  product: Product;
  onSave: (p: Product) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Product>(product);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-forest mb-1">Product Name</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
          placeholder="e.g. Kesha Thailam"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-forest mb-1">Price (₹)</label>
          <input
            type="number"
            required
            min={0}
            value={form.price}
            onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
            placeholder="e.g. 1200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-forest mb-1">Image URL</label>
          <input
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
            placeholder="/products/image.jpg"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-forest mb-1">Description</label>
        <textarea
          required
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
          placeholder="Short description..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-forest mb-1">Ingredients</label>
        <input
          required
          value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
          placeholder="Comma separated ingredients..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-forest mb-1">Who It's For</label>
        <input
          required
          value={form.for}
          onChange={(e) => setForm({ ...form, for: e.target.value })}
          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
          placeholder="Target audience..."
        />
      </div>
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-cream text-sm font-medium rounded-lg hover:bg-gold transition-colors"
        >
          <Save size={16} />
          Save Product
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 border border-gray-300 text-forest text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
