import React, { useState } from 'react';
import { 
  X, 
  ZoomIn, 
  Filter, 
  MapPin, 
  Pill, 
  Building2, 
  ShoppingBag, 
  Maximize2 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { galleryData } from '../data/galleryData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Store Front & Exterior' },
    { id: 'shelves', label: 'Medicine Shelves & Cold Storage' },
    { id: 'equipment', label: 'Health Devices & Surgical' },
    { id: 'products', label: 'OTC & Baby Products' },
    { id: 'store', label: 'Consultation Station' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <>
      <SEO
        title="Store Gallery - Photos of Kailash Medical Hall Gaya"
        description="View photos of Kailash Medical Hall in Chand Chaura, Gaya. Take a virtual tour of our well-stocked medicine racks, cold storage units, and diagnostic equipment."
        canonicalPath="/gallery"
      />

      {/* Page Header Banner */}
      <section className="bg-slate-900/90 text-white py-16 relative overflow-hidden backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-[#0A8F6A]/20 px-4 py-1.5 rounded-full border border-[#0A8F6A]/30">
              Virtual Store Tour
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Store Photo Gallery & Facilities
            </h1>
            <p className="text-slate-300 text-base leading-relaxed font-medium">
              Explore our modern pharmacy infrastructure at Chand Chaura, Gaya — well-organized prescription shelves, refrigerated biopharmaceutical units, and health equipment counters.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'btn-gradient text-white shadow'
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="p-3 rounded-full bg-[#0A8F6A] shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md border border-slate-700">
                  {item.category}
                </span>
              </div>

              <div className="p-4 space-y-1 grow">
                <h3 className="text-sm font-bold medical-blue group-hover:text-[#0A8F6A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setLightboxItem(null)}
          >
            <div 
              className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 space-y-2 text-white bg-slate-900">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800 inline-block">
                  {lightboxItem.category}
                </span>
                <h3 className="text-xl font-bold">{lightboxItem.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{lightboxItem.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};
