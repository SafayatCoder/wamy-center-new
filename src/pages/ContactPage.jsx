import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, Facebook, Youtube, 
  Send, CheckCircle2, ChevronRight, MessageSquare 
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { INSTITUTION } from '../data/organizationData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="space-y-0">
      
      {/* ==================== 1. PAGE HEADER ==================== */}
      <section className="relative bg-gradient-to-br from-emerald-dark via-emerald-deep to-emerald text-white pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 islamic-pattern-dark pointer-events-none opacity-35"></div>
        
        {/* Soft radial glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-light/15 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white/95 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-light shadow-gold-glow animate-pulse"></span>
            <span>We usually reply within 1–2 business days</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Get in Touch
          </h1>

          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed font-light">
            Questions about our projects, visits, or how to support our work — we would love to hear from you.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-white/70 pt-2">
            <Link to="/" className="hover:text-gold-light transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-gold-light font-medium">Contact</span>
          </div>

        </div>

        {/* Bottom curve divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-ivory" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}></div>
      </section>


      {/* ==================== 2. MAIN CONTACT SECTION ==================== */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Contact Us"
            title="Talk to"
            highlightText="Us"
            subtitle="Reach our head office directly, or send an inquiry to our administration below."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details Card (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sage-border shadow-card space-y-6">
              <h3 className="font-serif text-xl font-bold text-emerald-deep">
                Contact Information
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-charcoal">
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-charcoal font-semibold">Office Address</strong>
                    <span className="text-charcoal-light leading-relaxed">
                      {INSTITUTION.address}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-charcoal font-semibold">Mobile / Phone</strong>
                    <a href={`tel:${INSTITUTION.phone}`} className="text-emerald hover:underline font-medium">
                      {INSTITUTION.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-charcoal font-semibold">Email</strong>
                    <a href={`mailto:${INSTITUTION.email}`} className="text-emerald hover:underline font-medium">
                      {INSTITUTION.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-charcoal font-semibold">Facebook / YouTube</strong>
                    <span className="text-charcoal-light">
                      {INSTITUTION.facebookDisplay}
                    </span>
                  </div>
                </li>
              </ul>

              {/* Office Hours */}
              <div className="pt-4 border-t border-sage-border/60">
                <h4 className="font-serif text-sm font-bold text-charcoal mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-antique" />
                  Office Hours
                </h4>
                <div className="space-y-1.5 text-xs">
                  {INSTITUTION.officeHours.map((hr, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b border-sage-border/30 last:border-b-0">
                      <span className="text-charcoal-light">{hr.days}</span>
                      <span className="font-semibold text-charcoal">{hr.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-4 border-t border-sage-border/60">
                <span className="block text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-3">
                  Connect on Social Media
                </span>
                <div className="flex gap-3">
                  <a
                    href={INSTITUTION.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-xl bg-sage-soft hover:bg-emerald text-charcoal hover:text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={INSTITUTION.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-xl bg-sage-soft hover:bg-emerald text-charcoal hover:text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${INSTITUTION.email}`}
                    aria-label="Email"
                    className="w-10 h-10 rounded-xl bg-sage-soft hover:bg-emerald text-charcoal hover:text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${INSTITUTION.phone}`}
                    aria-label="Phone"
                    className="w-10 h-10 rounded-xl bg-sage-soft hover:bg-emerald text-charcoal hover:text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form Card (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-sage-border shadow-card">
              <h3 className="font-serif text-xl font-bold text-emerald-deep mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-light mb-6">
                Please provide your inquiry details below. Our administrative team will review your message promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-sage-border focus:border-emerald focus:ring-2 focus:ring-emerald/10 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+880 1XXXXXXXXX"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-sage-border focus:border-emerald focus:ring-2 focus:ring-emerald/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-sage-border focus:border-emerald focus:ring-2 focus:ring-emerald/10 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Subject / Topic <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-sage-border focus:border-emerald focus:ring-2 focus:ring-emerald/10 outline-none transition-all bg-white"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Donations & Support">Donations & Support</option>
                      <option value="Visiting the Center">Visiting the Center</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Media & Press">Media & Press</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-sage-border focus:border-emerald focus:ring-2 focus:ring-emerald/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-emerald hover:bg-emerald-deep text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-emerald-glow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-gold-light" />
                  Send Message
                </button>

                {submitted && (
                  <div className="p-3.5 rounded-xl bg-emerald/10 border border-emerald/20 text-emerald text-xs sm:text-sm flex items-center justify-center gap-2 font-medium animate-fade-in">
                    <CheckCircle2 className="w-4 h-4" />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>
      </section>


      {/* ==================== 3. INTERACTIVE MAP SECTION ==================== */}
      <section className="py-12 pb-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl overflow-hidden border border-sage-border shadow-card bg-emerald-dark">
            
            {/* Map Location Badge */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-sage-border/80 max-w-xs hidden sm:flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm font-serif font-bold text-emerald-deep">
                  WAMY Center
                </strong>
                <span className="block text-xs text-charcoal-light">
                  Shafipur, Gazipur, Bangladesh
                </span>
              </div>
            </div>

            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps?q=Shafipur%2C%20Gazipur%2C%20Bangladesh&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WAMY Center location map"
              className="w-full h-[400px] sm:h-[450px] filter saturate-[0.85]"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}
