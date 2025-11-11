import React from 'react';
import { Search, FileText, Calendar } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-sage" />,
    title: "Diagnóstico Detalhado",
    description: "Análise aprofundada de exames, histórico médico e hábitos alimentares para identificar a raiz dos problemas."
  },
  {
    icon: <FileText className="h-10 w-10 text-sage" />,
    title: "Plano Personalizado",
    description: "Criação de um plano nutricional único, adaptado às suas necessidades, objetivos e estilo de vida."
  },
  {
    icon: <Calendar className="h-10 w-10 text-sage" />,
    title: "Acompanhamento Contínuo",
    description: "Ajustes e suporte constantes para garantir seu sucesso, com monitoramento de resultados e adaptações quando necessário."
  }
];

const Approach = () => {
  return (
    <section className="py-24 bg-white" id="abordagem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark mb-6">
<<<<<<< HEAD
            Minha Abordagem
=======
            Minha <span className="gradient-text">Abordagem</span>
>>>>>>> 06019b0b87080afde7fb6d0529967c7a19a8886c
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto">
            Um método científico e personalizado para resultados duradouros
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-sage/20 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg relative z-10 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white">
                  {step.icon}
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-brown-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-brown-light">
                  {step.description}
                </p>
                
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-brown-light max-w-3xl mx-auto">
            Cada paciente é único, e minha abordagem respeita essa individualidade. 
            Trabalho com base em evidências científicas, mas sempre considerando 
            suas preferências, rotina e objetivos pessoais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;