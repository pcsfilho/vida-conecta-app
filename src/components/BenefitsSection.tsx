import { Shield, Activity, FileText } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Gestão Integrada',
      description: 'Soluções completas em saúde ocupacional, segurança do trabalho e medicina do trabalho, tudo em uma plataforma integrada.'
    },
    {
      icon: Activity,
      title: 'Redução de Custos',
      description: 'Metodologia própria focada em reduzir afastamentos, sinistralidade e custos operacionais da sua empresa.'
    },
    {
      icon: FileText,
      title: 'Conformidade Total',
      description: 'Sistema sempre atualizado com as NRs vigentes, garantindo conformidade legal e segurança para seu negócio.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-primary-500 mb-4"
            style={{ fontFamily: 'PT Sans, sans-serif' }}
          >
            Por que escolher o SESI Saúde?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experiência consolidada em saúde e segurança do trabalho para a indústria brasileira
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>

              <h3
                className="text-xl font-bold text-primary-500 mb-3"
                style={{ fontFamily: 'PT Sans, sans-serif' }}
              >
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
