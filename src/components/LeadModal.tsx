import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { travelConfig } from '../data/travelConfig';
import LucideIcon from './LucideIcon';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackageTitle?: string;
  selectedDestinationName?: string;
}

export default function LeadModal({ 
  isOpen, 
  onClose, 
  selectedPackageTitle = "", 
  selectedDestinationName = "" 
}: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: selectedDestinationName || '',
    travelDate: '',
    travelers: '2',
    packageSelection: selectedPackageTitle || 'General Custom Kashmir Tour',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync inputs if props change
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      destination: selectedDestinationName || prev.destination,
      packageSelection: selectedPackageTitle || prev.packageSelection || 'General Custom Kashmir Tour',
    }));
  }, [selectedPackageTitle, selectedDestinationName, isOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
    if (!formData.destination) errors.destination = 'Please select or type a destination';
    if (!formData.travelDate) errors.travelDate = 'Approximate travel date is required';
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

    // Simulate database / API capture
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Store local copy in localStorage for persistent leads preview!
      try {
        const existingLeads = JSON.parse(localStorage.getItem('kashmir_horizon_leads') || '[]');
        const newLead = {
          ...formData,
          id: 'lead_' + Date.now(),
          submittedAt: new Date().toISOString(),
        };
        localStorage.setItem('kashmir_horizon_leads', JSON.stringify([newLead, ...existingLeads]));
      } catch (err) {
        console.error('Local leads storage exception:', err);
      }
    }, 1200);
  };

  // Pre-fills a WhatsApp link with traveler info
  const handleWhatsAppRedirect = () => {
    const messageText = `Hi Kashmir Horizon Tours!\n\nI want to book/customize a trip to Kashmir.\n\n*My Details*:\n- *Name*: ${formData.name}\n- *Phone*: ${formData.phone}\n- *Destination*: ${formData.destination}\n- *Travelers*: ${formData.travelers} Persons\n- *Approx Date*: ${formData.travelDate}\n- *Selected Package*: ${formData.packageSelection}\n- *Custom Request*: ${formData.message || 'None'}\n\nPlease share availability and quote!`;
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${travelConfig.whatsappRaw}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300" id="lead-form-modal">
      <div 
        className="relative w-full max-w-lg bg-[#0a0f24] rounded-3xl shadow-2xl border border-white/5 overflow-hidden transform transition-all duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Banner */}
        <div className="relative bg-slate-950 border-b border-white/5 py-6 px-6 text-white">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-205 hover:text-white transition-colors duration-200"
            aria-label="Close dialog"
            id="close-modal-btn"
          >
            <LucideIcon name="X" size={18} />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <LucideIcon name="Sparkles" className="text-amber-400 animate-pulse" size={16} />
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider font-mono">Local Experts Guiding You</span>
          </div>
          <h3 className="text-2xl font-black font-sans">Plan Your Kashmir Journey</h3>
          <p className="text-xs text-slate-400 mt-1">Get custom quotes, local advisory & handpicked luxury itineraries in 24 hours.</p>
        </div>

        {/* Success Screen */}
        {isSuccess ? (
          <div className="p-8 text-center" id="lead-success-screen">
            <div className="w-16 h-16 bg-emerald-550/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <LucideIcon name="CheckCircle" size={40} />
            </div>
            <h4 className="text-2xl font-extrabold text-white font-sans mb-2">Inquiry Submitted Safely!</h4>
            <p className="text-sm text-slate-300 mb-6 max-w-sm mx-auto">
              Thank you, <span className="font-semibold">{formData.name}</span>. Your travel inquiry has been received by our Kashmiri representative office.
            </p>
            
            {/* Instant Conversion Row */}
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-6 text-left">
              <div className="flex gap-2 items-start">
                <LucideIcon name="Zap" className="text-amber-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-xs text-white uppercase tracking-wider font-mono">Fast Track Option</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Want connected instantly? Auto-forward this complete application straight to our local reservation team on WhatsApp now:</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full mt-3 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-505 active:scale-95 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md"
                id="modal-wa-btn"
              >
                <LucideIcon name="MessageCircle" size={16} />
                Send via WhatsApp Immediately
              </button>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-slate-100 text-xs font-semibold rounded-xl border border-white/10 transition-colors"
                id="modal-success-close-btn"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto" id="lead-modal-form">
            
            <div className="grid grid-cols-2 gap-4">
              {/* Name */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-350 uppercase tracking-wider mb-1.5" htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <LucideIcon name="Users" size={14} />
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-9 pr-3 py-2 text-xs bg-white/5 border text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      formErrors.name ? 'border-red-500 bg-red-500/10' : 'border-white/10'
                    }`}
                    placeholder="E.g. Rahul Sharma"
                    aria-describedby={formErrors.name ? "name-error" : undefined}
                  />
                </div>
                {formErrors.name && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1" id="name-error">
                    <LucideIcon name="AlertCircle" size={10} /> {formErrors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-355 uppercase tracking-wider mb-1.5" htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <LucideIcon name="Phone" size={14} />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-9 pr-3 py-2 text-xs bg-white/5 border text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      formErrors.phone ? 'border-red-500 bg-red-500/10' : 'border-white/10'
                    }`}
                    placeholder="E.g. +91 98765 43210"
                    aria-describedby={formErrors.phone ? "phone-error" : undefined}
                  />
                </div>
                {formErrors.phone && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1" id="phone-error">
                    <LucideIcon name="AlertCircle" size={10} /> {formErrors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Email */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-355 uppercase tracking-wider mb-1.5" htmlFor="email">
                  Email Address <span className="text-slate-500 text-[10px] lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <LucideIcon name="Mail" size={14} />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-9 pr-3 py-2 text-xs bg-white/5 border text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      formErrors.email ? 'border-red-500' : 'border-white/10'
                    }`}
                    placeholder="E.g. rahul@gmail.com"
                  />
                </div>
                {formErrors.email && <p className="text-[11px] text-red-500 mt-1">{formErrors.email}</p>}
              </div>

              {/* Destination Dropdown */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-355 uppercase tracking-wider mb-1.5" htmlFor="destination">
                  Preferred Destination <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <LucideIcon name="MapPin" size={14} />
                  </span>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className={`w-full pl-9 pr-3 py-2 text-xs bg-[#0b1329] border text-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all appearance-none ${
                      formErrors.destination ? 'border-red-500' : 'border-white/10'
                    }`}
                  >
                    <option value="" className="bg-[#0b1329]">-- Choose Hub --</option>
                    {travelConfig.destinations.map(d => (
                      <option key={d.id} value={d.name} className="bg-[#0b1329]">{d.name}</option>
                    ))}
                    <option value="All Kashmir (Complete Valley)" className="bg-[#0b1329]">All Kashmir (Complete Valley)</option>
                    <option value="Custom Trekking Hubs" className="bg-[#0b1329]">Custom Trekking Hubs</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
                    <LucideIcon name="ChevronDown" size={12} />
                  </div>
                </div>
                {formErrors.destination && <p className="text-[11px] text-red-500 mt-1">{formErrors.destination}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Travel Date */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-355 uppercase tracking-wider mb-1.5" htmlFor="travelDate">
                  Estimated Travel Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <LucideIcon name="Calendar" size={14} />
                  </span>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className={`w-full pl-9 pr-3 py-2 text-xs bg-white/5 border text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      formErrors.travelDate ? 'border-red-550 bg-red-550/10' : 'border-white/10'
                    }`}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                {formErrors.travelDate && <p className="text-[11px] text-red-500 mt-1">{formErrors.travelDate}</p>}
              </div>

              {/* Travelers */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-355 uppercase tracking-wider mb-1.5" htmlFor="travelers">
                  Number of Travelers
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <LucideIcon name="Users" size={14} />
                  </span>
                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-[#0b1329] border text-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all appearance-none"
                  >
                    <option value="1" className="bg-[#0b1329]">1 Person (Solo)</option>
                    <option value="2" className="bg-[#0b1329]">2 Persons (Couple)</option>
                    <option value="3" className="bg-[#0b1329]">3 - 5 Persons (Small Family)</option>
                    <option value="6" className="bg-[#0b1329]">6 - 9 Persons (Medium Group)</option>
                    <option value="10" className="bg-[#0b1329]">10+ Persons (Large Group)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
                    <LucideIcon name="ChevronDown" size={12} />
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden / Preset Package selector if pre-filled, otherwise configurable */}
            <div>
              <label className="block text-xs font-semibold text-slate-355 uppercase tracking-wider mb-1.5" htmlFor="packageSelection">
                Selected Package Itinerary
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                  <LucideIcon name="Sliders" size={13} />
                </span>
                <select
                  id="packageSelection"
                  name="packageSelection"
                  value={formData.packageSelection}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#0b1329] border text-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all appearance-none"
                >
                  <option value="General Custom Kashmir Tour" className="bg-[#0b1329]">General Custom Kashmir Tour</option>
                  {travelConfig.packages.map(p => (
                    <option key={p.id} value={p.title} className="bg-[#0b1329]">{p.title} ({p.duration})</option>
                  ))}
                  <option value="Bespoke Private Luxury Getaway" className="bg-[#0b1329]">Bespoke Private Luxury Getaway</option>
                  <option value="Corporate Retreat Special" className="bg-[#0b1329]">Corporate Retreat Special</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
                  <LucideIcon name="ChevronDown" size={12} />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-355 uppercase tracking-wider mb-1.5" htmlFor="message">
                Message / Customizations <span className="text-slate-500 text-[10px] lowercase">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="E.g. Let us know if you need specific hotels, extra bed, child car seat, vegetarian meal options or river rafting booking."
              ></textarea>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 inline-flex items-center justify-center gap-2 font-sans font-extrabold text-xs uppercase tracking-widest text-center text-white rounded-xl bg-gradient-to-r from-emerald-600 to-[#10b981] hover:from-emerald-500 hover:to-emerald-400 text-white hover:brightness-105 active:scale-98 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
                id="modal-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Local Connection...
                  </>
                ) : (
                  <>
                    <LucideIcon name="Send" size={16} />
                    Submit Safe Travel Request
                  </>
                )}
              </button>
            </div>

            <div className="flex justify-center items-center gap-1 text-[11px] text-slate-500 text-center mt-1">
              <LucideIcon name="Shield" className="text-emerald-500" size={10} />
              <span>We never sell or spam your numbers. Handled under local agency guidelines.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
