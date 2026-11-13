import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, Compass, ArrowRight, Eye, Target, MapPin, 
  Phone, Mail, Facebook, Youtube, Send, CheckCircle2, 
  ExternalLink, Calendar, Clock, Sparkles, ChevronRight,
  Maximize2
} from 'lucide-react';
import HeroSlider from '../components/common/HeroSlider';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/common/ProjectCard';
import Timeline from '../components/common/Timeline';
import Lightbox from '../components/common/Lightbox';
import { 
  INSTITUTION, 
  VISION_MISSION, 
  MILESTONES, 
  HERO_SLIDES, 
  MASTERPLAN_IMAGES, 
  PROJECTS_LIST, 
  DAILY_ACTIVITIES 
} from '../data/organizationData';

export default function HomePage() {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Open Masterplan Lightbox
  const handleOpenMasterplan = (idx) => {
    setLightboxImages(MASTERPLAN_IMAGES);
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  // Open Project Gallery Lightbox
  const handleOpenProjectGallery = (project, imgIdx) => {
    const images = project.gallery || project.coverImages.map(img => ({ src: img, caption: project.title }));
    setLightboxImages(images);
    setLightboxIndex(imgIdx);
    setLightboxOpen(true);
  };

  // Handle contact form submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="space-y-0">
      
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-br from-emerald-dark via-emerald-deep to-emerald text-white pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 islamic-pattern-dark pointer-events-none opacity-40"></div>
        
        {/* Decorative soft glow */}
        <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-gold-light/10 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white/90 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-gold-light shadow-gold-glow animate-pulse"></span>
                <span>{INSTITUTION.registration}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                WAMY Center <br className="hidden sm:inline" />
                <span className="text-gold-light">Bangladesh</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                {INSTITUTION.leadText}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#about"
                  className="px-6 py-3 rounded-full bg-gold-antique hover:bg-gold-light text-emerald-deep font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-gold-glow flex items-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  Learn About Us
                </a>

                <a
                  href="#gallery"
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/30 backdrop-blur-sm transition-all duration-200 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-light" />
                  View Gallery
                </a>
              </div>

              {/* Impact Statistics */}
              <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0 border-t border-white/15">
                <div className="text-center lg:text-left">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-light">
                    7 Acres
                  </div>
                  <div className="text-xs text-white/70 font-medium mt-0.5">
                    Own Land
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-light">
                    1981
                  </div>
                  <div className="text-xs text-white/70 font-medium mt-0.5">
                    Founded
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-light">
                    8+
                  </div>
                  <div className="text-xs text-white/70 font-medium mt-0.5">
                    Active Projects
                  </div>
                </div>
              </div>
            </div>

            {/* Right Slider Column */}
            <div className="lg:col-span-5">
              <HeroSlider slides={HERO_SLIDES} />
            </div>

          </div>
        </div>

        {/* Bottom curve divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-ivory" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}></div>
      </section>


      {/* ==================== 2. VISION, MISSION & MILESTONES ==================== */}
      <section id="about" className="py-20 sm:py-28 bg-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Vision & Mission */}
            <div className="lg:col-span-6 space-y-8">
              <SectionHeading
                eyebrow="Identity & Purpose"
                title="Vision and"
                highlightText="Mission"
                subtitle="Guiding every initiative in the light of ethics, education, and humanitarian service."
                centered={false}
              />

              {/* Vision Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-sage-border border-l-4 border-l-emerald shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-emerald-deep">
                    {VISION_MISSION.vision.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-charcoal leading-relaxed font-normal">
                  {VISION_MISSION.vision.statement}
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-sage-border border-l-4 border-l-gold-antique shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-pale text-gold-dark flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-emerald-deep">
                    {VISION_MISSION.mission.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-charcoal leading-relaxed font-normal">
                  {VISION_MISSION.mission.statement}
                </p>
              </div>

              {/* Institutional Quote Highlight */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald to-emerald-light text-white shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <p className="font-serif italic text-sm sm:text-base leading-relaxed text-white/95">
                    "{INSTITUTION.motto}"
                  </p>
                  <span className="block mt-3 text-xs font-bold text-gold-light uppercase tracking-wider">
                    — WAMY Center Bangladesh
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Key Milestones Timeline */}
            <div className="lg:col-span-6 bg-sage-soft/60 rounded-3xl p-6 sm:p-8 border border-sage-border">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-emerald bg-emerald/10 px-3 py-1 rounded-full">
                  Institutional Journey
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal mt-2">
                  Key Milestones
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-light mt-1">
                  Chronological foundation and developmental progress of the complex.
                </p>
              </div>

              <Timeline milestones={MILESTONES} />
            </div>

          </div>
        </div>
      </section>


      {/* ==================== 3. MASTER PLAN SHOWCASE ==================== */}
      <section id="masterplan" className="py-20 sm:py-28 bg-emerald-deep text-white relative overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 islamic-pattern-dark pointer-events-none opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Future Plans"
            title="Master"
            highlightText="Plan"
            subtitle="WAMY Center Bangladesh — Complete Complex Design View"
            dark={true}
          />

          {/* Master Plan Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {MASTERPLAN_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenMasterplan(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/15 bg-emerald-dark shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                
                {/* Overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/90 via-emerald-dark/20 to-transparent flex flex-col justify-end p-4 transition-all duration-300">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gold-light font-semibold block">
                        {img.category}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-white/95 truncate">
                        {img.caption}
                      </h4>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 group-hover:bg-gold-antique group-hover:text-emerald-deep transition-all">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-white/60">
            Click on any architectural render to inspect high-resolution details in full-screen view.
          </div>
        </div>
      </section>


      {/* ==================== 4. PROJECTS GALLERY ==================== */}
      <section id="gallery" className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Our"
            highlightText="Projects"
            subtitle="Every image is a step toward a better future. Explore our active institutions and initiatives."
          />

          {/* 8 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_LIST.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenGallery={handleOpenProjectGallery}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ==================== 5. DAILY ACTIVITIES ==================== */}
      <section id="activities" className="py-20 sm:py-28 bg-white border-t border-sage-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Activities & Visits"
            title="Our Daily"
            highlightText="Activities"
            subtitle="Full program records and coverage from our campus visits and community events."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {DAILY_ACTIVITIES.map((act) => (
              <a
                key={act.id}
                href={act.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-ivory rounded-2xl border border-sage-border hover:border-gold-antique/50 overflow-hidden shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden bg-emerald-dark">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-deep/80 backdrop-blur-sm text-gold-light text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {act.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-base text-charcoal group-hover:text-emerald transition-colors line-clamp-2 mb-2">
                      {act.title}
                    </h3>
                    <p className="text-xs text-charcoal-light leading-relaxed line-clamp-3 mb-4">
                      {act.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-sage-border/60 flex items-center justify-between text-xs text-charcoal-light">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-gold-antique" />
                      {act.date}
                    </span>
                    <span className="flex items-center gap-1 text-emerald font-semibold group-hover:translate-x-0.5 transition-transform">
                      Watch Video
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* ==================== 6. CONTACT SECTION ==================== */}
      <section id="contact" className="py-20 sm:py-28 bg-sage-soft/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Talk to"
            highlightText="Us"
            subtitle="Reach out to our head office directly or send an inquiry to our administration team."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Info Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sage-border shadow-card space-y-6">
              <h3 className="font-serif text-xl font-bold text-emerald-deep">
                Contact Information
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-charcoal">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-charcoal font-semibold">Office Address</strong>
                    <span className="text-charcoal-light">{INSTITUTION.address}</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-charcoal font-semibold">Telephone / Mobile</strong>
                    <a href={`tel:${INSTITUTION.phone}`} className="text-emerald hover:underline">
                      {INSTITUTION.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-charcoal font-semibold">Email Inquiry</strong>
                    <a href={`mailto:${INSTITUTION.email}`} className="text-emerald hover:underline">
                      {INSTITUTION.email}
                    </a>
                  </div>
                </li>
              </ul>

              {/* Social Channels */}
              <div className="pt-4 border-t border-sage-border/60">
                <span className="block text-xs font-bold uppercase tracking-wider text-charcoal-light mb-3">
                  Official Channels
                </span>
                <div className="flex gap-3">
                  <a
                    href={INSTITUTION.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-sage-soft text-charcoal hover:bg-emerald hover:text-white text-xs font-medium transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href={INSTITUTION.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-sage-soft text-charcoal hover:bg-emerald hover:text-white text-xs font-medium transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Form Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-sage-border shadow-card">
              <h3 className="font-serif text-xl font-bold text-emerald-deep mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-light mb-6">
                Fill out the form below and our team will get back to you shortly.
              </p>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Your Name
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
                      Email Address
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
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-sage-border focus:border-emerald focus:ring-2 focus:ring-emerald/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-emerald hover:bg-emerald-deep text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-emerald-glow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-gold-light" />
                  Send Message
                </button>

                {formSubmitted && (
                  <div className="p-3 rounded-xl bg-emerald/10 border border-emerald/20 text-emerald text-xs sm:text-sm flex items-center justify-center gap-2 font-medium animate-fade-in">
                    <CheckCircle2 className="w-4 h-4" />
                    Thank you! Your message has been received.
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Reusable Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(dir) => {
          setLightboxIndex((prev) => (prev + dir + lightboxImages.length) % lightboxImages.length);
        }}
      />

    </div>
  );
}
