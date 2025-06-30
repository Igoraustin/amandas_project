import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Dra. Amanda é uma profissional excepcional. Seu atendimento humanizado e conhecimento técnico me deram total confiança no tratamento.",
      role: "Paciente há 3 anos"
    },
    {
      name: "João Santos",
      text: "Finalmente encontrei uma médica que realmente ouve e se preocupa com seus pacientes. Recomendo de olhos fechados!",
      role: "Paciente há 2 anos"
    },
    {
      name: "Ana Costa",
      text: "O cuidado e a atenção da Dra. Amanda foram fundamentais na minha recuperação. Uma médica dedicada e competente.",
      role: "Paciente há 4 anos"
    },
    {
      name: "Carlos Oliveira",
      text: "Profissional de altíssimo nível. Combina conhecimento técnico com um atendimento verdadeiramente humano.",
      role: "Paciente há 1 ano"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark mb-6">
            Depoimentos
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto">
            O que nossos pacientes dizem sobre o atendimento
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-cream rounded-3xl p-12 relative overflow-hidden">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-sage/30" />
            
            <div className="relative z-10 text-center">
              <p className="text-2xl text-brown-dark font-light leading-relaxed mb-8 font-playfair">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="font-semibold text-sage text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-brown-light">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-sage/10"
            >
              <ChevronLeft className="h-6 w-6 text-sage" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-sage/10"
            >
              <ChevronRight className="h-6 w-6 text-sage" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-sage' : 'bg-brown-light/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;