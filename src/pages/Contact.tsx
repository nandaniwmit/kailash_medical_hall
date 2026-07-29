import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  Building2, 
  ExternalLink,
  ShieldCheck,
  User,
  FileText
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { 
  createCallLink, 
  createDirectWhatsAppChatLink, 
  createGoogleMapsDirectionsLink, 
  DISPLAY_PHONE_FORMATTED, 
  BUSINESS_ADDRESS, 
  BUSINESS_NAME 
} from '../utils/whatsapp';

interface ContactProps {
  onOpenWhatsAppModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us - Phone, Address & Google Map"
        description="Contact Kailash Medical Hall in Chand Chaura, Gaya, Bihar 823001. Call 09386944232 or message on WhatsApp for medicine inquiries, store directions, and prescription orders."
        canonicalPath="/contact"
      />

      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Contact Kailash Medical Hall
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Have questions about medicine availability, price estimates, or store location? Call us directly, send a WhatsApp message, or drop by our Chand Chaura store in Gaya.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Card */}
          <div className="glass-card p-6 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold medical-blue">Call Store Directly</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
              Instant phone support during store operational hours.
            </p>
            <p className="text-lg font-extrabold medical-blue">
              {DISPLAY_PHONE_FORMATTED}
            </p>
            <a
              href={createCallLink()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs shadow transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Click to Call</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="glass-card p-6 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold medical-blue">WhatsApp Desk</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
              Send prescription photos, list of items, or emergency requests.
            </p>
            <p className="text-lg font-extrabold accent-text">
              +91 93869 44232
            </p>
            <button
              onClick={onOpenWhatsAppModal}
              className="btn-gradient inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white font-bold text-xs shadow transition-transform active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Open WhatsApp Order</span>
            </button>
          </div>

          {/* Location Card */}
          <div className="glass-card p-6 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold medical-blue">Store Address</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              {BUSINESS_ADDRESS}
            </p>
            <p className="text-xs font-semibold text-slate-500">
              Landmark: Chand Chaura Chowk, Near Vishnupad Temple Road
            </p>
            <a
              href={createGoogleMapsDirectionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-800 text-slate-800 dark:text-white font-bold text-xs shadow border border-slate-200/80 dark:border-slate-700 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

        {/* Form and Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Quick Inquiry Contact Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] bg-[#0A8F6A]/10 px-3 py-1 rounded-full border border-[#0A8F6A]/20">
                Quick Message Form
              </span>
              <h2 className="text-2xl font-extrabold medical-blue mt-2">
                Send Us a Quick Inquiry
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Our pharmacy team will review your message and reply promptly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-[#0A8F6A]/10 rounded-2xl border border-[#0A8F6A]/20 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#0A8F6A] mx-auto" />
                <h3 className="text-lg font-bold medical-blue">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Thank you for reaching out to Kailash Medical Hall. Our team in Chand Chaura, Gaya will contact you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-gradient px-4 py-2 rounded-full text-white font-bold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold medical-blue mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Amit Verma"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold medical-blue mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 9386944232"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold medical-blue mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                  >
                    <option value="General Inquiry">General Medicine Inquiry</option>
                    <option value="Prescription Availability">Prescription Medicine Availability</option>
                    <option value="Health Device Price">Medical Device / Equipment Inquiry</option>
                    <option value="Bulk Purchase">Bulk & Clinic Supplies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold medical-blue mb-1">
                    Your Message / Required Items *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write details of your medicine requirement or questions..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gradient w-full py-3 px-4 rounded-2xl text-white font-bold text-sm shadow flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Working Hours & Emergency Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-6 border border-slate-800">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span>Working Hours</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white block">Monday – Saturday</span>
                    <span className="text-slate-400 text-[11px]">Retail Counter Open</span>
                  </div>
                  <span className="text-emerald-400 font-extrabold text-sm">8:00 AM – 10:00 PM</span>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white block">Sunday</span>
                    <span className="text-slate-400 text-[11px]">Half-Day Counter</span>
                  </div>
                  <span className="text-amber-400 font-extrabold text-sm">8:00 AM – 2:00 PM</span>
                </div>

                <div className="p-3 bg-emerald-950/80 rounded-xl border border-emerald-800/80 text-emerald-200">
                  <span className="font-bold block text-emerald-300">24/7 Emergency Assistance</span>
                  <p className="text-[11px] text-emerald-400 mt-1">
                    Send urgent prescription details on WhatsApp anytime.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={onOpenWhatsAppModal}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send WhatsApp Prescription Now</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Google Maps Embed Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Interactive Store Map
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Find Us at Chand Chaura, Gaya
              </h2>
            </div>
            <a
              href={createGoogleMapsDirectionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-96 bg-slate-100 dark:bg-slate-800">
            <iframe
              title="Kailash Medical Hall Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14512.44111306385!2d85.0002!3d24.7914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a35623087bd%3A0x889218d6e3559132!2sChand%20Chaura%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

      </div>
    </>
  );
};
