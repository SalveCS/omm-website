import { useState, useEffect } from 'react';
import { Zap, Waves, Sun, Wind } from 'lucide-react';
import energiaLogo from '../assets/Logo_Energia_Salgada_bRANCO.png';
import energiaImage from '../assets/o_210125.png';

const EnergiaSalgadaSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('energia-salgada');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const energyElements = [
    {
      icon: <Waves className="w-12 h-12" />,
      title: "Força das Ondas",
      description: "A energia infinita do oceano que move montanhas e corações"
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Calor do Sol",
      description: "A luz que aquece a alma e ilumina cada sessão de surf"
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Vento Marinho",
      description: "A brisa que carrega sonhos e molda as ondas perfeitas"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Energia Pura",
      description: "A conexão única entre surfista e natureza em sua forma mais pura"
    }
  ];

  return (
    <section 
      id="energia-salgada" 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${energiaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img 
              src={energiaLogo} 
              alt="Energia Salgada" 
              className="h-24 mx-auto mb-8 energy-pulse"
            />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
              Energia
              <br />
              <span className="text-cyan-300">Salgada</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Mais que uma filosofia, é um estilo de vida. É a força que conecta 
              o surfista ao oceano, transformando cada onda em uma experiência 
              transcendental de liberdade e propósito.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                O Conceito que Move Oceanos
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                A Energia Salgada é a essência que pulsa em cada gota do mar, 
                em cada raio de sol que toca a água, em cada vento que forma 
                as ondas perfeitas. É a força primordial que conecta todos os 
                elementos da natureza em uma sinfonia aquática.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                Quando você entra no mar, não está apenas surfando - está se 
                conectando com uma energia ancestral, pura e transformadora. 
                É essa energia que nos move, nos inspira e nos faz querer 
                proteger o que amamos.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium">
                  #EnergiaSalgada
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  #VivaOMar
                </span>
                <span className="bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium">
                  #SurfConsciente
                </span>
              </div>
            </div>
          </div>

          {/* Right Animation Area */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Floating Elements */}
              <div className="relative h-96 w-full">
                {energyElements.map((element, index) => {
                  const positions = [
                    'top-8 left-8',
                    'top-8 right-8', 
                    'bottom-8 left-8',
                    'bottom-8 right-8'
                  ];
                  
                  return (
                    <div 
                      key={index}
                      className={`absolute ${positions[index]} glass-effect rounded-xl p-6 w-48 hover-scale transition-all duration-300 hover:border-cyan-400/50 border border-white/20`}
                      style={{
                        animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      <div className="text-cyan-400 mb-3">
                        {element.icon}
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-2">
                        {element.title}
                      </h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {element.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              "Sinta a energia, deslize com propósito"
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed mb-12">
              Descubra o verdadeiro significado de estar em sintonia com o mundo 
              ao seu redor. A Energia Salgada não é apenas um conceito - é uma 
              experiência que transforma cada momento no mar em algo extraordinário.
            </p>
            
            {/* Interactive Elements */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-effect rounded-xl p-6 hover-scale transition-all duration-300">
                <div className="text-4xl mb-4">🌊</div>
                <h4 className="text-white font-bold mb-2">Conecte-se</h4>
                <p className="text-gray-300 text-sm">Com a força primordial do oceano</p>
              </div>
              <div className="glass-effect rounded-xl p-6 hover-scale transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-white font-bold mb-2">Transforme-se</h4>
                <p className="text-gray-300 text-sm">Deixe a energia salgada renovar sua alma</p>
              </div>
              <div className="glass-effect rounded-xl p-6 hover-scale transition-all duration-300">
                <div className="text-4xl mb-4">🏄‍♂️</div>
                <h4 className="text-white font-bold mb-2">Viva</h4>
                <p className="text-gray-300 text-sm">Cada onda como uma nova oportunidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default EnergiaSalgadaSection;

