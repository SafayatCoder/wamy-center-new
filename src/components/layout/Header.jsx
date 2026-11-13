import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Building2, BookOpen, School, Home, 
  Laptop, Library, Hammer, Sprout, Phone, Mail, MapPin 
} from 'lucide-react';
import { INSTITUTION, PROJECTS_LIST } from '../../data/organizationData';

const projectIcons = {
  mosque: Building2,
  madrasa: BookOpen,
  school: School,
  homes: Home,
  'it-center': Laptop,
  library: Library,
  construction: Hammer,
  agro: Sprout
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
  }, [location.pathname]);

  const isProjectsActive = location.pathname.startsWith('/projects');

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <div className="bg-emerald-dark text-white/80 text-xs py-1.5 px-4 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold-light" />
              {INSTITUTION.address}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold-light" />
              {INSTITUTION.phone}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold-light font-medium tracking-wide">
              {INSTITUTION.registration}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-emerald/20' 
            : 'bg-white py-3.5 border-b border-sage-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-emerald/5 p-1 flex items-center justify-center border border-emerald/10 group-hover:border-gold-antique transition-colors">
              <img
                src="/assets/logo.png"
                alt="WAMY Center Bangladesh Logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/Logo.png";
                }}
              />
            </div>
            <div>
              <span className="block font-serif font-bold text-base sm:text-lg text-emerald-deep leading-tight group-hover:text-emerald transition-colors">
                WAMY Center Bangladesh
              </span>
              <span className="block text-[11px] font-medium text-gold-antique tracking-wider uppercase">
                {INSTITUTION.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-emerald bg-emerald/10 font-semibold' 
                  : 'text-charcoal hover:text-emerald hover:bg-sage-soft'
              }`}
            >
              Home
            </Link>

            <a
              href="/#about"
              className="px-3 py-2 rounded-lg text-sm font-medium text-charcoal hover:text-emerald hover:bg-sage-soft transition-colors"
            >
              About Us
            </a>

            <a
              href="/#masterplan"
              className="px-3 py-2 rounded-lg text-sm font-medium text-charcoal hover:text-emerald hover:bg-sage-soft transition-colors"
            >
              Master Plan
            </a>

            {/* Projects Dropdown / Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              onMouseLeave={() => setProjectsDropdownOpen(false)}
            >
              <button
                onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                  isProjectsActive 
                    ? 'text-emerald bg-emerald/10 font-semibold' 
                    : 'text-charcoal hover:text-emerald hover:bg-sage-soft'
                }`}
              >
                Projects
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  projectsDropdownOpen ? 'rotate-180 text-emerald' : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              {projectsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-sage-border p-4 grid grid-cols-2 gap-2 animate-fade-in">
                    {PROJECTS_LIST.map((proj) => {
                      const Icon = projectIcons[proj.id] || Building2;
                      const isActive = location.pathname === proj.path;
                      return (
                        <Link
                          key={proj.id}
                          to={proj.path}
                          className={`p-3 rounded-xl flex items-start gap-3 transition-colors ${
                            isActive 
                              ? 'bg-emerald/10 text-emerald' 
                              : 'hover:bg-sage-soft text-charcoal'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald/10 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-xs font-bold leading-tight">
                              {proj.title}
                            </span>
                            <span className="block text-[11px] text-charcoal-light truncate max-w-[170px] mt-0.5">
                              {proj.badge}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/#activities"
              className="px-3 py-2 rounded-lg text-sm font-medium text-charcoal hover:text-emerald hover:bg-sage-soft transition-colors"
            >
              Daily Activities
            </a>

            <a
              href="/#gallery"
              className="px-3 py-2 rounded-lg text-sm font-medium text-charcoal hover:text-emerald hover:bg-sage-soft transition-colors"
            >
              Gallery
            </a>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-emerald bg-emerald/10 font-semibold' 
                  : 'text-charcoal hover:text-emerald hover:bg-sage-soft'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-emerald text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-deep shadow-md hover:shadow-emerald-glow transition-all duration-200 flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-gold-light" />
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl text-emerald-deep hover:bg-sage-soft transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 lg:hidden bg-black/40 backdrop-blur-sm animate-fade-in flex flex-col justify-start">
          <div className="bg-white border-b border-sage-border max-h-[85vh] overflow-y-auto p-5 shadow-2xl">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl font-medium text-charcoal hover:bg-sage-soft"
              >
                Home
              </Link>
              <a
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl font-medium text-charcoal hover:bg-sage-soft"
              >
                About Us
              </a>
              <a
                href="/#masterplan"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl font-medium text-charcoal hover:bg-sage-soft"
              >
                Master Plan
              </a>

              {/* Mobile Projects Submenu */}
              <div className="py-2 border-y border-sage-border my-1">
                <span className="block px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald">
                  Our Projects & Institutions
                </span>
                <div className="grid grid-cols-1 gap-1 mt-1 pl-2">
                  {PROJECTS_LIST.map((proj) => {
                    const Icon = projectIcons[proj.id] || Building2;
                    return (
                      <Link
                        key={proj.id}
                        to={proj.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-3 py-2 rounded-lg text-sm text-charcoal hover:text-emerald hover:bg-sage-soft flex items-center gap-2.5"
                      >
                        <Icon className="w-4 h-4 text-emerald" />
                        {proj.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <a
                href="/#activities"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl font-medium text-charcoal hover:bg-sage-soft"
              >
                Daily Activities
              </a>
              <a
                href="/#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl font-medium text-charcoal hover:bg-sage-soft"
              >
                Gallery
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl font-medium text-emerald bg-emerald/10"
              >
                Contact Us
              </Link>
            </nav>

            <div className="mt-6 pt-4 border-t border-sage-border text-xs text-charcoal-light space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald" />
                {INSTITUTION.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald" />
                {INSTITUTION.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
