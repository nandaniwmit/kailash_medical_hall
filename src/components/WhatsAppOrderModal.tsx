import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  Upload, 
  Phone, 
  Send, 
  CheckCircle2, 
  Pill, 
  User, 
  MapPin, 
  Clock, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { WhatsAppOrderFormData } from '../types';
import { createWhatsAppOrderLink, createCallLink, BUSINESS_NAME } from '../utils/whatsapp';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicineName = ''
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicineName: prefilledMedicineName,
    hasPrescription: true,
    prescriptionFileName: '',
    message: '',
    preferredDeliveryTime: 'Immediate (Within 1-2 hours)'
  });

  const [selectedFileName, setSelectedFileName] = useState<string>('');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFileName(file.name);
      setFormData(prev => ({
        ...prev,
        hasPrescription: true,
        prescriptionFileName: file.name
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = createWhatsAppOrderLink(formData);
    window.open(link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-card bg-white/90 dark:bg-slate-900/90 w-full max-w-xl rounded-3xl shadow-2xl border border-white/60 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0A8F6A] flex items-center justify-center text-white">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">WhatsApp Medicine Order</h2>
              <p className="text-xs text-emerald-400 font-semibold">{BUSINESS_NAME} • Chand Chaura, Gaya</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto grow">
          <div className="bg-[#0A8F6A]/10 p-3 rounded-2xl border border-[#0A8F6A]/20 text-xs text-[#0A8F6A] dark:text-emerald-300 flex items-start gap-2.5 font-medium">
            <AlertCircle className="w-4 h-4 text-[#0A8F6A] dark:text-emerald-400 shrink-0 mt-0.5" />
            <p>
              Fill details below. Clicking <strong>"Send via WhatsApp"</strong> opens WhatsApp with your prefilled order details for instant verification and fast store pickup or Gaya home delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Customer Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g., Rajesh Kumar"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Phone / WhatsApp Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="e.g., 9835XXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g., rajesh@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Delivery Time */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery / Pickup Time
              </label>
              <select
                value={formData.preferredDeliveryTime}
                onChange={(e) => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              >
                <option value="Immediate (Within 1-2 hours)">Immediate (Within 1-2 hours)</option>
                <option value="Today Evening (5 PM - 8 PM)">Today Evening (5 PM - 8 PM)</option>
                <option value="Tomorrow Morning (8 AM - 12 PM)">Tomorrow Morning (8 AM - 12 PM)</option>
                <option value="Self Store Pickup at Chand Chaura">Self Store Pickup at Chand Chaura</option>
              </select>
            </div>
          </div>

          {/* Medicine Name Required */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required / List of Items *
            </label>
            <div className="relative">
              <Pill className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <textarea
                required
                rows={2}
                placeholder="e.g., Paracetamol 650mg - 2 Strips, Pan-40 - 1 Strip, Omron BP Monitor"
                value={formData.medicineName}
                onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address (Gaya area) *
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                required
                placeholder="House No, Landmark, Ward Name, Chand Chaura / AP Colony / Rampur, Gaya"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Upload Prescription (Photo / PDF)
            </label>
            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl text-center relative hover:border-emerald-500 transition-colors">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                <Upload className="w-4 h-4 text-emerald-600" />
                {selectedFileName ? (
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Selected: {selectedFileName}
                  </span>
                ) : (
                  <span>Click or drag prescription photo here (Will attach directly in WhatsApp)</span>
                )}
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Additional Instructions / Notes
            </label>
            <input
              type="text"
              placeholder="e.g., Please send cold-chain ice pack for insulin"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Modal Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
            <button
              type="submit"
              className="btn-gradient text-white font-bold text-sm py-3 px-4 rounded-2xl shadow-lg shadow-[#0A8F6A]/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={createCallLink()}
              className="py-3 px-4 rounded-2xl bg-white/80 dark:bg-slate-800 hover:bg-white text-slate-800 dark:text-white font-bold text-sm flex items-center justify-center gap-2 border border-slate-200/80 dark:border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0A8F6A]" />
              <span>Call Store Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
