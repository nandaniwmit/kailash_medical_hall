import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { MedicineStockChecker } from './components/MedicineStockChecker';
import { useDarkMode } from './hooks/useDarkMode';
import { Pill, X } from 'lucide-react';

// Lazy load actual React Router page components
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));

export default function App() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleOpenWhatsAppModal = (medName?: string) => {
    if (medName) {
      setPrefilledMedicine(medName);
    } else {
      setPrefilledMedicine('');
    }
    setIsWhatsAppModalOpen(true);
    setIsSearchModalOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-mesh text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
        
        {/* Sticky Header Navigation */}
        <Navbar
          isDark={isDark}
          toggleDarkMode={toggleDarkMode}
          onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
          onOpenSearchModal={() => setIsSearchModalOpen(true)}
        />

        {/* Main Lazy Loaded Page Routes */}
        <main className="grow">
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 py-20">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white animate-pulse shadow-lg shadow-emerald-600/30">
                  <Pill className="w-8 h-8 rotate-45" />
                </div>
                <p className="text-sm font-bold text-slate-600 dark:text-slate-300 tracking-wide animate-pulse">
                  Loading Kailash Medical Hall...
                </p>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              <Route path="/about" element={<About onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              <Route path="/services" element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              {/* Fallback route back to home */}
              <Route path="*" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer with Tracking Hook */}
        <Footer />

        {/* Global Floating Actions (WhatsApp, Call, Back to Top, Sticky CTA) */}
        <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

        {/* Complete WhatsApp Order Form Modal */}
        <WhatsAppOrderModal
          isOpen={isWhatsAppModalOpen}
          onClose={() => setIsWhatsAppModalOpen(false)}
          prefilledMedicineName={prefilledMedicine}
        />

        {/* Search Medicine Quick Popup Modal */}
        {isSearchModalOpen && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setIsSearchModalOpen(false)}
          >
            <div 
              className="max-w-3xl w-full max-h-[88vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Live Stock Search
                </span>
                <button
                  onClick={() => setIsSearchModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 overflow-y-auto">
                <MedicineStockChecker
                  onOrderMedicine={(med) => handleOpenWhatsAppModal(med)}
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </BrowserRouter>
  );
}
