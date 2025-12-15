import React from 'react';
import { Quote } from 'lucide-react';
import { DIRECTOR_BIO, DIRECTOR_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cinema-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cinema-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">About the Director</h2>
          <div className="prose prose-invert prose-lg text-stone-400">
            <p className="leading-relaxed whitespace-pre-line">{DIRECTOR_BIO}</p>
          </div>
          
          <div className="mt-8 flex items-start gap-4 p-6 bg-cinema-900/50 rounded-r-lg border-l-4 border-cinema-accent">
            <Quote className="w-8 h-8 text-cinema-accent shrink-0" />
            <p className="italic text-stone-300">
              "Every frame is a negotiation between light and darkness. I prefer the darkness; it's where the truth hides."
            </p>
          </div>
          <p className="mt-4 text-right text-cinema-accent font-serif">- {DIRECTOR_NAME}</p>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4]">
             <div className="absolute inset-0 border-2 border-cinema-accent/30 translate-x-4 translate-y-4 rounded-sm"></div>
             <img 
               src="https://picsum.photos/id/338/600/800?grayscale" 
               alt={DIRECTOR_NAME} 
               className="relative z-10 w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
             />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;