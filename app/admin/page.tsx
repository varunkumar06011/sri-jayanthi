'use client';

import { useEffect, useState } from 'react';
import { loadData, type SiteData } from '@/lib/store';
import { Eye, MousePointer, Package, Users } from 'lucide-react';

export default function AdminDashboard() {
  const [data, setData] = useState<SiteData | null>(null);

  useEffect(() => {
    setData(loadData());

    const handleStorage = () => setData(loadData());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  if (!data) return null;

  const today = new Date().toISOString().slice(0, 10);
  const todayLeads = data.leads.filter((l) => l.timestamp.startsWith(today));
  const whatsappLeads = data.leads.filter((l) => l.type === 'whatsapp_click');
  const formLeads = data.leads.filter((l) => l.type === 'form_submit');

  const cards = [
    { label: 'Total Visits', value: data.visits.toLocaleString(), icon: Eye, color: 'bg-forest' },
    { label: 'Total Products', value: data.products.length.toString(), icon: Package, color: 'bg-gold' },
    { label: 'Total Leads', value: data.leads.length.toString(), icon: Users, color: 'bg-forest' },
    { label: 'Today\'s Leads', value: todayLeads.length.toString(), icon: MousePointer, color: 'bg-gold' },
  ];

  return (
    <div>
      <h1 className="font-sans text-3xl font-bold text-forest mb-2">Dashboard</h1>
      <p className="text-forest/60 mb-8">Overview of your website performance.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cards.map((c) => (
          <div key={c.label} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className={`w-10 h-10 rounded-lg ${c.color} flex items-center justify-center mb-4`}>
              <c.icon size={20} className="text-cream" />
            </div>
            <div className="text-2xl font-bold text-forest">{c.value}</div>
            <div className="text-sm text-forest/50 mt-1">{c.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="font-sans text-xl font-semibold text-forest mb-4">Leads Breakdown</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-forest/70">WhatsApp Clicks</span>
              <span className="font-semibold text-forest">{whatsappLeads.length}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-forest h-2 rounded-full transition-all"
                style={{ width: `${data.leads.length ? (whatsappLeads.length / data.leads.length) * 100 : 0}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-forest/70">Form Submissions</span>
              <span className="font-semibold text-forest">{formLeads.length}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-gold h-2 rounded-full transition-all"
                style={{ width: `${data.leads.length ? (formLeads.length / data.leads.length) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="font-sans text-xl font-semibold text-forest mb-4">Recent Activity</h2>
          {data.leads.slice(0, 5).length === 0 ? (
            <p className="text-sm text-forest/50">No leads yet. Activity will appear here when visitors interact with your site.</p>
          ) : (
            <div className="space-y-3">
              {data.leads.slice(0, 5).map((lead) => (
                <div key={lead.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-forest capitalize">{lead.type.replace('_', ' ')}</p>
                    <p className="text-xs text-forest/50">{lead.source}</p>
                  </div>
                  <span className="text-xs text-forest/40">
                    {new Date(lead.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
