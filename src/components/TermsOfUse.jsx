import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, Globe, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfUse = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <button 
            onClick={handleGoBack}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Voltar ao site</span>
          </button>
          <div className="flex items-center space-x-3">
            <Scale className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Termos de Uso
            </h1>
          </div>
          <p className="text-gray-300 mt-2">
            Última atualização: 11 de agosto de 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <p className="text-gray-200 text-lg leading-relaxed">
              Bem-vindo aos Termos de Uso da Onda Mar e Mato. Este documento estabelece as regras e 
              condições para o uso do nosso site, produtos e serviços. Ao acessar ou utilizar qualquer 
              parte do nosso site ou adquirir nossos produtos, você concorda em cumprir e estar vinculado 
              a estes Termos de Uso.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Aceitação dos Termos */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">1. Aceitação dos Termos</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ao acessar e utilizar o site da Onda Mar e Mato (https://ondamaremato.vercel.app/), você 
                declara ter lido, compreendido e aceito estes Termos de Uso em sua totalidade. Estes Termos 
                podem ser atualizados periodicamente, e a sua continuidade no uso do site após as alterações 
                implica na aceitação dos novos termos.
              </p>
            </section>

            {/* Definições */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">2. Definições</h2>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Onda Mar e Mato (OMM):</strong> Refere-se à empresa, seus produtos, 
                    serviços, site e toda a sua propriedade intelectual.
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Usuário:</strong> Qualquer pessoa física ou jurídica que acessa ou 
                    utiliza o site, produtos ou serviços da Onda Mar e Mato.
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Site:</strong> O site da Onda Mar e Mato, acessível em 
                    https://ondamaremato.vercel.app/.
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Produtos:</strong> Inclui, mas não se limita ao "Cascudo", posts, 
                    propriedade intelectual e quaisquer outros itens oferecidos pela Onda Mar e Mato.
                  </p>
                </div>
              </div>
            </section>

            {/* Uso do Site e Conteúdo */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">3. Uso do Site e Conteúdo</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.1. Acesso e Disponibilidade</h3>
                  <p className="text-gray-300 leading-relaxed">
                    O site da Onda Mar e Mato é disponibilizado para seu uso pessoal e não comercial. Embora nos 
                    esforcemos para garantir a disponibilidade contínua do site, não garantimos que ele estará 
                    sempre acessível ou livre de erros.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.2. Propriedade Intelectual do Conteúdo</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Todo o conteúdo presente no site, incluindo textos, gráficos, logotipos, ícones, imagens, 
                    clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da 
                    Onda Mar e Mato ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos 
                    autorais e outras leis de propriedade intelectual.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.3. Uso Proibido</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">Você concorda em não:</p>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do site sem nossa permissão expressa.</li>
                    <li>• Utilizar o site de qualquer forma que possa danificar, desabilitar ou sobrecarregar o site.</li>
                    <li>• Tentar obter acesso não autorizado a qualquer parte do site, contas de usuários ou sistemas.</li>
                    <li>• Utilizar qualquer robô, spider ou outro dispositivo automático para monitorar ou copiar o site.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* O Produto Cascudo */}
            <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">4. O Produto "Cascudo" e Proteção de Patente</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                O "Cascudo" é um produto inovador desenvolvido e patenteado pela Onda Mar e Mato. A patente 
                (BR 10 2022 019644-3) confere à Onda Mar e Mato direitos exclusivos sobre a invenção, impedindo 
                que terceiros fabriquem, usem, vendam ou importem o produto sem nossa autorização. A violação 
                desses direitos de patente, incluindo a imitação, reprodução não autorizada, distribuição ou 
                uso indevido do "Cascudo" ou de suas características distintivas, constitui uma infração grave 
                e sujeitará o infrator às penalidades previstas em lei.
              </p>
            </section>

            {/* Isenção de Garantias */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">6. Isenção de Garantias e Limitação de Responsabilidade</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                O site, produtos e serviços da Onda Mar e Mato são fornecidos "como estão" e "conforme 
                disponíveis", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que 
                o site será ininterrupto, livre de erros ou seguro. Em nenhuma circunstância a Onda Mar e 
                Mato será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, 
                consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar o site, produtos 
                ou serviços.
              </p>
            </section>

            {/* Legislação Aplicável */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">8. Legislação Aplicável e Foro</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República 
                Federativa do Brasil. Você concorda que qualquer disputa ou controvérsia decorrente ou 
                relacionada a estes Termos de Uso será submetida ao foro da comarca de São Paulo/SP, Brasil, 
                com exclusão de qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            {/* Contato */}
            <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">10. Contato</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white font-semibold">Onda Mar e Mato</p>
                <p className="text-cyan-400">E-mail: ondamaremato@ondamaremato.com</p>
              </div>
            </section>
          </div>

          {/* Back to top */}
          <div className="text-center mt-12">
            <button 
              onClick={handleGoBack}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              Voltar ao Site Principal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

