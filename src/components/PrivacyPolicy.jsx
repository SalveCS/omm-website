import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <Shield className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Política de Privacidade
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
              Bem-vindo à Política de Privacidade da Onda Mar e Mato. Nós valorizamos a sua privacidade e 
              estamos comprometidos em proteger os seus dados pessoais. Este documento descreve como 
              coletamos, usamos, armazenamos, compartilhamos e protegemos as informações que você nos 
              fornece ao utilizar nosso site, produtos e serviços.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Quem Somos */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">1. Quem Somos</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A Onda Mar e Mato é uma empresa dedicada a conectar surfistas com o oceano através de produtos 
                inovadores que promovem a sustentabilidade e a consciência ambiental. Nossa missão é proteger o 
                que amamos, o oceano, e inspirar uma comunidade global de surfistas conscientes. Nosso site é 
                https://ondamaremato.vercel.app/.
              </p>
            </section>

            {/* Dados Coletados */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">2. Dados Coletados</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços a você. 
                Os dados podem ser fornecidos diretamente por você ou coletados automaticamente durante a 
                sua interação com nosso site e produtos.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">2.1. Informações Fornecidas por Você</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• <strong>Dados de Contato:</strong> Nome, endereço de e-mail, número de telefone, endereço postal, etc.</li>
                    <li>• <strong>Dados de Compra:</strong> Informações relacionadas a transações, detalhes de produtos adquiridos, informações de pagamento.</li>
                    <li>• <strong>Comunicações:</strong> Conteúdo de suas comunicações conosco, incluindo e-mails, mensagens de chat e feedback.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">2.2. Informações Coletadas Automaticamente</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• <strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, sistema operacional, páginas visitadas.</li>
                    <li>• <strong>Dados do Dispositivo:</strong> Informações sobre o dispositivo que você usa para acessar nosso site.</li>
                    <li>• <strong>Dados de Localização:</strong> Informações de localização aproximada com base no seu endereço IP.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Uso dos Dados */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">3. Uso dos Dados</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Utilizamos os dados coletados para diversas finalidades, incluindo:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• <strong>Fornecimento e Melhoria de Serviços:</strong> Para operar, manter, proteger e melhorar nosso site, produtos e serviços.</li>
                <li>• <strong>Comunicação:</strong> Para enviar newsletters, atualizações, informações sobre produtos e promoções.</li>
                <li>• <strong>Personalização:</strong> Para personalizar sua experiência em nosso site.</li>
                <li>• <strong>Segurança:</strong> Para detectar, prevenir e responder a fraudes, abusos e riscos de segurança.</li>
                <li>• <strong>Análise e Pesquisa:</strong> Para entender como nossos usuários interagem com nossos serviços.</li>
                <li>• <strong>Conformidade Legal:</strong> Para cumprir com obrigações legais e regulatórias, incluindo a LGPD.</li>
              </ul>
            </section>

            {/* Proteção da Propriedade Intelectual */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">5. Proteção da Propriedade Intelectual (Cascudo - BR 10 2022 019644-3)</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                O produto "Cascudo" é uma inovação patenteada da Onda Mar e Mato. Isso significa que seu design, 
                funcionalidade e conceito são protegidos por leis de propriedade intelectual. Qualquer imitação, 
                reprodução não autorizada, distribuição ou uso indevido do "Cascudo" ou de suas características 
                distintivas será considerado uma violação de nossos direitos de propriedade intelectual e resultará 
                na tomada de medidas legais cabíveis.
              </p>
            </section>

            {/* Seus Direitos */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">7. Seus Direitos</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• <strong>Direito de Acesso:</strong> Obter confirmação da existência de tratamento e acesso aos seus dados.</li>
                <li>• <strong>Direito de Retificação:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>• <strong>Direito de Eliminação:</strong> Solicitar a eliminação de dados pessoais desnecessários ou excessivos.</li>
                <li>• <strong>Direito à Portabilidade:</strong> Receber seus dados pessoais em formato estruturado e interoperável.</li>
                <li>• <strong>Direito de Oposição:</strong> Opor-se ao tratamento de seus dados em determinadas circunstâncias.</li>
                <li>• <strong>Direito de Revogação do Consentimento:</strong> Revogar seu consentimento a qualquer momento.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail 
                ondamaremato@ondamaremato.com.
              </p>
            </section>

            {/* Contato */}
            <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">11. Contato</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre nossas 
                práticas de dados, entre em contato conosco:
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

export default PrivacyPolicy;

