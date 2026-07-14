'use client';

import { useEffect, useState } from 'react';
import { loadData, type CampImage } from '@/lib/store';
import { CalendarDays, MapPin } from 'lucide-react';

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
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-forest mb-4">Gallery</h1>
          <p className="text-forest/60 max-w-2xl mx-auto">
            Glimpses of our medical camps, consultations, and community wellness initiatives across Telangana.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="p-4">
                    <p className="text-sm text-forest/80 leading-relaxed mb-3">{img.caption}</p>
                    <div className="flex items-center gap-4 text-xs text-forest/50">
                      {img.location && (
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {img.location}
                        </span>
                      )}
                      {img.date && (
                        <span className="flex items-center gap-1">
                          <CalendarDays size={11} />
                          {img.date}
                        </span>
                      )}
                    </div>
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
