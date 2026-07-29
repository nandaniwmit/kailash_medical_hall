import React from 'react';
import { Phone, MessageSquare, ShieldAlert, Clock } from 'lucide-react';
import { createCallLink, createDirectWhatsAppChatLink, DISPLAY_PHONE_FORMATTED } from '../utils/whatsapp';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="my-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden border border-emerald-800">
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-extrabold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Emergency Medicine Support</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Urgent Medicine Assistance in Gaya?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Need critical cardiac drugs, post-surgery supplies, or insulin outside standard hours? Send your prescription via WhatsApp for expedited support.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href={createCallLink()}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm shadow flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>Call: {DISPLAY_PHONE_FORMATTED}</span>
          </a>

          <a
            href={createDirectWhatsAppChatLink('URGENT EMERGENCY MEDICINE REQUIREMENT')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Emergency WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
