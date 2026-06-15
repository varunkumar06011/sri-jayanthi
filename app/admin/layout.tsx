import type { Metadata } from 'next';
import AdminSidebar from '@/components/AdminSidebar';

export const metadata: Metadata = {
  title: 'Admin | Sri Jayanthi Wellbeing',
  description: 'Admin panel for Sri Jayanthi Wellbeing',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row min-h-screen">
        <AdminSidebar />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
