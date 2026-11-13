import React from 'react';
import { Calendar, Award, Compass, Flag } from 'lucide-react';

export default function Timeline({ milestones = [] }) {
  const iconList = [Flag, Award, Compass, Calendar];

  return (
    <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-emerald before:via-gold-antique before:to-emerald">
      {milestones.map((item, idx) => {
        const IconComponent = iconList[idx % iconList.length];
        return (
          <div key={idx} className="relative group">
            {/* Timeline Marker */}
            <div className="absolute -left-6 sm:-left-8 top-1.5 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-ivory border-2 border-emerald group-hover:border-gold-antique flex items-center justify-center transition-colors shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald group-hover:bg-gold-antique transition-colors"></span>
            </div>

            {/* Content card */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-sage-border hover:border-gold-antique/40 shadow-sm hover:shadow-card transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-gold-antique bg-gold-pale/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  <IconComponent className="w-3 h-3" />
                  {item.year}
                </span>
                {item.title && (
                  <h4 className="font-serif font-semibold text-sm sm:text-base text-charcoal">
                    {item.title}
                  </h4>
                )}
              </div>
              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
