import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import logoOMM from '../assets/Logotipo_OMM_v_Branco.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, event) => {
    if (event) {
      event.preventDefault();
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoOMM} 
              alt="Onda Mar e Mato" 
              className="h-12 w-auto hover-scale cursor-pointer"
              onClick={(e) => scrollToSection('inicio', e)}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={(e) => scrollToSection('inicio', e)}
              className="text-white hover:text-cyan-300 transition-colors font-medium cursor-pointer"
            >
              Início
            </button>
            <button 
              onClick={(e) => scrollToSection('cascudo', e)}
              className="text-white hover:text-cyan-300 transition-colors font-medium cursor-pointer"
            >
              Cascudo
            </button>
            <button 
              onClick={(e) => scrollToSection('energia-salgada', e)}
              className="text-white hover:text-cyan-300 transition-colors font-medium cursor-pointer"
            >
              Energia Salgada
            </button>
            <button 
              onClick={(e) => scrollToSection('sobre', e)}
              className="text-white hover:text-cyan-300 transition-colors font-medium cursor-pointer"
            >
              Sobre
            </button>
            <a 
              href="https://www.instagram.com/ondamaremato/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-300 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={(e) => scrollToSection('inicio', e)}
                className="text-white hover:text-cyan-300 transition-colors font-medium text-left cursor-pointer"
              >
                Início
              </button>
              <button 
                onClick={(e) => scrollToSection('cascudo', e)}
                className="text-white hover:text-cyan-300 transition-colors font-medium text-left cursor-pointer"
              >
                Cascudo
              </button>
              <button 
                onClick={(e) => scrollToSection('energia-salgada', e)}
                className="text-white hover:text-cyan-300 transition-colors font-medium text-left cursor-pointer"
              >
                Energia Salgada
              </button>
              <button 
                onClick={(e) => scrollToSection('sobre', e)}
                className="text-white hover:text-cyan-300 transition-colors font-medium text-left cursor-pointer"
              >
                Sobre
              </button>
              <a 
                href="https://www.instagram.com/ondamaremato/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-300 transition-colors flex items-center space-x-2"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

