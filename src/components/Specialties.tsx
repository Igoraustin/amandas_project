import React from 'react';
import { Scale, Leaf, Heart, Shield } from 'lucide-react';

const specialtyData = [
  {
    icon: <Scale className="h-10 w-10 text-sage" />,
    title: "Perda de Peso e Metabolismo",
    description: "Abordagem científica para emagrecimento saudável e duradouro, com foco na composição corporal e equilíbrio metabólico."
  },
  {
    icon: <Leaf className="h-10 w-10 text-sage" />,
    title: "Alergias e Saúde Intestinal",
    description: "Identificação e manejo de alergias e intolerâncias alimentares, recuperação da saúde intestinal e equilíbrio da microbiota."
  },
  {
    icon: <Heart className="h-10 w-10 text-sage" />,
    title: "Doenças Crônicas",
    description: "Suporte nutricional especializado para pacientes com condições crônicas, melhorando qualidade de vida e potencializando tratamentos."
  },
  {
    icon: <Shield className="h-10 w-10 text-sage" />,
    title: "Nutrição Preventiva",
    description: "Estratégias nutricionais para prevenção de doenças, longevidade e otimização da saúde em todas as fases da vida."
  }
];

const Specialties = () => {
  return (
    <section className="py-24 bg-white" id="especialidades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark mb-6">
            Minhas Especialidades
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto">
            Áreas de atuação onde a nutrologia pode transformar sua saúde e bem-estar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialtyData.map((specialty, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {specialty.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-4">
                {specialty.title}
              </h3>
              <p className="text-brown-light text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;