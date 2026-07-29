'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { defaultData } from '@/lib/store';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState(defaultData.logoUrl);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const loadLogo = () => {
      try {
        const raw = localStorage.getItem('sri_jayanthi_data_v8');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.logoUrl) setLogoUrl(parsed.logoUrl);
        }
      } catch {
        // ignore
      }
    };
    loadLogo();
    const handler = () => loadLogo();
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  return (
    <header className="md:sticky md:top-0 z-50 bg-[#fdf8f0]/95 backdrop-blur-sm border-b border-[#e8dcc8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 sm:h-32 md:h-36">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <img
              src={logoUrl}
              alt="Sri Jayanthi"
              className="h-24 sm:h-28 md:h-32 w-auto object-contain shrink-0"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className="text-sm font-medium text-forest/80 hover:text-gold transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/919177816622?text=Hi, I'd like to book a consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-gold text-cream text-sm font-medium rounded-sm hover:bg-forest transition-colors duration-200"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 sm:p-2 text-forest shrink-0"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-[#e8dcc8]">
            <nav className="flex flex-col gap-1 mt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-forest/80 hover:text-gold hover:bg-[#f5ede0] rounded-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/919177816622?text=Hi, I'd like to book a consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 mx-3 px-5 py-2.5 bg-gold text-cream text-center text-sm font-medium rounded-sm"
              >
                Book Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
