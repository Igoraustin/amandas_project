# 💬 INTEGRAÇÃO WHATSAPP - WEBSITE DRA. AMANDA FERNANDES

Este documento técnico detalha a implementação do botão flutuante de WhatsApp e a integração desta funcionalidade em todo o website da Dra. Amanda Fernandes.

## 🎯 OBJETIVOS DA INTEGRAÇÃO

- Facilitar o agendamento de consultas via WhatsApp
- Proporcionar um canal de comunicação direto e familiar para os pacientes
- Aumentar a taxa de conversão de visitantes em pacientes
- Oferecer experiência consistente em desktop e mobile

## 🧩 COMPONENTE PRINCIPAL: WHATSAPP BUTTON

### Implementação em React + TypeScript

```tsx
// src/components/WhatsAppButton.tsx

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
  pulseAnimation?: boolean;
  showOnMobile?: boolean;
  showAfterScroll?: boolean;
  scrollThreshold?: number;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Olá Dra. Amanda, gostaria de agendar uma consulta.",
  position = "bottom-right",
  pulseAnimation = true,
  showOnMobile = true,
  showAfterScroll = true,
  scrollThreshold = 300
}) => {
  const [isVisible, setIsVisible] = useState(!showAfterScroll);
  
  // Handle scroll visibility
  useEffect(() => {
    if (!showAfterScroll) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll, scrollThreshold]);
  
  // Format phone number (remove any non-digit character)
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp deep link
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
  
  // Hide on mobile if specified
  if (!showOnMobile && window.innerWidth < 768) {
    return null;
  }
  
  // Don't render if not visible (based on scroll)
  if (!isVisible) {
    return null;
  }
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className={`
        fixed ${position === 'bottom-right' ? 'right-6' : 'left-6'} bottom-6
        z-50 bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full shadow-lg
        transition-all duration-300 transform hover:scale-105
        flex items-center justify-center
        ${pulseAnimation ? 'animate-pulse hover:animate-none' : ''}
      `}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
```

### Uso no App.tsx

```tsx
// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Formation from './pages/Formation';
import Blog from './pages/Blog';
import Consultation from './pages/Consultation';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream font-inter">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formacao" element={<Formation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/consulta" element={<Consultation />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton 
          phoneNumber="5511999999999" 
          message="Olá Dra. Amanda, gostaria de agendar uma consulta."
          position="bottom-right"
          pulseAnimation={true}
          showOnMobile={true}
          showAfterScroll={true}
          scrollThreshold={300}
        />
      </div>
    </Router>
  );
}

export default App;
```

## 🎨 VARIAÇÕES VISUAIS

### Versão Expandida (com texto)

```tsx
// Versão expandida do botão com texto
const ExpandedWhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
  position = "bottom-right",
}) => {
  // ... lógica similar ao componente principal
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed ${position === 'bottom-right' ? 'right-6' : 'left-6'} bottom-6
        z-50 bg-green-500 hover:bg-green-600
        text-white px-5 py-3 rounded-full shadow-lg
        transition-all duration-300 transform hover:scale-105
        flex items-center justify-center gap-2
      `}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-medium">Agendar Consulta</span>
    </a>
  );
};
```

### Versão Mobile (Bottom Bar)

```tsx
// Versão para barra inferior mobile
const MobileWhatsAppBar: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
}) => {
  // ... lógica similar ao componente principal
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-3 px-4 z-50 md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium">Agendar via WhatsApp</span>
      </a>
    </div>
  );
};
```

## 📱 INTEGRAÇÃO EM COMPONENTES ESPECÍFICOS

### 1. Hero Section

```tsx
// Dentro do Hero.tsx
<div className="flex flex-col sm:flex-row gap-4">
  <Link
    to="/consulta"
    className="bg-sage text-white px-8 py-4 rounded-full text-lg font-medium tracking-button uppercase hover:bg-sage-dark transition-all duration-300 transform hover:scale-105 text-center"
  >
    Marcar Consulta
  </Link>
  <a
    href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá Dra. Amanda, gostaria de agendar uma consulta.")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium tracking-button uppercase hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2"
  >
    <MessageCircle className="w-5 h-5" />
    WhatsApp Direto
  </a>
