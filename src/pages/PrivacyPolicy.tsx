import React from 'react';
import { SEO } from '../components/SEO';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Kailash Medical Hall"
        description="Privacy policy and data protection practices for Kailash Medical Hall customers and website visitors in Gaya, Bihar."
        canonicalPath="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 text-slate-800 dark:text-slate-200">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Data Protection Notice
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
          <p className="text-xs text-slate-500">Effective Date: July 2026 • Kailash Medical Hall, Gaya</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Information We Collect</h2>
            <p>
              When you use our website or submit a WhatsApp medicine order form, we collect information strictly necessary to fulfill your prescription orders, including customer full name, mobile number, delivery address, and prescription images.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Medical Prescription Confidentiality</h2>
            <p>
              Your doctor prescriptions and medical details are handled with utmost confidentiality by our licensed pharmacists. We never share, sell, or commercialize your health records or prescription information to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. How We Use Your Data</h2>
            <p>
              Your phone number and order details are used exclusively for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-xs">
              <li>Verifying medicine availability and pricing with you on WhatsApp.</li>
              <li>Arranging store pickup or doorstep delivery in Gaya.</li>
              <li>Sending refill reminder notifications if requested by you.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Contacting Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at Kailash Medical Hall, Chand Chaura, Gaya, Bihar 823001, or call 09386944232.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
