import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Users,
  Building2,
  FileText,
  Calendar,
  HeadphonesIcon,
  AlertCircle,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

interface PropostaData {
  employees: string;
  cnae: string;
  units: string;
  maturity: string;
}

const Proposta = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state as PropostaData;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simular loading de análise
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // Calcular valores baseados nos dados
  const numEmployees = parseInt(formData?.employees || "0");
  const numUnits = parseInt(formData?.units || "0");
  const monthlyInvestment = Math.round(numEmployees * 95.67 + numUnits * 500);

  // Determinar área de interesse
  const areaInteresse = formData?.maturity || "initial";

  // NRs aplicáveis baseadas no segmento
  const nrsAplicaveis = [
    {
      numero: "NR-01",
      titulo: "Gerenciamento de Riscos Ocupacionais",
      descricao: "Gestão de SST e obrigações para todas as empresas",
      detalhes: "• Avaliação e todos os estabelecimentos inseridos",
      aplicavel: true,
    },
    {
      numero: "NR-07",
      titulo: "PCMSO - Programa de Controle Médico",
      descricao: "Proteção e preservação da saúde dos trabalhadores",
      detalhes: "• Obrigatório para todas as empresas com empregados",
      aplicavel: true,
    },
    {
      numero: "NR-12",
      titulo: "Segurança em Máquinas e Equipamentos",
      descricao: "Proteções e dispositivos de segurança em máquinas",
      detalhes: "• Para empresas com máquinas e equipamentos industriais",
      aplicavel: areaInteresse === "developing" || areaInteresse === "mature",
    },
  ];

  // Pacote de serviços recomendados
  const servicosRecomendados = [
    {
      title: "Elaboração do PGR completo",
      checked: true,
      required: true,
    },
    {
      title: "Elaboração e gestão do PCMSO",
      checked: true,
      required: true,
    },
    {
      title: "Exames ocupacionais (conforme PCMSO)",
      checked: true,
      required: true,
    },
    {
      title: "Gestão do eSocial (eventos S-2220, S-2240)",
      checked: true,
      required: true,
    },
    {
      title: "Acesso ao sistema InfoSesi",
      checked: true,
      required: true,
    },
    {
      title: "Laudo de Insalubridade (não identificado como necessário)",
      checked: false,
      required: false,
      conditional: true,
    },
    {
      title: "Laudo de Periculosidade (não identificado como necessário)",
      checked: false,
      required: false,
      conditional: true,
    },
    {
      title: "Treinamentos NRs aplicáveis",
      checked: true,
      required: true,
    },
  ];

  // Investimento estimado
  const investimentoMin = monthlyInvestment * 0.8;
  // const investimentoMax = monthlyInvestment * 1.2;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500 mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Analisando perfil da sua empresa...
          </h2>
          <p className="text-gray-600">
            Identificando NRs aplicáveis e montando proposta personalizada
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Banner */}
      <div className="bg-success-500 text-white py-8">
        {/* <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
            <div>
              <h1 className="text-3xl font-bold mb-2">Proposta gerada com sucesso!</h1>
              <p className="text-lg text-green-50">Sua solução personalizada está pronta</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Investment Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-center text-gray-600 mb-2">Investimento mensal</p>
          <h2 className="text-center text-5xl font-bold text-gray-900 mb-2">
            R$ {monthlyInvestment.toLocaleString("pt-BR")}
            <span className="text-2xl text-gray-600">/mês</span>
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Para {numEmployees} funcionários em {numUnits} unidades
          </p>

          {/* Investment Range */}
          <div className="bg-gray-50 rounded-lg p-4 mt-6">
            <div className="flex justify-between items-center text-sm">
              <div>
                <p className="text-gray-600">Valor mensal</p>
                <p className="font-bold text-gray-900">
                  R$ {investimentoMin.toLocaleString("pt-BR")}
                </p>
              </div>
              {/* <div className="text-right">
                <p className="text-gray-600">Implementação única</p>
                <p className="font-bold text-gray-900">
                  R$ {investimentoMax.toLocaleString("pt-BR")}
                </p>
              </div> */}
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              *Valores estimados baseados no porte da empresa. Investimento
              final poderá variar conforme necessidades identificadas.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {numEmployees}
            </div>
            <div className="text-sm text-gray-600">Funcionários</div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 text-center">
            <Building2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-600 mb-1">
              {numUnits}
            </div>
            <div className="text-sm text-gray-600">Unidades</div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
            <div className="text-sm text-gray-600">Serviços inclusos</div>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 text-center">
            <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Suporte</div>
          </div>
        </div>

        {/* NRs Aplicáveis */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <AlertCircle className="w-6 h-6 text-primary-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              NRs Aplicáveis à sua Empresa
            </h3>
          </div>

          <div className="space-y-4">
            {nrsAplicaveis.map(
              (nr, index) =>
                nr.aplicavel && (
                  <div
                    key={index}
                    className="border-l-4 border-primary-500 bg-gray-50 p-5 rounded-r-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-primary-500 text-white text-sm font-bold px-3 py-1 rounded mr-3">
                            {nr.numero}
                          </span>
                          <h4 className="text-lg font-bold text-gray-900">
                            {nr.titulo}
                          </h4>
                        </div>
                        <p className="text-gray-700 mb-2">{nr.descricao}</p>
                        <p className="text-sm text-gray-600">{nr.detalhes}</p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        {/* Pacote de Serviços Recomendados */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-6 h-6 text-success-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              Pacote de Serviços Recomendados
            </h3>
          </div>

          <div className="space-y-3">
            {servicosRecomendados.map((service, index) => (
              <div key={index} className="flex items-start space-x-3">
                {service.checked ? (
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                )}
                <span
                  className={`${
                    service.checked ? "text-gray-700" : "text-gray-500"
                  }`}
                >
                  {service.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Legenda:</strong> ✅ = Incluído no pacote • ⚡ = Não
              identificado como necessário para seu perfil
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/cadastro", { state: formData })}
          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold py-5 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl mb-6 flex items-center justify-center space-x-2"
        >
          <span>Criar conta e acessar sua proposta</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>

        {/* Contact Info */}
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            Dúvidas? Entre em contato com nosso time comercial:
          </p>
          <a
            href="mailto:comercial@vidaconecta.com.br"
            className="text-primary-500 hover:text-primary-600 font-semibold inline-flex items-center space-x-2"
          >
            <HeadphonesIcon className="w-5 h-5" />
            <span>comercial@vidaconecta.com.br</span>
          </a>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-primary-500 transition-colors inline-flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Voltar para o início</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Proposta;
