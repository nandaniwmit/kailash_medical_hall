import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Search, 
  Moon, 
  Sun, 
  Pill, 
  Plus, 
  ShoppingBag,
  ShieldCheck
} from 'lucide-react';
import { DISPLAY_PHONE_FORMATTED, createCallLink, createDirectWhatsAppChatLink, BUSINESS_NAME } from '../utils/whatsapp';

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
  onOpenWhatsAppModal: () => void;
  onOpenSearchModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  toggleDarkMode,
  onOpenWhatsAppModal,
  onOpenSearchModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Info Bar */}
      <div className="bg-slate-900/90 backdrop-blur-md text-slate-200 text-xs py-2 px-4 sm:px-6 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Chand Chaura, Gaya, Bihar 823001
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Mon-Sat: 8 AM - 10 PM | Sun: 8 AM - 2 PM
            </span>
            <span className="hidden lg:flex items-center gap-1 text-emerald-300 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Genuine Medicines
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              id="topbar-call-btn"
              href={createCallLink()} 
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-white/20 text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{DISPLAY_PHONE_FORMATTED}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              id="topbar-whatsapp-btn"
              href={createDirectWhatsAppChatLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-400 text-slate-900" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 glass-nav ${
          isScrolled 
            ? 'shadow-lg py-2.5' 
            : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Branding */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] flex items-center justify-center text-white font-bold text-xl shadow-md shadow-[#0A8F6A]/30 group-hover:scale-105 transition-transform">
              K
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight medical-blue flex items-center gap-1">
                Kailash <span className="accent-text font-extrabold">Medical Hall</span>
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-widest">
                Trusted Pharmacy Since 2004
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#0A8F6A] dark:text-emerald-400 bg-[#0A8F6A]/10 dark:bg-emerald-950/60 font-bold'
                      : 'medical-blue hover:text-[#0A8F6A] dark:hover:text-emerald-400 hover:bg-white/60 dark:hover:bg-slate-800/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Controls & CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Medicine Trigger */}
            <button
              id="nav-search-medicine-btn"
              onClick={onOpenSearchModal}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-colors border border-slate-200/80 dark:border-slate-700/80 shadow-sm"
              title="Search Medicine Stock"
            >
              <Search className="w-4 h-4 text-[#0A8F6A] dark:text-emerald-400" />
              <span>Search Medicines</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors border border-slate-200/60 dark:border-slate-700/60"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {/* Order via WhatsApp Modal Trigger */}
            <button
              id="nav-whatsapp-order-btn"
              onClick={onOpenWhatsAppModal}
              className="btn-gradient text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-[#0A8F6A]/20 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSearchModal}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800"
              aria-label="Search Stock"
            >
              <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-lg text-base font-semibold transition-all ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
              <button
                onClick={onOpenWhatsAppModal}
                className="col-span-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Upload Prescription / Order</span>
              </button>

              <a
                href={createCallLink()}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-medium text-xs border border-slate-200 dark:border-slate-700"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Store</span>
              </a>

              <a
                href={createDirectWhatsAppChatLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-medium text-xs border border-emerald-300 dark:border-emerald-800"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Quick WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
