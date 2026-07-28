import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ayurvedic Products | Gas-Empt, Kasa-Off, Immune It',
  description: 'Authentic Ayurvedic wellness products made for digestive health, respiratory relief and immunity.',
  alternates: { canonical: '/products' },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
