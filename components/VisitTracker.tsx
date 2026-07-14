'use client';

import { useEffect } from 'react';
import { incrementVisits } from '@/lib/store';

export default function VisitTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Defer localStorage write so it does not block initial render / navigation.
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => incrementVisits(), { timeout: 2000 })
      : window.setTimeout(() => incrementVisits(), 2000);
    return () => {
      if (typeof id === 'number') {
        window.cancelIdleCallback ? window.cancelIdleCallback(id) : window.clearTimeout(id);
      }
    };
  }, []);

  return null;
}
