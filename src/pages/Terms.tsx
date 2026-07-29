import React from 'react';
import { SEO } from '../components/SEO';

export const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service - Kailash Medical Hall"
        description="Terms and conditions for purchasing genuine medicines and healthcare products at Kailash Medical Hall, Gaya."
        canonicalPath="/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 text-slate-800 dark:text-slate-200">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Legal Terms
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Terms of Service</h1>
          <p className="text-xs text-slate-500">Effective Date: July 2026 • Kailash Medical Hall, Gaya</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Prescription Requirements</h2>
            <p>
              Under Indian Pharmacy laws and Drugs & Cosmetics Rules, Schedule H, H1, and Controlled X drugs require a valid prescription issued by a registered medical practitioner before dispensing.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Product Authenticity</h2>
            <p>
              All medicines sold at Kailash Medical Hall are 100% genuine and sourced directly from licensed pharmaceutical manufacturers or authorized distributors.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Returns & Replacements</h2>
            <p>
              Due to strict drug safety and temperature-control regulations, opened medicines, heat-sensitive insulins, and sealed surgical packs cannot be returned once handed over, unless there is a physical batch defect or manufacturing damage.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Medical Disclaimer</h2>
            <p>
              Information provided on this website or via WhatsApp is for general guidance and stock inquiry only. It does not replace professional medical diagnosis or advice from your healthcare doctor.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
