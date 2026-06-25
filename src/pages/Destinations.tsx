import { useState, useEffect } from 'react';
import { travelConfig, Destination } from '../data/travelConfig';
import LucideIcon from '../components/LucideIcon';

interface DestinationsProps {
  onOpenInquiry: (packageTitle?: string, destinationName?: string) => void;
  selectedDestination: Destination | null;
  setSelectedDestination: (dest: Destination | null) => void;
}

export default function Destinations({ 
  onOpenInquiry, 
  selectedDestination, 
  setSelectedDestination 
}: DestinationsProps) {
  
  // Set default active tab to 'srinagar' or the one clicked on home page
  const [activeTab, setActiveTab] = useState<string>('srinagar');

  useEffect(() => {
    if (selectedDestination) {
      setActiveTab(selectedDestination.id);
    }
  }, [selectedDestination]);

  const activeDest = travelConfig.destinations.find(d => d.id === activeTab) || travelConfig.destinations[0];

  const handleTabChange = (destId: string) => {
    setActiveTab(destId);
    // Clear selection so page can be used independently
    setSelectedDestination(null);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#020617] min-h-screen pt-20 text-slate-100" id="destinations-page-viewport">
      
      {/* Visual banner */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1200"
            alt="Scenic Sonamarg Snowy Meadow"
            className="w-full h-full object-cover brightness-[0.25]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-[#020617]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#fbbf24] font-mono">Unveiling J&K Geography</span>
          <h2 className="text-4xl font-extrabold tracking-tight font-sans">Kashmiri Destination Guide</h2>
          <p className="text-sm text-slate-200 max-w-xl mx-auto font-sans leading-relaxed">
            Unpack localized details, physical highlights, optimized seasons, and native activity maps for our 6 main valley hubs.
          </p>
        </div>
      </section>

      {/* Destinations Filter Pills bar */}
      <section className="bg-[#020617]/90 backdrop-blur-md border-b border-white/5 py-6 sticky top-[68px] z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-2 lg:hidden">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select Regional Hub:</span>
          </div>

          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 gap-2 scrollbar-none justify-start lg:justify-center">
            {travelConfig.destinations.map((d) => {
              const isSelected = activeTab === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => handleTabChange(d.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold font-sans text-xs uppercase tracking-widest shrink-0 transition-all focus:outline-none border ${
                    isSelected 
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/10' 
                      : 'bg-[#0a0f24] border-white/5 text-slate-300 hover:text-white hover:border-[#fbbf24]/40'
                  }`}
                >
                  {d.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main active destination container */}
      <section className="py-16 bg-[#020617]" id="active-destination-guide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Visual Column / Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 border border-white/5">
                <img
                  src={activeDest.image}
                  alt={activeDest.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual caption */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-emerald-400 px-3.5 py-1.5 border border-white/10 rounded-xl text-xs font-bold font-sans uppercase tracking-widest flex items-center gap-1.5">
                  <LucideIcon name="Compass" size={12} />
                  <span>Kashmir Horizon Verified</span>
                </div>
              </div>

              {/* Highlighting specific activities list */}
              <div className="bg-[#0a0f24] p-6 rounded-3xl border border-white/5 space-y-4 shadow-xl">
                <h4 className="font-sans font-extrabold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                  <LucideIcon name="Compass" className="text-emerald-400" size={16} />
                  <span>Recommend Outdoor Activities</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  {activeDest.activities.map((act, idx) => (
                    <div key={idx} className="flex gap-2 items-center bg-white/5 border border-white/5 p-2.5 rounded-xl text-xs text-slate-350">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="font-semibold">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Column / Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest font-mono">Regional Handbook</span>
                <h3 className="text-3xl font-extrabold text-white font-sans tracking-tight">
                  Welcome to {activeDest.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 italic">
                  "{activeDest.tagline}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {activeDest.overview}
              </p>

              {/* Ideal Season Segment */}
              <div className="bg-[#06241b] p-4 rounded-2xl border border-emerald-500/20 flex gap-3 items-start shadow-inner">
                <div className="p-2 bg-emerald-600/20 text-emerald-400 rounded-lg shrink-0">
                  <LucideIcon name="Clock" size={16} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-emerald-400 text-xs uppercase tracking-wider">Best Time To Visit:</h4>
                  <p className="text-xs text-slate-200 mt-1 font-semibold leading-relaxed font-sans">
                    {activeDest.bestTime}
                  </p>
                </div>
              </div>

              {/* Physical regional highlights list */}
              <div className="space-y-3">
                <h4 className="font-sans font-extrabold text-white text-xs uppercase tracking-wider">Key Physical Highlights:</h4>
                <div className="space-y-2">
                  {activeDest.highlights.map((hl, i) => (
                    <div key={i} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-300 leading-snug">
                      <LucideIcon name="Check" className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inline action conversion row */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenInquiry('Destination Custom Quick Request', activeDest.name)}
                  className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-amber-400/20 active:scale-95 transition-all text-center"
                >
                  Plan A Trip To {activeDest.name}
                </button>
                <div className="text-center sm:text-left text-[11px] text-slate-400 font-sans leading-snug">
                  <span>Custom quotes package options including private transit and stays available.</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Multi-destination general advisories check */}
      <section className="bg-[#0a0f24] py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h4 className="font-sans font-extrabold text-white text-xl tracking-tight">Need a comprehensive multicenter package?</h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Most honeymooners and family holidays choose to combine <strong>Srinagar, Gulmarg, and Pahalgam</strong> on a single 5 or 6 day loop. We provide clean private sedans and SUVs that stay with you across the entire circuit.
          </p>
          <button
            onClick={() => onOpenInquiry('Multi-Destination Explorer Consultation')}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-extrabold text-[#ffffff] text-xs uppercase tracking-widest rounded-xl active:scale-95 transition-all shadow-lg shadow-emerald-500/10"
          >
            Design Custom Circuit Now
          </button>
        </div>
      </section>

    </div>
  );
}
