'use client';

import { siteConfig } from '@/config/site';
import { Phone, AlertCircle, HelpCircle } from 'lucide-react';

export default function RadioIdSection() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Finding Your Radio Identification Number</h2>
          <p className="section-subtitle">
            Step-by-step guide to locate your unique radio ID
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              What is a Radio ID?
            </h3>
            <p className="text-slate-600 mb-4 text-pretty leading-relaxed">
              Your radio identification number is a unique code assigned to your device. It&apos;s essential for account setup, device management, and accessing your service. This ID ensures that your account is properly linked to your receiver.
            </p>
            <p className="text-slate-600 mb-8 text-pretty leading-relaxed">
              Think of it as a digital serial number that identifies your specific device. Having this ready makes the activation process faster and more efficient.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Pro Tip
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Keep your radio ID handy for quick reference. You may need it when contacting support or managing your account online.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              How to Find Your Radio ID
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Check Your Device Display
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Turn on your receiver and look for the ID shown on the screen. Most models display it prominently on the home menu.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Navigate to Settings
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Go to the Settings or Information menu in your receiver&apos;s main interface.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Look for Device Info
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Select Device Information or Radio ID. Your unique ID will be displayed here.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Write It Down
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Note down the number and keep it safe. You&apos;ll need it for activation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 border border-blue-300 rounded p-4">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900">
                  Can&apos;t find your ID? Our support team can help you locate it quickly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-8 md:p-12 border border-blue-200">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                100%
              </div>
              <p className="text-slate-600">
                Quick & Easy Process
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                24/7
              </div>
              <p className="text-slate-600">
                Dedicated Support
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                Instant
              </div>
              <p className="text-slate-600">
                Verification & Setup
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-6">
              Need help finding or verifying your Radio ID? Our specialists are here to assist you.
            </p>
            <button
              onClick={handleCallClick}
              className="cta-button"
              aria-label={`Call ${siteConfig.contact.phone}`}
            >
              <Phone className="w-5 h-5" />
              Call for Assistance: {siteConfig.contact.phone}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
