
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-12">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`font-inter font-light text-sm transition-colors duration-300 hover:text-coral-500 ${
                isScrolled ? 'text-soft-gray' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-inter font-light text-sm transition-colors duration-300 hover:text-coral-500 ${
                isScrolled ? 'text-soft-gray' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`font-inter font-light text-sm transition-colors duration-300 hover:text-coral-500 ${
                isScrolled ? 'text-soft-gray' : 'text-white'
              }`}
            >
              Plans
            </button>
            <button 
              onClick={() => scrollToSection('registration-form')}
              className={`font-inter font-light text-sm transition-colors duration-300 hover:text-coral-500 ${
                isScrolled ? 'text-soft-gray' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
