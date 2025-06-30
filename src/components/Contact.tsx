import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Calendar, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark mb-6">
            Agende sua Consulta
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto">
            Transforme sua saúde através da nutrição médica personalizada. Entre em contato para iniciar sua jornada de bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* WhatsApp */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-4">
              WhatsApp
            </h3>
            <p className="text-brown-light mb-6">
              Atendimento rápido e personalizado
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá%20Dra.%20Amanda,%20gostaria%20de%20agendar%20uma%20consulta%20de%20Nutrologia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar Consulta
            </a>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-sage" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-4">
              Consultas
            </h3>
            <p className="text-brown-light mb-6">
              Presencial e Telemedicina
            </p>
            <Link
              to="/consulta"
              className="inline-block bg-sage text-white px-6 py-3 rounded-full font-medium hover:bg-sage-dark transition-colors"
            >
              Marcar
            </Link>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-4">
              Telefone
            </h3>
            <p className="text-brown-light mb-6">
              Horário comercial: 8h às 18h
            </p>
            <a
              href="tel:+5511999999999"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Ligar
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-sage" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-4">
              Email
            </h3>
            <p className="text-brown-light mb-6">
              Dúvidas e informações
            </p>
            <a
              href="mailto:contato@dramanda.com.br"
              className="inline-block bg-sage text-white px-6 py-3 rounded-full font-medium hover:bg-sage-dark transition-colors"
            >
              Enviar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;