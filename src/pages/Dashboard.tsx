import { useState } from "react";
import {
  Home,
  FileText,
  Database,
  Briefcase,
  Activity,
  BarChart3,
  HeadphonesIcon,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  X,
  Play,
} from "lucide-react";
import sesiLogo from "../assets/logo.png";
import FuncionariosPage from "../components/FuncionariosPage";
import PropostaContent from "../components/PropostaContent";
import ContratoContent from "../components/ContratoContent";
import SuportePage from "../components/SuportePage";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("inicio");
  const [showPropostaModal, setShowPropostaModal] = useState(false);
  const [showContratoModal, setShowContratoModal] = useState(false);

  const menuItems = [
    { id: "inicio", label: "Início", icon: Home },
    { id: "contrato", label: "Contrato", icon: FileText },
    { id: "m1-digital", label: "M1 Digital", icon: Database },
    { id: "funcionarios", label: "Funcionários", icon: Users },
    { id: "servicos", label: "Serviços", icon: Briefcase },
    { id: "exames", label: "Exames", icon: Activity },
    { id: "indicadores", label: "Indicadores", icon: BarChart3 },
    { id: "suporte", label: "Suporte", icon: HeadphonesIcon },
  ];

  const documentos = [
    {
      title: "Contrato SESI n° 2025/1234",
      type: "Contratual",
      status: "Disponível",
    },
    {
      title: "Proposta Comercial",
      type: "Contratual",
      status: "Disponível",
    },
    {
      title: "PGR - Metalúrgica ABC",
      type: "PGR",
      status: "Em elaboração",
    },
    {
      title: "PCMSO 2025",
      type: "PCMSO",
      status: "Aguardando PGR",
    },
  ];

  const timeline = [
    {
      title: "Proposta Aceita",
      date: "13/11/2025",
      status: "completed",
    },
    {
      title: "Contrato Assinado",
      date: "21/11/2025",
      status: "completed",
    },
    {
      title: "Envio da Planilha M1",
      subtitle: "Aguardando envio dos dados dos funcionários",
      status: "current",
    },
    {
      title: "Visita Técnica",
      date: "Prevista: 04/12/2025",
      status: "pending",
    },
    {
      title: "Elaboração do PGR",
      date: "Prevista: 11/12/2025",
      status: "pending",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        {/* Logo */}
        <div
          className="h-16 flex items-center px-6 border-b border-gray-200"
          style={{ backgroundColor: "#FFF" }}
        >
          <img src={sesiLogo} alt="SESI Saúde" className="h-8 w-auto" />
        </div>

        {/* Menu Items */}
        <nav className="py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                  activeMenu === item.id
                    ? "bg-primary-50 text-primary-600 border-r-4 border-primary-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        {/* <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              SESI Saúde Connect
            </h1>
            <p className="text-sm text-gray-500">Metalúrgica ABC Ltda</p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-600">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                {userData?.nomeResponsavel?.charAt(0) || "C"}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {userData?.nomeResponsavel || "Carlos Alberto"}
                </p>
                <p className="text-xs text-gray-500">Gerente de RH</p>
              </div>
            </div>
          </div>
        </header> */}

        {/* Content */}
        <main className="p-8">
          {/* Render specific pages based on active menu */}
          {activeMenu === 'funcionarios' ? (
            <FuncionariosPage />
          ) : activeMenu === 'suporte' ? (
            <SuportePage />
          ) : (
            <>
              {/* Welcome Section */}
              <div className="mb-8 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 rounded-2xl p-8 text-white shadow-lg">
                <h2 className="text-3xl font-bold mb-3">
                  Bem-vindo ao Vida Conecta! 🎉
                </h2>
                <p className="text-lg text-white/90">
                  Vamos iniciar sua jornada com o Vida Conecta. Abaixo você
                  acompanhará os próximos passos.
                </p>
              </div>

          {/* Tutoriais em Vídeo */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Play className="w-6 h-6 text-primary-500" />
                <h3 className="text-xl font-bold text-gray-900">Tutoriais em vídeo</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  id: 1,
                  title: 'Introdução à plataforma Vida Conecta',
                  duration: '3:12'
                },
                {
                  id: 2,
                  title: 'Como preencher a M1 Digital',
                  duration: '8:15'
                },
                {
                  id: 3,
                  title: 'Agendamento de exames ocupacionais',
                  duration: '4:32'
                }
              ].map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary-500 transition-colors cursor-pointer group"
                >
                  <div className="relative">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white opacity-80" />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all">
                      <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs font-semibold px-2 py-1 rounded">
                      {tutorial.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2">
                      {tutorial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full border-2 border-primary-500 text-primary-500 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors">
              Ver todos os vídeos
            </button>
          </div>

          {/* Alert Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Card 1: Planilha M1 Tradicional */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-yellow-900 mb-2">
                    Aguardando envio da Planilha M1
                  </h3>
                  <p className="text-sm text-yellow-800 mb-4">
                    Precisamos dos dados dos seus funcionários para iniciar a
                    elaboração do PGR
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex-1 bg-yellow-200 rounded-full h-2 mr-4">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-yellow-900">
                      30%
                    </span>
                  </div>
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors text-sm font-semibold flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Enviar Planilha M1
                  </button>
                  <button className="mt-2 text-primary-500 hover:text-primary-600 text-sm font-semibold">
                    O que é a Planilha M1?
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: M1 Digital */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-start">
                <Database className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-bold text-blue-900">
                      M1 Digital
                    </h3>
                    <span className="ml-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NOVO
                    </span>
                  </div>
                  <p className="text-sm text-blue-800 mb-4">
                    Preencha os dados de forma facilitada através do nosso
                    formulário digital inteligente
                  </p>
                  <div className="bg-white/60 rounded-lg p-3 mb-4">
                    <ul className="text-xs text-blue-900 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        Interface intuitiva e fácil de usar
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        Validação automática de dados
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        Salva progresso automaticamente
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setActiveMenu("m1-digital")}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg transition-colors text-sm font-semibold flex items-center justify-center"
                  >
                    <Database className="w-4 h-4 mr-2" />
                    Acessar M1 Digital
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Timeline da Jornada */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Timeline da Jornada
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Acompanhe o progresso da implementação dos serviços
              </p>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      {item.status === "completed" ? (
                        <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      ) : item.status === "current" ? (
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                      )}
                      {index < timeline.length - 1 && (
                        <div
                          className={`w-0.5 h-12 mt-2 ${
                            item.status === "completed"
                              ? "bg-success-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4
                            className={`font-semibold ${
                              item.status === "current"
                                ? "text-yellow-900"
                                : "text-gray-900"
                            }`}
                          >
                            {item.title}
                          </h4>
                          {item.subtitle && (
                            <p className="text-sm text-gray-600 mt-1">
                              {item.subtitle}
                            </p>
                          )}
                          {item.date && (
                            <p className="text-xs text-gray-500 mt-1">
                              {item.status === "completed" ? "Concluído em: " : ""}
                              {item.date}
                            </p>
                          )}
                        </div>
                        {/* Botão Acessar Proposta apenas na primeira entrada */}
                        {index === 0 && (
                          <button
                            onClick={() => setShowPropostaModal(true)}
                            className="ml-4 bg-primary-500 hover:bg-primary-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                          >
                            Acessar Proposta
                          </button>
                        )}
                        {/* Botão Visualizar Contrato na segunda entrada */}
                        {index === 1 && (
                          <button
                            onClick={() => setShowContratoModal(true)}
                            className="ml-4 bg-success-500 hover:bg-success-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                          >
                            Visualizar Contrato
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Acesso Rápido + Documentos */}
            <div className="space-y-6">
              {/* Acesso Rápido */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Acesso Rápido
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center p-3 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                    <FileText className="w-5 h-5 text-primary-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      Documentos
                    </span>
                  </button>
                  <button className="flex items-center p-3 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                    <Calendar className="w-5 h-5 text-primary-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      Agendamentos
                    </span>
                  </button>
                  <button className="flex items-center p-3 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                    <Activity className="w-5 h-5 text-primary-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      Mensagens
                    </span>
                  </button>
                  <button className="flex items-center p-3 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                    <HeadphonesIcon className="w-5 h-5 text-primary-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      Ajuda
                    </span>
                  </button>
                </div>
              </div>

              {/* Consultor SESI */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Seu Consultor SESI
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MS
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Maria Silva</p>
                    <p className="text-sm text-gray-600">
                      Consultora de Relacionamento
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        (71) 98745-4321
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Enviar e-mail
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold flex items-center justify-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      Enviar Mensagem
                    </button>
                  </div>
                </div>
              </div>

              {/* Próximos Agendamentos */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Próximos Agendamentos
                </h3>
                <div className="text-center py-6">
                  <p className="text-gray-600 text-sm">
                    Nenhum agendamento ainda. Após a conclusão do PCMSO você
                    poderá agendar os exames ocupacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Meus Documentos Recentes */}
          <div className="bg-white rounded-xl shadow-md p-6 mt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                Meus Documentos Recentes
              </h3>
              <button className="text-primary-500 hover:text-primary-600 text-sm font-semibold">
                Ver todos
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Acesse contratos, PGR, PCMSO e outros documentos
            </p>

            <div className="space-y-3">
              {documentos.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="w-8 h-8 text-blue-500" />
                    <div>
                      <p className="font-semibold text-gray-900">{doc.title}</p>
                      <p className="text-sm text-gray-600">{doc.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {doc.status === "Disponível" ? (
                      <>
                        <span className="bg-success-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {doc.status}
                        </span>
                        <button className="p-2 text-gray-400 hover:text-primary-500">
                          <Download className="w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <span className="bg-gray-300 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
                        {doc.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
            </>
          )}
        </main>
      </div>

      {/* Modal de Proposta */}
      {showPropostaModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-50 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-success-500 text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-10 h-10 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold">Sua Proposta Personalizada</h2>
                  <p className="text-green-50">Solução completa em saúde e segurança ocupacional</p>
                </div>
              </div>
              <button
                onClick={() => setShowPropostaModal(false)}
                className="text-white hover:text-green-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="overflow-y-auto p-8">
              <PropostaContent showCTA={false} />
            </div>
          </div>
        </div>
      )}

      {/* Modal de Contrato */}
      {showContratoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-primary-500 text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <FileText className="w-10 h-10 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold">Contrato Digital</h2>
                  <p className="text-blue-50">Revise e assine digitalmente o contrato de prestação de serviços</p>
                </div>
              </div>
              <button
                onClick={() => setShowContratoModal(false)}
                className="text-white hover:text-blue-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="overflow-y-auto">
              <ContratoContent showDownloadButton={true} />
            </div>

            {/* Modal Footer com botão de assinar */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Aguardando sua assinatura</span>
                </div>
                <button
                  className="bg-success-500 hover:bg-success-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
                  onClick={() => {
                    alert('Funcionalidade de assinatura digital em desenvolvimento');
                  }}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Assinar digitalmente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Missing Calendar import
function Calendar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

export default Dashboard;
