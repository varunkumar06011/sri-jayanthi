'use client';

import { useEffect } from 'react';
import { incrementVisits } from '@/lib/store';

export default function VisitTracker() {
  useEffect(() => {
    incrementVisits();
  }, []);

  return null;
}
