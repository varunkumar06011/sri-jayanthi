'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/experience', label: 'Experience' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/Logo-Final-Version.png"
              alt="Sri Jayanthi"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-semibold text-forest leading-tight">
                Sri Jayanthi
              </span>
              <span className="text-[10px] md:text-xs tracking-widest text-gold uppercase font-sans">
                Wellbeing
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
            className="md:hidden p-2 text-forest"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col gap-1 mt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-forest/80 hover:text-gold hover:bg-gray-100 rounded-sm transition-colors"
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
