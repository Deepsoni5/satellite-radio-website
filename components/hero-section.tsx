'use client';

import { siteConfig } from '@/config/site';
import { Phone, Radio } from 'lucide-react';

export default function HeroSection() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get Instant Activation Support
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto text-pretty">
            Ready to activate your service? Our team is here to help you get started in minutes. Call now and we&apos;ll guide you through every step.
          </p>
          <button
            onClick={handleCallClick}
            className="cta-button mb-6 inline-flex"
            aria-label={`Call ${siteConfig.contact.phone}`}
          >
            <Phone className="w-5 h-5" />
            Call Now: {siteConfig.contact.phone}
          </button>
        </div>
      </div>
    </section>
  );
}
