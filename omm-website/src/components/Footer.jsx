import { Instagram, Mail, MapPin, Waves } from 'lucide-react';
import logoOMM from '../assets/Logotipo_OMM_v_Branco.png';
import cascudoLogo from '../assets/Cascudo_LogoMarca_Branco.png';
import energiaLogo from '../assets/Logo_Energia_Salgada_bRANCO.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img 
              src={logoOMM} 
              alt="Onda Mar e Mato" 
              className="h-16 mb-6"
            />
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Conectando surfistas ao oceano através de produtos inovadores 
              que promovem a sustentabilidade e a consciência ambiental.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ondamaremato/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-cyan-500 text-white p-3 rounded-full transition-all duration-300 hover-scale"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:contato@ondamaremato.com" 
                className="bg-white/10 hover:bg-cyan-500 text-white p-3 rounded-full transition-all duration-300 hover-scale"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-cyan-300 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cascudo')}
                  className="text-gray-300 hover:text-cyan-300 transition-colors"
                >
                  Cascudo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('energia-salgada')}
                  className="text-gray-300 hover:text-cyan-300 transition-colors"
                >
                  Energia Salgada
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-cyan-300 transition-colors"
                >
                  Sobre
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} />
                <span>ondamaremato@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Instagram size={16} />
                <a 
                  href="https://www.instagram.com/ondamaremato/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  @ondamaremato
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} />
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Products Showcase */}
        <div className="border-t border-slate-800 mt-12 pt-12">
          <h4 className="text-white font-bold text-xl mb-8 text-center">
            Nossos Produtos e Conceitos
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cascudo */}
            <div className="text-center group">
              <img 
                src={cascudoLogo} 
                alt="Cascudo" 
                className="h-16 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h5 className="text-white font-semibold mb-2">Cascudo</h5>
              <p className="text-gray-400 text-sm">
                Equipamento inovador para limpeza dos oceanos durante o surf
              </p>
            </div>

            {/* Energia Salgada */}
            <div className="text-center group">
              <img 
                src={energiaLogo} 
                alt="Energia Salgada" 
                className="h-16 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h5 className="text-white font-semibold mb-2">Energia Salgada</h5>
              <p className="text-gray-400 text-sm">
                Filosofia de vida que conecta surfistas ao oceano
              </p>
            </div>

            {/* OMM */}
            <div className="text-center group">
              <img 
                src={logoOMM} 
                alt="OMM" 
                className="h-16 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h5 className="text-white font-semibold mb-2">Onda Mar e Mato</h5>
              <p className="text-gray-400 text-sm">
                Marca comprometida com a sustentabilidade marinha
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <Waves size={16} />
              <span>© {currentYear} Onda Mar e Mato. Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-cyan-300 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-cyan-300 transition-colors">
                Termos de Uso
              </a>
              <span className="text-cyan-400 font-medium">
                #EnergiaSalgada
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

