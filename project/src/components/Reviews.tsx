import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const Reviews = () => {
  const platforms = [
    {
      name: "Google",
      rating: 4.9,
      reviews: 127,
      link: "https://google.com/reviews/dramanda",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Doctoralia",
      rating: 4.8,
      reviews: 89,
      link: "https://doctoralia.com/dramanda",
      logo: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark mb-6">
            Avaliações
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto">
            Veja o que nossos pacientes avaliam sobre nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-playfair font-semibold text-brown-dark">
                  {platform.name}
                </h3>
                <ExternalLink className="h-6 w-6 text-brown-light group-hover:text-sage transition-colors" />
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < Math.floor(platform.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-sage">
                  {platform.rating}
                </span>
              </div>

              <p className="text-brown-light">
                Baseado em <span className="font-semibold">{platform.reviews} avaliações</span>
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sage font-medium group-hover:text-sage-dark transition-colors">
                  Ver todas as avaliações
                </span>
                <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center group-hover:bg-sage/40 transition-colors">
                  <ExternalLink className="h-4 w-4 text-sage" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;