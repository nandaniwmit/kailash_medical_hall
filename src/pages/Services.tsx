import React, { useState } from 'react';
import { 
  Pill, 
  Activity, 
  BriefcaseMedical, 
  Baby, 
  ShieldPlus, 
  HeartPulse, 
  CheckCircle2, 
  ShoppingBag, 
  ArrowRight, 
  Search, 
  Phone,
  MessageSquare
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { servicesData } from '../data/servicesData';
import { createCallLink, createDirectWhatsAppChatLink } from '../utils/whatsapp';

interface ServicesProps {
  onOpenWhatsAppModal: (prefilledMed?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.id === activeCategory);

  return (
    <>
      <SEO
        title="Pharmacy Services - Prescription, OTC & Equipment"
        description="Comprehensive healthcare services at Kailash Medical Hall Gaya: Prescription drugs, OTC remedies, Omron BP monitors, glucometers, baby care, supplements, and surgical equipment."
        canonicalPath="/services"
      />

      {/* Page Header Banner */}
      <section className="bg-slate-900/90 text-white py-16 relative overflow-hidden backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-[#0A8F6A]/20 px-4 py-1.5 rounded-full border border-[#0A8F6A]/30">
              Kailash Pharmacy Services
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Complete Healthcare & Medicine Categories
            </h1>
            <p className="text-slate-300 text-base leading-relaxed font-medium">
              Explore our full range of certified allopathic drugs, chronic care refills, home diagnostic devices, baby nutrition, and surgical homecare.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'btn-gradient text-white shadow'
                : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-white'
            }`}
          >
            All Categories ({servicesData.length})
          </button>
          {servicesData.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveCategory(service.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === service.id
                  ? 'btn-gradient text-white shadow'
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-white'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Category Detailed Cards Grid */}
        <div className="space-y-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:shadow-xl transition-all"
            >
              {/* Left Column Description */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Pill className="w-6 h-6" />
                  </div>
                  <div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase text-[#0A8F6A] bg-[#0A8F6A]/10 px-2.5 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                    <h2 className="text-xl font-extrabold medical-blue mt-1">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs font-bold accent-text uppercase tracking-wider">
                  {service.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => onOpenWhatsAppModal(`Inquiry regarding ${service.title}`)}
                    className="btn-gradient px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order Category Items</span>
                  </button>

                  <a
                    href={createCallLink()}
                    className="px-5 py-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-white text-slate-800 dark:text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-200/80 dark:border-slate-700"
                  >
                    <Phone className="w-4 h-4 text-[#0A8F6A]" />
                    <span>Ask Pharmacist</span>
                  </a>
                </div>
              </div>

              {/* Right Column Included Items Checklist */}
              <div className="lg:col-span-7 bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-white/80 dark:border-slate-700/60 space-y-3">
                <h3 className="text-xs font-bold medical-blue uppercase tracking-wider">
                  Popular Items & Brands In Stock:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200/60 dark:border-slate-800 flex items-start gap-2 text-xs font-medium text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0A8F6A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Medicine Stock Checker Interactive Component */}
        <section className="space-y-4 pt-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Live Medicine Availability
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Search Specific Medicine Stock Real-Time
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Type the medicine or equipment name below to view stock status, dosage form, and MRP.
            </p>
          </div>

          <MedicineStockChecker onOrderMedicine={(med) => onOpenWhatsAppModal(med)} />
        </section>

      </div>
    </>
  );
};
