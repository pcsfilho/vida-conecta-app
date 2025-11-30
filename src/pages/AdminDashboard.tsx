import { useState } from "react";
import {
  Home,
  Users,
  FileText,
  Building2,
  Settings,
  LogOut,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
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

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  // Dados mock de propostas
  const [propostas, setPropostas] = useState<Proposta[]>([
    {
      id: "1",
      nomeEmpresa: "Metalúrgica ABC Ltda",
      cnpj: "12.345.678/0001-90",
      responsavel: "Carlos Alberto Silva",
      email: "carlos@metalurgicaabc.com.br",
      telefone: "(71) 3456-7890",
      numFuncionarios: 150,
      numUnidades: 3,
      valorMensal: 14850,
      dataMovimento: "13/11/2025",
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
  ]);

  // Colunas do Kanban (mesmas da timeline do cliente)
  const colunas = [
    { id: "Proposta Aceita", titulo: "Proposta Aceita", cor: "bg-blue-500" },
    { id: "Contrato Assinado", titulo: "Contrato Assinado", cor: "bg-green-500" },
    { id: "Envio da Planilha M1", titulo: "Envio da Planilha M1", cor: "bg-yellow-500" },
    { id: "Visita Técnica", titulo: "Visita Técnica", cor: "bg-purple-500" },
    { id: "Elaboração do PGR", titulo: "Elaboração do PGR", cor: "bg-orange-500" },
  ];

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "empresas", label: "Empresas", icon: Building2 },
    { id: "propostas", label: "Propostas", icon: FileText },
    { id: "usuarios", label: "Usuários", icon: Users },
    { id: "configuracoes", label: "Configurações", icon: Settings },
  ];

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case "alta":
        return "bg-red-100 text-red-700 border-red-300";
      case "media":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "baixa":
        return "bg-green-100 text-green-700 border-green-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getPropostasPorStatus = (status: string) => {
    return propostas.filter((p) => p.status === status);
  };

  const filteredPropostas = propostas.filter(
    (p) =>
      p.nomeEmpresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.cnpj.includes(searchTerm) ||
      p.responsavel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Drag and Drop handlers
  const handleDragStart = (e: React.DragEvent, propostaId: string) => {
    setDraggedItem(propostaId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, novoStatus: string) => {
    e.preventDefault();

    if (draggedItem) {
      setPropostas((prevPropostas) =>
        prevPropostas.map((proposta) =>
          proposta.id === draggedItem
            ? { ...proposta, status: novoStatus, dataMovimento: new Date().toLocaleDateString('pt-BR') }
            : proposta
        )
      );
      setDraggedItem(null);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <img src={sesiLogo} alt="SESI Saúde" className="h-8 w-auto" />
          <span className="ml-2 text-sm font-semibold text-gray-700">Admin</span>
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

        {/* User Section */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Admin User
              </p>
              <p className="text-xs text-gray-500 truncate">
                admin@vidaconecta.com.br
              </p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Dashboard Administrativo
            </h1>
            <p className="text-sm text-gray-500">
              Gestão de propostas e contratos
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Nova Proposta</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total de Propostas</p>
                  <p className="text-3xl font-bold text-gray-900">{propostas.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Propostas Aceitas</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {getPropostasPorStatus("Proposta Aceita").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Em Andamento</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {propostas.filter(p => p.status !== "Elaboração do PGR").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Alta Prioridade</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {propostas.filter(p => p.prioridade === "alta").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar por empresa, CNPJ ou responsável..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filtros</span>
              </button>
            </div>
          </div>

          {/* Kanban Board */}
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {colunas.map((coluna) => {
              const propostasColuna = searchTerm
                ? filteredPropostas.filter((p) => p.status === coluna.id)
                : getPropostasPorStatus(coluna.id);

              return (
                <div
                  key={coluna.id}
                  className="flex-shrink-0 w-80 bg-gray-100 rounded-xl p-4"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, coluna.id)}
                >
                  {/* Column Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${coluna.cor}`}></div>
                      <h3 className="font-bold text-gray-900">{coluna.titulo}</h3>
                      <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                        {propostasColuna.length}
                      </span>
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="space-y-3 min-h-[100px]">
                    {propostasColuna.map((proposta) => (
                      <div
                        key={proposta.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, proposta.id)}
                        onDragEnd={handleDragEnd}
                        className={`bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-move border border-gray-200 ${
                          draggedItem === proposta.id ? "opacity-50" : ""
                        }`}
                      >
                        {/* Card Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-1">
                              {proposta.nomeEmpresa}
                            </h4>
                            <p className="text-xs text-gray-500">
                              CNPJ: {proposta.cnpj}
                            </p>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600 p-1">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Card Body */}
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center text-xs text-gray-600">
                            <Users className="w-3 h-3 mr-1" />
                            <span>{proposta.numFuncionarios} funcionários</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-600">
                            <Building2 className="w-3 h-3 mr-1" />
                            <span>{proposta.numUnidades} unidades</span>
                          </div>
                          <div className="flex items-center text-xs font-semibold text-primary-600">
                            <span>R$ {proposta.valorMensal.toLocaleString('pt-BR')}/mês</span>
                          </div>
                        </div>

                        {/* Card Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <span
                            className={`text-xs font-semibold px-2 py-1 rounded border ${getPrioridadeColor(
                              proposta.prioridade
                            )}`}
                          >
                            {proposta.prioridade.charAt(0).toUpperCase() + proposta.prioridade.slice(1)}
                          </span>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {proposta.dataMovimento}
                          </div>
                        </div>

                        {/* Responsável */}
                        <div className="mt-2 pt-2 border-t border-gray-100">
                          <div className="flex items-center">
                            <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                              {proposta.responsavel.charAt(0)}
                            </div>
                            <span className="text-xs text-gray-600 truncate">
                              {proposta.responsavel}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {propostasColuna.length === 0 && (
                      <div className="text-center py-8 text-gray-400 text-sm">
                        Nenhuma proposta nesta etapa
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
