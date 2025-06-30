import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Users, Heart, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-brown-dark leading-tight">
                Transforme sua <span className="bg-gradient-to-r from-brown-light via-sage-dark to-sage bg-clip-text text-transparent">saúde</span>
                <span className="bg-gradient-to-r from-brown-light via-sage-dark to-sage bg-clip-text text-transparent block">com nutrologia personalizada</span>
              </h1>
              <p className="text-xl text-brown-light leading-relaxed max-w-lg">
                Abordagem científica e individualizada para perda de peso, alergias alimentares,
                intolerâncias e suporte nutricional para condições crônicas.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/consulta"
                className="bg-sage text-white px-8 py-4 rounded-full text-lg font-medium tracking-button uppercase hover:bg-sage-dark transition-all duration-300 transform hover:scale-105 text-center"
              >
                Marcar Consulta
              </Link>
              <a
                href="https://wa.me/5511999999999?text=Olá%20Dra.%20Amanda%20Fernandes,%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium tracking-button uppercase hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 animate-pulse-slow" />
                WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-sage" />
                </div>
                <div className="font-playfair text-2xl font-bold text-sage">10+</div>
                <div className="text-brown-light text-sm">Anos de Especialização</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-sage" />
                </div>
                <div className="font-playfair text-2xl font-bold text-sage">1000+</div>
                <div className="text-brown-light text-sm">Vidas Transformadas</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="h-8 w-8 text-sage" />
                </div>
                <div className="font-playfair text-2xl font-bold text-sage">98%</div>
                <div className="text-brown-light text-sm">Taxa de Satisfação</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Calendar className="h-8 w-8 text-sage" />
                </div>
                <div className="font-playfair text-2xl font-bold text-sage">500+</div>
                <div className="text-brown-light text-sm">Planos Personalizados</div>
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-sage/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="/images/dra-amanda.png"
                  alt="Dra. Amanda Fernandes - Nutróloga"
                  className="w-full h-96 object-cover object-top rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-sage text-white p-4 rounded-2xl">
                  <div className="text-center">
                    <div className="font-playfair text-lg font-bold">Nutrologia</div>
                    <div className="text-sm">Nutrologia Especializada</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;