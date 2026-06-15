'use client';

import { useEffect, useState } from 'react';
import { loadData, saveData, type SiteData } from '@/lib/store';
import { Trash2, Download } from 'lucide-react';

export default function AdminLeads() {
  const [data, setData] = useState<SiteData | null>(null);

  useEffect(() => {
    setData(loadData());
  }, []);

  const refresh = () => setData(loadData());

  const handleDelete = (id: string) => {
    if (!confirm('Delete this lead?')) return;
    const current = loadData();
    current.leads = current.leads.filter((l) => l.id !== id);
    saveData(current);
    refresh();
  };

  const handleExport = () => {
    if (!data) return;
    const csv = [
      'ID,Type,Source,Details,Timestamp',
      ...data.leads.map((l) =>
        [l.id, l.type, l.source, l.details || '', l.timestamp].map((v) => `"${v}"`).join(',')
      ),
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sri-jayanthi-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!data) return null;

  const sortedLeads = [...data.leads].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-forest">Leads</h1>
          <p className="text-forest/60">Visitors who clicked WhatsApp or submitted forms.</p>
        </div>
        <button
          onClick={handleExport}
          disabled={data.leads.length === 0}
          className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-cream text-sm font-medium rounded-lg hover:bg-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Download size={16} />
          Export CSV
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {sortedLeads.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-forest/50">No leads captured yet.</p>
            <p className="text-sm text-forest/40 mt-1">
              Leads appear when visitors click WhatsApp buttons or submit enquiry forms.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-forest/70 uppercase tracking-wide">Type</th>
                  <th className="px-6 py-3 text-xs font-semibold text-forest/70 uppercase tracking-wide">Source</th>
                  <th className="px-6 py-3 text-xs font-semibold text-forest/70 uppercase tracking-wide">Details</th>
                  <th className="px-6 py-3 text-xs font-semibold text-forest/70 uppercase tracking-wide">Date & Time</th>
                  <th className="px-6 py-3 text-xs font-semibold text-forest/70 uppercase tracking-wide w-12" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sortedLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-gray-100 text-forest">
                        {lead.type.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-forest/80">{lead.source}</td>
                    <td className="px-6 py-4 text-sm text-forest/60 max-w-xs truncate">
                      {lead.details || '—'}
                    </td>
                    <td className="px-6 py-4 text-sm text-forest/60">
                      {new Date(lead.timestamp).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(lead.id)}
                        className="text-red-400 hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
