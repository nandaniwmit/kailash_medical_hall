import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, 
  Plus, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { DISPLAY_PHONE_FORMATTED, createCallLink, createDirectWhatsAppChatLink, createGoogleMapsDirectionsLink, BUSINESS_ADDRESS, BUSINESS_NAME } from '../utils/whatsapp';
import { useTracker } from '../hooks/useTracker';

export const Footer: React.FC = () => {
  // Execute required global tracking logic inside Footer
  useTracker();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/30">
                <div className="relative">
                  <Pill className="w-5 h-5 rotate-45" />
                  <Plus className="w-3 h-3 absolute -top-1 -right-1 text-emerald-200" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  Kailash <span className="text-emerald-400">Medical</span>
                </span>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  Hall • Gaya
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted licensed retail pharmacy in Chand Chaura, Gaya. Providing 100% genuine allopathic, chronic care, surgical, baby care, and home diagnostic essentials at affordable prices.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={createDirectWhatsAppChatLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                title="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={createCallLink()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 hover:bg-sky-600 hover:text-white transition-colors"
                title="Call Pharmacy"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={createGoogleMapsDirectionsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 hover:bg-amber-600 hover:text-white transition-colors"
                title="Get Directions on Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wide uppercase text-xs border-b border-emerald-500/30 pb-2 inline-block">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Store', path: '/about' },
                { name: 'Pharmacy Services', path: '/services' },
                { name: 'Store Gallery', path: '/gallery' },
                { name: 'Contact & Map', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Store Hours & Services */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wide uppercase text-xs border-b border-emerald-500/30 pb-2 inline-block">
              Working Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Monday - Saturday</span>
                </div>
                <p className="text-slate-300 pl-6">8:00 AM – 10:00 PM</p>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Sunday</span>
                </div>
                <p className="text-slate-300 pl-6">8:00 AM – 2:00 PM</p>
              </div>

              <p className="text-xs text-slate-400 italic">
                * 24/7 Emergency medicine order support via WhatsApp for urgent medical needs in Gaya.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wide uppercase text-xs border-b border-emerald-500/30 pb-2 inline-block">
              Store Location
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>Kailash Medical Hall, Chand Chaura Chowk, Near Vishnupad Temple Road, Gaya, Bihar 823001</span>
              </p>

              <p className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={createCallLink()} className="hover:text-emerald-400 transition-colors">
                  09386944232
                </a>
              </p>

              <p className="flex items-center gap-2.5 text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={createDirectWhatsAppChatLink()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp: +91 93869 44232
                </a>
              </p>

              <div className="pt-2">
                <a
                  href={createGoogleMapsDirectionsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800 hover:bg-emerald-900 transition-colors text-xs font-semibold"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Location in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed">
          <p className="mb-2">
            <span className="font-bold text-slate-300">Medical Disclaimer:</span> All information on this website is provided for informational and educational purposes only. Always consult a qualified medical doctor or healthcare professional for diagnosis and prescription treatment. Prescription drugs are dispensed strictly against valid medical doctor prescriptions.
          </p>
        </div>

        {/* Bottom Credits & Developer Signature */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {BUSINESS_NAME}. All rights reserved.</p>

          <p className="flex items-center gap-1.5 font-medium text-slate-300">
            <span>Developed by</span>
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 font-bold flex items-center gap-1 transition-colors"
            >
              <span>WMIT</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
