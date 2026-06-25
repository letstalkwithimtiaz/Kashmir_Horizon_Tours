import { useState, useEffect } from 'react';
import LucideIcon from '../components/LucideIcon';

interface GalleryProps {
  onOpenInquiry: (topic?: string) => void;
}

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'landscapes' | 'houseboats' | 'snow' | 'gardens' | 'lakes' | 'adventure';
  alt: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal1',
    url: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=1000',
    caption: 'Classic sunset Shikara ride near Ghat 7, Dal Lake, Srinagar',
    category: 'houseboats',
    alt: 'Sunset Shikara ride on Dal Lake J&K'
  },
  {
    id: 'gal2',
    url: 'https://images.unsplash.com/photo-1621503923376-790104f378d3?auto=format&fit=crop&q=80&w=1000',
    caption: 'Majestic snowy pine valleys of alpine Gulmarg in mid-January',
    category: 'snow',
    alt: 'Snowy landscape in Gulmarg, J&K'
  },
  {
    id: 'gal3',
    url: 'https://images.unsplash.com/photo-1595841696660-151cf94b5f40?auto=format&fit=crop&q=80&w=1000',
    caption: 'Winding gushing fresh waters of the Lidder River in Pahalgam',
    category: 'landscapes',
    alt: 'Lidder River mountain view in Pahalgam'
  },
  {
    id: 'gal4',
    url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1000',
    caption: 'Glacial treks near Thajiwas Golden Meadow range in Sonamarg',
    category: 'adventure',
    alt: 'Trekker ascending Thajiwas range Sonamarg'
  },
  {
    id: 'gal5',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000',
    caption: 'Sprawling clover carpets and pine woods of secluded Yusmarg',
    category: 'gardens',
    alt: 'Lush green meadows in Yusmarg hills'
  },
  {
    id: 'gal6',
    url: 'https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&q=80&w=1000',
    caption: 'Authentic lotus flower reserves in remote channels of Nigeen Lake',
    category: 'lakes',
    alt: 'Water lotus garden in Nigeen lake'
  },
  {
    id: 'gal7',
    url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1000',
    caption: 'High-end ski resorts with heated pools and valley-view verandas',
    category: 'houseboats', // categorized beautifully
    alt: 'Luxury resort hotel suite in Kashmir mountains'
  },
  {
    id: 'gal8',
    url: 'https://images.unsplash.com/photo-1533240332313-0db49b439ad3?auto=format&fit=crop&q=80&w=1000',
    caption: 'High-altitude alpine treks ascending through Great Lakes ridges',
    category: 'adventure',
    alt: 'Trekking path in high altitude Kashmir'
  },
  {
    id: 'gal9',
    url: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=1000',
    caption: 'Joyful group snow combat and snowman building in Khilanmarg base',
    category: 'snow',
    alt: 'Group snow activities in Gulmarg winter'
  }
];

