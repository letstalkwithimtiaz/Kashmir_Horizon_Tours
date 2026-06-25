import { useState } from 'react';
import { travelConfig, TourPackage } from '../data/travelConfig';
import LucideIcon from '../components/LucideIcon';

interface PackagesProps {
  onOpenInquiry: (packageTitle?: string) => void;
}

export default function Packages({ onOpenInquiry }: PackagesProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedItinerary, setExpandedItinerary] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Packages Included' },
    { id: 'honeymoon', label: 'Honeymoon Romantic' },
    { id: 'family', label: 'Classic Family' },
    { id: 'adventure', label: 'Alpine Adventure' },
    { id: 'luxury', label: 'Bespoke Luxury' },
    { id: 'group', label: 'Budget Explorer Group' }
  ];

  const filteredPackages = selectedFilter === 'all' 
    ? travelConfig.packages 
    : travelConfig.packages.filter(p => p.category === selectedFilter);

  const toggleItinerary = (packageId: string) => {
    setExpandedItinerary(prev => (prev === packageId ? null : packageId));
  };

  return (
    <div className="bg-[#020617] min-h-screen pt-20 text-slate-100" id="packages-page-viewport">
      
      {/* Page header */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1595841696660-151cf94b5f40?auto=format&fit=crop&q=80&w=1200"
            alt="Pahalgam pine valley Lidder Stream"
            className="w-full h-full object-cover brightness-[0.25]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-[#020617]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#fbbf24] font-mono">Curated Local Itineraries</span>
          <h2 className="text-4xl font-extrabold tracking-tight font-sans">Kashmiri Tour Packages</h2>
          <p className="text-sm text-slate-200 max-w-xl mx-auto font-sans leading-relaxed">
            Standard, transparent premium packages optimized specifically for couples, families, and high-altitude hiking crews.
          </p>
        </div>
      </section>

      {/* Category selector sticky threshold bar */}
      <section className="bg-[#020617]/90 backdrop-blur-md border-b border-white/5 py-6 sticky top-[68px] z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 gap-2 scrollbar-none justify-start lg:justify-center">
            {categories.map((c) => {
              const isSelected = selectedFilter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedFilter(c.id);
                    setExpandedItinerary(null);
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 rounded-xl font-bold font-sans text-xs uppercase tracking-widest shrink-0 transition-all focus:outline-none border ${
                    isSelected 
                      ? 'bg-emerald-600 border-emerald-650 text-white shadow-lg shadow-emerald-500/10' 
                      : 'bg-[#0a0f24] border-white/5 text-slate-300 hover:text-white hover:border-[#fbbf24]/40'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* List content */}
      <section className="py-16 bg-[#020617]" id="packages-listing-deck">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {filteredPackages.length === 0 ? (
            <div className="text-center py-20 bg-[#0a0f24] rounded-3xl border border-white/5 border-dashed">
              <LucideIcon name="AlertCircle" size={40} className="text-[#fbbf24] mx-auto mb-2 animate-pulse" />
              <h4 className="font-bold text-lg text-white">No Matching Packages</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">Get connected directly with Tariq design desk on WhatsApp to sketch custom packages matching your specific category need.</p>
              <button
                onClick={() => onOpenInquiry('Custom Category Request')}
                className="mt-4 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-emerald-500/25"
              >
                Request Custom Design
              </button>
            </div>
          ) : (
            filteredPackages.map((pkg) => {
              const isExpanded = expandedItinerary === pkg.id;
              return (
                <div 
                  key={pkg.id}
                  className="bg-slate-900/60 rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col group hover:border-emerald-500/20 transition-all duration-300"
                  id={`package-card-${pkg.id}`}
                >
                  
                  {/* Visual Title Header Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    
                    <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden min-h-[240px]">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Duration sticker */}
                      <div className="absolute top-4 left-4 bg-emerald-600/90 text-white px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
                        {pkg.duration}
                      </div>

                      {/* category marker banner */}
                      <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full text-white text-[9px] font-bold uppercase tracking-widest font-mono">
                        {pkg.category} Holiday
                      </div>
                    </div>

                    <div className="md:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
                      
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 inline-block">
                          Handpicked local layout
                        </span>
                        <h3 className="font-sans font-extrabold text-white text-xl sm:text-2xl leading-tight">
                          {pkg.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans italic">
                          "{pkg.tagline}"
                        </p>
                      </div>

                      {/* Package Core Highlights List */}
                      <div className="space-y-2">
                        <h4 className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-widest">Itinerary Highlights:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {pkg.highlights.map((hl, ix) => (
                            <div key={ix} className="flex gap-2 items-start text-xs text-slate-350 leading-snug">
                              <LucideIcon name="Check" className="text-emerald-400 shrink-0 mt-0.5" size={13} />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Translucence action strip */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider">Estimated quote</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black font-mono tracking-tight text-amber-400">{pkg.pricePlaceholder}</span>
                            <span className="text-xs text-slate-400 font-sans">/ Person</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => toggleItinerary(pkg.id)}
                            className="px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 active:scale-95 text-xs font-bold text-slate-200 transition"
                          >
                            {isExpanded ? 'Hide Itinerary' : 'View Day Plan'}
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => onOpenInquiry(pkg.title)}
                            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-505 active:scale-95 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md shadow-emerald-500/25"
                          >
                            Book Package
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Accordion expand drawer containing inclusions, exclusions & Day-by-day itinerary details */}
                  {isExpanded && (
                    <div className="border-t border-white/5 bg-slate-950/65 p-6 sm:p-8 space-y-6 transition-all duration-300" id="itinerary-expanded-panel">
                      
                      {/* Grid for inclusions and exclusions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Inclusions */}
                        <div className="bg-[#0a0f24] p-5 rounded-3xl border border-white/5 shadow-inner space-y-3">
                          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 border-b border-white/5 pb-2">
                            <LucideIcon name="CheckCircle" className="text-emerald-450 animate-pulse" size={14} />
                            <span>Inclusions Checklists (No Secrets)</span>
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed font-sans">
                            {pkg.inclusions.map((inc, i) => (
                              <li key={i} className="flex gap-2 items-start">
                                <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Exclusions */}
                        <div className="bg-[#0a0f24] p-5 rounded-3xl border border-white/5 shadow-inner space-y-3">
                          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#f97316] flex items-center gap-1.5 border-b border-white/5 pb-2">
                            <LucideIcon name="XCircle" className="text-[#f97316]" size={14} />
                            <span>Exclusions Checklists (Clear boundary)</span>
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed font-sans">
                            {pkg.exclusions.map((exc, i) => (
                              <li key={i} className="flex gap-2 items-start">
                                <span className="text-orange-500 shrink-0 mt-0.5">/</span>
                                <span>{exc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Day plan chronology */}
                      <div className="space-y-4">
                        <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-white flex items-center gap-1.5">
                          <LucideIcon name="Clock" size={14} className="text-amber-400" />
                          <span>Detailed Chronological Day-by-Day Journey</span>
                        </h4>
                        
                        <div className="space-y-3">
                          {pkg.itinerary.map((dayPlan) => (
                            <div 
                              key={dayPlan.day} 
                              className="bg-[#0a0f24] p-4 rounded-xl border border-white/5 flex gap-4 items-start shadow-xs hover:border-emerald-500/20 transition-colors duration-300"
                            >
                              <div className="w-10 h-10 bg-white/5 border border-white/10 text-emerald-455 font-mono font-bold text-xs shrink-0 flex items-center justify-center rounded-lg uppercase tracking-widest">
                                D{dayPlan.day}
                              </div>
                              <div className="space-y-1">
                                <h5 className="font-sans font-bold text-white text-sm leading-none">
                                  {dayPlan.title}
                                </h5>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                  {dayPlan.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              );
            })
          )}

        </div>
      </section>

      {/* Trust policy bar */}
      <section className="bg-[#0a0f24] text-white py-14 text-center overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h4 className="font-sans font-bold text-lg text-amber-400 uppercase tracking-tight">Need child seat anchors or heated car cabins next winter?</h4>
          <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">Our reservations desks support complete customization. Tell us about your group size and date, and we'll send customized plans.</p>
          <button
            onClick={() => onOpenInquiry('Curated Custom Package request')}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-emerald-500/25 active:scale-95 transition-transform"
          >
            Custom Itinerary Quote
          </button>
        </div>
      </section>

    </div>
  );
}
