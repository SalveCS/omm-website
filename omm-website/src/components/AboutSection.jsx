import { Target, Users, Lightbulb, Heart } from 'lucide-react';
import aboutImage from '../assets/Abs.jpeg';
import surfImage from '../assets/Oceano_Cena.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Missão",
      description: "Conectar surfistas com o oceano através de produtos inovadores que promovem a sustentabilidade e a consciência ambiental."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade",
      description: "Construir uma rede global de surfistas comprometidos com a preservação dos oceanos e a vida marinha."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação",
      description: "Desenvolver soluções criativas que transformam a paixão pelo surf em ações concretas de proteção ambiental."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Paixão",
      description: "Viver intensamente cada momento no mar, respeitando e protegendo o ambiente que nos proporciona tanta alegria."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sobre a
            <br />
            <span className="text-cyan-300">Onda Mar e Mato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nascemos da paixão pelo surf e do amor pelo oceano. Nossa jornada começou 
            com uma simples pergunta: como podemos surfar e ao mesmo tempo proteger 
            o que mais amamos?
          </p>
        </div>

        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Nossa História
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              A Onda Mar e Mato surgiu da necessidade de criar uma ponte entre a paixão 
              pelo surf e a responsabilidade ambiental. Vimos que era possível transformar 
              cada sessão de surf em um ato de preservação.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Com o desenvolvimento do Cascudo, nossa primeira inovação patenteada, 
              provamos que pequenas ações podem gerar grandes impactos. Cada produto 
              que criamos carrega nossa essência: qualidade, sustentabilidade e amor 
              pelo oceano.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hoje, somos mais que uma marca - somos um movimento. Um movimento de 
              surfistas conscientes que acreditam que é possível viver nossa paixão 
              enquanto cuidamos do planeta.
            </p>
          </div>
          <div className="relative">
            <img 
              src={aboutImage} 
              alt="Nossa história" 
              className="rounded-2xl shadow-2xl hover-scale transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover-scale text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div 
          className="relative rounded-3xl overflow-hidden p-12 md:p-16"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${surfImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossa Visão
            </h3>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Queremos ver um mundo onde cada surfista seja também um guardião dos oceanos. 
              Onde a paixão pelo surf se transforme em ação concreta pela preservação marinha.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="glass-effect rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-300 mb-2">1M+</div>
                <p className="text-white font-medium">Resíduos Coletados</p>
                <p className="text-gray-300 text-sm">Meta para 2025</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-300 mb-2">50K+</div>
                <p className="text-white font-medium">Surfistas Conscientes</p>
                <p className="text-gray-300 text-sm">Comunidade global</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-300 mb-2">100%</div>
                <p className="text-white font-medium">Oceanos Limpos</p>
                <p className="text-gray-300 text-sm">Nossa missão</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Faça Parte da Nossa História
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de surfistas que já escolheram fazer a diferença. 
            Cada onda é uma oportunidade de proteger o que amamos.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:ondamaremato@gmail.com"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover-scale"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

