'use client';

import { siteConfig } from '@/config/site';
import { Phone, Satellite, Signal, Volume2 } from 'lucide-react';

export default function AboutSection() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  const features = [
    {
      icon: Satellite,
      title: 'What is Radio?',
      description:
        'Radio is a medium for transmitting audio content over airwaves to receivers. It has been a primary source of entertainment and information for decades.',
    },
    {
      icon: Signal,
      title: 'Satellite Advantage',
      description:
        'Satellite-based radio provides nationwide coverage without geographic limitations. Unlike traditional broadcast radio, you get the same quality signals from coast to coast.',
    },
    {
      icon: Volume2,
      title: 'Premium Content',
      description:
        'Access hundreds of channels featuring music, talk shows, sports, news, and entertainment. Our service delivers high-quality digital audio with crystal-clear reception.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Understanding Radio Services</h2>
          <p className="section-subtitle">
            Learn about how radio services work and why our platform stands out
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-pretty leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who enjoy premium radio service. Our team is standing by to help you activate your account today.
          </p>
          <button
            onClick={handleCallClick}
            className="cta-button"
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
