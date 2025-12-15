import React from 'react';
import { ArrowDown } from 'lucide-react';
import { DIRECTOR_NAME } from '../constants';

interface HeroProps {
  onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1042/1920/1080?grayscale" 
          alt="Atmospheric Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-900/60 via-cinema-900/30 to-cinema-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 fade-in">
        <h2 className="text-cinema-accent text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-bold">
          Director &middot; Writer &middot; Visionary
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 tracking-tight">
          {DIRECTOR_NAME.toUpperCase()}
        </h1>
        <p className="max-w-xl mx-auto text-stone-300 text-lg md:text-xl font-light italic opacity-90">
          "Cinema is a mirror reflecting what we dare not say."
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button 
          onClick={onScrollDown}
          className="text-stone-400 hover:text-white transition-colors"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;