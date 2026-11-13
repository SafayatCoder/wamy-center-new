import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, images = [], currentIndex = 0, onClose, onNavigate }) {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onNavigate(-1);
    if (e.key === 'ArrowRight') onNavigate(1);
  }, [isOpen, onClose, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !images.length) return null;

  const currentItem = images[currentIndex] || {};
  const imageSrc = typeof currentItem === 'string' ? currentItem : currentItem.src;
  const imageCaption = currentItem.caption || currentItem.title || currentItem.alt || '';
  const imageCategory = currentItem.category || '';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-dark/95 backdrop-blur-md p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-red-600/80 text-white flex items-center justify-center border border-white/20 transition-all duration-200"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            aria-label="Previous Image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-antique text-white hover:text-emerald-deep flex items-center justify-center border border-white/20 transition-all duration-200 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            aria-label="Next Image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-antique text-white hover:text-emerald-deep flex items-center justify-center border border-white/20 transition-all duration-200 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Image Frame */}
      <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center">
        <div className="relative max-h-[72vh] w-auto overflow-hidden rounded-xl shadow-2xl border border-white/20 bg-black/40">
          <img
            src={imageSrc}
            alt={imageCaption || 'WAMY Center Preview'}
            className="max-h-[72vh] w-auto object-contain mx-auto transition-transform duration-300 select-none"
          />
        </div>

        {/* Captions and Counter */}
        <div className="mt-4 text-center text-white max-w-xl">
          {imageCategory && (
            <span className="text-xs uppercase tracking-widest text-gold-light font-semibold mb-1 block">
              {imageCategory}
            </span>
          )}
          {imageCaption && (
            <h4 className="text-base sm:text-lg font-serif font-medium text-white/95">
              {imageCaption}
            </h4>
          )}
          <p className="text-xs text-white/50 mt-1">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
