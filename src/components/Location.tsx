import React from 'react';
import { MapPin, Clock, Phone, Car } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-dark mb-6">
            Localização
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto">
            Encontre-nos facilmente no coração de São Paulo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Map */}
          <div className="animate-fade-in">
            <div className="bg-cream rounded-3xl p-4 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0963373799067!2d-46.65297018502203!3d-23.561684584682488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1647875232123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Consultório"
              ></iframe>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="font-playfair text-3xl font-semibold text-brown-dark">
                Consultório Médico
              </h3>
              <p className="text-lg text-brown-light">
                Localizado em uma das regiões mais acessíveis de São Paulo, 
                nosso consultório oferece toda a comodidade e infraestrutura 
                necessária para seu atendimento.
              </p>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-sage/20 rounded-full">
                  <MapPin className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage mb-1">Endereço</h4>
                  <p className="text-brown-light">
                    Av. Paulista, 1000 - Sala 1205<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-sage/20 rounded-full">
                  <Clock className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage mb-1">Horários</h4>
                  <div className="text-brown-light space-y-1">
                    <p>Segunda a Sexta: 08:00 - 18:00</p>
                    <p>Sábado: 08:00 - 12:00</p>
                    <p>Domingo: Emergências</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-sage/20 rounded-full">
                  <Phone className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage mb-1">Contato</h4>
                  <div className="text-brown-light space-y-1">
                    <p>(11) 99999-9999</p>
                    <p>contato@dramanda.com.br</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-sage/20 rounded-full">
                  <Car className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage mb-1">Acesso</h4>
                  <div className="text-brown-light space-y-1">
                    <p>Estacionamento no local</p>
                    <p>Metrô Brigadeiro (300m)</p>
                    <p>Várias linhas de ônibus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;