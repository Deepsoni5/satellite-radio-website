'use client';

import { siteConfig } from '@/config/site';
import { Phone, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${siteConfig.contact.email}`;
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 pb-8 border-b border-slate-800">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {siteConfig.brand.name}
            </h3>
            <p className="text-sm text-slate-400">
              {siteConfig.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Activation Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  onClick={handleCallClick}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  onClick={handleEmailClick}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="text-xs text-slate-400 mt-3">
                Available 24/7
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <p className="text-sm text-slate-400 mb-4">
              Join our community today and enjoy premium service.
            </p>
            <button
              onClick={handleCallClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition-colors text-sm inline-flex items-center justify-center gap-2"
              aria-label={`Call ${siteConfig.contact.phone}`}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> for better
            entertainment
          </p>
          <p>
            {siteConfig.brand.name} © {currentYear}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
