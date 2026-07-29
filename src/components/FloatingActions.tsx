import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  ArrowUp, 
  MapPin, 
  ShoppingBag,
  Clock
} from 'lucide-react';
import { createCallLink, createDirectWhatsAppChatLink, createGoogleMapsDirectionsLink, DISPLAY_PHONE_FORMATTED } from '../utils/whatsapp';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons Stack (Desktop & Tablet) */}
      <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-slate-900/90 dark:bg-slate-800 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-all hover:scale-110 active:scale-95 border border-slate-700"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Direct Call Button */}
        <a
          id="floating-call-btn"
          href={createCallLink()}
          className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center shadow-xl shadow-sky-600/30 transition-all hover:scale-110 active:scale-95 group relative"
          aria-label="Call Store Now"
          title={`Call ${DISPLAY_PHONE_FORMATTED}`}
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call Store
          </span>
        </a>

        {/* Floating WhatsApp Order Button with Pulse */}
        <button
          id="floating-whatsapp-btn"
          onClick={onOpenWhatsAppModal}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all hover:scale-110 active:scale-95 relative group"
          aria-label="Order Medicines on WhatsApp"
          title="WhatsApp Medicine Order"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
          </span>
          <MessageSquare className="w-7 h-7 fill-white text-emerald-500" />
          
          <span className="absolute right-16 bg-emerald-950 text-emerald-200 border border-emerald-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Order Medicine on WhatsApp
          </span>
        </button>

      </div>

      {/* Sticky Mobile Bottom Quick Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-1.5 max-w-md mx-auto">
          
          <a
            id="mobile-sticky-call"
            href={createCallLink()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-[11px] font-bold active:bg-slate-200 dark:active:bg-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-sky-600 dark:text-sky-400 mb-0.5" />
            <span>Call Now</span>
          </a>

          <button
            id="mobile-sticky-whatsapp"
            onClick={onOpenWhatsAppModal}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white text-[11px] font-extrabold shadow active:bg-emerald-700 transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-white mb-0.5" />
            <span>WhatsApp Order</span>
          </button>

          <a
            id="mobile-sticky-directions"
            href={createGoogleMapsDirectionsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-[11px] font-bold active:bg-slate-200 dark:active:bg-slate-700 transition-colors"
          >
            <MapPin className="w-4 h-4 text-amber-500 mb-0.5" />
            <span>Directions</span>
          </a>

        </div>
      </div>
    </>
  );
};