export default function Gallery({ onOpenInquiry }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'landscapes', label: 'Landscapes' },
    { id: 'houseboats', label: 'Houseboats & Stays' },
    { id: 'snow', label: 'Snow & Winter' },
    { id: 'gardens', label: 'Meadows & Gardens' },
    { id: 'lakes', label: 'Waterways & Lakes' },
    { id: 'adventure', label: 'Adventure Treks' }
  ];

  const filteredImages = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  // Prevent scroll when lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === 0 ? filteredImages.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === filteredImages.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <div className="bg-[#020617] min-h-screen pt-20 text-slate-100" id="gallery-page-viewport">
      
      {/* Visual header */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=1200"
            alt="Beautiful Dal Lake Mountains Srinagar J&K"
            className="w-full h-full object-cover brightness-[0.25]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-[#020617]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#fbbf24] font-mono">Visual Lens of Heaven</span>
          <h2 className="text-4xl font-extrabold tracking-tight font-sans">Kashmiri Media Gallery</h2>
          <p className="text-sm text-slate-200 max-w-xl mx-auto font-sans leading-relaxed">
            Vibe with high resolution, organic snapshots capturing Dal Lake, Gulmarg skiing, and pristine valley heights.
          </p>
        </div>
      </section>

      {/* Gallery filters bar */}
      <section className="bg-[#020617]/90 backdrop-blur-md border-b border-white/5 py-5 sticky top-[68px] z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 gap-2 scrollbar-none justify-start lg:justify-center">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-xl font-bold font-sans text-xs uppercase tracking-widest shrink-0 transition-all focus:outline-none border ${
                    isSelected 
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-500/10' 
                      : 'bg-[#0a0f24] border-white/5 text-slate-300 hover:text-white hover:border-[#fbbf24]/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery grid of figures */}
      <section className="py-16 bg-[#020617]" id="gallery-mesh-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, index) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative h-72 rounded-3xl overflow-hidden border border-white/5 shadow-2xl focus:outline-none text-left w-full hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300 bg-[#0a0f24]"
              >
                {/* Lazy-loaded background layout */}
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Translucent overlay caption on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="bg-amber-400 p-1.5 rounded-full text-slate-950 self-end mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <LucideIcon name="Camera" size={14} />
                  </div>
                  <p className="text-xs font-semibold leading-normal font-sans line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-350">
                    {img.caption}
                  </p>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-emerald-400 font-mono mt-1">
                    Category: {img.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Lightbox Overlay Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-[#020617]/98 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          id="gallery-lightbox"
        >
          {/* Header controls inside lighbox */}
          <div className="flex items-center justify-between text-slate-350 py-2">
            <span className="text-[11px] font-mono tracking-widest uppercase">
              Photo {lightboxIndex + 1} of {filteredImages.length} ({filteredImages[lightboxIndex].category})
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 rounded-full hover:bg-white/5 text-slate-300 hover:text-white transition-colors"
              aria-label="Close lightbox"
              id="close-lightbox"
            >
              <LucideIcon name="X" size={24} />
            </button>
          </div>

          {/* Photo frame with side navigations */}
          <div className="flex-1 flex items-center justify-between gap-4 max-w-5xl mx-auto w-full">
            {/* Left Prev Arrow */}
            <button
              onClick={handlePrev}
              className="p-3 rounded-full hover:bg-white/5 text-slate-350 hover:text-white shrink-0 active:scale-90 transition-transform hidden sm:block"
              aria-label="Previous image"
              id="prev-lightbox-btn"
            >
              <LucideIcon name="ChevronLeft" size={32} />
            </button>

            {/* Active image */}
            <div className="flex-1 flex items-center justify-center max-h-[70vh] relative">
              <img
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-white/10 shadow-2xl animate-scale-up"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Next Arrow */}
            <button
              onClick={handleNext}
              className="p-3 rounded-full hover:bg-white/5 text-slate-350 hover:text-white shrink-0 active:scale-90 transition-transform hidden sm:block"
              aria-label="Next image"
              id="next-lightbox-btn"
            >
              <LucideIcon name="ChevronRight" size={32} />
            </button>
          </div>

          {/* Footer details inside lightbox */}
          <div className="text-center py-4 bg-[#0a0f24]/85 border border-white/5 backdrop-blur-md rounded-2xl max-w-2xl mx-auto w-full text-white space-y-3 px-4">
            <p className="text-xs sm:text-sm leading-relaxed font-sans">
              {filteredImages[lightboxIndex].caption}
            </p>
            
            {/* Swipe prompt / action targets */}
            <div className="flex justify-center gap-4 pt-1 sm:hidden">
              <button 
                onClick={handlePrev}
                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-slate-200"
              >
                ← Prev
              </button>
              <button 
                onClick={handleNext}
                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-slate-200"
              >
                Next →
              </button>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => {
                  const label = `Query: Image details of ${filteredImages[lightboxIndex ?? 0].caption}`;
                  setLightboxIndex(null);
                  onOpenInquiry(label);
                }}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-amber-400/20"
              >
                Plan My Trip Here
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Accompanying photo guidelines trust box */}
      <section className="bg-[#0a0f24] py-14 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h4 className="font-sans font-bold text-lg text-white uppercase tracking-tight">Eager to experience the magic of Shikaras & snowpeaks first hand?</h4>
          <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">Tell us your timing targets, and let our local drivers guide you straight to these photogenic secret spots.</p>
          <button
            onClick={() => onOpenInquiry('Gallery Visual Trip Interest')}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
          >
            Start Custom Sketching
          </button>
        </div>
      </section>

    </div>
  );
}
