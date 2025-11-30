import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  FileText,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import sesiLogo from "../assets/logo.png";

interface Proposta {
  id: string;
  nomeEmpresa: string;
  cnpj: string;
  responsavel: string;
  email: string;
  telefone: string;
  numFuncionarios: number;
  numUnidades: number;
  valorMensal: number;
  dataMovimento: string;
  status: string;
  prioridade: "baixa" | "media" | "alta";
}

// Dados mock (em produção viriam de uma API ou estado global)
const mockPropostas: Proposta[] = [
  {
    id: "1",
    nomeEmpresa: "Alimentos Bahia Ltda",
    cnpj: "12.345.678/0001-90",
    responsavel: "Carlos Eduardo Silva",
    email: "contato@alimentosbahia.com.br",
    telefone: "(71) 3456-7890",
    numFuncionarios: 150,
    numUnidades: 3,
    valorMensal: 14850,
    dataMovimento: "14/03/2024",
    status: "Proposta Aceita",
    prioridade: "alta",
  },
  {
    id: "2",
    nomeEmpresa: "Indústria XYZ S.A.",
    cnpj: "98.765.432/0001-10",
    responsavel: "Maria Oliveira",
    email: "maria@industriaxyz.com.br",
    telefone: "(71) 98765-4321",
    numFuncionarios: 85,
    numUnidades: 2,
    valorMensal: 8630,
    dataMovimento: "15/11/2025",
    status: "Contrato Assinado",
    prioridade: "media",
  },
  {
    id: "3",
    nomeEmpresa: "Construtora Forte Ltda",
    cnpj: "45.678.901/0001-23",
    responsavel: "João Santos",
    email: "joao@construtoraforte.com.br",
    telefone: "(71) 99887-6543",
    numFuncionarios: 220,
    numUnidades: 5,
    valorMensal: 23540,
    dataMovimento: "18/11/2025",
    status: "Envio da Planilha M1",
    prioridade: "alta",
  },
  {
    id: "4",
    nomeEmpresa: "Alimentos Bom Sabor",
    cnpj: "23.456.789/0001-45",
    responsavel: "Ana Paula Costa",
    email: "ana@bomsabor.com.br",
    telefone: "(71) 3344-5566",
    numFuncionarios: 120,
    numUnidades: 2,
    valorMensal: 12180,
    dataMovimento: "20/11/2025",
    status: "Visita Técnica",
    prioridade: "media",
  },
  {
    id: "5",
    nomeEmpresa: "Tech Solutions Ltd",
    cnpj: "34.567.890/0001-56",
    responsavel: "Pedro Henrique",
    email: "pedro@techsolutions.com.br",
    telefone: "(71) 99123-4567",
    numFuncionarios: 50,
    numUnidades: 1,
    valorMensal: 5283,
    dataMovimento: "22/11/2025",
    status: "Elaboração do PGR",
    prioridade: "baixa",
  },
];

