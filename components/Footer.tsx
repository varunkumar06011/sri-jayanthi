'use client';

import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';
import { loadData } from '@/lib/store';
import { useState, useEffect } from 'react';

const quickLinks = [
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
];

export default function Footer() {
  const [contact, setContact] = useState(loadData().contact);
  const [logoUrl, setLogoUrl] = useState(loadData().logoUrl);

  useEffect(() => {
    const handler = () => {
      const data = loadData();
      setContact(data.contact);
      setLogoUrl(data.logoUrl);
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  return (
    <footer className="bg-forest text-cream/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoUrl}
                alt="Sri Jayanthi"
                className="h-8 w-auto object-contain"
              />
              <span className="font-serif text-xl font-semibold text-cream">Sri Jayanthi</span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed mb-4">
              Ayurveda • Wellness • Empowerment
            </p>
            <p className="text-sm text-cream/60 leading-relaxed">
              Ancient healing for modern lives. We don't just treat — we teach you to heal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/919177816622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-sm text-cream/80 hover:text-gold transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-cream/70">
                  {contact.address.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < contact.address.split('\n').length - 1 && <br />}</span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-sm text-cream/70 hover:text-gold transition-colors">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Sri Jayanthi Wellbeing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919177816622"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream/50 hover:text-gold transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-cream/20">|</span>
            <span className="text-xs text-cream/50">Follow us on social media</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
