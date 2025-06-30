import React from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const Formation = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Pós-Graduação em Medicina Integrativa',
      institution: 'Hospital Albert Einstein',
      description: 'Especialização em abordagens complementares e medicina preventiva.',
      type: 'education'
    },
    {
      year: '2020',
      title: 'Certificação em Medicina do Esporte',
      institution: 'Sociedade Brasileira de Medicina do Esporte',
      description: 'Capacitação para atendimento de atletas e pessoas ativas.',
      type: 'certification'
    },
    {
      year: '2015',
      title: 'Residência em Medicina Interna',
      institution: 'Hospital das Clínicas - FMUSP',
      description: 'Residência médica com foco em clínica médica e diagnóstico.',
      type: 'education'
    },
    {
      year: '2012',
      title: 'Mestrado em Cardiologia',
      institution: 'Universidade de São Paulo (USP)',
      description: 'Pesquisa em prevenção de doenças cardiovasculares.',
      type: 'education'
    },
    {
      year: '2009',
      title: 'Graduação em Medicina',
      institution: 'Faculdade de Medicina da USP',
      description: 'Formação médica com excelência acadêmica e prática clínica.',
      type: 'education'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Prêmio Excelência Médica',
      description: 'Reconhecimento pela qualidade no atendimento',
      year: '2023'
    },
    {
      icon: BookOpen,
      title: 'Publicações Científicas',
      description: '15+ artigos em revistas médicas',
      year: '2020-2024'
    },
    {
      icon: Users,
      title: 'Palestrante Convidada',
      description: 'Congressos nacionais e internacionais',
      year: '2018-2024'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return Award;
      default:
        return GraduationCap;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-brown-dark mb-6">
              Formação
              <span className="text-sage block">Acadêmica</span>
            </h1>
            <p className="text-xl text-brown-light max-w-3xl mx-auto">
              Uma trajetória de constante aprendizado e aperfeiçoamento, sempre em busca 
              da excelência no cuidado com seus pacientes
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-brown-dark mb-6">
              Trajetória Acadêmica
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sage/30"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {timeline.map((item, index) => {
                const Icon = getIcon(item.type);
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? 'justify-start' : 'justify-end'
                    } animate-slide-up`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Point */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-sage rounded-full flex items-center justify-center z-10">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isEven ? 'pr-16' : 'pl-16'
                      }`}
                    >
                      <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-playfair font-bold text-sage">
                            {item.year}
                          </span>
                          <div className={`w-3 h-3 rounded-full ${
                            item.type === 'certification' ? 'bg-yellow-400' : 'bg-sage'
                          }`}></div>
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sage font-medium mb-3">
                          {item.institution}
                        </p>
                        <p className="text-brown-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-brown-dark mb-6">
              Conquistas e Reconhecimentos
            </h2>
            <p className="text-xl text-brown-light max-w-2xl mx-auto">
              Reconhecimentos que refletem o compromisso com a excelência médica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-cream rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-sage" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-brown-dark mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-brown-light mb-4">
                    {achievement.description}
                  </p>
                  <span className="text-sage font-medium">
                    {achievement.year}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formation;