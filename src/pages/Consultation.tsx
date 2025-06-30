import React from 'react';
import { MessageCircle, Calendar, Clock, CheckCircle, Phone, Mail } from 'lucide-react';

const Consultation = () => {
  const services = [
    "Consulta de rotina e check-up completo",
    "Acompanhamento de doenças crônicas",
    "Medicina preventiva",
    "Orientação nutricional",
    "Controle de pressão arterial",
    "Gestão do diabetes",
    "Avaliação cardiológica",
    "Programas de bem-estar"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-brown-dark mb-6">
              Agende sua
              <span className="text-sage block">Consulta</span>
            </h1>
            <p className="text-xl text-brown-light max-w-3xl mx-auto">
              Cuidar da sua saúde é nossa prioridade. Agende sua consulta de forma 
              rápida e conveniente através dos nossos canais de atendimento
            </p>
          </div>

          {/* Main CTA */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="bg-cream rounded-3xl p-12 shadow-lg">
              <MessageCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="font-playfair text-3xl font-semibold text-brown-dark mb-4">
                WhatsApp Direto
              </h2>
              <p className="text-brown-light mb-8">
                Fale diretamente comigo pelo WhatsApp para agendar sua consulta. 
                Atendimento rápido e personalizado.
              </p>
              <a
                href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta com a Dra. Amanda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-brown-dark mb-6">
              Serviços Oferecidos
            </h2>
            <p className="text-xl text-brown-light max-w-2xl mx-auto">
              Atendimento médico completo e personalizado para suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-6 w-6 text-sage flex-shrink-0" />
                <span className="text-brown-dark font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-brown-dark mb-6">
              Outras Formas de Contato
            </h2>
            <p className="text-xl text-brown-light max-w-2xl mx-auto">
              Escolha a forma mais conveniente para entrar em contato
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Phone */}
            <div className="bg-cream rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-slide-up">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-4">
                Telefone
              </h3>
              <p className="text-brown-light mb-6">
                Ligue diretamente para nossa clínica
              </p>
              <p className="text-brown-dark font-semibold mb-4">
                (11) 99999-9999
              </p>
              <a
                href="tel:+5511999999999"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Ligar Agora
              </a>
            </div>

            {/* Email */}
            <div className="bg-cream rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-sage" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-4">
                Email
              </h3>
              <p className="text-brown-light mb-6">
                Envie suas dúvidas por email
              </p>
              <p className="text-brown-dark font-semibold mb-4">
                contato@dramanda.com.br
              </p>
              <a
                href="mailto:contato@dramanda.com.br"
                className="inline-block bg-sage text-white px-6 py-3 rounded-full font-medium hover:bg-sage-dark transition-colors"
              >
                Enviar Email
              </a>
            </div>

            {/* Schedule */}
            <div className="bg-cream rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-sage" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-4">
                Horários
              </h3>
              <div className="text-brown-light space-y-2 mb-6">
                <p>Segunda a Sexta: 08:00 - 18:00</p>
                <p>Sábado: 08:00 - 12:00</p>
                <p>Domingo: Emergências</p>
              </div>
              <div className="inline-block bg-sage text-white px-6 py-3 rounded-full font-medium">
                Horário de Funcionamento
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl font-bold text-brown-dark mb-4">
                  Informações Importantes
                </h2>
                <p className="text-brown-light">
                  Para um atendimento mais eficiente, observe as seguintes orientações
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="font-playfair text-xl font-semibold text-brown-dark">
                    Para Primeira Consulta
                  </h3>
                  <ul className="space-y-3 text-brown-light">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                      <span>Documentos pessoais (RG, CPF)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                      <span>Carteira do convênio (se houver)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                      <span>Exames recentes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                      <span>Lista de medicamentos em uso</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="font-playfair text-xl font-semibold text-brown-dark">
                    Políticas de Atendimento
                  </h3>
                  <ul className="space-y-3 text-brown-light">
                    <li className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                      <span>Pontualidade é importante</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                      <span>Cancelamentos com 24h de antecedência</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <MessageCircle className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                      <span>Confirmação da consulta por WhatsApp</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                      <span>Contato direto para emergências</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;