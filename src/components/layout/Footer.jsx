import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Youtube, ChevronRight, Heart } from 'lucide-react';
import { INSTITUTION, PROJECTS_LIST } from '../../data/organizationData';

export default function Footer() {
  return (
    <footer className="bg-emerald-deep text-white/80 border-t-4 border-gold-antique relative overflow-hidden">
      {/* Background subtle Islamic pattern */}
      <div className="absolute inset-0 islamic-pattern-dark pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Col 1: Identity & Motto */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/20">
                <img
                  src="/assets/logo.png"
                  alt="WAMY Center Logo"
                  className="h-full w-full object-contain brightness-0 invert opacity-95"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/Logo.png";
                  }}
                />
              </div>
              <div>
                <span className="block font-serif font-bold text-lg text-white leading-tight">
                  WAMY Center
                </span>
                <span className="block text-xs text-gold-light uppercase tracking-wider">
                  Bangladesh
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed pt-1">
              {INSTITUTION.motto}
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-semibold text-gold-light/90 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {INSTITUTION.registration}
              </span>
            </div>
          </div>

          {/* Col 2: Projects Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-gold-light mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-light"></span>
              Our Projects
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {PROJECTS_LIST.slice(0, 6).map((proj) => (
                <li key={proj.id}>
                  <Link
                    to={proj.path}
                    className="text-white/70 hover:text-gold-light transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold-antique/70 shrink-0" />
                    {proj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-gold-light mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-light"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="/#about" className="text-white/70 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-antique/70 shrink-0" />
                  Our History & Vision
                </a>
              </li>
              <li>
                <a href="/#masterplan" className="text-white/70 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-antique/70 shrink-0" />
                  Master Plan Architectural Views
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-white/70 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-antique/70 shrink-0" />
                  Projects Photo Gallery
                </a>
              </li>
              <li>
                <a href="/#activities" className="text-white/70 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-antique/70 shrink-0" />
                  Daily Activities & News
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-antique/70 shrink-0" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Office & Social */}
          <div>
            <h4 className="font-serif text-base font-bold text-gold-light mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-light"></span>
              Office & Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-antique shrink-0 mt-0.5" />
                <span>{INSTITUTION.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-antique shrink-0" />
                <a href={`tel:${INSTITUTION.phone}`} className="hover:text-gold-light">
                  {INSTITUTION.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-antique shrink-0" />
                <a href={`mailto:${INSTITUTION.email}`} className="hover:text-gold-light">
                  {INSTITUTION.email}
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href={INSTITUTION.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit WAMY Center on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-antique text-white hover:text-emerald-deep flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={INSTITUTION.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit WAMY Center on YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-antique text-white hover:text-emerald-deep flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            &copy; 2026 {INSTITUTION.name}. Registered Voluntary Organization. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1 text-white/40">
            Faith · Humanity · Education · Hope
          </p>
        </div>
      </div>
    </footer>
  );
}
