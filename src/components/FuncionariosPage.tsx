import { useState } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  X,
  UserCheck,
  UserX,
  Users,
} from "lucide-react";

interface Funcionario {
  id: number;
  nome: string;
  unidade: string;
  setor: string;
  cargo: string;
  dataNascimento: string;
  sexo: string;
  situacao: "Ativo" | "Inativo";
  dataAdmissao: string;
  cpf: string;
}

const FuncionariosPage = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([
    {
      id: 1,
      nome: "João Silva Santos",
      unidade: "Matriz - São Paulo",
      setor: "Produção",
      cargo: "Operador de Máquinas",
      dataNascimento: "1985-03-15",
      sexo: "Masculino",
      situacao: "Ativo",
      dataAdmissao: "2020-01-10",
      cpf: "123.456.789-00",
    },
    {
      id: 2,
      nome: "Maria Oliveira Costa",
      unidade: "Filial - Rio de Janeiro",
      setor: "Administrativo",
      cargo: "Assistente Administrativo",
      dataNascimento: "1990-07-22",
      sexo: "Feminino",
      situacao: "Ativo",
      dataAdmissao: "2019-05-15",
      cpf: "987.654.321-00",
    },
    {
      id: 3,
      nome: "Pedro Almeida Souza",
      unidade: "Matriz - São Paulo",
      setor: "Manutenção",
      cargo: "Técnico de Manutenção",
      dataNascimento: "1988-11-08",
      sexo: "Masculino",
      situacao: "Inativo",
      dataAdmissao: "2018-09-20",
      cpf: "456.789.123-00",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [currentFuncionario, setCurrentFuncionario] =
    useState<Funcionario | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState<Omit<Funcionario, "id">>({
    nome: "",
    unidade: "",
    setor: "",
    cargo: "",
    dataNascimento: "",
    sexo: "",
    situacao: "Ativo",
    dataAdmissao: "",
    cpf: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Dados fake para os selects
  const unidades = [
    "Matriz - São Paulo",
    "Filial - Rio de Janeiro",
    "Filial - Belo Horizonte",
    "Filial - Curitiba",
  ];
  const setores = [
    "Produção",
    "Administrativo",
    "Manutenção",
    "Qualidade",
    "Logística",
    "RH",
  ];
  const cargos = [
    "Operador de Máquinas",
    "Assistente Administrativo",
    "Técnico de Manutenção",
    "Analista de Qualidade",
    "Supervisor",
  ];

  const handleOpenModal = (funcionario?: Funcionario) => {
    if (funcionario) {
      setIsEditing(true);
      setCurrentFuncionario(funcionario);
      setFormData({
        nome: funcionario.nome,
        unidade: funcionario.unidade,
        setor: funcionario.setor,
        cargo: funcionario.cargo,
        dataNascimento: funcionario.dataNascimento,
        sexo: funcionario.sexo,
        situacao: funcionario.situacao,
        dataAdmissao: funcionario.dataAdmissao,
        cpf: funcionario.cpf,
      });
    } else {
      setIsEditing(false);
      setCurrentFuncionario(null);
      setFormData({
        nome: "",
        unidade: "",
        setor: "",
        cargo: "",
        dataNascimento: "",
        sexo: "",
        situacao: "Ativo",
        dataAdmissao: "",
        cpf: "",
      });
    }
    setErrors({});
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentFuncionario(null);
    setFormData({
      nome: "",
      unidade: "",
      setor: "",
      cargo: "",
      dataNascimento: "",
      sexo: "",
      situacao: "Ativo",
      dataAdmissao: "",
      cpf: "",
    });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome) newErrors.nome = "Nome é obrigatório";
    if (!formData.unidade) newErrors.unidade = "Unidade é obrigatória";
    if (!formData.setor) newErrors.setor = "Setor é obrigatório";
    if (!formData.cargo) newErrors.cargo = "Cargo é obrigatório";
    if (!formData.dataNascimento)
      newErrors.dataNascimento = "Data de nascimento é obrigatória";
    if (!formData.sexo) newErrors.sexo = "Sexo é obrigatório";
    if (!formData.situacao) newErrors.situacao = "Situação é obrigatória";
    if (!formData.dataAdmissao)
      newErrors.dataAdmissao = "Data de admissão é obrigatória";
    if (!formData.cpf) newErrors.cpf = "CPF é obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (isEditing && currentFuncionario) {
      setFuncionarios(
        funcionarios.map((f) =>
          f.id === currentFuncionario.id
            ? { ...formData, id: currentFuncionario.id }
            : f
        )
      );
    } else {
      const newId = Math.max(...funcionarios.map((f) => f.id), 0) + 1;
      setFuncionarios([...funcionarios, { ...formData, id: newId }]);
    }

    handleCloseModal();
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este funcionário?")) {
      setFuncionarios(funcionarios.filter((f) => f.id !== id));
    }
  };

  const handleToggleSituacao = (funcionario: Funcionario) => {
    setFuncionarios(
      funcionarios.map((f) =>
        f.id === funcionario.id
          ? { ...f, situacao: f.situacao === "Ativo" ? "Inativo" : "Ativo" }
          : f
      )
    );
  };

  const handleViewDetails = (funcionario: Funcionario) => {
    setCurrentFuncionario(funcionario);
    setDetailModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Funcionários</h1>
          <p className="text-gray-600 mt-1">
            Gerencie os funcionários da sua empresa
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-1 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Gerar M1</span>
        </button>
        <button
          onClick={() => handleOpenModal()}
          className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Novo Funcionário</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Funcionários Ativos</p>
              <p className="text-3xl font-bold text-gray-900">
                {funcionarios.filter((f) => f.situacao === "Ativo").length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">
                Funcionários Inativos
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {funcionarios.filter((f) => f.situacao === "Inativo").length}
              </p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <UserX className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">
                Total de Funcionários
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {funcionarios.length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Unidade
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Setor
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Cargo
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Situação
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {funcionarios.map((funcionario) => (
                <tr
                  key={funcionario.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {funcionario.nome}
                    </div>
                    <div className="text-sm text-gray-500">
                      {funcionario.cpf}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {funcionario.unidade}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {funcionario.setor}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {funcionario.cargo}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        funcionario.situacao === "Ativo"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {funcionario.situacao}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleViewDetails(funcionario)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Visualizar"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleOpenModal(funcionario)}
                        className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleToggleSituacao(funcionario)}
                        className={`p-2 rounded-lg transition-colors ${
                          funcionario.situacao === "Ativo"
                            ? "text-orange-600 hover:bg-orange-50"
                            : "text-green-600 hover:bg-green-50"
                        }`}
                        title={
                          funcionario.situacao === "Ativo"
                            ? "Inativar"
                            : "Ativar"
                        }
                      >
                        {funcionario.situacao === "Ativo" ? (
                          <UserX className="w-4 h-4" />
                        ) : (
                          <UserCheck className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => handleDelete(funcionario.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Excluir"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Cadastro/Edição */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {isEditing ? "Editar Funcionário" : "Novo Funcionário"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nome */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                      errors.nome
                        ? "border-red-500"
                        : "border-gray-300 focus:border-primary-500"
                    }`}
                    placeholder="Ex: João Silva Santos"
                  />
                  {errors.nome && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.nome}
                    </span>
                  )}
                </div>

                {/* Unidade */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unidade <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="unidade"
                    value={formData.unidade}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition bg-white ${
                      errors.unidade
                        ? "border-red-500"
                        : "border-gray-300 focus:border-primary-500"
                    }`}
                  >
                    <option value="">Selecione...</option>
                    {unidades.map((unidade) => (
                      <option key={unidade} value={unidade}>
                        {unidade}
                      </option>
                    ))}
                  </select>
                  {errors.unidade && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.unidade}
                    </span>
                  )}
                </div>

                {/* Setor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Setor <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="setor"
                    value={formData.setor}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition bg-white ${
                      errors.setor
                        ? "border-red-500"
                        : "border-gray-300 focus:border-primary-500"
                    }`}
                  >
                    <option value="">Selecione...</option>
                    {setores.map((setor) => (
                      <option key={setor} value={setor}>
                        {setor}
                      </option>
                    ))}
                  </select>
                  {errors.setor && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.setor}
                    </span>
                  )}
                </div>

                {/* Cargo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition bg-white ${
                      errors.cargo
                        ? "border-red-500"
                        : "border-gray-300 focus:border-primary-500"
                    }`}
                  >
                    <option value="">Selecione...</option>
                    {cargos.map((cargo) => (
                      <option key={cargo} value={cargo}>
                        {cargo}
                      </option>
                    ))}
                  </select>
                  {errors.cargo && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.cargo}
                    </span>
                  )}
                </div>

                {/* CPF */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CPF <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                      errors.cpf
                        ? "border-red-500"
                        : "border-gray-300 focus:border-primary-500"
                    }`}
                    placeholder="000.000.000-00"
                  />
                  {errors.cpf && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.cpf}
                    </span>
                  )}
                </div>

                {/* Data de Nascimento */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data de Nascimento <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                      errors.dataNascimento
                        ? "border-red-500"
                        : "border-gray-300 focus:border-primary-500"
                    }`}
                  />
                  {errors.dataNascimento && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.dataNascimento}
                    </span>
                  )}
                </div>

                {/* Sexo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sexo <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition bg-white ${
                      errors.sexo
                        ? "border-red-500"
                        : "border-gray-300 focus:border-primary-500"
                    }`}
                  >
                    <option value="">Selecione...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                  {errors.sexo && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.sexo}
                    </span>
                  )}
                </div>

                {/* Data de Admissão */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data de Admissão <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dataAdmissao"
                    value={formData.dataAdmissao}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                      errors.dataAdmissao
                        ? "border-red-500"
                        : "border-gray-300 focus:border-primary-500"
                    }`}
                  />
                  {errors.dataAdmissao && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.dataAdmissao}
                    </span>
                  )}
                </div>

                {/* Situação */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Situação <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="situacao"
                    value={formData.situacao}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition bg-white ${
                      errors.situacao
                        ? "border-red-500"
                        : "border-gray-300 focus:border-primary-500"
                    }`}
                  >
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                  {errors.situacao && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.situacao}
                    </span>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
                >
                  {isEditing ? "Salvar Alterações" : "Cadastrar Funcionário"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Detalhes */}
      {detailModalOpen && currentFuncionario && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
            <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Detalhes do Funcionário
              </h2>
              <button
                onClick={() => setDetailModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Nome Completo</p>
                  <p className="text-base font-semibold text-gray-900">
                    {currentFuncionario.nome}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">CPF</p>
                  <p className="text-base font-semibold text-gray-900">
                    {currentFuncionario.cpf}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Unidade</p>
                  <p className="text-base font-semibold text-gray-900">
                    {currentFuncionario.unidade}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Setor</p>
                  <p className="text-base font-semibold text-gray-900">
                    {currentFuncionario.setor}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Cargo</p>
                  <p className="text-base font-semibold text-gray-900">
                    {currentFuncionario.cargo}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Sexo</p>
                  <p className="text-base font-semibold text-gray-900">
                    {currentFuncionario.sexo}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Data de Nascimento
                  </p>
                  <p className="text-base font-semibold text-gray-900">
                    {formatDate(currentFuncionario.dataNascimento)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Data de Admissão</p>
                  <p className="text-base font-semibold text-gray-900">
                    {formatDate(currentFuncionario.dataAdmissao)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Situação</p>
                  <span
                    className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                      currentFuncionario.situacao === "Ativo"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {currentFuncionario.situacao}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setDetailModalOpen(false)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setDetailModalOpen(false);
                    handleOpenModal(currentFuncionario);
                  }}
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors flex items-center space-x-2"
                >
                  <Edit className="w-4 h-4" />
                  <span>Editar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FuncionariosPage;
