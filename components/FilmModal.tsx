import React, { useEffect } from 'react';
import { X, Clock, Calendar, Award as AwardIcon } from 'lucide-react';
import { Film } from '../types';

interface FilmModalProps {
  film: Film;
  onClose: () => void;
}

const FilmModal: React.FC<FilmModalProps> = ({ film, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative w-full max-w-4xl bg-cinema-800 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto flex flex-col animate-[fadeIn_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-cinema-accent hover:text-black transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full shrink-0">
          <img 
            src={film.backdropUrl} 
            alt={film.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cinema-800 to-transparent" />
          
          <div className="absolute bottom-6 left-6 md:left-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-2">{film.title}</h2>
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-300">
               <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {film.year}</span>
               <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {film.duration}</span>
               <span className="text-cinema-accent font-bold uppercase border border-cinema-accent/30 px-2 py-0.5 rounded">{film.genre}</span>
            </div>
          </div>
        </div>

        {/* Details Body */}
        <div className="p-6 md:p-10 space-y-8">
          
          {/* Roles & Logline */}
          <div className="border-l-2 border-cinema-accent pl-4">
            <p className="text-xl md:text-2xl text-stone-200 font-serif italic leading-relaxed">"{film.logline}"</p>
            <p className="text-stone-500 mt-2 text-sm uppercase tracking-widest">
              Role: {film.role.join(" & ")}
            </p>
          </div>

          {/* Synopsis */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-3">Synopsis</h3>
            <p className="text-stone-400 leading-7">{film.synopsis}</p>
          </div>

          {/* Awards */}
          {film.awards && film.awards.length > 0 && (
            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-3">Recognition</h3>
              <div className="flex flex-wrap gap-3">
                {film.awards.map((award, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-stone-800 px-4 py-2 rounded border border-stone-700">
                    <AwardIcon className="w-5 h-5 text-cinema-accent" />
                    <span className="text-stone-300 text-sm">{award.name} <span className="text-stone-500 text-xs">({award.year})</span></span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default FilmModal;