'use client';

import { useEffect, useState } from 'react';
import { loadData, type CampImage } from '@/lib/store';
import { CalendarDays } from 'lucide-react';

export default function GalleryPage() {
  const [images, setImages] = useState<CampImage[]>([]);

  useEffect(() => {
    const data = loadData();
    setImages(data.campImages);
    const handleStorage = () => setImages(loadData().campImages);
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <div className="pb-16">
      {/* Page Header */}
      <section className="py-12 md:py-20 border-b border-gray-100 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sans text-2xl md:text-3xl font-bold text-forest mb-2">Gallery</h1>
          <p className="text-sm md:text-base font-semibold text-forest/70">Glimpse of Community Outreach Program</p>
        </div>
      </section>

      {/* Medical Camps */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-xl md:text-2xl font-semibold text-forest mb-8 text-center">Medical Camps</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/camps/camp 1.jpg', alt: 'Camp 1' },
              { src: '/camps/camp 2.jpg', alt: 'Camp 2' },
              { src: '/camps/camp 3.jpg', alt: 'Camp 3' },
            ].map((img) => (
              <div key={img.src} className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="%23f3f4f6" width="400" height="300"/><text fill="%239ca3af" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em">Image not found</text></svg>';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Awareness Sessions */}
      <section className="py-12 md:py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-xl md:text-2xl font-semibold text-forest mb-8 text-center">Health Awareness Sessions</h2>
          {images.length === 0 ? (
            <div className="text-center py-16 text-forest/40">
              <CalendarDays size={40} className="mx-auto mb-3 opacity-40" />
              <p className="text-sm">Gallery photos will appear here once added from the admin panel.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img) => (
                <div key={img.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="%23f3f4f6" width="400" height="300"/><text fill="%239ca3af" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em">Image not found</text></svg>';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
