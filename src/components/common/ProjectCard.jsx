import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, Building2, BookOpen, School, Home, Laptop, Library, Hammer, Sprout } from 'lucide-react';

const iconMap = {
  mosque: Building2,
  madrasa: BookOpen,
  school: School,
  homes: Home,
  'it-center': Laptop,
  library: Library,
  construction: Hammer,
  agro: Sprout
};

export default function ProjectCard({ project, onOpenGallery }) {
  const IconComponent = iconMap[project.id] || Building2;

  return (
    <div className="group bg-white rounded-2xl border border-sage-border hover:border-gold-antique/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
      {/* Header bar */}
      <div className="p-4 sm:p-5 border-b border-sage-border/60 bg-gradient-to-r from-sage-soft/70 to-ivory flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald to-emerald-light text-white flex items-center justify-center shadow-md">
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald">
              {project.category}
            </span>
            <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-emerald transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <Link
          to={project.path}
          aria-label={`View ${project.title} details`}
          className="w-8 h-8 rounded-full bg-white border border-sage-border flex items-center justify-center text-charcoal hover:bg-emerald hover:text-white transition-colors"
        >
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Dual Photo Grid Preview */}
      <div className="grid grid-cols-2 gap-1 bg-sage-border/30 p-1">
        {project.coverImages.slice(0, 2).map((imgSrc, imgIdx) => (
          <div
            key={imgIdx}
            onClick={() => onOpenGallery && onOpenGallery(project, imgIdx)}
            className="relative aspect-[4/3] overflow-hidden cursor-pointer group/img bg-emerald-dark"
          >
            <img
              src={imgSrc}
              alt={`${project.title} preview ${imgIdx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-108"
            />
            <div className="absolute inset-0 bg-emerald-deep/0 group-hover/img:bg-emerald-deep/40 transition-colors flex items-center justify-center text-white">
              <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/img:opacity-100 transform scale-75 group-hover/img:scale-100 transition-all duration-200">
                <Search className="w-4 h-4 text-white" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Body text & Stats */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <p className="text-sm text-charcoal-light line-clamp-2 leading-relaxed mb-4">
          {project.summary}
        </p>

        {/* Stats Pills */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-sage-border/50 mb-4">
            {project.stats.slice(0, 2).map((st, i) => (
              <div key={i} className="bg-sage-soft/60 rounded-lg p-2 text-center">
                <div className="font-serif font-bold text-sm text-emerald">
                  {st.num}
                </div>
                <div className="text-[11px] text-charcoal-light font-medium truncate">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pt-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-gold-antique uppercase tracking-wider">
            {project.badge}
          </span>
          <Link
            to={project.path}
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald hover:text-emerald-deep transition-colors"
          >
            Explore Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
