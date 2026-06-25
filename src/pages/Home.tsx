import { useState, ChangeEvent, FormEvent } from 'react';
import { travelConfig, Destination, TourPackage } from '../data/travelConfig';
import LucideIcon from '../components/LucideIcon';

interface HomeProps {
  onOpenInquiry: (packageTitle?: string, destinationName?: string) => void;
  setActivePage: (page: string) => void;
  setSelectedDestination: (dest: Destination) => void;
}

export default function Home({ onOpenInquiry, setActivePage, setSelectedDestination }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  // Quick inquiry local state
  const [quickInquiry, setQuickInquiry] = useState({
    name: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '2',
  });
  const [inquiryError, setInquiryError] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const handleQuickInquiryChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuickInquiry(prev => ({ ...prev, [name]: value }));
    setInquiryError('');
  };

  const handleQuickSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!quickInquiry.name.trim() || !quickInquiry.phone.trim() || !quickInquiry.destination || !quickInquiry.travelDate) {
      setInquiryError('Please fill in all starred (*) fields to connect with a Kashmiri travel desk.');
      return;
    }

    // Save lead details
    try {
      const existingLeads = JSON.parse(localStorage.getItem('kashmir_horizon_leads') || '[]');
      const newLead = {
        ...quickInquiry,
        packageSelection: 'Quick Home Inquiry Form',
        id: 'lead_' + Date.now(),
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem('kashmir_horizon_leads', JSON.stringify([newLead, ...existingLeads]));
      setInquirySuccess(true);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(prev => (prev === id ? null : id));
  };

  const handleExploreDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    setActivePage('destinations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const valueProps = [
    {
      id: 'local',
      title: '100% Genuine Local Experts',
      desc: 'No middlemen. Born and raised in Srinagar, our reservation desk designs layouts directly based on current valley dynamics.',
      iconName: 'Compass'
    },
    {
      id: 'hotels',
      title: 'Personally Verified Stays',
      desc: 'Heat-enabled premium hotel rooms and authentic heritage cedarwood deluxe houseboats vetted for premium dining and sanitation.',
      iconName: 'Hotel'
    },
    {
      id: 'support',
      title: '24/7 Ground Assistance',
      desc: 'Real-time proactive monitoring. When taking Gondolas or renting Lidder rafts, our on-site team is always a call away.',
      iconName: 'Clock'
    },
    {
      id: 'pricing',
      title: 'Transparent Pricing Guarantee',
      desc: 'No hidden tax surprises, no local transport trickery. What is in the inclusion checklist is exactly what you get.',
      iconName: 'Shield'
    },
    {
      id: 'transit',
      title: 'Safe Experienced Transit',
      desc: 'Comfortable luxury vehicles fully covered by professional commercial insurances with local snow-terrain expert drivers.',
      iconName: 'Car'
    },
    {
      id: 'customizable',
      title: 'Bespoke Flexible Formats',
      desc: 'Adjust your timing, select specific meadows, or request dietary custom menus. Our packages bend completely to your dream pace.',
      iconName: 'Award'
    }
  ];

  const whatsappUrl = `https://wa.me/${travelConfig.whatsappRaw}?text=${encodeURIComponent(travelConfig.whatsappWelcomeText)}`;

  return (
    <div className="bg-[#020617] text-slate-100" id="home-page-viewport">
      
      {/* A. HERO SECTION */}
      <section className="relative h-[85vh] md:h-[92vh] flex items-center justify-center overflow-hidden" id="hero-banner">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=1920"
            alt="Beautiful Dal Lake Mountains Srinagar J&K"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          {/* Visual gradient anchor */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/45 to-black/35 z-0" />
        </div>

        {/* Hero Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-16">
          <div className="lg:col-span-7 space-y-5 text-white text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-widest leading-none">
              <LucideIcon name="Sparkles" size={13} className="animate-pulse text-emerald-400" />
              <span>Explore Kashmir with Srinagar Locals</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-sans">
              Discover Paradise <br />
              <span className="text-gradient">Through Local Expertise</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Skip general cookie-cutter itineraries. Stay in verified timber-carved deluxe houseboats, experience world-class snow skiing in Gulmarg, and hike secret meadows of Doodhpathri under secure guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={() => onOpenInquiry('General Home Hero Form')}
                className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-sans font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-amber-500/20 text-center"
                id="hero-primary-cta"
              >
                Plan My Kashmir Trip
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-sans font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-500/20 inline-flex items-center justify-center gap-2 border border-emerald-500/30"
                id="hero-secondary-cta"
              >
                <LucideIcon name="MessageCircle" size={16} />
                WhatsApp Live Support
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5" id="hero-quick-form-col">
            {/* Quick action embed */}
            <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 text-slate-100">
              <h3 className="font-sans font-bold text-lg text-white flex items-center gap-1.5 mb-1">
                <LucideIcon name="Zap" className="text-amber-400 animate-pulse" size={18} />
                Quick Inquiry Form
              </h3>
              <p className="text-xs text-slate-400 mb-4 font-sans">Connect with a Kashmir tour designer in 10 minutes.</p>
              
              {inquirySuccess ? (
                <div className="py-8 text-center bg-emerald-950/20 rounded-2xl border border-emerald-500/20">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <LucideIcon name="Check" size={24} />
                  </div>
                  <h4 className="font-bold text-base text-white">Request Lodged!</h4>
                  <p className="text-xs text-slate-300 px-4 mt-1">Our certified booking desk in Dal Lake office will phone or WhatsApp you within 15 minutes.</p>
                  <button
                    onClick={() => {
                      setInquirySuccess(false);
                      setQuickInquiry({ name: '', phone: '', destination: '', travelDate: '', travelers: '2' });
                    }}
                    className="mt-4 px-4 py-1.5 bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold rounded-lg transition-colors border border-white/5"
                  >
                    Send Another Response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      value={quickInquiry.name}
                      onChange={handleQuickInquiryChange}
                      className="w-full px-3 py-2 text-xs border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-slate-950/50 text-white placeholder-slate-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (Postpaid)*"
                      required
                      value={quickInquiry.phone}
                      onChange={handleQuickInquiryChange}
                      className="w-full px-3 py-2 text-xs border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-slate-950/50 text-white placeholder-slate-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <select
                        name="destination"
                        value={quickInquiry.destination}
                        onChange={handleQuickInquiryChange}
                        required
                        className="w-full px-3 py-2 text-xs border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-slate-950/50 text-slate-200"
                      >
                        <option value="" className="bg-slate-900 text-slate-100">Destination *</option>
                        {travelConfig.destinations.map(d => (
                          <option key={d.id} value={d.name} className="bg-slate-900 text-slate-100">{d.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <input
                        type="date"
                        name="travelDate"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={quickInquiry.travelDate}
                        onChange={handleQuickInquiryChange}
                        className="w-full px-3 py-2 text-xs border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-slate-950/50 text-slate-300"
                      />
                    </div>
                  </div>
                  <div>
                    <select
                      name="travelers"
                      value={quickInquiry.travelers}
                      onChange={handleQuickInquiryChange}
                      className="w-full px-3 py-2 text-xs border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-slate-950/50 text-slate-200"
                    >
                      <option value="1" className="bg-slate-900 text-slate-100">1 Person (Solo)</option>
                      <option value="2" className="bg-slate-900 text-slate-100">2 Persons (Couple)</option>
                      <option value="4" className="bg-slate-900 text-slate-100">3-5 Persons (Family)</option>
                      <option value="8" className="bg-slate-900 text-slate-100">6+ Persons (Group)</option>
                    </select>
                  </div>
                  {inquiryError && (
                    <p className="text-[10px] text-red-400 bg-red-950/20 p-2 rounded-lg leading-snug border border-red-500/20">{inquiryError}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-sans font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-98 transition-all"
                  >
                    Connect with a Local Counselor
                  </button>
                  <p className="text-[10px] text-emerald-400 text-center uppercase tracking-wider font-semibold">
                    ⚡ Instant WhatsApp validation auto-linked
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* B. STATISTICS BAR */}
      <section className="bg-slate-900/40 backdrop-blur-md text-white py-10 border-y border-white/5 relative z-20 shadow-lg" id="statistics-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {travelConfig.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-sans font-extrabold text-3xl sm:text-4xl text-amber-400 tracking-tight">
                  {stat.number}
                </p>
                <p className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. WHY CHOOSE US */}
      <section className="py-20 bg-[#0a0f24] border-b border-white/5" id="why-choose-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              The Kashmir Horizon Standard
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
              Why Discerning Travelers <br />Choose Local Expertise
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
              Tourism is built on trust. We bridge the gap between mountain adventures and family safety with zero-compromise security benchmarks, verified private cars, and genuine hosts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop) => (
              <div 
                key={prop.id} 
                className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/5 hover:border-emerald-500/20 shadow-xl transition-all duration-300 flex gap-4 items-start group hover:-translate-y-1"
              >
                <div className="p-3 bg-white/5 border border-white/10 text-emerald-400 group-hover:bg-amber-400 group-hover:text-slate-950 rounded-2xl transition-colors shrink-0">
                  <LucideIcon name={prop.iconName} size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-base mb-1.5">
                    {prop.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {prop.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* D. POPULAR DESTINATIONS */}
      <section className="py-20 bg-[#020617]" id="popular-destinations-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Wonders of Kashmir
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
                Iconic Destination Hubs
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl font-sans">
                Explore the must-visit alpine gems, cascading fresh rivers, and centuries old botanical gardens. Handpicked by local drivers for seasonal magnificence.
              </p>
            </div>
            <button
              onClick={() => {
                setActivePage('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-500 transition-colors self-start md:self-end focus:outline-none hover:underline"
            >
              <span>Explore All Guides</span>
              <LucideIcon name="ChevronRight" size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelConfig.destinations.map((dest) => (
              <div 
                key={dest.id}
                className="bg-slate-900/60 rounded-3xl border border-white/5 hover:border-emerald-500/30 overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={`Scenic views of ${dest.name}, Kashmir`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle glass name capsule */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full text-white text-[11px] font-bold font-mono tracking-widest uppercase flex items-center gap-1">
                    <LucideIcon name="MapPin" size={10} className="text-amber-400" />
                    <span>{dest.name}</span>
                  </div>
                </div>
                
                <div className="p-5 space-y-3.5">
                  <div>
                    <h4 className="font-sans font-extrabold text-white text-lg group-hover:text-amber-400 transition-colors">
                      {dest.name}
                    </h4>
                    <p className="text-xs text-slate-400 italic mt-0.5">"{dest.tagline}"</p>
                  </div>
                  
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {dest.overview}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider leading-none">
                      Activity Hub: <strong className="text-emerald-400">{dest.activities[0]}</strong>
                    </span>
                    <button
                      onClick={() => handleExploreDestination(dest)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-emerald-450 transition-colors focus:outline-none"
                    >
                      <span>Explore</span>
                      <LucideIcon name="ChevronRight" size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* E. FEATURED TOUR PACKAGES */}
      <section className="py-20 bg-[#0a0f24] text-white relative border-y border-white/5" id="featured-packages-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.06),transparent_40%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300 font-mono bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
                Bestselling Plans
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
                Featured Tour Packages
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl font-sans">
                Handcrafted itineraries combining luxury, adventure, and comfort. Backed by private transfers and authentic local cuisine. Includes standard inclusions/exclusions lists.
              </p>
            </div>
            <button
              onClick={() => {
                setActivePage('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-500 transition-colors self-start md:self-end focus:outline-none hover:underline"
            >
              <span>View All Itineraries</span>
              <LucideIcon name="ChevronRight" size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelConfig.packages.slice(0, 3).map((pkg) => (
              <div 
                key={pkg.id}
                className="bg-slate-950/40 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-between group hover:border-emerald-500/25 transition-all duration-300"
              >
                <div>
                  {/* Package Banner */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    {/* Duration badge */}
                    <div className="absolute top-4 left-4 bg-emerald-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                      <LucideIcon name="Clock" size={10} />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-sans font-bold text-white text-lg group-hover:text-amber-300 transition-colors leading-snug">
                        {pkg.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-1">
                        Category: <span className="text-emerald-400">{pkg.category}</span>
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-sans">
                      {pkg.tagline}
                    </p>

                    {/* Quick Itinerary highlights (Preview tags) */}
                    <div className="space-y-1.5 pt-2">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Key Highlights:</p>
                      {pkg.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex gap-2 items-start text-xs text-slate-200">
                          <LucideIcon name="Check" className="text-emerald-400 shrink-0 mt-0.5" size={12} />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-white/5 bg-slate-950/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Special Quote</span>
                    <span className="text-xl font-extrabold text-amber-400 font-mono tracking-tight">{pkg.pricePlaceholder}</span>
                    <span className="text-[10px] text-slate-400 font-mono">/person</span>
                  </div>
                  <button
                    onClick={() => onOpenInquiry(pkg.title)}
                    className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-600/30 font-sans"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* F. SERVICES SECTION */}
      <section className="py-20 bg-[#020617]" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              End-To-End Support
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
              Our Hospitality Services
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              From the instant you clear Srinagar Airport baggage tags to your return boarding, we construct safe and wonderful individual connections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelConfig.services.map((service) => (
              <div 
                key={service.id}
                className="bg-white/5 backdrop-blur-md p-5 rounded-3xl border border-white/5 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-emerald-500/20 hover:-translate-y-0.5 transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 text-emerald-400 rounded-xl flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                    <LucideIcon name={service.iconName} size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-white text-sm">{service.title}</h4>
                    <p className="text-xs text-slate-350 mt-1 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => onOpenInquiry(`Service: ${service.title}`)}
                  className="mt-4 text-[11px] font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-0.5 group focus:outline-none"
                >
                  Inquire
                  <LucideIcon name="ChevronRight" size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* G. TESTIMONIALS SECTION */}
      <section className="py-20 bg-[#0a0f24] border-t border-white/5" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Verified Social Proof
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
              Beloved by Happy Families
            </h3>
            <p className="text-sm text-slate-350 leading-relaxed font-sans">
              Read transparent stories shared directly by our travelers after completing their holiday tours in Srinagar, Gulmarg, and Pahalgam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelConfig.reviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/5 shadow-xl flex flex-col justify-between relative"
              >
                {/* Visual quote accent mark */}
                <span className="absolute top-4 right-6 text-6xl text-emerald-500/10 font-bold select-none leading-none">“</span>
                
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>
                        <LucideIcon name="Star" size={14} className="fill-current" />
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-5 border-t border-white/5 flex items-center gap-3 mt-4">
                  <img
                    src={rev.avatar}
                    alt={`Reviewer avatar ${rev.name}`}
                    className="w-10 h-10 rounded-full object-cover border border-white/5"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div>
                    <h5 className="font-sans font-bold text-white text-xs">{rev.name}</h5>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold font-mono">{rev.location} ({rev.date})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* H. FAQ SECTION */}
      <section className="py-20 bg-[#020617]" id="faqs-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              Clear Advice For Travelers
            </span>
            <h3 className="text-3xl font-extrabold text-white font-sans tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-350 max-w-xl mx-auto font-sans">
              Learn practical details about valley weather clothing, phone network sim cards, transport licensing rules, and high altitude safety tips.
            </p>
          </div>

          <div className="space-y-3.5" id="faqs-accordion-root">
            {travelConfig.faqs.map((faq) => {
              const isSelected = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center bg-transparent hover:bg-white/5 transition-colors focus:outline-none"
                    aria-expanded={isSelected}
                  >
                    <span className="font-sans font-bold text-white text-sm leading-snug">
                      {faq.question}
                    </span>
                    <span className={`p-1 rounded-full shrink-0 transition-transform duration-300 ${
                      isSelected ? 'bg-emerald-500/10 text-emerald-400 rotate-180 border border-emerald-500/20' : 'bg-white/5 text-slate-400'
                    }`}>
                      <LucideIcon name="ChevronDown" size={14} />
                    </span>
                  </button>
                  
                  {/* Smooth height panel */}
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isSelected ? 'max-h-96 border-t border-white/5 py-4 px-5 bg-white/5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* I. FINAL CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-slate-950 via-[#06241b] to-slate-950 text-white relative overflow-hidden border-t border-white/5" id="final-call-to-action">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <LucideIcon name="Mountain" className="text-amber-400 mx-auto animate-bounce shrink-0" size={44} />
          
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight font-sans max-w-3xl mx-auto">
            Ready to Explore Kashmir?
          </h3>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            Get personalized itineraries designed directly by organic locals based in Dal Lake, Srinagar. Grab zero risk security quotes and customizable room stays today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => onOpenInquiry('Final CTA Form')}
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-amber-400/20 transition-transform active:scale-95 text-center"
              id="final-cta-btn-book"
            >
              Request A Customized Quote
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl inline-flex items-center justify-center gap-2 transition-transform active:scale-95 border border-emerald-500/20"
              id="final-cta-btn-wa"
            >
              <LucideIcon name="MessageCircle" size={16} />
              Connect on WhatsApp
            </a>
          </div>

          <div className="pt-2 text-xs text-slate-400 font-mono">
            <span>Or Call directly: </span>
            <a href={`tel:${travelConfig.phoneRaw}`} className="underline font-bold text-white hover:text-amber-300 transition-colors">
              {travelConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
