import { useState, useEffect } from 'react';
import { travelConfig } from '../data/travelConfig';
import LucideIcon from './LucideIcon';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenInquiry: () => void;
}

export default function Header({ activePage, setActivePage, onOpenInquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor screen scrolling to modernise navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background body scroll when mobile drawer menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#020617]/90 backdrop-blur-md shadow-2xl py-3 text-slate-100 border-b border-white/10' 
          : 'bg-gradient-to-b from-[#020617]/80 to-transparent text-white py-4 md:py-5'
      }`}
      id="main-app-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Brand */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 md:gap-3 text-left focus:outline-none group"
          id="nav-logo-brand"
        >
          <div className="bg-emerald-600 text-white p-2 rounded-xl shadow-lg shadow-emerald-500/20 transform group-hover:rotate-6 transition-transform">
            <LucideIcon name="Compass" size={24} className="stroke-[2.5]" />
          </div>
          <div>
            <h1 className="font-sans font-extrabold text-lg md:text-xl tracking-tight uppercase">
              Kashmir <span className="text-emerald-400">Horizon</span>
            </h1>
            <p className="text-[9px] md:text-[10px] uppercase font-semibold letter tracking-widest leading-none opacity-80 mt-0.5">
              Tours & Travels
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" id="desktop-navbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-semibold tracking-wide py-1 transition-colors relative group focus:outline-none ${
                activePage === item.id 
                  ? 'text-emerald-400 font-extrabold' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
                activePage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </button>
          ))}
        </nav>

        {/* Action Call & CTA Button Row */}
        <div className="hidden lg:flex items-center gap-6" id="desktop-cta-row">
          {/* Quick Call */}
          <a
            href={`tel:${travelConfig.phoneRaw}`}
            className="flex items-center gap-2 group text-left focus:outline-none"
            id="header-phone-anchor"
          >
            <div className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'bg-white/5 border border-white/10 text-emerald-400' : 'bg-white/10 text-white'
            }`}>
              <LucideIcon name="Phone" size={14} className="animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 leading-none">Local Helpline</p>
              <p className={`text-xs font-bold font-mono tracking-wide mt-0.5 ${isScrolled ? 'text-slate-100' : 'text-white'}`}>
                {travelConfig.phoneFormatted}
              </p>
            </div>
          </a>

          {/* Book Now */}
          <button
            onClick={onOpenInquiry}
            className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-200"
            id="header-book-now"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex lg:hidden items-center gap-3" id="mobile-nav-panel">
          <a
            href={`tel:${travelConfig.phoneRaw}`}
            className={`p-2 rounded-lg ${isScrolled ? 'bg-white/5 border border-white/10 text-emerald-400' : 'bg-white/10 text-white'}`}
            aria-label="Call helpline"
          >
            <LucideIcon name="Phone" size={16} />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg hover:bg-white/10 focus:outline-none ${
              isScrolled ? 'text-slate-100' : 'text-white'
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            id="mobile-menu-burger"
          >
            <LucideIcon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Dimmed backdrop background overlay when Mobile Menu is open */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/65 backdrop-blur-md lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        id="mobile-drawer-backdrop"
      />

      {/* Mobile Drawer (Overlay and Menu) */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-sm text-slate-100 border-l border-white/10 transform transition-transform duration-300 ease-in-out flex flex-col justify-between shadow-[-10px_0_30px_rgba(0,0,0,0.6)] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#0a0f24' }}
        id="mobile-drawer"
      >
        <div>
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 text-white p-1.5 rounded-lg shadow-lg shadow-emerald-500/20">
                <LucideIcon name="Compass" size={18} />
              </div>
              <span className="font-sans font-extrabold text-sm text-white uppercase tracking-tight">Kashmir <span className="text-emerald-400">Horizon</span></span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              aria-label="Close drawer"
            >
              <LucideIcon name="X" size={18} />
            </button>
          </div>

          {/* Links */}
          <div className="py-4 px-2 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                  activePage === item.id 
                    ? 'bg-emerald-600/20 text-emerald-400 font-bold border border-emerald-500/20' 
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <LucideIcon 
                  name="ChevronRight" 
                  size={14} 
                  className={`transition-transform ${activePage === item.id ? 'translate-x-1 text-emerald-400' : 'text-slate-500'}`} 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Footer info in Drawer */}
        <div className="p-4 border-t border-white/10 bg-[#020617] space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Local Kashmir Helpline</p>
            <a 
              href={`tel:${travelConfig.phoneRaw}`} 
              className="font-mono text-white font-bold text-sm block"
            >
              {travelConfig.phoneFormatted}
            </a>
            <p className="text-[10px] text-slate-400">{travelConfig.email}</p>
          </div>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider text-center shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
            id="mobile-drawer-cta"
          >
            Request Call & Book
          </button>
        </div>
      </div>
    </header>
  );
}
