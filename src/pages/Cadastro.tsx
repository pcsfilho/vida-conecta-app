import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Building2, User, Mail, Phone } from "lucide-react";

interface CadastroData {
  cnpj: string;
  nomeEmpresa: string;
  nomeResponsavel: string;
  email: string;
  telefone: string;
  aceitaTermos: boolean;
}

const Cadastro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const propostaData = location.state;

  const [formData, setFormData] = useState<CadastroData>({
    cnpj: "38338317000105",
    nomeEmpresa: "TREINA TECH",
    nomeResponsavel: "Raquel Guedes",
    email: "treinatechdesenvolviment@gmail.com",
    telefone: "7592881730",
    aceitaTermos: true,
  });

  const [errors, setErrors] = useState({
    cnpj: "",
    nomeEmpresa: "",
    nomeResponsavel: "",
    email: "",
    telefone: "",
    aceitaTermos: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const formatCNPJ = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 14) {
      return numbers
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }
    return value;
  };

  const formatTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return value;
  };

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCNPJ(e.target.value);
    setFormData({ ...formData, cnpj: formatted });

    // Limpar erro do campo
    if (errors.cnpj) {
      setErrors({ ...errors, cnpj: "" });
    }
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTelefone(e.target.value);
    setFormData({ ...formData, telefone: formatted });

    // Limpar erro do campo
    if (errors.telefone) {
      setErrors({ ...errors, telefone: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Limpar erros anteriores
    const newErrors = {
      cnpj: "",
      nomeEmpresa: "",
      nomeResponsavel: "",
      email: "",
      telefone: "",
      aceitaTermos: "",
    };

    // Validação de campos obrigatórios
    let hasError = false;

    if (!formData.cnpj) {
      newErrors.cnpj = "Este campo é obrigatório";
      hasError = true;
    }

    if (!formData.nomeEmpresa) {
      newErrors.nomeEmpresa = "Este campo é obrigatório";
      hasError = true;
    }

    if (!formData.nomeResponsavel) {
      newErrors.nomeResponsavel = "Este campo é obrigatório";
      hasError = true;
    }

    if (!formData.email) {
      newErrors.email = "Este campo é obrigatório";
      hasError = true;
    }

    if (!formData.telefone) {
      newErrors.telefone = "Este campo é obrigatório";
      hasError = true;
    }

    if (!formData.aceitaTermos) {
      newErrors.aceitaTermos =
        "Você deve aceitar os termos de uso e política de privacidade";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      return;
    }

    // Aqui você faria a chamada à API para criar a conta
    console.log("Dados do cadastro:", formData);
    console.log("Dados da proposta:", propostaData);

    // Redirecionar para dashboard
    navigate("/dashboard", { state: formData });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Crie sua conta
          </h1>
          <p className="text-lg text-gray-600">
            Preencha os dados abaixo para acessar sua proposta e começar sua
            jornada digital
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* CNPJ */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Building2 className="w-4 h-4 mr-2 text-primary-500" />
                CNPJ da empresa <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleCNPJChange}
                placeholder="00.000.000/0000-00"
                maxLength={18}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                  errors.cnpj
                    ? "border-red-500"
                    : "border-gray-300 focus:border-primary-500"
                }`}
              />
              {errors.cnpj && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.cnpj}
                </span>
              )}
            </div>

            {/* Nome da Empresa */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Building2 className="w-4 h-4 mr-2 text-primary-500" />
                Nome da empresa <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nomeEmpresa"
                value={formData.nomeEmpresa}
                onChange={handleChange}
                placeholder="Razão social da empresa"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                  errors.nomeEmpresa
                    ? "border-red-500"
                    : "border-gray-300 focus:border-primary-500"
                }`}
              />
              {errors.nomeEmpresa && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.nomeEmpresa}
                </span>
              )}
            </div>

            {/* Nome do Responsável */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 mr-2 text-primary-500" />
                Nome do responsável <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nomeResponsavel"
                value={formData.nomeResponsavel}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                  errors.nomeResponsavel
                    ? "border-red-500"
                    : "border-gray-300 focus:border-primary-500"
                }`}
              />
              {errors.nomeResponsavel && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.nomeResponsavel}
                </span>
              )}
            </div>

            {/* E-mail */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 mr-2 text-primary-500" />
                E-mail corporativo <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@empresa.com.br"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 focus:border-primary-500"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Telefone */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 mr-2 text-primary-500" />
                Telefone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleTelefoneChange}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                  errors.telefone
                    ? "border-red-500"
                    : "border-gray-300 focus:border-primary-500"
                }`}
              />
              {errors.telefone && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.telefone}
                </span>
              )}
            </div>

            {/* Termos */}
            <div>
              <div
                className={`flex items-start space-x-3 p-4 rounded-lg ${
                  errors.aceitaTermos
                    ? "bg-red-50 border-2 border-red-500"
                    : "bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  name="aceitaTermos"
                  checked={formData.aceitaTermos}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
                <label className="text-sm text-gray-700">
                  Aceito os termos de uso e política de privacidade do Vida
                  Conecta. Autorizo o recebimento de comunicações sobre minha
                  conta e serviços contratados.{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.aceitaTermos && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.aceitaTermos}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Criar conta e acessar plataforma</span>
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

            {/* Info Text */}
            <p className="text-center text-sm text-gray-600">
              Após criar sua conta, você será automaticamente direcionado ao
              painel de onboarding onde poderá acompanhar todos os passos da
              implementação.
            </p>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center border-t border-gray-200 pt-6">
            <p className="text-gray-600">
              Já tem uma conta?{" "}
              <a
                href="#login"
                className="text-primary-500 hover:text-primary-600 font-semibold"
              >
                Faça login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
