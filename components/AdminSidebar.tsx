'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  ArrowLeft,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

const nav = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/leads', label: 'Leads', icon: Users },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between bg-forest px-4 py-3 sticky top-0 z-40">
        <span className="text-cream font-serif font-semibold">Admin Panel</span>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-cream">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          mobileOpen ? 'block' : 'hidden'
        } md:block bg-forest text-cream w-full md:w-64 md:min-h-screen flex-shrink-0`}
      >
        <div className="p-6 border-b border-cream/10">
          <h2 className="font-serif text-xl font-bold text-cream">Sri Jayanthi</h2>
          <p className="text-xs text-cream/60 mt-1">Admin Panel</p>
        </div>

        <nav className="p-4 space-y-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                  active
                    ? 'bg-gold/20 text-gold'
                    : 'text-cream/80 hover:bg-cream/10 hover:text-cream'
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-cream/10">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-2.5 text-cream/60 hover:text-cream transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back to Website</span>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
