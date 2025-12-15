import React from 'react';
import { PlayCircle, Trophy } from 'lucide-react';
import { FILMS } from '../constants';
import { Film } from '../types';

interface PortfolioProps {
  onFilmClick: (film: Film) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onFilmClick }) => {
  return (
    <section id="work" className="py-24 bg-cinema-900 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Selected Filmography</h2>
          <div className="w-16 h-1 bg-cinema-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {FILMS.map((film) => (
            <div 
              key={film.id}
              className="group relative cursor-pointer overflow-hidden rounded-sm shadow-2xl bg-cinema-800"
              onClick={() => onFilmClick(film)}
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={film.backdropUrl} 
                  alt={film.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
              </div>

              {/* Hover Overlay (Desktop) / Info (Mobile) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                 <h3 className="text-3xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                   {film.title}
                 </h3>
                 <p className="text-cinema-accent uppercase tracking-widest text-xs font-bold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                   {film.genre} &bull; {film.year}
                 </p>
                 <button className="flex items-center gap-2 text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                   <PlayCircle className="w-4 h-4" />
                   <span>View Project</span>
                 </button>
              </div>

              {/* Badges */}
              {film.awards && film.awards.length > 0 && (
                <div className="absolute top-4 right-4 bg-cinema-accent text-cinema-900 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  <span>Award Winner</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;