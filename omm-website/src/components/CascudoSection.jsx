import { Waves, Shield, Heart, Recycle } from 'lucide-react';
import cascudoLogo from '../assets/Cascudo_LogoMarca_Branco.png';
import cascudoImage from '../assets/o_150425.png';
import cascudoProduct from '../assets/o_160425.png';

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
            O Cascudo é mais que um produto - é uma revolução na forma como os surfistas 
            interagem com o oceano. Uma ferramenta que transforma cada sessão de surf 
            em um ato de preservação ambiental.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-scale">
                  Guia de Instalação
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src={cascudoImage} 
              alt="Cascudo em ação" 
              className="rounded-2xl shadow-2xl hover-scale transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Features Grid */}
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

        {/* Product Showcase */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-3xl p-8 md:p-12 border border-cyan-400/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Design Elegante,
                <br />
                <span className="text-cyan-300">Impacto Gigante</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Com uma aparência moderna e atual, ele não só ajuda a proteger o ambiente, 
                mas também é uma adição estética para a prancha de surf e o leash. 
                Por fim, o cascudo tem um propósito importante e significativo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-white">Oferecemos uma abordagem única para a limpeza de praias</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-white">Oportunidades para se envolver na proteção dos oceanos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-white">Uma comunidade unida de pessoas comprometidas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cascudoProduct} 
                alt="Produto Cascudo" 
                className="rounded-2xl shadow-2xl hover-scale transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Junte-se a nós na promoção da sustentabilidade
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            E na luta contra a poluição marinha
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover-scale shadow-lg">
            Faça Parte do Movimento
          </button>
        </div>
      </div>
    </section>
  );
};

export default CascudoSection;

