import { Download } from 'lucide-react';

interface ContratoContentProps {
  showDownloadButton?: boolean;
}

const ContratoContent = ({ showDownloadButton = true }: ContratoContentProps) => {
  return (
    <div className="bg-white p-8 space-y-6">
      {/* Header do Contrato */}
      <div className="text-center border-b-2 border-gray-300 pb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          CONTRATO DE PRESTAÇÃO DE SERVIÇOS
        </h1>
        <p className="text-lg text-gray-700">Segurança e Saúde do Trabalho</p>
      </div>

      {/* Informações das Partes */}
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-1">CONTRATANTE:</p>
          <p className="text-sm text-gray-700">Metalúrgica ABC Ltda.</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900 mb-1">CNPJ:</p>
          <p className="text-sm text-gray-700">11.111.111/1111-11</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900 mb-1">RESPONSÁVEL:</p>
          <p className="text-sm text-gray-700">Carlos Alberto Silva</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-1">CONTRATADA:</p>
          <p className="text-sm text-gray-700">Vida Conecta Soluções em SSMA Ltda.</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900 mb-1">CNPJ:</p>
          <p className="text-sm text-gray-700">12.345.678/0001-90</p>
        </div>
      </div>

      {/* Cláusulas */}
      <div className="space-y-6 border-t-2 border-gray-300 pt-6">
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            CLÁUSULA PRIMEIRA - DO OBJETO
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            O presente contrato tem por objeto a prestação de serviços especializados em Segurança e Saúde do Trabalho,
            incluindo:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
            <li>Elaboração e atualização do PGR (Programa de Gerenciamento de Riscos)</li>
            <li>Elaboração e atualização do PCMSO (Programa de Controle Médico de Saúde Ocupacional)</li>
            <li>Integração completa com eSocial (eventos S-2210, S-2220, S-2240)</li>
            <li>Coordenação e gestão de exames ocupacionais</li>
            <li>Acesso ao sistema InfoSesi para gestão completa</li>
            <li>Treinamentos aplicáveis às NRs pertinentes</li>
            <li>Suporte técnico especializado 24/7</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            CLÁUSULA SEGUNDA - DO PRAZO
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            O presente contrato terá vigência de 12 (doze) meses, iniciando-se em 21/11/2025 e encerrando-se em
            21/11/2026, podendo ser renovado mediante acordo entre as partes.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            CLÁUSULA TERCEIRA - DO VALOR E FORMA DE PAGAMENTO
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            O valor total dos serviços prestados será de R$ 14.350,50 (quatorze mil, trezentos e cinquenta reais e
            cinquenta centavos) mensais, a ser pago até o 10º (décimo) dia útil de cada mês.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Valor único de implementação: R$ 17.220,60 (dezessete mil, duzentos e vinte reais e sessenta centavos),
            a ser pago em até 30 dias após assinatura do contrato.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            CLÁUSULA QUARTA - DAS OBRIGAÇÕES DA CONTRATADA
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
            <li>Realizar visita técnica inicial em até 7 dias após assinatura do contrato</li>
            <li>Elaborar o PGR completo em até 30 dias após visita técnica</li>
            <li>Elaborar o PCMSO em até 15 dias após conclusão do PGR</li>
            <li>Manter todos os documentos atualizados conforme legislação vigente</li>
            <li>Fornecer acesso completo à plataforma InfoSesi</li>
            <li>Realizar integração com eSocial conforme prazos legais</li>
            <li>Disponibilizar suporte técnico especializado</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            CLÁUSULA QUINTA - DAS OBRIGAÇÕES DA CONTRATANTE
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
            <li>Fornecer todas as informações necessárias para elaboração dos documentos</li>
            <li>Enviar planilha M1 com dados dos funcionários em até 7 dias</li>
            <li>Permitir acesso às instalações para visitas técnicas</li>
            <li>Efetuar pagamentos nos prazos estabelecidos</li>
            <li>Comunicar quaisquer alterações na empresa que impactem os programas</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            CLÁUSULA SEXTA - DA RESCISÃO
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            O presente contrato poderá ser rescindido por qualquer das partes mediante comunicação prévia de 30
            (trinta) dias, sem ônus para nenhuma das partes.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            CLÁUSULA SÉTIMA - DO FORO
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            As partes elegem o foro da Comarca de São Paulo/SP para dirimir quaisquer dúvidas ou controvérsias
            oriundas do presente contrato.
          </p>
        </div>
      </div>

      {/* Assinaturas */}
      <div className="border-t-2 border-gray-300 pt-6 space-y-8">
        <p className="text-sm text-gray-700">
          E, por estarem assim justos e contratados, assinam o presente instrumento em 2 (duas) vias de igual teor e
          forma.
        </p>

        <div className="text-center text-sm text-gray-700">
          <p className="mb-8">São Paulo, 21 de novembro de 2025</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-6">
          <div className="text-center">
            <div className="border-t border-gray-400 pt-2">
              <p className="font-semibold text-sm text-gray-900">CONTRATANTE</p>
              <p className="text-sm text-gray-700">Metalúrgica ABC Ltda.</p>
              <p className="text-sm text-gray-700">Carlos Alberto Silva</p>
            </div>
          </div>

          <div className="text-center">
            <div className="border-t border-gray-400 pt-2">
              <p className="font-semibold text-sm text-gray-900">CONTRATADA</p>
              <p className="text-sm text-gray-700">Vida Conecta Soluções em SSMA Ltda.</p>
              <p className="text-sm text-gray-700">Representante Legal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Informações do Contrato */}
      <div className="bg-gray-50 rounded-lg p-4 mt-6">
        <p className="text-xs text-gray-600">
          <strong>Nº do Contrato:</strong> 2024/SSMA-9220
        </p>
        <p className="text-xs text-gray-600 mt-1">
          <strong>Data de Assinatura:</strong> 21/11/2025
        </p>
      </div>

      {/* Download Button */}
      {showDownloadButton && (
        <div className="flex justify-center pt-4">
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Baixar PDF</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ContratoContent;
