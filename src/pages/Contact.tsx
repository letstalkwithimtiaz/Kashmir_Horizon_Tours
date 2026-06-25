import { useState, ChangeEvent, FormEvent } from 'react';
import { travelConfig } from '../data/travelConfig';
import LucideIcon from '../components/LucideIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Custom Inquiry',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim().replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Please type your custom message';
    return errors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Save leads locally for the template evaluation
      try {
        const existingLeads = JSON.parse(localStorage.getItem('kashmir_horizon_leads') || '[]');
        const newLead = {
          ...formData,
          destination: 'General Contact Form Inquiry',
          travelDate: new Date().toISOString().split('T')[0],
          travelers: 'Contact Form',
          id: 'lead_' + Date.now(),
          submittedAt: new Date().toISOString(),
        };
        localStorage.setItem('kashmir_horizon_leads', JSON.stringify([newLead, ...existingLeads]));
      } catch (err) {
        console.error('Storage error:', err);
      }
    }, 1100);
  };

  const handleWhatsAppRedirect = () => {
    const txt = `Hi Kashmir Horizon Tours!\n\nI just filled out your Contact Form and want to plan a custom trip.\n\n*Name*: ${formData.name}\n*Phone*: ${formData.phone}\n*Email*: ${formData.email || 'N/A'}\n*Subject*: ${formData.subject}\n*Message*: ${formData.message}`;
    window.open(`https://wa.me/${travelConfig.whatsappRaw}?text=${encodeURIComponent(txt)}`, '_blank');
  };

  const mapDirectionsUrl = `https://maps.google.com/?q=Boulevard+Road,+Dal+Lake,+Srinagar,+190001`;

  const contactCards = [
    {
      id: 'phone',
      title: 'Phone Helper Line',
      info: travelConfig.phoneFormatted,
      sub: '9:00 AM to 8:00 PM (IST)',
      link: `tel:${travelConfig.phoneRaw}`,
      iconName: 'Phone',
      btnLabel: 'Click To Call Now',
      color: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
    },
    {
      id: 'wa',
      title: 'WhatsApp Chat',
      info: 'Instant chat verification',
      sub: 'Srinagar online reservation desk',
      link: `https://wa.me/${travelConfig.whatsappRaw}?text=${encodeURIComponent(travelConfig.whatsappWelcomeText)}`,
      iconName: 'MessageCircle',
      btnLabel: 'Launch WhatsApp Chat',
      color: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
    },
    {
      id: 'email',
      title: 'Official Email desk',
      info: travelConfig.email,
      sub: 'Queries acknowledged in 12 hours',
      link: `mailto:${travelConfig.email}`,
      iconName: 'Mail',
      btnLabel: 'Send Direct Email',
      color: 'bg-amber-500/10 border-amber-500/20 text-amber-400'
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen pt-20 text-slate-100" id="contact-page-viewport">
      
      {/* Visual Header */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=1200"
            alt="Srinagar Boulevard road opposite Dal Lake Ghat 7 J&K"
            className="w-full h-full object-cover brightness-[0.25]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-[#020617]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#fbbf24] font-mono">24/7 Srinagar Office Support</span>
          <h2 className="text-4xl font-extrabold tracking-tight font-sans">Contact Our Kashmir Office</h2>
          <p className="text-sm text-slate-200 max-w-xl mx-auto font-sans leading-relaxed">
            Planning a custom family getaway or romantic honeymoon? Stop by our Boulevard road office or dispatch an inquiry online.
          </p>
        </div>
      </section>

      {/* Main grids of contact profiles */}
      <section className="py-16 bg-[#020617]" id="contact-card-anchors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactCards.map((card) => (
              <div 
                key={card.id}
                className="bg-[#0a0f24] border border-white/5 rounded-3xl p-6 shadow-xl flex flex-col justify-between items-start text-left space-y-4 hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className={`p-2.5 rounded-xl inline-flex border ${card.color}`}>
                    <LucideIcon name={card.iconName} size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-400 text-sm">{card.title}</h4>
                    <p className="font-sans font-extrabold text-white text-base mt-0.5">{card.info}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{card.sub}</p>
                  </div>
                </div>

                <a 
                  href={card.link}
                  target={card.id === 'wa' ? '_blank' : undefined}
                  rel={card.id === 'wa' ? 'noopener noreferrer' : undefined}
                  className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-center text-xs font-bold text-slate-100 rounded-xl active:scale-98 transition-all uppercase tracking-widest"
                >
                  {card.btnLabel}
                </a>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Contact Inquiry form */}
            <div className="lg:col-span-7 bg-[#0a0f24] p-6 sm:p-8 rounded-3xl border border-white/5 shadow-inner flex flex-col justify-between" id="inquiry-form-card">
              
              <div className="space-y-1 mb-6">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">Local advisory Desk</span>
                <h3 className="font-sans font-extrabold text-white text-xl tracking-tight">Send Us An Online Message</h3>
                <p className="text-xs text-slate-400">We respond to online inquiries with fully budgeted quotes in less than 12 hours.</p>
              </div>

              {isSuccess ? (
                <div className="p-8 text-center bg-emerald-500/10 border border-emerald-500/30 rounded-2xl" id="contact-success-panel">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <LucideIcon name="CheckCircle" size={32} />
                  </div>
                  <h4 className="font-sans font-extrabold text-lg text-white">Inquiry Logged Safely!</h4>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto mt-1.5 leading-relaxed">
                    Thank you, <span className="font-bold">{formData.name}</span>. Your request has been recorded inside our Srinagar headquarters database.
                  </p>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 my-6 text-left space-y-2">
                    <p className="text-[11px] text-slate-450 leading-snug">
                      Would you like to auto-forward your exact form fields straight to our active reservations manager on WhatsApp for dynamic response rates?
                    </p>
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-505 active:scale-95 text-white text-xs font-bold uppercase rounded-xl inline-flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <LucideIcon name="MessageCircle" size={14} />
                      Forward via WhatsApp Immediately
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', phone: '', email: '', subject: 'General Custom Inquiry', message: '' });
                    }}
                    className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-100 text-xs font-semibold rounded-xl border border-white/10 transition-colors"
                  >
                    Send Another Response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-305 uppercase tracking-wider mb-1.5" htmlFor="c-name">Your Full Name *</label>
                      <input
                        type="text"
                        id="c-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 text-xs bg-white/5 border rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 ${
                          formErrors.name ? 'border-red-500 bg-red-500/10' : 'border-white/10'
                        }`}
                        placeholder="E.g. Rahul Sharma"
                      />
                      {formErrors.name && <p className="text-[10px] text-red-500 mt-1">{formErrors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-305 uppercase tracking-wider mb-1.5" htmlFor="c-phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="c-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 text-xs bg-white/5 border rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 ${
                          formErrors.phone ? 'border-red-500 bg-red-500/10' : 'border-white/10'
                        }`}
                        placeholder="E.g. +91 98765 43210"
                      />
                      {formErrors.phone && <p className="text-[10px] text-red-500 mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-305 uppercase tracking-wider mb-1.5" htmlFor="c-email">Email Address <span className="text-slate-500 lowercase text-[10px]">(optional)</span></label>
                      <input
                        type="email"
                        id="c-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500"
                        placeholder="E.g. rahul@gmail.com"
                      />
                      {formErrors.email && <p className="text-[10px] text-red-500 mt-1">{formErrors.email}</p>}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-305 uppercase tracking-wider mb-1.5" htmlFor="c-subject">Inquiry Subject</label>
                      <select
                        id="c-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#0b1329] border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-200 appearance-none"
                      >
                        <option value="General Custom Inquiry">General Custom Inquiry</option>
                        <option value="Honeymoon Package Customization">Honeymoon Package Customization</option>
                        <option value="Family Holiday circuit Planning">Family Holiday Circuit Planning</option>
                        <option value="Taxi Transit / Driver Hire Quote">Taxi Transit / Driver Hire Quote</option>
                        <option value="Adventure Expedition / Trekking info">Adventure Expedition / Trekking Info</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-305 uppercase tracking-wider mb-1.5" htmlFor="c-message">Tell us about your dates & preferences *</label>
                    <textarea
                      id="c-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-3.5 py-2.5 text-xs bg-white/5 border rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 ${
                        formErrors.message ? 'border-red-400' : 'border-white/10'
                      }`}
                      placeholder="E.g. We want to land on June 15 for 5 nights. Need 1 room stays in houseboats & 2 nights in Gulmarg. We will have 2 children."
                    ></textarea>
                    {formErrors.message && <p className="text-[10px] text-red-500 mt-1">{formErrors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-emerald-600 to-[#10b981] hover:from-emerald-500 hover:to-emerald-400 text-white font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Logging Safe Request...
                      </>
                    ) : (
                      <>
                        <LucideIcon name="Send" size={14} />
                        Transmit Message To Office
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Geographical Map Mockup */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#0a0f24] to-[#04241b] rounded-3xl p-6 sm:p-8 text-white border border-white/5 flex flex-col justify-between shadow-2xl relative overflow-hidden" id="office-location-card">
              
              <div className="space-y-4">
                <div className="flex gap-2 items-center text-amber-400">
                  <LucideIcon name="Compass" className="animate-pulse" size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Srinagar Operations Office</span>
                </div>
                
                <h3 className="font-sans font-extrabold text-white text-lg tracking-tight">Our Physical Location</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  We are situated directly on <strong>Boulevard Road, Srinagar</strong>, opposite Ghat No. 7 on Dal Lake. Our physical office is fully open to guests from 9:00 AM to 8:00 PM for warm Saffron Tea (Kahwa), local registration receipts, or daily itinerary modifications.
                </p>

                {/* Styled static map mockup avoiding sandboxed iframe issues */}
                <a 
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden group border border-white/5 hover:border-emerald-650 transition-colors cursor-pointer"
                  title="Open GPS Directions on Google Maps"
                  id="static-map-graphic"
                >
                  {/* Styled Map background */}
                  <div className="h-44 bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden text-center">
                    
                    {/* Fake Grid lines representing a map */}
                    <div className="absolute inset-0 opacity-10 space-y-4 py-2 bg-[#020617]">
                      <div className="h-0.5 bg-gray-300 w-full" />
                      <div className="h-0.5 bg-gray-300 w-full" />
                      <div className="h-0.5 bg-gray-300 w-full" />
                    </div>
                    <div className="absolute inset-y-0 left-12 w-0.5 bg-gray-300 opacity-10" />
                    <div className="absolute inset-y-0 right-20 w-0.5 bg-gray-300 opacity-10" />

                    {/* Lidder and Dal lake representation vectors */}
                    <div className="absolute top-8 left-0 right-0 h-4 bg-blue-500/10 -rotate-3 blur-xs" />
                    <div className="absolute bottom-6 left-0 right-0 h-10 bg-emerald-500/5 rotate-6 blur-xs" />

                    {/* Central location beacon marker */}
                    <div className="z-10 bg-gradient-to-br from-amber-400 to-amber-500 text-slate-900 p-2.5 rounded-full shadow-lg relative group-hover:scale-110 transition-transform">
                      <LucideIcon name="MapPin" size={18} />
                      {/* Pulsing ring */}
                      <span className="absolute inset-0 rounded-full border border-amber-400 animate-ping opacity-60" />
                    </div>

                    <p className="z-10 font-bold text-xs text-white mt-3 leading-none font-sans">Boulevard Road, Dal Lake</p>
                    <p className="z-10 text-[9px] text-slate-400 mt-1 uppercase tracking-wider font-mono">Opposite Ghat No. 7, Srinagar</p>

                    {/* Action overlay */}
                    <div className="absolute inset-0 bg-[#020617]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold gap-1">
                      <span>Launch Google Map Directions</span>
                      <LucideIcon name="ExternalLink" size={12} />
                    </div>
                  </div>
                </a>
              </div>

              {/* Secure footer */}
              <div className="pt-6 border-t border-white/5 text-xs text-slate-400 space-y-2 mt-6">
                <p className="font-mono text-[10px] uppercase text-emerald-400 font-bold flex items-center gap-1">
                  <LucideIcon name="Shield" size={12} />
                  <span>Licensed J&K Tourism Firm</span>
                </p>
                <p className="text-[11px] leading-relaxed">
                  Department accreditation number: <strong>Reg. JK-9482</strong>. Fully authorized corporate banking receipt handlers for peace of mind.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
