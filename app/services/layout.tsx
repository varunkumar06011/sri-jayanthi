import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ayurvedic Services in Telangana | Panchakarma, Spine & Skin Care',
  description: 'Panchakarma, spine treatment, and skin disease care at Sri Jayanthi Wellbeing — serving patients across Telangana with classical Ayurveda.',
  alternates: { canonical: '/services' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
