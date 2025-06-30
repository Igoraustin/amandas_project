import React from 'react';
import { GraduationCap, Stethoscope, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Photo */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dra. Amanda em consulta"
                className="w-full h-96 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage/20 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark">
                Sobre a
                <span className="text-sage block">Dra. Amanda</span>
              </h2>
              <p className="text-lg text-brown-light leading-relaxed">
                Com mais de 15 anos dedicados à medicina, a Dra. Amanda combina conhecimento 
                técnico avançado com um atendimento humanizado e personalizado. Sua paixão pela 
                medicina começou cedo, sempre buscando compreender não apenas os sintomas, mas 
                o contexto completo de cada paciente.
              </p>
              <p className="text-lg text-brown-light leading-relaxed">
                Especialista em medicina interna, ela acredita que cada paciente é único e 
                merece um cuidado individualizado, baseado em evidências científicas e 
                uma relação de confiança mútua.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-sage/20 rounded-full">
                  <GraduationCap className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-sage mb-1">Formação de Excelência</h3>
                  <p className="text-brown-light">Graduação pela USP e especialização em centros de referência</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-sage/20 rounded-full">
                  <Stethoscope className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-sage mb-1">Experiência Clínica</h3>
                  <p className="text-brown-light">Mais de 15 anos de prática médica em diversas especialidades</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-sage/20 rounded-full">
                  <Users className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-sage mb-1">Atendimento Humanizado</h3>
                  <p className="text-brown-light">Foco na relação médico-paciente e cuidado integral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;