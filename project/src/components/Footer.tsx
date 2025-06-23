import React from 'react';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sage" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sage" />
                <span className="text-gray-300">contato@dramanda.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-sage" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold">Links Rápidos</h3>
            <div className="space-y-3">
              <a href="#sobre" className="block text-gray-300 hover:text-sage transition-colors">
                Sobre a Dra. Amanda
              </a>
              <a href="/formacao" className="block text-gray-300 hover:text-sage transition-colors">
                Formação Acadêmica
              </a>
              <a href="/blog" className="block text-gray-300 hover:text-sage transition-colors">
                Blog
              </a>
              <a href="/consulta" className="block text-gray-300 hover:text-sage transition-colors">
                Agendar Consulta
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/dramanda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brown-light rounded-full hover:bg-sage transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Siga para dicas de saúde e bem-estar
            </p>
          </div>
        </div>

        <div className="border-t border-brown-light/30 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <span>© 2024 Dra. Amanda. Feito com</span>
            <Heart className="h-4 w-4 text-sage" />
            <span>para seus pacientes.</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Todos os direitos reservados. | Termos de Uso | Política de Privacidade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;