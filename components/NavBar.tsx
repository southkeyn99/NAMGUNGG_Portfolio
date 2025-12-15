import React, { useState, useEffect } from 'react';
import { Menu, X, Clapperboard } from 'lucide-react';
import { NAV_LINKS, DIRECTOR_NAME } from '../constants';

interface NavBarProps {
  onNavigate: (sectionId: string) => void;
  currentSection: string;
}

const NavBar: React.FC<NavBarProps> = ({ onNavigate, currentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cinema-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => handleNavClick('home')}
        >
          <Clapperboard className="w-6 h-6 text-cinema-accent transition-transform group-hover:rotate-12" />
          <span className="text-xl font-serif font-bold tracking-widest text-white uppercase">
            {DIRECTOR_NAME.split(' ')[0]}<span className="text-cinema-accent">.</span>{DIRECTOR_NAME.split(' ')[1]}
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                currentSection === link.id || (link.id === 'ai' && currentSection === 'ai_chat')
                  ? 'text-cinema-accent font-semibold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cinema-900 border-t border-stone-800">
          <div className="flex flex-col p-6 gap-4">
             {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-lg font-serif text-stone-300 hover:text-cinema-accent"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;