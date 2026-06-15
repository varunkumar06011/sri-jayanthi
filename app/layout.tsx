import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VisitTracker from '@/components/VisitTracker';

export const metadata: Metadata = {
  title: 'Sri Jayanthi Wellbeing | Ayurveda • Wellness • Empowerment',
  description:
    'Authentic Ayurvedic healing for spine issues, skin conditions, and lifestyle disorders. Panchakarma, medical camps, and natural wellness products.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen flex flex-col">
        <VisitTracker />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
