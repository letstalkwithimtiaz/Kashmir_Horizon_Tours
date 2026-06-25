import { travelConfig } from '../data/travelConfig';
import LucideIcon from '../components/LucideIcon';

interface AboutProps {
  onOpenInquiry: (topic?: string) => void;
}

export default function About({ onOpenInquiry }: AboutProps) {
  const teamMembers = [
    {
      name: "Tariq Ahmad Shah",
      role: "Founder & CEO, Chief Itinerary Designer",
      bio: "Born on the banks of Dal Lake, Tariq has spent 15 years auditing hotels, negotiating transport networks, and designing secure, beautiful itineraries directly with local Kashmir guilds.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Shabir Ahmad Lone",
      role: "Operations Supervisor & Safety Coordinator",
      bio: "Shabir coordinates fleet logistics, manages emergency driver dispatches, and ensures the highest maintenance standards are met daily across our extensive private vehicle fleet.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Sajad Ahmad Bhat",
      role: "Lead Certified Trekking Captain",
      bio: "A licensed high-altitude mountain savior and certified guide. Sajad has safely guided over 400 groups through Sonamarg Thajiwas Glacier and the iconic great lakes trails.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300"
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen pt-20 text-slate-100" id="about-page-viewport">
      
      {/* Page Header Cover */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621503923376-790104f378d3?auto=format&fit=crop&q=80&w=1200"
            alt="Gulmarg Alpine Trees and Hills"
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-[#020617]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#fbbf24] font-mono">Our Heritage & Story</span>
          <h2 className="text-4xl font-extrabold tracking-tight font-sans">About Kashmir Horizon Tours</h2>
          <p className="text-sm text-slate-200 max-w-xl mx-auto font-sans leading-relaxed">
            Pioneering ethical, high-quality, and tourist-safe local hospitality directly out of Srinagar since 2014.
          </p>
        </div>
      </section>

      {/* Brand values / stats */}
      <section className="py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Written Story Col */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
                Departing From Srinagar, India
              </span>
              <h3 className="text-3xl font-extrabold text-white font-sans tracking-tight">
                Our Foundational Mission
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                <p>
                  Kashmir Horizon Tours was conceived around a humble, single idea: <strong>hospitality resides in honesty</strong>. For decades, the magical valley of Kashmir has gathered millions of travelers eager to catch a glint of paradise. However, navigating local transport unions, finding legitimately heated winter hotels, and skipping hidden commission traps has historically been exhausting.
                </p>
                <p>
                  By establishing a centralized, premium corporate office along the iconic Srinagar Boulevard Road, we set out to build a modern travel gateway. We personally audit every room bed, interview and hire only non-smoking certified native driver guides, and establish clear fixed packages with absolutely no pressure sales.
                </p>
                <p>
                  Today, we have escorted over 5,200 high-fidelity honeymooners and multigenerational families across Kashmir. We do not just build itineraries; we protect your time, guarantee your security, and share our deep organic connection to the crown jewel of India.
                </p>
              </div>

              {/* Core Values Rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-2.5">
                  <LucideIcon name="CheckCircle" className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <h5 className="font-bold text-sm text-white">Zero Middlemen Traps</h5>
                    <p className="text-[11px] text-slate-400">Every car, guide, and hotel contract is managed directly by our team to guarantee rates.</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <LucideIcon name="CheckCircle" className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <h5 className="font-bold text-sm text-white">Safety First Protocol</h5>
                    <p className="text-[11px] text-slate-400">Full vehicle insulation checks, first aid bags, and constant GPS coordination counters.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Graphic Illustration Col */}
            <div className="lg:col-span-5 relative">
              <div className="className relative rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600"
                  alt="Scenic view of Srinagar traveler"
                  className="w-full object-cover h-[450px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40" />
                
                {/* Floating trust bar */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-white shadow-xl">
                  <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                    <LucideIcon name="Shield" size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Accreditation Info</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">Official Registration Number: <strong className="text-amber-400">JK-T-9482</strong> under Jammu & Kashmir Government Department of Tourism.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission sections */}
      <section className="py-20 bg-[#0a0f24] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Vision */}
            <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl space-y-4 hover:border-emerald-500/10 transition-colors">
              <div className="w-10 h-10 bg-white/5 border border-white/10 text-emerald-400 rounded-xl flex items-center justify-center">
                <LucideIcon name="Compass" size={20} />
              </div>
              <h4 className="font-sans font-extrabold text-white text-xl tracking-tight">Our Core Vision</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                To stand as the absolute global benchmark of authentic, safe, and transparent alpine tourism in Jammu & Kashmir. We envision a travel ecosystem where local communities are rewarded fairly, where structural landscapes are structurally protected, and where global visitors experience seamless, stress-free hospitality matching elite Swiss travel layouts.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl space-y-4 hover:border-emerald-500/10 transition-colors">
              <div className="w-10 h-10 bg-white/5 border border-white/10 text-amber-400 rounded-xl flex items-center justify-center">
                <LucideIcon name="Shield" size={20} />
              </div>
              <h4 className="font-sans font-extrabold text-white text-xl tracking-tight">Our Core Mission</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                To design and operate customizable, highly reliable, and child-safe travel packages, taxi transit lines, and Deluxe houseboat bookings in Srinagar, Gulmarg, and Pahalgam. We achieve this by avoiding deceptive commissions, investing heavily in modern heated hotels, and using only certified native drivers that respect cultural warmth and high-integrity safety boundaries.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Team Column section */}
      <section className="py-20 bg-[#020617]" id="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              The Office Personnel
            </span>
            <h3 className="text-3xl font-extrabold text-white font-sans tracking-tight">
              Kashmiri Hospitality Guides
            </h3>
            <p className="text-sm text-slate-300 font-sans">
              Get to know the passionate planning specialists, fleet supervisors, and high-peak mountain captains that ensure your safe and wonderful holiday.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div 
                key={i}
                className="bg-white/5 border border-white/5 rounded-3xl shadow-xl flex flex-col items-center text-center p-6 space-y-4 group hover:border-emerald-500/20 transition-all hover:-translate-y-0.5 duration-300"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-amber-400 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-white text-base">{member.name}</h4>
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">{member.role}</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Action box */}
          <div className="mt-16 bg-gradient-to-r from-slate-950 via-[#06241b] to-slate-950 text-white p-8 rounded-3xl text-center space-y-4 shadow-2xl border border-white/5">
            <h4 className="font-sans font-extrabold text-2xl tracking-tight">Want to meet Tariq or custom outline a valley trek?</h4>
            <p className="text-xs text-slate-320 max-w-lg mx-auto">
              Our chief itinerary designers and drivers are situated right inside Boulevard Road, Srinagar. Connect directly to construct custom packages today.
            </p>
            <button
              onClick={() => onOpenInquiry('Meet Team Inquiry')}
              className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 transition-colors text-slate-950 font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl active:scale-95"
            >
              Ask an Expert Now
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
