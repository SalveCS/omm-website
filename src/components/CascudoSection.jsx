import { Waves, Shield, Heart, Recycle } from 'lucide-react';
import cascudoLogo from '../assets/Cascudo_LogoMarca_Branco.png';
import foto17 from '../assets/Foto17.png';
import cascudoProduct from '../assets/Cascudo_Prancha_Final_web.png';
import foto66 from '../assets/Foto66.png';

const CascudoSection = () => {
  const features = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Surfe Limpo",
      description: "Equipamento leve, hidrodinâmico e funcional para que recolher resíduos do oceano se torne tão natural quanto remar."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Alta Durabilidade",
      description: "Feito com materiais de alta qualidade, projetado para resistir às condições adversas do mar, incluindo salinidade, umidade e impacto."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Propósito Significativo",
      description: "Ao usá-lo, os surfistas podem se sentir satisfeitos por estarem fazendo sua parte para proteger o meio ambiente."
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Impacto Positivo",
      description: "Você não está só pegando ondas. Está limpando o mar. Está inspirando outros. Está fazendo a diferença."
    }
  ];

  return (
    <section id="cascudo" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <img 
            src={cascudoLogo} 
            alt="Cascudo" 
            className="h-20 mx-auto mb-8 energy-pulse"
          />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
            Surfe limpo, consciência tranquila!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            O Cascudo é mais que um produto, é uma revolução na forma como os surfistas 
            interagem com o oceano. Uma ferramenta que transforma cada sessão de surf 
            em um ato de preservação ambiental.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pequeno no Leash, Gigante no Impacto
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Criamos esse equipamento leve, hidrodinâmico e funcional para que 
                recolher resíduos do oceano se torne tão natural quanto remar. Sem 
                atrapalhar sua performance, ele transforma atitude em impacto.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://ondamaremato.weebly.com/passoapasso.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-scale text-center flex items-center justify-center"
                >
                  Guia de Instalação
                </a>
                <a 
                  href="https://ondamaremato.weebly.com/cascudo.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center flex items-center justify-center"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
            
            {/* Foto66 embaixo do texto */}
            <div className="relative">
              <img 
                src={foto66} 
                alt="Equipamento Cascudo - Detalhe do produto" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right Image - Cascudo na prancha */}
          <div className="relative">
            <img 
              src={foto17} 
              alt="Cascudo na prancha" 
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 w-full h-auto"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>      {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover-scale"
            >
              <div className="text-cyan-400 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Junte-se a nós na promoção da sustentabilidade
          </h3>
          <p className="text-gray-300 text-lg">
            E na luta contra a poluição marinha
          </p>
        </div>
      </div>
    </section>
  );
};

export default CascudoSection;

