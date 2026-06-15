'use client';

import { MessageCircle } from 'lucide-react';
import { addLead, loadData } from '@/lib/store';

export default function WhatsAppButton() {
  const handleClick = () => {
    const data = loadData();
    addLead({
      type: 'whatsapp_click',
      source: typeof window !== 'undefined' ? window.location.pathname : '/',
      details: `WhatsApp: ${data.contact.whatsappNumber}`,
    });
  };

  return (
    <a
      href={`https://wa.me/${loadData().contact.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-forest rounded-full shadow-lg flex items-center justify-center hover:bg-gold transition-colors duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-cream" />
      <span className="absolute right-16 bg-forest text-cream text-xs px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
