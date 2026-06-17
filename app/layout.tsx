import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VisitTracker from '@/components/VisitTracker';

export const metadata: Metadata = {
  metadataBase: new URL('https://srijayanthi.com'),
  title: {
    default: 'Sri Jayanthi Wellbeing | Best Ayurvedic Clinic in Telangana',
    template: '%s | Sri Jayanthi Wellbeing Telangana',
  },
  description:
    'Authentic Ayurvedic treatment in Telangana for spine issues, skin conditions, and lifestyle disorders. Panchakarma specialists, free medical camps across Telangana, and natural Ayurvedic wellness products.',
  keywords: [
    'Ayurvedic clinic Telangana',
    'Panchakarma treatment Telangana',
    'Ayurveda doctor Telangana',
    'back pain treatment Ayurveda Telangana',
    'psoriasis Ayurvedic treatment Telangana',
    'free medical camps Telangana',
    'Ayurvedic products Telangana',
  ],
  icons: { icon: '/Logo-Final-Version.png' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sri Jayanthi Wellbeing',
    title: 'Sri Jayanthi Wellbeing | Ayurvedic Clinic Serving Telangana',
    description:
      'Authentic Panchakarma, spine & skin treatment, and free medical camps across Telangana.',
    url: 'https://srijayanthi.com',
    images: [{ url: '/Logo-Final-Version.png', width: 800, height: 800, alt: 'Sri Jayanthi Wellbeing logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Sri Jayanthi Wellbeing | Ayurvedic Clinic Telangana',
    description: 'Authentic Ayurveda for spine, skin, and lifestyle disorders across Telangana.',
    images: ['/Logo-Final-Version.png'],
  },
  alternates: {
    canonical: 'https://srijayanthi.com',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Sri Jayanthi Wellbeing',
              image: 'https://srijayanthi.com/Logo-Final-Version.png',
              url: 'https://srijayanthi.com',
              telephone: '+91-77781-66222',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '[REPLACE WITH ACTUAL STREET ADDRESS]',
                addressLocality: '[REPLACE WITH CITY]',
                addressRegion: 'Telangana',
                postalCode: '[REPLACE WITH PIN CODE]',
                addressCountry: 'IN',
              },
              areaServed: {
                '@type': 'State',
                name: 'Telangana',
              },
              medicalSpecialty: ['Ayurveda', 'Panchakarma'],
              priceRange: '₹₹',
            }),
          }}
        />
        <VisitTracker />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
