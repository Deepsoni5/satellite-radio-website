'use client';

import { siteConfig } from '@/config/site';
import { Phone, Radio } from 'lucide-react';

export default function HeroSection() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-12 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Radio className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm md:text-base">
                Premium Audio Experience
              </span>
            </div>

            <h2 className="section-title">
              Premium Radio at Your Fingertips
            </h2>

            <p className="text-lg text-slate-600 mb-6 text-pretty leading-relaxed">
              Experience crystal-clear entertainment with nationwide coverage. Get instant access to your favorite stations, shows, and music anywhere you go.
            </p>

            <p className="text-slate-600 mb-8 text-pretty leading-relaxed">
              Our service is available 24/7 with dedicated customer support. Whether you&apos;re driving, traveling, or at home, enjoy uninterrupted premium audio entertainment.
            </p>

            <button
              onClick={handleCallClick}
              className="cta-button mb-6"
              aria-label={`Call ${siteConfig.contact.phone}`}
            >
              <Phone className="w-5 h-5" />
              Call Now: {siteConfig.contact.phone}
            </button>

            <p className="text-sm text-slate-500">
              ✓ Quick activation • ✓ 24/7 Support • ✓ Nationwide Coverage
            </p>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <Radio className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
