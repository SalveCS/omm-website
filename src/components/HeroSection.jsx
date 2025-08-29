import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/Capa.jpeg';

const HeroSection = () => {
  const scrollToNext = (event) => {
    if (event) {
      event.preventDefault();
    }
    
    const element = document.getElementById('cascudo');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up text-shadow">
          Impossível
          <br />
          <span className="text-cyan-300">de ignorar</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 fade-in-up opacity-90 max-w-3xl mx-auto leading-relaxed">
          Aqui, cada escolha te aproxima do mar e da sua essência. Com produtos de alta qualidade 
          e design criado para quem vive intensamente as ondas, entregamos mais do que estilo. 
          Oferecemos uma conexão autêntica com a liberdade que só o oceano proporciona.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
          <button 
            onClick={(e) => scrollToSection('cascudo', e)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-scale cursor-pointer"
          >
            Conheça o Cascudo
          </button>
          <button 
            onClick={(e) => scrollToSection('energia-salgada', e)}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-scale cursor-pointer"
          >
            Energia Salgada
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <button 
          onClick={(e) => scrollToNext(e)}
          className="animate-bounce hover:text-cyan-300 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/50 to-transparent wave-animation"></div>
    </section>
  );
};

export default HeroSection;

