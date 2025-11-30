import { useState } from 'react';
import { MessageCircle, Phone, Mail, Send, FileText, ClipboardList, FileCheck, GraduationCap, Play, Search } from 'lucide-react';

const SuportePage = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Artigos da base de conhecimento
  const baseConhecimento = [
    { id: 1, icon: FileText, title: 'Documentos', count: 8 },
    { id: 2, icon: ClipboardList, title: 'Exames', count: 8 },
    { id: 3, icon: FileCheck, title: 'PGR e PCMSO', count: 8 },
    { id: 4, icon: GraduationCap, title: 'eSocial', count: 8 }
  ];

  // Tutoriais em vídeo
  const tutoriais = [
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
  ];

  // Mensagens do chat (simuladas)
  const [chatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Olá! Como posso ajudá-lo hoje?',
      time: '14:25'
    },
    {
      id: 2,
      type: 'user',
      text: 'Gostaria de saber sobre o prazo de entrega do PGR',
      time: '14:25'
    },
    {
      id: 3,
      type: 'bot',
      text: 'O PGR está previsto para ser entregue em 15/01/2025. Atualmente estamos com 65% de progresso. Você pode acompanhar em tempo real na tela de Serviços.',
      time: '14:26'
    }
  ]);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Aqui você adicionaria a lógica para enviar a mensagem
      console.log('Enviando mensagem:', chatMessage);
      setChatMessage('');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Central de Suporte</h1>
        <p className="text-gray-600">Estamos aqui para ajudar! Escolha como prefere receber suporte</p>
      </div>

      {/* Canais de Contato */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Chat ao Vivo */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl shadow-lg p-6 text-white">
          <MessageCircle className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">Chat ao vivo</h3>
          <p className="text-purple-100 text-sm mb-4">Tempo médio de resposta: 2 minutos</p>
          <button className="w-full bg-white text-purple-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-purple-50 transition-colors">
            Iniciar chat
          </button>
        </div>

        {/* Telefone */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200">
          <Phone className="w-10 h-10 text-green-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Telefone</h3>
          <p className="text-gray-600 text-sm mb-4">Seg-a Sex, 8h as 18h</p>
          <a
            href="tel:08007707070"
            className="block w-full text-center bg-white border-2 border-green-600 text-green-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-green-50 transition-colors"
          >
            0800 770 7070
          </a>
        </div>

        {/* E-mail */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200">
          <Mail className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail</h3>
          <p className="text-gray-600 text-sm mb-4">Resposta em até 24 horas</p>
          <a
            href="mailto:suporte@vidaconecta.com.br"
            className="block w-full text-center bg-white border-2 border-blue-600 text-blue-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Enviar e-mail
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Chat de Suporte */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-teal-600 p-4 flex items-center space-x-3">
            <MessageCircle className="w-6 h-6 text-white" />
            <div>
              <h3 className="text-white font-bold">Chat de suporte</h3>
              <p className="text-teal-100 text-xs">Online - Respondemos em minutos</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="bg-white p-6 h-80 overflow-y-auto">
            <div className="space-y-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 ${
                      msg.type === 'user'
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.type === 'user' ? 'text-purple-200' : 'text-gray-500'
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="bg-white p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Base de Conhecimento */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Base de conhecimento</h3>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artigos de ajuda..."
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>

            {/* Categorias */}
            <div className="space-y-3">
              {baseConhecimento.map((categoria) => {
                const Icon = categoria.icon;
                return (
                  <button
                    key={categoria.id}
                    className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-primary-500" />
                      <span className="font-semibold text-gray-900">{categoria.title}</span>
                    </div>
                    <span className="bg-gray-100 group-hover:bg-primary-100 text-gray-600 group-hover:text-primary-700 text-sm font-bold px-3 py-1 rounded-full">
                      {categoria.count} artigos
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tutoriais em Vídeo */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Play className="w-6 h-6 text-primary-500" />
            <h3 className="text-xl font-bold text-gray-900">Tutoriais em vídeo</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {tutoriais.map((tutorial) => (
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
    </div>
  );
};

export default SuportePage;
