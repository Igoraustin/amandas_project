import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Users, Heart, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sage/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/Hero.tsx
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
========
=======
>>>>>>> 06019b0b87080afde7fb6d0529967c7a19a8886c
          <div className="space-y-8">
            <AnimatedSection animation="fadeLeft" delay={200}>
              <div className="space-y-6">
                <h1 className="font-playfair text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-brown-dark text-shadow">Transforme sua saúde</span>
                  <span className="gradient-text block text-shadow-strong">com nutrologia personalizada</span>
                </h1>
                <p className="text-xl text-brown-light leading-relaxed max-w-lg text-readable high-contrast">
                  Abordagem científica e individualizada para perda de peso, alergias alimentares,
                  intolerâncias e suporte nutricional para condições crônicas.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fadeUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/consulta"
                  className="btn-elegant gradient-sage text-white px-8 py-4 rounded-full text-lg font-medium tracking-button uppercase hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center relative overflow-hidden group"
                >
                  <span className="relative z-10">Marcar Consulta</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
                <a
                  href="https://wa.me/5511999999999?text=Olá%20Dra.%20Amanda,%20gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elegant bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium tracking-button uppercase hover:bg-green-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  <MessageCircle className="w-5 h-5 relative z-10" />
<<<<<<< HEAD
                  <span className="relative z-10">WhatsApp Direto</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                <a
                  href="#especialidades"
                  className="btn-elegant border-2 border-sage text-sage px-8 py-4 rounded-full text-lg font-medium tracking-button uppercase hover:bg-sage hover:text-white transition-all duration-300 text-center relative overflow-hidden group"
                >
                  <span className="relative z-10">Conhecer Mais</span>
                  <div className="absolute inset-0 bg-sage transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              </div>
            </AnimatedSection>
>>>>>>>> 06019b0b87080afde7fb6d0529967c7a19a8886c:project/src/components/Hero.tsx
=======
                  <span className="relative z-10">WhatsApp</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </div>
            </AnimatedSection>
>>>>>>> 06019b0b87080afde7fb6d0529967c7a19a8886c

            {/* Stats */}
            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {[
                  { icon: Award, number: "10+", text: "Anos de Especialização" },
                  { icon: Users, number: "1000+", text: "Vidas Transformadas" },
                  { icon: Heart, number: "98%", text: "Taxa de Satisfação" },
                  { icon: Calendar, number: "500+", text: "Planos Personalizados" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <AnimatedSection animation="scale" delay={800 + index * 100}>
                      <div className="flex justify-center mb-2 transform group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="h-8 w-8 text-sage" />
                      </div>
                      <div className="font-playfair text-2xl font-bold gradient-text">{stat.number}</div>
                      <div className="text-brown-light text-sm high-contrast">{stat.text}</div>
                    </AnimatedSection>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Photo */}
          <AnimatedSection animation="fadeRight" delay={300}>
            <div className="relative">
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/Hero.tsx
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
========
=======
>>>>>>> 06019b0b87080afde7fb6d0529967c7a19a8886c
              <div className="relative group">
                <div className="absolute inset-0 gradient-sage-light rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 card-elegant">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="./images/dra-amanda.jpg"
                      alt="Dra. Amanda Fernandes - Nutróloga"
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sage/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 gradient-sage text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-center">
                      <div className="font-playfair text-lg font-bold">Nutrologia</div>
                      <div className="text-sm">Especialista em Nutrição Médica</div>
                    </div>
<<<<<<< HEAD
>>>>>>>> 06019b0b87080afde7fb6d0529967c7a19a8886c:project/src/components/Hero.tsx
=======
>>>>>>> 06019b0b87080afde7fb6d0529967c7a19a8886c
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;