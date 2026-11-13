import React from 'react';

export default function SectionHeading({ 
  eyebrow, 
  title, 
  highlightText, 
  subtitle, 
  centered = true, 
  dark = false,
  className = "" 
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <span className={`inline-block text-xs uppercase tracking-[0.18em] font-semibold px-3 py-1 rounded-full mb-3 ${
          dark 
            ? 'text-gold-light bg-white/10 border border-white/20' 
            : 'text-emerald bg-emerald/10 border border-emerald/20'
        }`}>
          {eyebrow}
        </span>
      )}
      
      <h2 className={`font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight ${
        dark ? 'text-white' : 'text-charcoal'
      }`}>
        {title}{' '}
        {highlightText && (
          <span className={dark ? 'text-gold-light' : 'text-emerald'}>
            {highlightText}
          </span>
        )}
      </h2>

      {/* Gold & Emerald architectural accent line */}
      <div className={`flex items-center gap-2 my-4 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className={`h-[1px] w-8 ${dark ? 'bg-gold-light/40' : 'bg-gold-antique/50'}`}></span>
        <span className={`w-2 h-2 rotate-45 ${dark ? 'bg-gold-light' : 'bg-emerald'}`}></span>
        <span className={`h-[1px] w-14 ${dark ? 'bg-gold-light/60' : 'bg-emerald/50'}`}></span>
        <span className={`w-2 h-2 rotate-45 ${dark ? 'bg-emerald-light' : 'bg-gold-antique'}`}></span>
        <span className={`h-[1px] w-8 ${dark ? 'bg-gold-light/40' : 'bg-gold-antique/50'}`}></span>
      </div>

      {subtitle && (
        <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
          dark ? 'text-white/80' : 'text-charcoal-light'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
