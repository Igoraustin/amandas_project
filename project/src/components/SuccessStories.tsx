import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Scale, Leaf, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const successStories = [
  {
    icon: <Scale className="h-8 w-8 text-sage" />,
    title: "Jornada de Perda de Peso Sustentável",
    profile: "Paciente M.L., 42 anos",
    challenge: "Lutava contra obesidade há mais de 10 anos, com múltiplas tentativas frustradas de dietas restritivas.",
    approach: "Desenvolvemos um plano nutricional personalizado com foco em equilíbrio metabólico e mudanças graduais de hábitos.",
    result: "-18kg em 8 meses",
    quote: "Pela primeira vez, consegui perder peso sem me sentir privada ou com fome constante. Minha relação com a comida mudou completamente.",
    chartData: [95, 92, 88, 84, 80, 77],
    color: "from-green-400 to-green-600"
  },
  {
    icon: <Leaf className="h-8 w-8 text-sage" />,
    title: "Superação de Intolerâncias Alimentares",
    profile: "Paciente J.P., 35 anos",
    challenge: "Sofria com sintomas digestivos crônicos, fadiga e enxaquecas frequentes sem diagnóstico preciso.",
    approach: "Realizamos testes específicos e implementamos um protocolo de eliminação e reintrodução para identificar gatilhos alimentares.",
    result: "Redução de 90% nos sintomas digestivos",
    quote: "Descobrir quais alimentos estavam causando meus problemas mudou minha vida. Hoje tenho energia e disposição que não lembrava ser possível.",
    chartData: [8, 7, 5, 3, 2, 1],
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <Heart className="h-8 w-8 text-sage" />,
    title: "Controle de Diabetes Tipo 2",
    profile: "Paciente A.S., 58 anos",
    challenge: "Diagnóstico recente de diabetes tipo 2 com glicemia descontrolada e resistência à insulina.",
    approach: "Criamos um plano nutricional específico para controle glicêmico, com ênfase em alimentos de baixo índice glicêmico e timing das refeições.",
    result: "HbA1c reduzida de 8.2% para 6.1%",
    quote: "Consegui controlar minha diabetes sem medicação adicional. Meu médico ficou impressionado com a melhora nos meus exames.",
    chartData: [8.2, 7.8, 7.2, 6.8, 6.4, 6.1],
    color: "from-purple-400 to-purple-600"
  }
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };
  
  const prevStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length);
  };
  
  const story = successStories[currentIndex];
  
  return (
    <section className="py-24 gradient-bg relative overflow-hidden" id="resultados">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-sage/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark mb-6 text-shadow">
            Resultados que <span className="gradient-text">Inspiram</span>
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto text-readable high-contrast">
            Histórias reais de transformação através da nutrologia personalizada
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="scale" delay={300}>
          <div className="card-elegant bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-5 transition-all duration-700`}></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              {/* Left: Story Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-brown-dark text-shadow">{story.title}</h3>
                    <p className="text-sage font-medium">{story.profile}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="transform hover:translate-x-2 transition-transform duration-300">
                    <h4 className="font-playfair text-lg font-semibold text-brown-dark">O Desafio</h4>
                    <p className="text-brown-light text-readable high-contrast">{story.challenge}</p>
                  </div>
                  
                  <div className="transform hover:translate-x-2 transition-transform duration-300">
                    <h4 className="font-playfair text-lg font-semibold text-brown-dark">A Abordagem</h4>
                    <p className="text-brown-light text-readable high-contrast">{story.approach}</p>
                  </div>
                  
                  <div className="transform hover:translate-x-2 transition-transform duration-300">
                    <h4 className="font-playfair text-lg font-semibold text-brown-dark">O Resultado</h4>
                    <p className="gradient-text font-bold text-2xl">{story.result}</p>
                  </div>
                  
                  <div className="border-l-4 border-sage pl-4 italic bg-sage/5 p-4 rounded-r-lg transform hover:translate-x-2 transition-transform duration-300">
                    <p className="text-brown-light text-readable">"{story.quote}"</p>
                  </div>
                </div>
              </div>
              
              {/* Right: Chart */}
              <div className="flex items-center justify-center">
                <div className="w-full h-64 bg-cream/50 rounded-xl p-6 glass">
                  <div className="h-full flex items-end justify-between">
                    {story.chartData.map((value, index) => (
                      <div 
                        key={index} 
                        className={`w-8 bg-gradient-to-t ${story.color} rounded-t-md transform hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                        style={{ 
                          height: `${(value / Math.max(...story.chartData)) * 100}%`,
                          opacity: 0.7 + (index / story.chartData.length) * 0.3,
                          animationDelay: `${index * 100}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="mt-2 text-center text-sm text-brown-light high-contrast">
                    Evolução ao longo do tempo
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-5 -translate-y-1/2">
              <button 
                onClick={prevStory}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                aria-label="História anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-5 -translate-y-1/2">
              <button 
                onClick={nextStory}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                aria-label="Próxima história"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentIndex ? 'bg-sage shadow-lg' : 'bg-sage/30 hover:bg-sage/50'
                  }`}
                  aria-label={`História ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SuccessStories;