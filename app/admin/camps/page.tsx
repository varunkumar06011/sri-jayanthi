'use client';

import { useEffect, useState } from 'react';
import {
  loadData,
  updateCampImages,
  type CampImage,
  defaultCampImages,
} from '@/lib/store';
import { Plus, Trash2, Save, Image as ImageIcon, MapPin, CalendarDays } from 'lucide-react';

const emptyForm = { url: '', caption: '', location: '', date: '' };

export default function AdminCampsPage() {
  const [images, setImages] = useState<CampImage[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [saved, setSaved] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  useEffect(() => {
    setImages(loadData().campImages);
  }, []);

  const handleAdd = () => {
    if (!form.url.trim()) return;
    const newImg: CampImage = {
      id: 'camp-' + Date.now().toString(36),
      url: form.url.trim(),
      caption: form.caption.trim(),
      location: form.location.trim(),
      date: form.date.trim(),
    };
    const updated = [...images, newImg];
    setImages(updated);
    updateCampImages(updated);
    setForm(emptyForm);
    setPreviewError(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDelete = (id: string) => {
    const updated = images.filter((img) => img.id !== id);
    setImages(updated);
    updateCampImages(updated);
  };

  const handleResetDefaults = () => {
    if (!confirm('Reset camp images to defaults?')) return;
    setImages(defaultCampImages);
    updateCampImages(defaultCampImages);
  };

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold text-forest mb-2">Medical Camps</h1>
      <p className="text-forest/60 mb-8">
        Add or remove camp photos shown on the public <strong>/medical-camps</strong> page.
        Paste any hosted image URL or use <code>/camps/filename.jpg</code> for images placed in the public/camps/ folder.
      </p>

      {/* Add New Image Form */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="font-serif text-lg font-semibold text-forest mb-5 flex items-center gap-2">
          <Plus size={18} className="text-gold" />
          Add New Camp Photo
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-forest mb-1">
              Image URL <span className="text-red-400">*</span>
            </label>
            <input
              value={form.url}
              onChange={(e) => { setForm({ ...form, url: e.target.value }); setPreviewError(false); }}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest text-sm"
              placeholder="https://... or /camps/photo.jpg"
            />
            <p className="text-xs text-forest/40 mt-1">
              Place local images in <code>public/camps/</code> and use <code>/camps/filename.jpg</code>. Or paste any external URL.
            </p>
          </div>
          {form.url && (
            <div className="md:col-span-2">
              <p className="text-xs font-medium text-forest/60 mb-2">Preview</p>
              <div className="h-40 w-full max-w-xs rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                {!previewError ? (
                  <img
                    src={form.url}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={() => setPreviewError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-forest/30">
                    <ImageIcon size={28} />
                    <span className="text-xs mt-1">Cannot load image</span>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-forest mb-1">Caption</label>
            <textarea
              rows={2}
              value={form.caption}
              onChange={(e) => setForm({ ...form, caption: e.target.value })}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest text-sm resize-none"
              placeholder="e.g. Free Ayurvedic consultations at a rural health camp — Ongole, 2024"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-forest mb-1">Location</label>
            <input
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest text-sm"
              placeholder="e.g. Ongole, Andhra Pradesh"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-forest mb-1">Date / Year</label>
            <input
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest text-sm"
              placeholder="e.g. March 2024"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <button
            onClick={handleAdd}
            disabled={!form.url.trim()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-cream text-sm font-medium rounded-lg hover:bg-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Save size={15} />
            Add Photo
          </button>
          {saved && <span className="text-sm text-green-600 font-medium">Added!</span>}
        </div>
      </div>

      {/* Existing Images */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-serif text-lg font-semibold text-forest">
            Current Photos ({images.length})
          </h2>
          <button onClick={handleResetDefaults} className="text-xs text-red-500 hover:underline">
            Reset to defaults
          </button>
        </div>
        {images.length === 0 ? (
          <p className="text-sm text-forest/40 text-center py-10">No camp photos yet. Add one above.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img) => (
              <div key={img.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-50 overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect fill="%23f3f4f6" width="300" height="200"/><text fill="%239ca3af" font-size="13" x="50%25" y="50%25" text-anchor="middle" dy=".3em">No preview</text></svg>';
                    }}
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs text-forest/70 leading-snug mb-2 line-clamp-2">
                    {img.caption || <span className="italic text-forest/30">No caption</span>}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-forest/40">
                      {img.location && <span>{img.location}</span>}
                      {img.location && img.date && <span> · </span>}
                      {img.date && <span>{img.date}</span>}
                    </div>
                    <button
                      onClick={() => handleDelete(img.id)}
                      className="p-1.5 text-red-400 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
