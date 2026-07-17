'use client';

import { siteConfig } from '@/config/site';
import { Phone } from 'lucide-react';

export default function Navbar() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Brand Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
              {siteConfig.brand.name}
            </h1>
          </div>

          {/* Call Now Button */}
          <button
            onClick={handleCallClick}
            className="cta-button"
            aria-label={`Call ${siteConfig.contact.phone}`}
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="inline sm:hidden">Call</span>
            <span className="hidden md:inline text-white/90">
              {siteConfig.contact.phoneShort}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
