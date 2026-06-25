import LucideIcon from './LucideIcon';
import { travelConfig } from '../data/travelConfig';

interface FloatingActionsProps {
  onOpenInquiry: () => void;
}

export default function FloatingActions({ onOpenInquiry }: FloatingActionsProps) {
  const whatsappUrl = `https://wa.me/${travelConfig.whatsappRaw}?text=${encodeURIComponent(travelConfig.whatsappWelcomeText)}`;
  const phoneUrl = `tel:${travelConfig.phoneRaw}`;

  return (
    <>
      {/* 1. Desktop & Tablet Sticky Floating Widgets (Bottom Right) */}
      <div 
        className="fixed bottom-20 md:bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3 items-end"
        id="desktop-floating-widgets"
      >
        {/* Telephone Call Button */}
        <a
          href={phoneUrl}
          className="flex items-center gap-2 group px-4 py-2.5 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 hover:shadow-xl active:scale-95 transition-all duration-300 border border-white/10"
          title="Call Local Office"
          id="floating-call-widget"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-semibold whitespace-nowrap uppercase tracking-widest">
            Call Expert: {travelConfig.phoneFormatted}
          </span>
          <div className="bg-amber-400 p-1.5 rounded-full text-slate-950 animate-bounce">
            <LucideIcon name="Phone" size={16} />
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group px-4 py-2.5 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 hover:shadow-xl active:scale-95 transition-all duration-300 border border-emerald-500"
          title="Instant Chat on WhatsApp"
          id="floating-wa-widget"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-semibold whitespace-nowrap uppercase tracking-widest">
            WhatsApp Live Support
          </span>
          <div className="bg-white p-1.5 rounded-full text-emerald-600">
            <LucideIcon name="MessageCircle" size={16} />
          </div>
        </a>
      </div>

      {/* 2. Mobile-Only Floating Widgets (Quick targets) */}
      <div className="sm:hidden fixed bottom-18 right-4 z-40 flex flex-col gap-2" id="mobile-floating-shuttle">
        <a
          href={phoneUrl}
          className="w-11 h-11 bg-slate-900 border border-white/10 text-white rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-transform"
          aria-label="Call Office"
        >
          <LucideIcon name="Phone" size={18} className="text-amber-400" />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-emerald-600 border border-emerald-500 text-white rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-transform"
          aria-label="WhatsApp"
        >
          <LucideIcon name="MessageCircle" size={20} />
        </a>
      </div>

      {/* 3. Mobile-First Sticky Action Bar (Fixed to bottom window threshold) */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0a0f24]/90 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_16px_rgba(0,0,0,0.4)] flex items-center justify-between px-4 py-2.5"
        id="mobile-sticky-action-bar"
      >
        {/* Telephone Call button */}
        <a 
          href={phoneUrl}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-white/5 active:bg-white/10 text-white rounded-lg border border-white/10 mr-2 text-xs font-bold transition-all"
          id="mobile-sticky-call"
        >
          <LucideIcon name="Phone" className="text-amber-400 animate-pulse" size={14} />
          <span>Call Local Office</span>
        </a>

        {/* Plan Trip Dialog trigger */}
        <button
          onClick={onOpenInquiry}
          type="button"
          className="flex-1.5 flex items-center justify-center gap-2 py-2.5 px-3 bg-gradient-to-r from-emerald-600 to-[#10b981] active:scale-95 text-white rounded-lg font-sans font-bold text-xs shadow-md transition-transform"
          id="mobile-sticky-book"
        >
          <LucideIcon name="Calendar" size={14} />
          <span>Inquire & Book Now</span>
        </button>
      </div>
    </>
  );
}
