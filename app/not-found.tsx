import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-sans text-4xl md:text-6xl font-bold text-forest mb-4">404</h1>
        <p className="text-forest/70 mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-cream text-sm font-medium rounded-sm hover:bg-forest transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
