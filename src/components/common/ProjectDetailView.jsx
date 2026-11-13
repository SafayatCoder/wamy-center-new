import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, ChevronRight, MapPin, Users, Building, Building2, 
  BookOpen, GraduationCap, Laptop, Heart, ShieldCheck, 
  FlaskConical, Clock, Home, Code, Wifi, Briefcase, 
  Layers, Coffee, HeartPulse, Sprout, Leaf, Apple,
  CheckCircle2, Search, Maximize2, Mail, Monitor, Palette, 
  Globe, Film, ArrowRight, X, Sparkles, BookCheck
} from 'lucide-react';
import Lightbox from './Lightbox';
import SectionHeading from './SectionHeading';

const iconMap = {
  Users, MapPin, Building, Building2, BookOpen, GraduationCap,
  Laptop, Heart, ShieldCheck, FlaskConical, Clock, Home, Code,
  Wifi, Briefcase, Layers, Coffee, HeartPulse, Sprout, Leaf,
  Apple, CheckCircle2
};

const courseIcons = {
  Monitor, Palette, Globe, Film
};

export default function ProjectDetailView({ project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);

  if (!project) return null;

  const galleryImages = project.gallery || [];

  const handleOpenGallery = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-0">
      
      {/* ==================== 1. PROJECT HERO ==================== */}
      <section className="relative bg-gradient-to-br from-emerald-dark via-emerald-deep to-emerald text-white pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 islamic-pattern-dark pointer-events-none opacity-35"></div>
        
        {/* Subtle Gold Glow in top right */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-light/15 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white/95 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-light shadow-gold-glow animate-pulse"></span>
            <span>{project.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {project.title}
          </h1>

          {/* Subtitle / Summary */}
          <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
            {project.summary}
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/70 pt-1">
            <Link to="/" className="hover:text-gold-light transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <Link to="/#gallery" className="hover:text-gold-light transition-colors">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-gold-light font-medium">{project.title}</span>
          </div>

          {/* Hero Stat Pills */}
          {project.stats && project.stats.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
              {project.stats.map((st, i) => (
                <div
                  key={i}
                  className="px-5 py-2.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center min-w-[130px]"
                >
                  <div className="font-serif text-xl sm:text-2xl font-bold text-gold-light">
                    {st.num}
                  </div>
                  <div className="text-[11px] text-white/75 font-medium mt-0.5">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Bottom curve divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-ivory" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}></div>
      </section>


      {/* ==================== 2. PROJECT DETAILS & SPECS ==================== */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Main Content Box (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-sage-border shadow-card space-y-8">
              
              {/* Overview */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold uppercase tracking-wider mb-3">
                  Overview & Purpose
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-deep mb-4">
                  Project Details
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-charcoal leading-relaxed">
                  {project.details.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Highlight Quote Box */}
              {project.quote && (
                <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald to-emerald-light text-white shadow-md relative overflow-hidden">
                  <p className="font-serif italic text-sm sm:text-base leading-relaxed text-white/95 relative z-10">
                    "{project.quote}"
                  </p>
                </div>
              )}

              {/* Key Features List */}
              {project.features && (
                <div className="pt-2">
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rotate-45 bg-gold-antique"></span>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-sage-soft/60 border border-sage-border/50 text-xs sm:text-sm text-charcoal"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Sidebar Specifications Stack (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-3xl p-6 border border-sage-border shadow-card space-y-4">
                <h3 className="font-serif text-lg font-bold text-emerald-deep pb-2 border-b border-sage-border">
                  Project Specifications
                </h3>

                <div className="space-y-3">
                  {project.specs.map((sp, idx) => {
                    const Icon = iconMap[sp.icon] || CheckCircle2;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-sage-soft/50 border border-sage-border/60 flex items-center gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-light">
                            {sp.label}
                          </span>
                          <span className="block text-sm font-bold text-charcoal mt-0.5">
                            {sp.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Institutional Assurance Card */}
              <div className="bg-gradient-to-br from-emerald-deep to-emerald text-white rounded-3xl p-6 shadow-md space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-light block">
                  Support & Engagement
                </span>
                <h4 className="font-serif text-lg font-bold">
                  Connect with this Project
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Have questions about this initiative, visiting schedules, or opportunities for support?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-antique hover:bg-gold-light text-emerald-deep font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact Administration
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==================== 2.5 OFFLINE COURSES SECTION ==================== */}
      {project.offlineCourses && project.offlineCourses.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-t border-sage-border relative overflow-hidden" id="courses">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-blue-600 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full mb-3 shadow-xs">
                OUR TRAINING PROGRAMS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Explore Our <span className="text-emerald">Offline Courses</span>
              </h2>
              <div className="flex items-center justify-center gap-2 my-4">
                <span className="h-[1px] w-8 bg-gold-antique/50"></span>
                <span className="w-2 h-2 rotate-45 bg-emerald"></span>
                <span className="h-[1px] w-14 bg-emerald/50"></span>
                <span className="w-2 h-2 rotate-45 bg-gold-antique"></span>
                <span className="h-[1px] w-8 bg-gold-antique/50"></span>
              </div>
              <p className="text-sm sm:text-base text-charcoal-light max-w-2xl mx-auto font-normal">
                Build practical skills through classroom-based IT training.
              </p>
            </div>

            {/* 4 Course Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.offlineCourses.map((course) => {
                const IconComponent = courseIcons[course.icon] || Monitor;
                return (
                  <div
                    key={course.id}
                    className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald/40 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Pastel Icon Box */}
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border shadow-xs transition-transform duration-300 group-hover:scale-105 ${course.iconBg}`}>
                        <IconComponent className="w-7 h-7" />
                      </div>

                      {/* Course Title */}
                      <h3 className="font-serif text-xl font-bold text-charcoal mb-2 group-hover:text-emerald transition-colors">
                        {course.title}
                      </h3>

                      {/* Duration */}
                      <p className="text-sm text-slate-500 font-medium mb-4 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-slate-400" />
                        Duration: {course.duration}
                      </p>

                      {/* Tag */}
                      <div className="mb-6">
                        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                          {course.mode}
                        </span>
                      </div>
                    </div>

                    {/* View Details Link */}
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-emerald group-hover:text-emerald transition-colors pt-3 border-t border-slate-100 cursor-pointer text-left w-full"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ==================== 3. SPECIAL SECTIONS (e.g. Construction Buildings) ==================== */}
      {project.buildings && (
        <section className="py-16 sm:py-24 bg-white border-t border-sage-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The Two Main Buildings"
              title="Our Main"
              highlightText="Construction Projects"
              subtitle="Detailed overview of the 10-story hospital and 10-story school/madrasa complexes currently under construction."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {project.buildings.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-ivory rounded-3xl p-6 sm:p-8 border border-sage-border shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald/10 text-emerald flex items-center justify-center">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-gold-pale text-gold-dark text-xs font-bold uppercase tracking-wider">
                        {b.stories}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-emerald-deep mb-3">
                      {b.title}
                    </h3>
                    <p className="text-sm text-charcoal-light leading-relaxed mb-6">
                      {b.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-sage-border/60">
                    {b.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs bg-white border border-sage-border px-3 py-1 rounded-full text-charcoal font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Other Development Works Underway */}
            {project.moreWorks && (
              <div className="bg-sage-soft/60 rounded-3xl p-6 sm:p-8 border border-sage-border">
                <h4 className="font-serif text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rotate-45 bg-emerald"></span>
                  Other Development Work Underway
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {project.moreWorks.map((work, wIdx) => (
                    <div
                      key={wIdx}
                      className="bg-white rounded-xl p-3 text-center border border-sage-border/70 text-xs font-semibold text-charcoal shadow-sm"
                    >
                      {work}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      )}


      {/* ==================== 4. WHY CHOOSE / FEATURES ==================== */}
      {project.whyPoints && project.whyPoints.length > 0 && (
        <section className="py-16 sm:py-24 bg-sage-soft/40 border-t border-sage-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Key Highlights"
              title="Why"
              highlightText={project.title}
              subtitle="Core institutional merits and community impact of this project."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.whyPoints.map((pt, idx) => {
                const Icon = iconMap[pt.icon] || ShieldCheck;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-sage-border shadow-card hover:shadow-card-hover transition-all duration-300 text-center flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald to-emerald-light text-white flex items-center justify-center mb-4 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}


      {/* ==================== 5. PHOTO GALLERY ==================== */}
      {galleryImages.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-t border-sage-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Photo Gallery"
              title="Project"
              highlightText="Premises"
              subtitle={`Moments and photography from ${project.title}.`}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenGallery(idx)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-sage-border bg-emerald-dark shadow-subtle hover:shadow-card-hover transition-all duration-300"
                >
                  <img
                    src={img.src}
                    alt={img.alt || `${project.title} Photo ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-emerald-deep/0 group-hover:bg-emerald-deep/60 transition-colors flex items-center justify-center text-white">
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-200">
                      <Search className="w-5 h-5 text-white" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Course Details Modal */}
      {selectedCourse && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedCourse(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-sage-border relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCourse(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-charcoal flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Course Header */}
            <div className="flex items-start gap-4 mb-6 pr-10">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${selectedCourse.iconBg}`}>
                {React.createElement(courseIcons[selectedCourse.icon] || Monitor, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 mb-1.5">
                  {selectedCourse.mode}
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  {selectedCourse.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  Duration: {selectedCourse.duration} · Location: Wamy IT Center, Shafipur, Gazipur
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-charcoal-light leading-relaxed mb-6 pb-6 border-b border-slate-100">
              {selectedCourse.description}
            </p>

            {/* What You Will Learn */}
            <div className="mb-6">
              <h4 className="font-serif text-base font-bold text-charcoal mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rotate-45 bg-emerald"></span>
                Key Topics Covered
              </h4>
              <div className="space-y-2.5">
                {selectedCourse.topics.map((tpc, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal">
                    <div className="w-5 h-5 rounded-full bg-emerald/10 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{tpc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-sage-soft/60 border border-sage-border text-xs">
              <div>
                <strong className="block text-charcoal font-semibold mb-0.5">Who Can Attend:</strong>
                <span className="text-charcoal-light">{selectedCourse.targetAudience}</span>
              </div>
              <div>
                <strong className="block text-charcoal font-semibold mb-0.5">Prerequisites:</strong>
                <span className="text-charcoal-light">{selectedCourse.prerequisites}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/contact"
                onClick={() => setSelectedCourse(null)}
                className="flex-1 py-3 px-6 rounded-full bg-emerald hover:bg-emerald-deep text-white text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-all shadow-md hover:shadow-emerald-glow flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-gold-light" />
                Inquire & Enroll for this Course
              </Link>
              <button
                onClick={() => setSelectedCourse(null)}
                className="py-3 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-charcoal text-xs sm:text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for this project */}
      <Lightbox
        isOpen={lightboxOpen}
        images={galleryImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(dir) => {
          setLightboxIndex((prev) => (prev + dir + galleryImages.length) % galleryImages.length);
        }}
      />

    </div>
  );
}
