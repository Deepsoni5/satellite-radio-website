'use client';

import { siteConfig } from '@/config/site';
import { Phone, Check } from 'lucide-react';

export default function MembershipSection() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  const benefits = [
    'Unlimited access to premium channels',
    'Ad-free entertainment experience',
    'Multi-device streaming capability',
    'Personalized channel favorites',
    'On-demand content library',
    'Priority customer support',
    'Exclusive member content',
    'Family account options',
    'Flexible subscription plans',
    'Cancel anytime policy',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Join Our Growing Community</h2>
          <p className="section-subtitle">
            Become a member and enjoy premium entertainment benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Benefits List */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              What You Get as a Member
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleCallClick}
              className="cta-button"
              aria-label={`Call ${siteConfig.contact.phone}`}
            >
              <Phone className="w-5 h-5" />
              Become a Member Today: {siteConfig.contact.phone}
            </button>
          </div>

          {/* Right Side Stats/Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 border-2 border-blue-200 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                100K+
              </div>
              <p className="text-slate-600 text-pretty leading-relaxed">
                Happy members enjoying premium content daily
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-blue-200 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                500+
              </div>
              <p className="text-slate-600 text-pretty leading-relaxed">
                Premium channels and on-demand content to explore
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-blue-200 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                #1
              </div>
              <p className="text-slate-600 text-pretty leading-relaxed">
                Rated for customer satisfaction and support quality
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg p-8 md:p-12 border-2 border-slate-200 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Why Choose Our Service?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">
                ✓
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Nationwide Coverage
              </h4>
              <p className="text-slate-600 text-pretty leading-relaxed">
                Crystal-clear reception anywhere in the country with our nationwide network.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">
                ✓
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Unmatched Quality
              </h4>
              <p className="text-slate-600 text-pretty leading-relaxed">
                Premium digital audio quality with zero interruptions and consistent performance.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">
                ✓
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Exceptional Service
              </h4>
              <p className="text-slate-600 text-pretty leading-relaxed">
                Award-winning customer support team available 24/7 for your peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience Premium Entertainment?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied members. Our team will get you set up in minutes with our simple activation process.
          </p>
          <button
            onClick={handleCallClick}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2 shadow-md"
            aria-label={`Call ${siteConfig.contact.phone}`}
          >
            <Phone className="w-5 h-5" />
            Start Your Membership: {siteConfig.contact.phone}
          </button>
        </div>
      </div>
    </section>
  );
}
