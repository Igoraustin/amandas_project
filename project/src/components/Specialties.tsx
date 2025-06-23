import React from 'react';
import { Scale, Leaf, Heart, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const specialtyData = [
  {
    icon: <Scale className="h-10 w-10 text-sage" />,
    title: "Perda de Peso e Metabolismo",
    description: "Abordagem científica para emagrecimento saudável e duradouro, com foco na composição corporal e equilíbrio metabólico.",
    gradient: "from-green-100 to-sage/20"
  },
  {
    icon: <Leaf className="h-10 w-10 text-sage" />,
    title: "Alergias e Saúde Intestinal",
    description: "Identificação e manejo de alergias e intolerâncias alimentares, recuperação da saúde intestinal e equilíbrio da microbiota.",
    gradient: "from-blue-100 to-sage/20"
  },
  {
    icon: <Heart className="h-10 w-10 text-sage" />,
    title: "Doenças Crônicas",
    description: "Suporte nutricional especializado para pacientes com condições crônicas, melhorando qualidade de vida e potencializando tratamentos.",
    gradient: "from-purple-100 to-sage/20"
  },
  {
    icon: <Shield className="h-10 w-10 text-sage" />,
    title: "Nutrição Preventiva",
    description: "Estratégias nutricionais para prevenção de doenças, longevidade e otimização da saúde em todas as fases da vida.",
    gradient: "from-yellow-100 to-sage/20"
  }
];

const Specialties = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="especialidades">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sage/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark mb-6 text-shadow">
            Minhas <span className="gradient-text">Especialidades</span>
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto text-readable high-contrast">
            Áreas de atuação onde a nutrologia pode transformar sua saúde e bem-estar
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialtyData.map((specialty, index) => (
            <AnimatedSection 
              key={index} 
              animation="fadeUp" 
              delay={index * 150}
              className="group"
            >
              <div className="card-elegant bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                    {specialty.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-4 group-hover:text-sage transition-colors duration-300">
                    {specialty.title}
                  </h3>
                  <p className="text-brown-light text-sm opacity-70 group-hover:opacity-100 transition-all duration-300 text-readable high-contrast transform group-hover:translate-y-0 translate-y-2">
                    {specialty.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-sage/0 group-hover:border-sage/30 rounded-3xl transition-all duration-300"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;