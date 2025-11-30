import { Activity } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import vivaLogo from "../assets/viva+.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employees: 56,
    cnae: "25.39.0.0",
    units: 2,
    maturity: "initial",
  });

  const [errors, setErrors] = useState({
    employees: "",
    cnae: "",
    units: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Limpar erros anteriores
    const newErrors = {
      employees: "",
      cnae: "",
      units: "",
    };

    // Validação de campos obrigatórios
    let hasError = false;

    if (!formData.employees) {
      newErrors.employees = "Este campo é obrigatório";
      hasError = true;
    }

    if (!formData.cnae) {
      newErrors.cnae = "Este campo é obrigatório";
      hasError = true;
    }

    if (!formData.units) {
      newErrors.units = "Este campo é obrigatório";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      return;
    }

    // Navegar para a página de proposta com os dados
    navigate("/proposta", { state: formData });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="mb-6">
              <img src={vivaLogo} alt="Viva+" className="h-24 md:h-32 w-auto" />
            </div>

            <p className="text-xl text-gray-700 leading-relaxed font-semibold">
              Mais Inteligência. Mais Saúde. Mais resultados.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <h2
              className="text-2xl font-bold text-primary-500 mb-2"
              style={{ fontFamily: "PT Sans, sans-serif" }}
            >
              Solicite uma Proposta
            </h2>
            <p className="text-gray-600 mb-6">
              Receba uma proposta personalizada para sua empresa
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Número de funcionários <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  placeholder="Ex: 150"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                    errors.employees
                      ? "border-red-500"
                      : "border-gray-300 focus:border-primary-500"
                  }`}
                />
                {errors.employees && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.employees}
                  </span>
                )}
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  CNAE da empresa <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cnae"
                  value={formData.cnae}
                  onChange={handleChange}
                  placeholder="Ex: 25.39-0-00"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                    errors.cnae
                      ? "border-red-500"
                      : "border-gray-300 focus:border-primary-500"
                  }`}
                />
                {errors.cnae && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.cnae}
                  </span>
                )}
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Número de unidades <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="units"
                  value={formData.units}
                  onChange={handleChange}
                  placeholder="Ex: 3"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition ${
                    errors.units
                      ? "border-red-500"
                      : "border-gray-300 focus:border-primary-500"
                  }`}
                />
                {errors.units && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.units}
                  </span>
                )}
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Activity className="w-4 h-4 mr-2 text-primary-500" />
                  Área de interesse
                </label>
                <select
                  name="maturity"
                  value={formData.maturity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
                >
                  <option value="initial">Saúde Ocupacional</option>
                  <option value="developing">Segurança do Trabalho</option>
                  <option value="advanced">Medicina do Trabalho</option>
                  <option value="mature">Gestão Completa</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Solicitar Proposta
              </button>

              <p className="text-center text-sm text-gray-500">
                Sem compromisso • Resposta rápida
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
