import React from 'react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Prevenção de Doenças Cardiovasculares: O que Você Precisa Saber",
      excerpt: "Descubra as principais estratégias para manter seu coração saudável e prevenir doenças cardiovasculares através de mudanças simples no estilo de vida.",
      image: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "15 Mar 2024",
      readTime: "5 min",
      category: "Cardiologia"
    },
    {
      id: 2,
      title: "Importância dos Exames de Rotina: Quando e Por que Fazer",
      excerpt: "Entenda a importância dos check-ups regulares e quais exames são essenciais para cada faixa etária na prevenção de doenças.",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "08 Mar 2024",
      readTime: "7 min",
      category: "Prevenção"
    },
    {
      id: 3,
      title: "Alimentação Saudável: Mitos e Verdades na Nutrição",
      excerpt: "Desmistificamos as principais dúvidas sobre alimentação saudável e compartilhamos dicas práticas para uma dieta equilibrada.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "01 Mar 2024",
      readTime: "6 min",
      category: "Nutrição"
    },
    {
      id: 4,
      title: "Exercícios e Saúde Mental: A Conexão que Transforma",
      excerpt: "Como a atividade física regular pode impactar positivamente sua saúde mental e qualidade de vida.",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "22 Fev 2024",
      readTime: "8 min",
      category: "Bem-estar"
    },
    {
      id: 5,
      title: "Diabetes: Controle e Prevenção na Vida Moderna",
      excerpt: "Estratégias eficazes para prevenir e controlar o diabetes, adaptadas ao estilo de vida contemporâneo.",
      image: "https://images.pexels.com/photos/6823473/pexels-photo-6823473.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "15 Fev 2024",
      readTime: "10 min",
      category: "Endocrinologia"
    },
    {
      id: 6,
      title: "Sono e Saúde: A Importância do Descanso Reparador",
      excerpt: "Descubra como a qualidade do sono afeta sua saúde geral e dicas para melhorar seus hábitos noturnos.",
      image: "https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "08 Fev 2024",
      readTime: "6 min",
      category: "Bem-estar"
    }
  ];

  const categories = ["Todos", "Cardiologia", "Prevenção", "Nutrição", "Bem-estar", "Endocrinologia"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-brown-dark mb-6">
              Blog de
              <span className="text-sage block">Saúde</span>
            </h1>
            <p className="text-xl text-brown-light max-w-3xl mx-auto">
              Informações confiáveis sobre saúde, prevenção e bem-estar para 
              ajudar você a viver melhor
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brown-light" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-brown-light/20 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-2 rounded-full text-sm font-medium transition-colors border border-brown-light/20 hover:bg-sage/10 hover:border-sage/30"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sage/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-sage/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
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
                  
                  <button className="flex items-center space-x-2 text-sage font-medium hover:text-sage-dark transition-colors group">
                    <span>Ler artigo completo</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="bg-sage text-white px-8 py-4 rounded-full text-lg font-medium tracking-button uppercase hover:bg-sage-dark transition-all duration-300 transform hover:scale-105">
              Carregar Mais Artigos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;