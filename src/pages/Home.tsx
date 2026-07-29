import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Award, 
  ArrowRight, 
  ChevronRight, 
  Pill, 
  HeartPulse, 
  Activity, 
  Baby, 
  BriefcaseMedical, 
  Star, 
  HelpCircle, 
  Mail, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { ReviewsSection } from '../components/ReviewsSection';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { servicesData } from '../data/servicesData';
import { faqData } from '../data/faqData';
import { healthTipsData } from '../data/healthTipsData';
import { createCallLink, createDirectWhatsAppChatLink, createGoogleMapsDirectionsLink, DISPLAY_PHONE_FORMATTED } from '../utils/whatsapp';

interface HomeProps {
  onOpenWhatsAppModal: (prefilledMed?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppModal }) => {
  const featuredServices = servicesData.slice(0, 6);
  const previewFaqs = faqData.slice(0, 4);

  return (
    <>
      <SEO
        title="Home - Trusted Pharmacy in Chand Chaura"
        description="Kailash Medical Hall provides genuine medicines, healthcare products, baby care, surgical supplies, and health devices in Chand Chaura, Gaya, Bihar 823001."
        canonicalPath="/"
      />

      {/* Hero Banner Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 left-10 w-96 h-96 bg-[#0A8F6A]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Hero Main Copy (Left) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#0A8F6A]/10 dark:bg-[#0A8F6A]/20 px-4 py-2 rounded-full border border-[#0A8F6A]/20">
                <span className="w-2.5 h-2.5 bg-[#0A8F6A] rounded-full animate-pulse"></span>
                <span className="text-[#0A8F6A] dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  Open Now • Chand Chaura, Gaya
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold medical-blue leading-[1.15] tracking-tight">
                Genuine Medicines, <br />
                <span className="accent-text">Expert Healthcare.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-medium">
                Providing genuine medicines, healthcare products, surgical supplies, and baby care essentials at affordable prices in Chand Chaura, Gaya.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="hero-whatsapp-order-btn"
                  onClick={() => onOpenWhatsAppModal()}
                  className="btn-gradient text-white px-7 py-3.5 rounded-2xl text-base font-bold shadow-xl shadow-[#0A8F6A]/30 flex items-center gap-3 transition-transform active:scale-95"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  id="hero-call-now-btn"
                  href={createCallLink()}
                  className="glass-card bg-white/80 dark:bg-slate-800/80 medical-blue px-6 py-3.5 rounded-2xl text-base font-bold shadow-sm hover:bg-white transition-colors flex items-center gap-2.5 border border-slate-200/80 dark:border-slate-700/80"
                >
                  <Phone className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Call: {DISPLAY_PHONE_FORMATTED}</span>
                </a>

                <a
                  id="hero-get-directions-btn"
                  href={createGoogleMapsDirectionsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-2xl bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 text-sm font-semibold border border-slate-200/80 dark:border-slate-700/80 hover:bg-white flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>Directions</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-200/60 dark:border-slate-800">
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold medical-blue">20+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-tight">Years Excellence</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold medical-blue">5k+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-tight">Products Stocked</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold medical-blue">100%</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-tight">Genuine Quality</span>
                </div>
              </div>
            </div>

            {/* Hero Glass Widget (Right) */}
            <div className="lg:col-span-5">
              <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-700/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold medical-blue">Store Hours & Stock</h3>
                      <p className="text-xs accent-text font-semibold">Open Today in Gaya</p>
                    </div>
                  </div>
                  <span className="bg-[#0A8F6A]/10 text-[#0A8F6A] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                    Live Status
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-200/40 dark:border-slate-800">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">Monday - Saturday:</span>
                    <span className="medical-blue font-extrabold">8:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200/40 dark:border-slate-800">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">Sunday:</span>
                    <span className="medical-blue font-extrabold">8:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">Emergency Assistance:</span>
                    <span className="accent-text font-bold">24/7 via WhatsApp</span>
                  </div>
                </div>

                <div className="pt-2 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-white/80 dark:border-slate-800 space-y-2">
                  <p className="text-xs font-bold medical-blue flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" /> Prescription Upload
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Simply upload your doctor prescription on WhatsApp and we will prepare your medicines for pickup or delivery.
                  </p>
                  <button
                    onClick={() => onOpenWhatsAppModal()}
                    className="btn-gradient w-full mt-2 py-2.5 px-4 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Start Prescription Upload</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Short About Preview */}
        <section className="glass-card rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/60 dark:border-slate-800 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80"
                alt="Kailash Medical Hall Shelves"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-xl text-white text-xs font-bold border border-slate-700">
                Est. Gaya Healthcare Leader
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] bg-[#0A8F6A]/10 px-3 py-1 rounded-full border border-[#0A8F6A]/20">
              About Kailash Medical Hall
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold medical-blue leading-snug">
              Serving Chand Chaura & Gaya with Integrity and Genuine Care
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Kailash Medical Hall is a premier retail pharmacy located at Chand Chaura, Gaya. For years, we have been dedicated to serving local families, clinics, and patients with authentic, temperature-regulated medicines, healthcare monitors, baby nutrition, and surgical supplies.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <div className="p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0A8F6A]" /> Licensed Pharmacists
              </div>
              <div className="p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0A8F6A]" /> 100% Genuine Stock
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                <span>Read Full Business Story & Mission</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Services Preview (Max 6) */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] dark:text-emerald-400">
                Our Pharmacy Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold medical-blue mt-1">
                Comprehensive Healthcare & Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold accent-text hover:underline shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Pill className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase bg-[#0A8F6A]/10 text-[#0A8F6A] px-2.5 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold medical-blue group-hover:text-[#0A8F6A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/40 dark:border-slate-800">
                  <Link
                    to="/services"
                    className="text-xs font-bold accent-text flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>View Category Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="glass-card bg-slate-900/90 dark:bg-slate-900/90 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
              Why Kailash Medical Hall?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-3">
              Your Health & Safety Is Our Highest Priority
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Why thousands of families in Chand Chaura, Gaya choose us for their everyday prescriptions and medical supplies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">100% Genuine Medicines</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct procurement from authorized pharmaceutical companies with strict batch control.
              </p>
            </div>

            <div className="glass-card bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600/30 text-sky-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Fast WhatsApp Ordering</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Send prescription photos on WhatsApp and collect packed medicines without standing in queues.
              </p>
            </div>

            <div className="glass-card bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/30 text-amber-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Cold-Chain Storage</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated refrigeration units for insulins, vaccines, and heat-sensitive liquid suspensions.
              </p>
            </div>

            <div className="glass-card bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Affordable MRP Discounts</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fair prices and special consideration for long-term chronic illness prescriptions.
              </p>
            </div>
          </div>
        </section>

        {/* Exclusive Feature: Medicine Stock Checker Preview */}
        <section className="space-y-4">
          <MedicineStockChecker
            compactMode={true}
            onOrderMedicine={(med) => onOpenWhatsAppModal(med)}
          />
        </section>

        {/* Emergency Assistance Banner */}
        <EmergencyBanner />

        {/* Customer Reviews Preview */}
        <ReviewsSection />

        {/* FAQ Preview */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Common Pharmacy Questions
              </h2>
            </div>
            <Link
              to="/contact"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Ask a Specific Question</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {previewFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2"
              >
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Health Tips Preview */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Health & Medication Awareness
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Latest Health Tips for Families
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthTipsData.map((tip) => (
              <article
                key={tip.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/9 overflow-hidden">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                      <span className="text-emerald-600 dark:text-emerald-400">{tip.category}</span>
                      <span>{tip.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {tip.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenWhatsAppModal(`Inquiry about health tip: ${tip.title}`)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Ask Pharmacist About This</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter / Medicine Update Alert */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold">
              Get Medicine Refill & Health Stock Alerts
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-lg">
              Never run out of essential chronic medications. Subscribe for gentle medicine stock updates and health advisory tips.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to Kailash Medical Hall health alerts!');
            }}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-2 shrink-0"
          >
            <input
              type="text"
              required
              placeholder="Enter your phone or email"
              className="px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-sm outline-none font-medium"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition-colors"
            >
              Subscribe
            </button>
          </form>
        </section>

      </div>
    </>
  );
};
