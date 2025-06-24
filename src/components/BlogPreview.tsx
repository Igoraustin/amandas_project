import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title: "Como a Nutrologia pode ajudar na perda de peso sustentável",
      excerpt: "Descubra a abordagem científica para emagrecer de forma saudável e duradoura, sem dietas restritivas ou efeito sanfona.",
      image: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "15 Mar 2024",
      readTime: "5 min",
      category: "Perda de Peso",
      categoryColor: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      title: "Intolerância à lactose: sintomas, diagnóstico e manejo nutricional",
      excerpt: "Entenda como identificar e lidar com a intolerância à lactose através de uma abordagem nutricional adequada e personalizada.",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "08 Mar 2024",
      readTime: "7 min",
      category: "Intolerâncias",
      categoryColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      title: "Nutrição e câncer: como a alimentação pode auxiliar durante o tratamento",
      excerpt: "A importância de uma nutrição adequada para pacientes oncológicos e como ela pode minimizar efeitos colaterais e melhorar a qualidade de vida.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "01 Mar 2024",
      readTime: "6 min",
      category: "Doenças Crônicas",
      categoryColor: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark mb-6">
            Blog de <span className="gradient-text">Nutrologia</span>
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto">
            Conteúdo científico e acessível sobre nutrição médica e saúde
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${post.categoryColor}`}>
                  {post.category}
                </span>
                
                <div className="flex items-center space-x-4 text-sm text-brown-light mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-brown-light mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  to="/blog"
                  className="inline-flex items-center text-sage font-medium hover:text-sage-dark transition-colors"
                >
                  Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-sage text-white px-8 py-4 rounded-full text-lg font-medium tracking-button uppercase hover:bg-sage-dark transition-all duration-300 transform hover:scale-105"
          >
            <span>Ver Todos os Artigos</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;