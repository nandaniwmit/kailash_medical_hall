import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Pill, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ShoppingBag, 
  ShieldCheck, 
  Clock, 
  IndianRupee,
  RefreshCw,
  Tag
} from 'lucide-react';
import { MedicineItem } from '../types';
import medicineStockData from '../data/medicineStock.json';

interface MedicineStockCheckerProps {
  onOrderMedicine?: (medicineName: string) => void;
  compactMode?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOrderMedicine,
  compactMode = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const medicines: MedicineItem[] = medicineStockData as MedicineItem[];

  const categories = useMemo(() => {
    const cats = new Set(medicines.map(m => m.category));
    return ['All', ...Array.from(cats)];
  }, [medicines]);

  const filteredMedicines = useMemo(() => {
    return medicines.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.dosageForm.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [medicines, searchQuery, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: MedicineItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>In Stock</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Limited Stock</span>
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>Out of Stock</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="glass-card rounded-3xl overflow-hidden shadow-xl">
      
      {/* Header Banner */}
      <div className="bg-slate-900/90 text-white p-6 sm:p-8 backdrop-blur-md border-b border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A8F6A]/20 text-xs font-semibold text-emerald-300 mb-2 border border-[#0A8F6A]/30">
              <Pill className="w-3.5 h-3.5 text-emerald-400" /> Live Inventory Lookup
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Medicine & Product Stock Checker
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Search live availability, MRP, and dosage form at Kailash Medical Hall, Chand Chaura, Gaya.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-2xl text-right shrink-0 border border-white/10">
            <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider block">Total Listed Items</span>
            <span className="text-2xl font-extrabold text-white">{medicines.length}+</span>
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="mt-5 relative">
          <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search medicine name (e.g. Paracetamol, Dolo, Omron BP, Pan-40, Insulin)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium shadow-inner outline-none focus:ring-4 focus:ring-[#0A8F6A]/40 transition-all border border-slate-200 dark:border-slate-700"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-xs font-bold bg-slate-200 dark:bg-slate-700 rounded-full w-6 h-6 flex items-center justify-center"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 sm:pb-0 no-scrollbar">
          <span className="font-bold text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#0A8F6A]" /> Category:
          </span>
          {categories.slice(0, compactMode ? 4 : 8).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'btn-gradient text-white shadow-sm'
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Dropdown Filter */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <span className="font-semibold text-slate-600 dark:text-slate-400">Stock Status:</span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-1.5 rounded-full border border-slate-300/80 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="Available">In Stock Only</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Results Count & Legend */}
      <div className="px-6 py-2 bg-slate-100/50 dark:bg-slate-800/30 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between border-b border-slate-200/40 dark:border-slate-800">
        <span>Showing <strong>{filteredMedicines.length}</strong> matching item(s)</span>
        <span className="flex items-center gap-1 text-[#0A8F6A] dark:text-emerald-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" /> 100% Genuine Certified Medicines
        </span>
      </div>

      {/* Medicine Items Grid/List */}
      <div className="p-4 sm:p-6 divide-y divide-slate-100 dark:divide-slate-800 max-h-[500px] overflow-y-auto">
        {filteredMedicines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMedicines.map((item) => (
              <div
                key={item.id}
                className="glass-card p-4 rounded-2xl hover:shadow-lg transition-all flex flex-col justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A8F6A] dark:text-emerald-400 bg-[#0A8F6A]/10 px-2.5 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <h3 className="text-base font-bold medical-blue mt-1 group-hover:text-[#0A8F6A] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Brand: <strong className="text-slate-700 dark:text-slate-300">{item.brand}</strong> • Form: {item.dosageForm}
                      </p>
                    </div>
                    <div>{getStatusBadge(item.status)}</div>
                  </div>

                  {item.description && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 my-2 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Price, Stock Count & WhatsApp Order Action */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-2">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold medical-blue flex items-center">
                        <IndianRupee className="w-4 h-4" />
                        {item.discountPrice ? item.discountPrice.toFixed(2) : item.mrp.toFixed(2)}
                      </span>
                      {item.discountPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          ₹{item.mrp.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium block">
                      Exp: {item.expiry} | {item.prescriptionRequired ? 'Rx Prescription Required' : 'OTC Item'}
                    </span>
                  </div>

                  <button
                    onClick={() => onOrderMedicine?.(item.name)}
                    disabled={item.status === 'Out of Stock'}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      item.status === 'Out of Stock'
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                        : 'btn-gradient text-white shadow-sm hover:shadow-md active:scale-95'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{item.status === 'Out of Stock' ? 'Unavailable' : 'Order Now'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-slate-500 dark:text-slate-400 space-y-3">
            <Pill className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600" />
            <p className="text-sm font-semibold">No medicines found matching "{searchQuery}"</p>
            <p className="text-xs">
              Don't worry! We stock thousands of prescription and OTC drugs at Chand Chaura, Gaya. Contact our pharmacist directly on WhatsApp to check availability.
            </p>
            <button
              onClick={() => onOrderMedicine?.(searchQuery || 'General Medicine Query')}
              className="btn-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold text-xs shadow"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Ask Pharmacist on WhatsApp</span>
            </button>
          </div>
        )}
      </div>

      {/* Footer Helper Note */}
      <div className="p-3 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 text-center">
        💡 <strong>Note:</strong> Medicine inventory is updated daily. Prescription medicines require a valid doctor's prescription upon store collection or delivery.
      </div>
    </div>
  );
};
