'use client';

import { siteConfig } from '@/config/site';
import { Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FaqSection() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can I get activated?',
      answer:
        'Most customers are activated within the same business day. Once you call our team and provide your information, activation typically happens immediately after payment is confirmed. You can start enjoying your service right away.',
    },
    {
      question: 'What information do I need to activate?',
      answer:
        'You&apos;ll need your radio ID, which is usually displayed on your device. You&apos;ll also need a valid payment method and your contact information. Our team will guide you through everything during the call.',
    },
    {
      question: 'What subscription plans are available?',
      answer:
        'We offer flexible monthly and annual plans to fit your budget. Different tiers provide access to various channel packages. Call us to discuss which plan best suits your entertainment needs.',
    },
    {
      question: 'Can I use my service on multiple devices?',
      answer:
        'Yes, many of our plans include multi-device access. You can listen on your car receiver, home system, and portable devices. Contact our team to learn more about device compatibility.',
    },
    {
      question: 'Is there a trial period?',
      answer:
        'We offer great introductory offers for new customers. Ask about our current promotions when you call. Our team will ensure you get the best deal available.',
    },
    {
      question: 'What if I have technical issues?',
      answer:
        'Our support team troubleshoots technical problems 24/7. Whether it&apos;s signal issues, account problems, or device settings, we&apos;re here to resolve it quickly. Call anytime for immediate assistance.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Yes, we believe in flexibility. Most plans allow cancellation without penalties. If you have questions about your specific terms, our customer service team will clarify everything.',
    },
    {
      question: 'How do I manage my account?',
      answer:
        'You can manage billing, update your information, and access other account features through our customer portal. Our team can also help over the phone if you prefer.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our service
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 md:px-8 md:py-5 bg-white hover:bg-slate-50 transition-colors text-left flex items-center justify-between"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 md:px-8 md:py-5 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-600 text-pretty leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="bg-blue-50 rounded-lg p-8 md:p-12 border border-blue-200 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Our support team is ready to answer any additional questions you might have. Don&apos;t hesitate to reach out—we&apos;re here to help.
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
