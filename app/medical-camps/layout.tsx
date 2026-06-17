import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Ayurvedic Medical Camps in Telangana',
  description: 'Sri Jayanthi Wellbeing conducts free Ayurvedic medical camps across villages and towns in Telangana, bringing healthcare to underserved communities.',
  alternates: { canonical: '/medical-camps' },
};

export default function MedicalCampsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
