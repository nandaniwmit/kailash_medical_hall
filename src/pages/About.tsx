import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Heart, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Users, 
  Building2, 
  Target, 
  Eye, 
  Sparkles,
  Phone,
  MessageSquare,
  History,
  Pill
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { createCallLink, createDirectWhatsAppChatLink, DISPLAY_PHONE_FORMATTED } from '../utils/whatsapp';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppModal }) => {
  const timelineEvents = [
    {
      year: "Establishment",
      title: "Store Founded in Chand Chaura",
      description: "Opened our doors at Chand Chaura Chowk with a commitment to offer 100% genuine medicines to Gaya residents."
    },
    {
      year: "Cold-Chain Expansion",
      title: "Refrigerated Biopharmaceutical Unit",
      description: "Installed clinical-grade refrigeration systems for insulin, vaccines, and heat-sensitive pediatric suspensions."
    },
    {
      year: "Diagnostic Growth",
      title: "Home Health & Surgical Devices",
      description: "Expanded into Omron BP monitors, glucometers, nebulizers, wheelchairs, and orthopedic support accessories."
    },
    {
      year: "Digital Integration",
      title: "WhatsApp Express Prescription Desk",
      description: "Launched instant WhatsApp order processing and live inventory stock lookup for local patients."
    }
  ];

  return (
    <>
      <SEO
        title="About Us - Legacy Pharmacy in Chand Chaura, Gaya"
        description="Learn about Kailash Medical Hall, our story, mission, certified pharmacists, cold-chain medicine storage, and commitment to genuine healthcare in Gaya, Bihar."
        canonicalPath="/about"
      />

      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              About Kailash Medical Hall
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Dedicated to Genuine Healthcare in <span className="text-emerald-400">Gaya, Bihar</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Serving the healthcare needs of Chand Chaura, Vishnupad, AP Colony, Rampur, and surrounding areas with authenticity, compassion, and professional pharmacy care.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Business Story & Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold accent-text uppercase tracking-widest bg-[#0A8F6A]/10 px-3 py-1 rounded-full border border-[#0A8F6A]/20">
              Our Journey & Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold medical-blue leading-snug">
              A Trusted Neighborhood Pharmacy Built on Honesty and Quality
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              At Kailash Medical Hall, we believe that access to genuine, high-quality medication is a fundamental human right. Located prominently at Chand Chaura Chowk in Gaya, our store has evolved from a traditional neighborhood medical hall into a comprehensive, modern healthcare destination.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Whether you require routine over-the-counter pain relievers, long-term diabetes and cardiac prescriptions, pediatric feeds, or specialized home medical devices, our licensed staff ensures every medicine is authentic and handled with extreme care.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-bold">
              <div className="p-4 glass-card rounded-2xl space-y-1">
                <span className="accent-text text-xl font-black block">100%</span>
                <span className="medical-blue">Genuine Drug Sourcing</span>
              </div>
              <div className="p-4 glass-card rounded-2xl space-y-1">
                <span className="accent-text text-xl font-black block">24/7</span>
                <span className="medical-blue">Emergency WhatsApp Help</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 dark:border-slate-800 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80"
                alt="Kailash Medical Hall Store Front"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <p className="text-sm font-bold">Kailash Medical Hall Storefront</p>
                  <p className="text-xs text-slate-300">Chand Chaura Chowk, Near Vishnupad Temple Road, Gaya</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Core Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold medical-blue">Our Mission</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              To provide the citizens of Gaya with uncompromised, 100% genuine pharmaceutical drugs, health equipment, and compassionate patient care at fair prices.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold medical-blue">Our Vision</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              To be recognized as the gold standard of retail pharmacy in Bihar, combining traditional community warmth with modern digital convenience.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold medical-blue">Our Core Values</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Authenticity, zero-tolerance for counterfeit drugs, strict batch code verification, and clear dosage counseling for every single customer.
            </p>
          </div>
        </section>

        {/* Owner / Pharmacist Message */}
        <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Pharmacist Commitment Message
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              "When It Comes To Health, There Is No Room For Compromise."
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed italic">
              "At Kailash Medical Hall, we understand that behind every prescription brought to our counter is a patient seeking healing, comfort, and peace of mind. That is why we personally inspect every manufacturer shipment, verify cold-chain storage for insulins, and offer dosage instructions so families can take their medicines safely."
            </p>
            <div className="pt-2 border-t border-emerald-800/80 flex items-center justify-between text-xs">
              <div>
                <span className="font-extrabold text-emerald-300 block text-sm">Managing Pharmacist Team</span>
                <span className="text-slate-400">Kailash Medical Hall, Gaya</span>
              </div>
              <button
                onClick={onOpenWhatsAppModal}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs"
              >
                Speak with Pharmacist
              </button>
            </div>
          </div>
        </section>

        {/* Business Timeline */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Development
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Store Journey & Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEvents.map((evt, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl relative space-y-2"
              >
                <span className="text-xs font-extrabold accent-text bg-[#0A8F6A]/10 px-2.5 py-1 rounded-lg inline-block border border-[#0A8F6A]/20">
                  {evt.year}
                </span>
                <h3 className="text-base font-bold medical-blue mt-2">
                  {evt.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {evt.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Have Questions About Your Medicine Requirement?</h3>
            <p className="text-xs text-slate-300 mt-1">Our pharmacists are ready to help you at Chand Chaura Chowk, Gaya.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href={createCallLink()} className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs">
              Call {DISPLAY_PHONE_FORMATTED}
            </a>
            <button onClick={onOpenWhatsAppModal} className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs">
              WhatsApp Order
            </button>
          </div>
        </section>

      </div>
    </>
  );
};
