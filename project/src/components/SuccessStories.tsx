import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Scale, Leaf, Heart } from 'lucide-react';

const successStories = [
  {
    icon: <Scale className="h-8 w-8 text-sage" />,
    title: "Jornada de Perda de Peso Sustentável",
    profile: "Paciente M.L., 42 anos",
    challenge: "Lutava contra obesidade há mais de 10 anos, com múltiplas tentativas frustradas de dietas restritivas.",
    approach: "Desenvolvemos um plano nutricional personalizado com foco em equilíbrio metabólico e mudanças graduais de hábitos.",
    result: "-18kg em 8 meses",
    quote: "Pela primeira vez, consegui perder peso sem me sentir privada ou com fome constante. Minha relação com a comida mudou completamente.",
    chartData: [95, 92, 88, 84, 80, 77] // Dados simplificados para o gráfico
  },
  {
    icon: <Leaf className="h-8 w-8 text-sage" />,
    title: "Superação de Intolerâncias Alimentares",
    profile: "Paciente J.P., 35 anos",
    challenge: "Sofria com sintomas digestivos crônicos, fadiga e enxaquecas frequentes sem diagnóstico preciso.",
    approach: "Realizamos testes específicos e implementamos um protocolo de eliminação e reintrodução para identificar gatilhos alimentares.",
    result: "Redução de 90% nos sintomas digestivos",
    quote: "Descobrir quais alimentos estavam causando meus problemas mudou minha vida. Hoje tenho energia e disposição que não lembrava ser possível.",
    chartData: [8, 7, 5, 3, 2, 1] // Escala de sintomas (0-10)
  },
  {
    icon: <Heart className="h-8 w-8 text-sage" />,
    title: "Controle de Diabetes Tipo 2",
    profile: "Paciente A.S., 58 anos",
    challenge: "Diagnóstico recente de diabetes tipo 2 com glicemia descontrolada e resistência à insulina.",
    approach: "Criamos um plano nutricional específico para controle glicêmico, com ênfase em alimentos de baixo índice glicêmico e timing das refeições.",
    result: "HbA1c reduzida de 8.2% para 6.1%",
    quote: "Consegui controlar minha diabetes sem medicação adicional. Meu médico ficou impressionado com a melhora nos meus exames.",
    chartData: [8.2, 7.8, 7.2, 6.8, 6.4, 6.1] // Valores de HbA1c
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
    <section className="py-24 bg-cream" id="resultados">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark mb-6">
            Resultados que Inspiram
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto">
            Histórias reais de transformação através da nutrologia personalizada
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Story Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center">
                  {story.icon}
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-brown-dark">{story.title}</h3>
                  <p className="text-sage font-medium">{story.profile}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-playfair text-lg font-semibold text-brown-dark">O Desafio</h4>
                  <p className="text-brown-light">{story.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-playfair text-lg font-semibold text-brown-dark">A Abordagem</h4>
                  <p className="text-brown-light">{story.approach}</p>
                </div>
                
                <div>
                  <h4 className="font-playfair text-lg font-semibold text-brown-dark">O Resultado</h4>
                  <p className="text-sage font-bold text-2xl">{story.result}</p>
                </div>
                
                <div className="border-l-4 border-sage pl-4 italic">
                  <p className="text-brown-light">"{story.quote}"</p>
                </div>
              </div>
            </div>
            
            {/* Right: Chart */}
            <div className="flex items-center justify-center">
              <div className="w-full h-64 bg-cream/50 rounded-xl p-6">
                {/* Simplified Chart Representation */}
                <div className="h-full flex items-end justify-between">
                  {story.chartData.map((value, index) => (
                    <div 
                      key={index} 
                      className="w-8 bg-sage rounded-t-md"
                      style={{ 
                        height: `${(value / Math.max(...story.chartData)) * 100}%`,
                        opacity: 0.5 + (index / story.chartData.length) * 0.5
                      }}
                    ></div>
                  ))}
                </div>
                <div className="mt-2 text-center text-sm text-brown-light">
                  Evolução ao longo do tempo
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-5 -translate-y-1/2">
            <button 
              onClick={prevStory}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-colors"
              aria-label="História anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-5 -translate-y-1/2">
            <button 
              onClick={nextStory}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-colors"
              aria-label="Próxima história"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-sage' : 'bg-sage/30'
                }`}
                aria-label={`História ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;