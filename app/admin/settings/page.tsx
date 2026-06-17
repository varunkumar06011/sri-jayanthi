'use client';

import { useEffect, useState } from 'react';
import { loadData, saveData, type SiteData, type ContactInfo } from '@/lib/store';
import { Save, RotateCcw } from 'lucide-react';

export default function AdminSettings() {
  const [data, setData] = useState<SiteData | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setData(loadData());
  }, []);

  const handleSave = () => {
    if (!data) return;
    saveData(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    if (!confirm('Reset all data to defaults? This cannot be undone.')) return;
    localStorage.removeItem('sri_jayanthi_data');
    setData(loadData());
  };

  if (!data) return null;

  return (
    <div>
      <h1 className="font-sans text-3xl font-bold text-forest mb-2">Settings</h1>
      <p className="text-forest/60 mb-8">Update logo and contact details. Changes reflect instantly on the website.</p>

      <div className="max-w-2xl space-y-6">
        {/* Logo */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="font-sans text-lg font-semibold text-forest mb-4">Logo</h2>
          <div className="flex items-center gap-6">
            <img
              src={data.logoUrl}
              alt="Current logo"
              className="h-20 w-auto object-contain border border-gray-200 rounded-lg p-2"
            />
            <div className="flex-1">
              <label className="block text-sm font-medium text-forest mb-1">Logo Image URL</label>
              <input
                value={data.logoUrl}
                onChange={(e) => setData({ ...data, logoUrl: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
                placeholder="/Logo-Final-Version.png"
              />
              <p className="text-xs text-forest/40 mt-1">Paste a path or external image URL.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="font-sans text-lg font-semibold text-forest mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-forest mb-1">Phone Number</label>
              <input
                value={data.contact.phone}
                onChange={(e) =>
                  setData({ ...data, contact: { ...data.contact, phone: e.target.value } })
                }
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
                placeholder="+91 ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-forest mb-1">WhatsApp Number</label>
              <input
                value={data.contact.whatsappNumber}
                onChange={(e) =>
                  setData({ ...data, contact: { ...data.contact, whatsappNumber: e.target.value } })
                }
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
                placeholder="919177816622 (no +, no spaces)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-forest mb-1">Email</label>
              <input
                value={data.contact.email}
                onChange={(e) =>
                  setData({ ...data, contact: { ...data.contact, email: e.target.value } })
                }
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
                placeholder="contact@srijayanthi.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-forest mb-1">Address</label>
              <textarea
                rows={3}
                value={data.contact.address}
                onChange={(e) =>
                  setData({ ...data, contact: { ...data.contact, address: e.target.value } })
                }
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-forest focus:outline-none focus:border-forest"
                placeholder="Clinic address..."
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-cream text-sm font-medium rounded-lg hover:bg-gold transition-colors"
          >
            <Save size={16} />
            Save Changes
          </button>
          {saved && <span className="text-sm text-green-600 font-medium">Saved!</span>}
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-red-300 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors ml-auto"
          >
            <RotateCcw size={16} />
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
}
