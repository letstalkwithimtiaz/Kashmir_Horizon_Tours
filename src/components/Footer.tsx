import { travelConfig } from '../data/travelConfig';
import LucideIcon from './LucideIcon';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { id: 'home', label: 'Home Page' },
    { id: 'about', label: 'Who We Are' },
    { id: 'destinations', label: 'Explore Hubs' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'gallery', label: 'Media Gallery' },
    { id: 'contact', label: 'Contact Office' },
  ];

  return (
    <footer className="bg-[#020617] text-gray-300 pt-16 pb-24 sm:pb-8 border-t border-white/5" id="main-app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Tagline Column */}
          <div className="space-y-4" id="footer-col-about">
            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-600 text-white p-2 rounded-xl shadow-md">
                <LucideIcon name="Compass" size={20} />
              </div>
              <div>
                <h4 className="font-sans font-extrabold text-white text-base tracking-tight uppercase">
                  KASHMIR <span className="text-amber-400">HORIZON</span>
                </h4>
                <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider font-mono">Government Approved Agency</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-sans mt-3">
              "{travelConfig.tagline}." Experience high-fidelity warmth, deluxe houseboat comforts, and expert local Kashmiri driver-guides on bespoke Himalayan tours.
            </p>
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 text-xs text-slate-300">
              <LucideIcon name="Award" className="text-amber-400" size={13} />
              <span className="font-semibold text-[10px] tracking-wider uppercase font-mono">
                J&K Tourism Approved Reg: JK-9482
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div id="footer-col-links">
            <h5 className="font-sans font-bold text-white text-xs uppercase tracking-widest mb-5 border-l-2 border-emerald-500 pl-2.5">
              Quick Links
            </h5>
            <ul className="space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1 text-left focus:outline-none"
                  >
                    <LucideIcon name="ChevronRight" size={12} className="text-emerald-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div id="footer-col-services">
            <h5 className="font-sans font-bold text-white text-xs uppercase tracking-widest mb-5 border-l-2 border-emerald-500 pl-2.5">
              Services Offered
            </h5>
            <ul className="space-y-3 text-sm text-slate-400">
              {travelConfig.services.slice(0, 6).map((service) => (
                <li key={service.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div id="footer-col-contact" className="space-y-4">
            <h5 className="font-sans font-bold text-white text-xs uppercase tracking-widest border-l-2 border-emerald-500 pl-2.5">
              Contact Kashmir
            </h5>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-2.5 items-start">
                <LucideIcon name="MapPin" className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <span className="text-xs text-slate-405 leading-relaxed font-mono">
                  {travelConfig.address}
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <LucideIcon name="Phone" className="text-emerald-500 shrink-0" size={16} />
                <a href={`tel:${travelConfig.phoneRaw}`} className="hover:text-emerald-400 font-bold font-mono text-slate-100">
                  {travelConfig.phoneFormatted}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <LucideIcon name="Mail" className="text-emerald-500 shrink-0" size={16} />
                <a href={`mailto:${travelConfig.email}`} className="hover:text-emerald-400 text-xs text-slate-300">
                  {travelConfig.email}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <LucideIcon name="Clock" className="text-emerald-500 shrink-0" size={16} />
                <span className="text-xs text-slate-400">
                  {travelConfig.officeHours}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle accent line with social connections */}
        <div className="pt-6 pb-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left font-sans">
            <span className="font-semibold block sm:inline">Certified Secure Local Booking</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span>All transportation fully insured & licensed by J&K Transport Department</span>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-3" id="footer-social-row">
            {travelConfig.socials.facebook && (
              <a
                href={travelConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0a0f24] hover:bg-emerald-600 hover:text-white flex items-center justify-center border border-white/5 hover:border-emerald-500 transition-colors text-slate-400"
                aria-label="Visit Facebook"
              >
                <LucideIcon name="Compass" size={14} /> {/* Placeholder for custom brand social tags */}
              </a>
            )}
            {travelConfig.socials.instagram && (
              <a
                href={travelConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0a0f24] hover:bg-emerald-600 hover:text-white flex items-center justify-center border border-white/5 hover:border-emerald-500 transition-colors text-slate-400"
                aria-label="Visit Instagram"
              >
                <LucideIcon name="Heart" size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom copyright declaration */}
        <div className="pt-6 pb-12 border-t border-white/5 text-center text-[11px] text-slate-500 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {currentYear} {travelConfig.name}. All Rights Reserved. Crafted with local expertise in Srinagar.</p>
          <div className="flex gap-4">
            <button onClick={() => handleLinkClick('contact')} className="hover:text-amber-400 transition-colors">Privacy Policy</button>
            <span>|</span>
            <button onClick={() => handleLinkClick('packages')} className="hover:text-amber-400 transition-colors">Term of Services</button>
            <span>|</span>
            <button onClick={() => handleLinkClick('about')} className="hover:text-amber-400 transition-colors">Sitemap</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
