'use client';

import { siteConfig } from '@/config/site';
import { Phone, Clock, Users, Shield, MessageSquare, AlertCircle } from 'lucide-react';

export default function SupportSection() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  const supportFeatures = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description:
        'Our support team is available round the clock. Whether you need help at midnight or noon, we&apos;re here for you.',
    },
    {
      icon: Users,
      title: 'Expert Support Team',
      description:
        'Trained professionals ready to assist with activation, troubleshooting, and account management at any time.',
    },
    {
      icon: MessageSquare,
      title: 'Multiple Contact Options',
      description:
        'Reach us by phone or email. We respond promptly to ensure you get the help you need quickly.',
    },
    {
      icon: Shield,
      title: 'Account Security',
      description:
        'Your information is protected with industry-leading security measures. We keep your data safe and private.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">24/7 Customer Support & Instant Help</h2>
          <p className="section-subtitle">
            We&apos;re committed to your success with instant assistance whenever you need it
          </p>
        </div>

        {/* Main Support Info */}
        <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Always Here for You
              </h3>
              <p className="text-slate-600 mb-4 text-pretty leading-relaxed">
                Experience support that truly cares. Our dedicated team handles every question, issue, or concern with professionalism and expertise.
              </p>
              <p className="text-slate-600 mb-8 text-pretty leading-relaxed">
                From initial setup to ongoing service management, we ensure your experience is seamless and satisfying. No wait times, no transfers—just real solutions.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-slate-700">
                    Immediate response to service issues
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-slate-700">
                    Friendly, patient support representatives
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-slate-700">
                    Quick problem resolution
                  </span>
                </div>
              </div>

              <button
                onClick={handleCallClick}
                className="cta-button"
                aria-label={`Call ${siteConfig.contact.phone}`}
              >
                <Phone className="w-5 h-5" />
                Get Support Now: {siteConfig.contact.phone}
              </button>
            </div>

            {/* Contact Info Box */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
              <Clock className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h4 className="text-2xl font-bold mb-2">Available 24/7</h4>
              <p className="text-blue-100 mb-6">
                No holidays, no breaks. We&apos;re always here to help.
              </p>
              <div className="bg-blue-500 bg-opacity-50 rounded p-4 mb-6">
                <p className="text-3xl font-bold mb-2">{siteConfig.contact.phone}</p>
                <p className="text-blue-100 text-sm">
                  Call anytime for instant assistance
                </p>
              </div>
              <p className="text-sm text-blue-100">
                Multilingual support available
              </p>
            </div>
          </div>

          {/* Support Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
            {supportFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-600 text-pretty leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Response Promise */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="feature-card text-center">
            <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Same-Day Resolution
            </h3>
            <p className="text-slate-600 text-pretty">
              Most issues are resolved within the same call. Our team has the tools and authority to help immediately.
            </p>
          </div>

          <div className="feature-card text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Knowledgeable Specialists
            </h3>
            <p className="text-slate-600 text-pretty">
              Every team member is trained extensively. You won&apos;t be transferred around or put on hold endlessly.
            </p>
          </div>

          <div className="feature-card text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Trusted & Secure
            </h3>
            <p className="text-slate-600 text-pretty">
              Your information is protected. We never share your details with third parties without permission.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Don&apos;t Wait, Get Help Today
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re ready to activate, troubleshooting an issue, or have general questions, our team is ready to assist.
          </p>
          <button
            onClick={handleCallClick}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2 shadow-md"
            aria-label={`Call ${siteConfig.contact.phone}`}
          >
            <Phone className="w-5 h-5" />
            Call Our Support Team: {siteConfig.contact.phone}
          </button>
        </div>
      </div>
    </section>
  );
}