</div>
```

### 2. Contact Section

```tsx
// Dentro do Contact.tsx
<div className="bg-white rounded-xl shadow-md p-8">
  <h3 className="font-playfair text-2xl font-bold text-brown-dark mb-6">Agende sua Consulta</h3>
  
  <p className="text-brown-light mb-6">
    Para agendar sua consulta, entre em contato via WhatsApp. Responderemos o mais breve possível.
  </p>
  
  <a
    href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá Dra. Amanda, gostaria de agendar uma consulta.")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-green-600 transition-all duration-300 w-full flex items-center justify-center gap-2"
  >
    <MessageCircle className="w-5 h-5" />
    Agendar via WhatsApp
  </a>
  
  <div className="mt-6 text-sm text-brown-light">
    <p className="flex items-center gap-2 mb-2">
      <Clock className="w-4 h-4" />
      <span>Horário de atendimento: Segunda a Sexta, 8h às 18h</span>
    </p>
    <p className="flex items-center gap-2">
      <Calendar className="w-4 h-4" />
      <span>Consultas presenciais e online</span>
    </p>
  </div>
</div>
```

### 3. Blog Posts

```tsx
// Ao final de cada post do blog
<div className="mt-8 p-6 bg-sage/10 rounded-xl">
  <h4 className="font-playfair text-xl font-bold text-brown-dark mb-3">Tem dúvidas sobre este assunto?</h4>
  <p className="text-brown-light mb-4">
    Agende uma consulta com a Dra. Amanda Fernandes e receba orientações personalizadas para o seu caso.
  </p>
  <a
    href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá Dra. Amanda, li o artigo sobre [TÍTULO] e gostaria de agendar uma consulta.")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 inline-flex items-center gap-2"
  >
    <MessageCircle className="w-4 h-4" />
    Agendar Consulta
  </a>
</div>
```

## 🧪 TESTES E MÉTRICAS

### Testes A/B Sugeridos

1. **Posicionamento:**
   - Teste A: Botão no canto inferior direito
   - Teste B: Botão no canto inferior esquerdo

2. **Texto:**
   - Teste A: "Agendar Consulta"
   - Teste B: "Fale com a Dra. Amanda"

3. **Timing:**
   - Teste A: Mostrar imediatamente
   - Teste B: Mostrar após 5 segundos na página

4. **Animação:**
   - Teste A: Com animação pulse
   - Teste B: Sem animação

### Métricas de Sucesso

- **Taxa de cliques:** % de visitantes que clicam no botão
- **Taxa de conversão:** % de cliques que resultam em agendamento
- **Tempo até o clique:** Quanto tempo o usuário leva para clicar
- **Páginas com maior conversão:** Quais páginas geram mais cliques

## 📱 OTIMIZAÇÃO MOBILE

### Considerações Específicas

1. **Tamanho do botão:**
   - Área de toque mínima de 48x48px para acessibilidade

2. **Posicionamento:**
   - Evitar conflito com navegação do navegador
   - Considerar barra inferior em vez de botão flutuante

3. **Desempenho:**
   - Garantir que a animação não afete o desempenho em dispositivos mais antigos

4. **Comportamento em scroll:**
   - Em páginas longas, considerar ocultar durante o scroll e mostrar quando parado

## 🔒 PRIVACIDADE E CONFORMIDADE

### LGPD e Termos de Uso

- Incluir menção ao uso do WhatsApp na Política de Privacidade
- Esclarecer que dados são compartilhados com o WhatsApp
- Informar sobre o armazenamento de conversas

### Texto Sugerido para Política de Privacidade

```
Comunicação via WhatsApp: Ao utilizar nosso botão de WhatsApp para contato, 
você concorda em receber comunicações por este canal. As conversas são 
armazenadas conforme os termos de serviço do WhatsApp e nossa política 
interna de retenção de dados. Seus dados de contato serão utilizados 
exclusivamente para fins de agendamento e acompanhamento médico.
```

## 🔄 IMPLEMENTAÇÃO E MANUTENÇÃO

### Passos para Implementação

1. Criar o componente WhatsAppButton
2. Integrar no App.tsx para presença global
3. Personalizar nas seções específicas (Hero, Contact, Blog)
4. Configurar número e mensagem padrão
5. Testar em diferentes dispositivos e navegadores
6. Implementar tracking de analytics

### Manutenção

- Atualizar número de telefone quando necessário
- Ajustar mensagens pré-formatadas para campanhas específicas
- Monitorar métricas de uso e otimizar conforme necessário

---

Este documento técnico fornece todas as informações necessárias para implementar a integração com WhatsApp no website da Dra. Amanda Fernandes, garantindo uma experiência consistente e eficaz para os usuários em todas as plataformas.