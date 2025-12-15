import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import FilmModal from './components/FilmModal';
import About from './components/About';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import { Film } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const handleNavigate = (id: string) => {
    setCurrentSection(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'ai') {
      // Special handling for AI chat if we treat it as a distinct section
      const element = document.getElementById('ai');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleScrollDown = () => {
    handleNavigate('work');
  };

  return (
    <div className="min-h-screen bg-cinema-900 text-stone-200 font-sans">
      <NavBar onNavigate={handleNavigate} currentSection={currentSection} />
      
      <main>
        <div id="home">
          <Hero onScrollDown={handleScrollDown} />
        </div>
        
        <Portfolio onFilmClick={setSelectedFilm} />
        
        <About />
        
        <AIChat />
        
        <Contact />
      </main>

      {selectedFilm && (
        <FilmModal 
          film={selectedFilm} 
          onClose={() => setSelectedFilm(null)} 
        />
      )}
    </div>
  );
};

export default App;