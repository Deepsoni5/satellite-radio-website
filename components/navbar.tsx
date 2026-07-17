'use client';

import { siteConfig } from '@/config/site';
import { Phone } from 'lucide-react';

export default function Navbar() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 gap-2 md:gap-4">
          {/* Brand Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
              {siteConfig.brand.name}
            </h1>
          </div>

          {/* Call Now Button */}
          <button
            onClick={handleCallClick}
            className="bg-blue-600 text-white px-3 sm:px-5 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-1.5 sm:gap-2 shadow-md hover:shadow-lg flex-shrink-0 whitespace-nowrap text-sm sm:text-base"
            aria-label={`Call ${siteConfig.contact.phone}`}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="inline sm:hidden">Call</span>
            <span className="font-semibold">{siteConfig.contact.phone}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
