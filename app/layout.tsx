import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VisitTracker from '@/components/VisitTracker';

export const metadata: Metadata = {
  metadataBase: new URL('https://srijayanthi.com'),
  title: {
    default: 'Sri Jayanthi Wellbeing | Best Ayurvedic Clinic',
    template: '%s | Sri Jayanthi Wellbeing',
  },
  description:
    'Authentic Ayurvedic treatment for spine issues, skin conditions and lifestyle disorders. Panchakarma specialists, free medical camps and natural Ayurvedic wellness products.',
  keywords: [
    'Ayurvedic clinic',
    'Panchakarma treatment',
    'Ayurveda doctor',
    'back pain treatment Ayurveda',
    'psoriasis Ayurvedic treatment',
    'free medical camps',
    'Ayurvedic products',
  ],
  icons: { icon: '/SJ.cdr.png' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sri Jayanthi Wellbeing',
    title: 'Sri Jayanthi Wellbeing | Ayurvedic Clinic',
    description:
      'Authentic Panchakarma, spine & skin treatment and free medical camps.',
    url: 'https://srijayanthi.com',
    images: [{ url: '/SJ.cdr.png', width: 800, height: 800, alt: 'Sri Jayanthi Wellbeing logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Sri Jayanthi Wellbeing | Ayurvedic Clinic',
    description: 'Authentic Ayurveda for spine, skin and lifestyle disorders.',
    images: ['/SJ.cdr.png'],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
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
                postalCode: '[REPLACE WITH PIN CODE]',
                addressCountry: 'IN',
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