const PropostaDetalhes = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"checklist" | "documentos">(
    "checklist"
  );

  // Buscar proposta pelos dados mock
  const proposta = mockPropostas.find((p) => p.id === id);

  if (!proposta) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Proposta não encontrada
          </h2>
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            Voltar ao Dashboard
          </button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Proposta Aceita":
        return "bg-blue-100 text-blue-700";
      case "Contrato Assinado":
        return "bg-green-100 text-green-700";
      case "Envio da Planilha M1":
        return "bg-yellow-100 text-yellow-700";
      case "Visita Técnica":
        return "bg-purple-100 text-purple-700";
      case "Elaboração do PGR":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case "alta":
        return "bg-red-100 text-red-700";
      case "media":
        return "bg-yellow-100 text-yellow-700";
      case "baixa":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Checklist items mockados
  const checklistItems = [
    {
      id: "ruido",
      titulo: "8.1 - Ruído",
      norma: "NR-15 (Anexo 1)",
      descricao:
        "Realizar medições de ruído em todos os setores produtivos. Avaliar a exposição dos colaboradores a ruído em conformidade com a NR-15. Determinar a necessidade de implantação de medidas de controle.",
      avaliacao: "Conforme",
      opcoes: ["Conforme", "Não Conforme", "Não Aplicável"],
    },
    {
      id: "calor",
      titulo: "8.2 - Calor",
      norma: "NR-15 (Anexo 3)",
      descricao:
        "Avaliar a exposição ao calor no ambiente de trabalho. Realizar medição do IBUTG para caracterizar o grau de exposição. Identificar a necessidade de medidas de controle como ventilação e pausas.",
      avaliacao: "Não Conforme",
      opcoes: ["Conforme", "Não Conforme", "Não Aplicável"],
    },
    {
      id: "vibracao",
      titulo: "8.3 - Vibração",
      norma: "NR-15 (Anexo 8)",
      descricao:
        "Avaliar a exposição a vibrações de mãos e braços e de corpo inteiro. Quantificar os níveis de vibração a que os trabalhadores estão expostos.",
      avaliacao: "Conforme",
      opcoes: ["Conforme", "Não Conforme", "Não Aplicável"],
    },
    {
      id: "quimicos",
      titulo: "8.4 - Agentes Químicos",
      norma: "NR-15 (Anexos 11, 13)",
      descricao:
        "Identificar todos os agentes químicos presentes no ambiente de trabalho. Avaliar a exposição ocupacional através de amostragens quantitativas. Comparar com os limites de tolerância estabelecidos.",
      avaliacao: "Não Conforme",
      opcoes: ["Conforme", "Não Conforme", "Não Aplicável"],
    },
    {
      id: "benzeno",
      titulo: "8.5 - Benzeno",
      norma: "NR-15 (Anexo 13-A)",
      descricao:
        "Realizar monitoramento ambiental e biológico para exposição ao benzeno. Implementar o Programa de Prevenção da Exposição Ocupacional ao Benzeno (PPEOB).",
      avaliacao: "Não Aplicável",
      opcoes: ["Conforme", "Não Conforme", "Não Aplicável"],
    },
    {
      id: "biologicos",
      titulo: "8.6 - Riscos Biológicos",
      norma: "NR-32",
      descricao:
        "Identificar os agentes biológicos presentes. Implementar medidas de proteção e prevenção. Garantir a adequada gestão de resíduos biológicos.",
      avaliacao: "Conforme",
      opcoes: ["Conforme", "Não Conforme", "Não Aplicável"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fixo */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/admin/dashboard")}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-medium">Voltar</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <img src={sesiLogo} alt="SESI Saúde" className="h-8 w-auto" />
              <h1 className="text-lg font-bold text-gray-900">
                Detalhes da Tarefa
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Salvar Rascunho
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
                Enviar Checklist
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna Principal - 2/3 */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informações da Empresa */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {proposta.nomeEmpresa}
                  </h2>
                  <p className="text-sm text-gray-500">{proposta.cnpj}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      proposta.status
                    )}`}
                  >
                    {proposta.status}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getPrioridadeColor(
                      proposta.prioridade
                    )}`}
                  >
                    {proposta.prioridade.charAt(0).toUpperCase() +
                      proposta.prioridade.slice(1)}
                  </span>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-4">
                <p className="font-semibold mb-2">Tipo de Serviço</p>
                <p>Avaliação Quantitativa de Ruído</p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Descrição
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Realizar medições de ruído em todos os setores produtivos da
                  empresa para avaliar a conformidade com os limites
                  estabelecidos pela NR-15 e identificar necessidades de
                  controle.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Salvador/BA</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">
                    Prazo: {proposta.dataMovimento}
                  </span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab("checklist")}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "checklist"
                        ? "border-primary-500 text-primary-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Checklist</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("documentos")}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "documentos"
                        ? "border-primary-500 text-primary-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Documentos</span>
                    </div>
                  </button>
                </nav>
              </div>

              {/* Conteúdo das Tabs */}
              <div className="p-6">
                {activeTab === "checklist" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        Checklist de Riscos Físicos, Químicos e Perigosos
                      </h3>
                      <span className="text-sm text-gray-500">
                        Aba: 24/18/2025
                      </span>
                    </div>

                    {checklistItems.map((item, index) => (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">
                              {item.titulo}
                            </h4>
                            <p className="text-sm text-gray-500 mb-2">
                              {item.norma}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {item.descricao}
                        </p>

                        <div className="flex flex-col space-y-2">
                          <label className="text-sm font-semibold text-gray-700">
                            Avaliação:
                          </label>
                          <div className="flex space-x-3">
                            {item.opcoes.map((opcao) => (
                              <label
                                key={opcao}
                                className="flex items-center space-x-2 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name={`avaliacao-${item.id}`}
                                  value={opcao}
                                  checked={item.avaliacao === opcao}
                                  className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                                  readOnly
                                />
                                <span
                                  className={`text-sm ${
                                    item.avaliacao === opcao
                                      ? "font-semibold text-gray-900"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {opcao}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4">
                          <label className="text-sm font-semibold text-gray-700 mb-2 block">
                            Observações
                          </label>
                          <textarea
                            placeholder="Adicione observações relevantes..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                            rows={3}
                          ></textarea>
                        </div>

                        <button className="mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          Adicionar Foto
                        </button>
                      </div>
                    ))}

                    <div className="border-t border-gray-200 pt-4 mt-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Assinatura do Técnico
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Digite seu nome completo e registre profissional (CREA
                        123456/90):
                      </p>
                      <input
                        type="text"
                        placeholder="Nome completo do técnico responsável"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "documentos" && (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Nenhum documento anexado ainda
                    </p>
                    <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      Adicionar Documento
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Direita - 1/3 */}
          <div className="space-y-6">
            {/* Status e Progresso */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Cancelado</span>
                  <span className="text-sm font-semibold">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-gray-900">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    PENDENTE
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Itens pendentes</span>
                  <span className="font-semibold text-gray-900">0/6</span>
                </div>
              </div>
            </div>

            {/* Checklist Resumo */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4">
                Checklist
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Status</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Em andamento</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Itens respondidos</span>
                  <span className="font-semibold">6/6</span>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {proposta.responsavel}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${proposta.email}`}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    {proposta.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <a
                    href={`tel:${proposta.telefone}`}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    {proposta.telefone}
                  </a>
                </div>
              </div>
            </div>

            {/* Última Atualização */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4">
                Última Atualização
              </h3>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">
                    {proposta.dataMovimento}, 10:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropostaDetalhes;
