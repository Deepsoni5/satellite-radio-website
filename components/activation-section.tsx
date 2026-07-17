'use client';

import { siteConfig } from '@/config/site';
import { Phone, CheckCircle } from 'lucide-react';

export default function ActivationSection() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  const steps = [
    {
      number: '1',
      title: 'Call Our Activation Team',
      description:
        'Reach out to our dedicated support team. They will guide you through the entire activation process and answer any questions you may have.',
    },
    {
      number: '2',
      title: 'Provide Account Information',
      description:
        'Share your device details and any required information. Our team will verify everything to ensure smooth activation of your service.',
    },
    {
      number: '3',
      title: 'Complete Payment Setup',
      description:
        'Choose your preferred payment method and subscription plan. We accept multiple payment options for your convenience.',
    },
    {
      number: '4',
      title: 'Instant Service Activation',
      description:
        'Once payment is processed, your service activates immediately. You can start enjoying premium content right away.',
    },
    {
      number: '5',
      title: 'Download the App',
      description:
        'Install our application on your device for the best experience. Stream content on the go with our user-friendly app.',
    },
    {
      number: '6',
      title: 'Start Enjoying Content',
      description:
        'Browse our extensive catalog and enjoy hours of entertainment. Access your favorite channels anytime, anywhere.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">How to Activate Your Service</h2>
          <p className="section-subtitle">
            Simple steps to get your premium radio service up and running
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="feature-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-slate-600 text-pretty leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg border-2 border-blue-600 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Activation Support Available 24/7
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-600">
                    Same-day activation guaranteed
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-600">
                    Expert support team standing by
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-600">
                    Hassle-free process from start to finish
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-600">
                    Flexible subscription options
                  </span>
                </li>
              </ul>
              <button
                onClick={handleCallClick}
                className="cta-button"
                aria-label={`Call ${siteConfig.contact.phone}`}
              >
                <Phone className="w-5 h-5" />
                Call to Activate: {siteConfig.contact.phone}
              </button>
            </div>
            <div className="hidden md:block">
              <div className="bg-blue-100 rounded-lg p-8 text-center">
                <Phone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  {siteConfig.contact.phone}
                </p>
                <p className="text-slate-600">
                  Call anytime • Expert assistance • Fast setup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
