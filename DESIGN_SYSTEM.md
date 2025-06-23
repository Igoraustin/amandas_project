# 🎨 SISTEMA DE DESIGN - WEBSITE DRA. AMANDA FERNANDES

Este documento define o sistema de design completo para o website da Dra. Amanda Fernandes, especialista em Nutrologia, garantindo consistência visual e experiência do usuário em todas as páginas e componentes.

## 🌈 PALETA DE CORES

### Cores Primárias

```scss
// Cores principais da marca
$sage: #A3B18A;         // Verde sálvia - cor principal
$sage-dark: #7A8A6A;    // Verde sálvia escuro - hover, destaques
$sage-light: #C3D1AA;   // Verde sálvia claro - backgrounds, bordas
```

### Cores de Background

```scss
// Backgrounds e superfícies
$cream: #F6EDE4;        // Bege claro - background principal
$white: #FFFFFF;        // Branco - cards, seções internas
$white-off: #FAF9F7;    // Branco off - variação para quebrar monotonia
```

### Cores de Texto

```scss
// Textos e conteúdo
$brown-dark: #3D2B22;   // Marrom escuro - texto principal
$brown-light: #7B5544;  // Marrom claro - texto secundário
$brown-muted: #9B8579;  // Marrom muted - placeholder, disabled
```

### Cores Funcionais

```scss
// Estados e feedback
$success: #52C41A;      // Verde - sucesso, confirmação
$warning: #FAAD14;      // Amarelo - avisos, atenção
$error: #F5222D;        // Vermelho - erros, alertas
$info: #1890FF;         // Azul - informações, links
```

### Cores para Dark Mode

```scss
// Versões para modo escuro
$dark-bg: #1F2937;      // Background escuro
$dark-card: #374151;    // Cards em modo escuro
$dark-text: #E5E7EB;    // Texto principal em modo escuro
$dark-text-muted: #9CA3AF; // Texto secundário em modo escuro
$sage-dark-mode: #8A9A7B; // Verde sálvia adaptado para dark mode
```

### Gradientes

```scss
// Gradientes para elementos especiais
$gradient-sage: linear-gradient(135deg, $sage 0%, $sage-dark 100%);
$gradient-cream: linear-gradient(135deg, $cream 0%, #EFE2D3 100%);
```

## 🔤 TIPOGRAFIA

### Famílias Tipográficas

```scss
// Fontes principais
$font-serif: 'Playfair Display', serif;    // Títulos, headings
$font-sans: 'Inter', sans-serif;           // Corpo, UI
```

### Hierarquia de Texto

```scss
// Headings
h1 {
  font-family: $font-serif;
  font-weight: 700;
  font-size: 3rem;      // 48px
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h2 {
  font-family: $font-serif;
  font-weight: 600;
  font-size: 2.25rem;   // 36px
  line-height: 1.3;
  letter-spacing: -0.01em;
}

h3 {
  font-family: $font-serif;
  font-weight: 600;
  font-size: 1.75rem;   // 28px
  line-height: 1.4;
}

h4 {
  font-family: $font-serif;
  font-weight: 600;
  font-size: 1.25rem;   // 20px
  line-height: 1.5;
}

// Corpo de texto
body, p {
  font-family: $font-sans;
  font-weight: 400;
  font-size: 1rem;      // 16px
  line-height: 1.6;
}

// Texto pequeno
small {
  font-family: $font-sans;
  font-size: 0.875rem;  // 14px
  line-height: 1.5;
}

// Botões
button, .button {
  font-family: $font-sans;
  font-weight: 600;
  font-size: 0.875rem;  // 14px
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
```

### Variações de Peso

```scss
// Font weights
$font-light: 300;
$font-regular: 400;
$font-medium: 500;
$font-semibold: 600;
$font-bold: 700;
```

### Estilos Especiais

```scss
// Estilos especiais
.quote {
  font-family: $font-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  color: $brown-light;
  border-left: 3px solid $sage;
  padding-left: 1.5rem;
}

.overline {
  font-family: $font-sans;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $sage;
}

.caption {
  font-family: $font-sans;
  font-size: 0.75rem;
  color: $brown-muted;
  line-height: 1.5;
}
```

## 🧩 COMPONENTES

### Botões

```scss
// Botão primário
.btn-primary {
  background-color: $sage;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px; // full
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: $sage-dark;
    transform: scale(1.05);
  }
}

// Botão secundário
.btn-secondary {
  background-color: transparent;
  color: $sage;
  border: 2px solid $sage;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px; // full
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: $sage;
    color: white;
  }
}

// Botão terciário (link)
.btn-tertiary {
  color: $sage;
  font-weight: 600;
  padding: 0.5rem 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $sage;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
}

// Botão WhatsApp
.btn-whatsapp {
  background-color: #25D366;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #128C7E;
    transform: scale(1.05);
  }
}
```

### Cards

```scss
// Card padrão
.card {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
}

// Card destacado
.card-featured {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  border-top: 4px solid $sage;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
}

// Card de blog
.card-blog {
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  .card-image {
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    
    .card-image img {
      transform: scale(1.1);
    }
  }
}

// Card de depoimento
.card-testimonial {
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-family: $font-serif;
    font-size: 4rem;
    line-height: 1;
    color: $sage-light;
    opacity: 0.5;
  }
}
```

### Formulários

```scss
// Input padrão
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.5rem;
  background-color: white;
  font-family: $font-sans;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: $sage;
    box-shadow: 0 0 0 3px rgba($sage, 0.2);
  }
  
  &::placeholder {
    color: $brown-muted;
  }
}

// Label
.label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: $font-sans;
  font-weight: 500;
  font-size: 0.875rem;
  color: $brown-dark;
}

// Select
.select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.5rem;
  background-color: white;
  font-family: $font-sans;
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,...");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: $sage;
    box-shadow: 0 0 0 3px rgba($sage, 0.2);
  }
}

// Checkbox
.checkbox {
  display: flex;
  align-items: center;
  
  input[type="checkbox"] {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #E2E8F0;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    position: relative;
    transition: all 0.3s ease;
    
    &:checked {
      background-color: $sage;
      border-color: $sage;
      
      &::after {
        content: '';
        position: absolute;
        top: 0.25rem;
        left: 0.4rem;
        width: 0.25rem;
        height: 0.5rem;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba($sage, 0.2);
    }
  }
  
  label {
    font-size: 0.875rem;
    color: $brown-dark;
  }
}
```

### Navegação

```scss
// Link de navegação
.nav-link {
  font-family: $font-sans;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: $brown-light;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $sage;
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: $sage;
    
    &::after {
      width: 100%;
    }
  }
}

// Breadcrumb
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: $brown-muted;
  
  .breadcrumb-item {
    display: flex;
    align-items: center;
    
    &:not(:last-child)::after {
      content: '/';
      margin: 0 0.5rem;
      color: $brown-muted;
    }
    
    a {
      color: $brown-light;
      transition: color 0.3s ease;
      
      &:hover {
        color: $sage;
      }
    }
    
    &.active {
      color: $brown-dark;
    }
  }
}
```

### Badges e Tags

```scss
// Badge padrão
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &.badge-sage {
    background-color: $sage-light;
    color: $sage-dark;
  }
  
  &.badge-cream {
    background-color: $cream;
    color: $brown-dark;
  }
  
  &.badge-success {
    background-color: rgba($success, 0.1);
    color: $success;
  }
  
  &.badge-warning {
    background-color: rgba($warning, 0.1);
    color: darken($warning, 20%);
  }
}

// Tag de categoria
.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  &.tag-nutrição {
    background-color: rgba($sage, 0.1);
    color: $sage-dark;
  }
  
  &.tag-emagrecimento {
    background-color: rgba($info, 0.1);
    color: darken($info, 10%);
  }
  
  &.tag-suplementação {
    background-color: rgba($warning, 0.1);
    color: darken($warning, 20%);
  }
  
  &.tag-receitas {
    background-color: rgba($success, 0.1);
    color: $success;
  }
}
```

## 📏 ESPAÇAMENTO E GRID

### Sistema de Espaçamento

```scss
// Escala de espaçamento
$space-1: 0.25rem;   // 4px
$space-2: 0.5rem;    // 8px
$space-3: 0.75rem;   // 12px
$space-4: 1rem;      // 16px
$space-5: 1.5rem;    // 24px
$space-6: 2rem;      // 32px
$space-8: 3rem;      // 48px
$space-10: 4rem;     // 64px
$space-12: 6rem;     // 96px
$space-16: 8rem;     // 128px
```

### Grid System

```scss
// Container
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  
  @media (min-width: 640px) {
    max-width: 640px;
  }
  
  @media (min-width: 768px) {
    max-width: 768px;
  }
  
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
}

// Container com padding maior para seções
.container-section {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  
  @media (min-width: 640px) {
    max-width: 640px;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  
  @media (min-width: 768px) {
    max-width: 768px;
  }
  
  @media (min-width: 1024px) {
    max-width: 1024px;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
}
```

### Breakpoints

```scss
// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
$breakpoint-2xl: 1536px;
```

## 🎭 ANIMAÇÕES E TRANSIÇÕES

### Transições Padrão

```scss
// Transições
$transition-fast: all 0.2s ease;
$transition-normal: all 0.3s ease;
$transition-slow: all 0.5s ease;
```

### Animações

```scss
// Keyframes
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideRight {
  from { 
    opacity: 0;
    transform: translateX(-30px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

// Classes de animação
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

.animate-slide-right {
  animation: slideRight 0.8s ease-out forwards;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

// Delays
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
```

### Scroll Reveal

```scss
// Classes para scroll reveal
.reveal-on-scroll {
  opacity: 0;
  transition: all 0.8s ease-out;
  
  &.visible {
    opacity: 1;
  }
}

.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
}

.reveal-right {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
}
```

## 🖼️ ICONOGRAFIA E IMAGENS

### Sistema de Ícones

```jsx
// Usando Lucide React para ícones consistentes
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin,
  MessageCircle,
  ChevronRight,
  Star,
  Award,
  Users,
  Heart,
  FileText,
  Bookmark,
  ArrowRight
} from 'lucide-react';

// Tamanhos padrão
const iconSizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48
};

// Cores padrão
const iconColors = {
  primary: '#A3B18A',
  secondary: '#7B5544',
  muted: '#9B8579',
  white: '#FFFFFF'
};
```

### Tratamento de Imagens

```scss
// Imagem com overlay
.image-overlay {
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%);
  }
}

// Imagem com borda
.image-bordered {
  border: 4px solid white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

// Imagem com efeito hover zoom
.image-zoom {
  overflow: hidden;
  
  img {
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
}
```

## 🌙 DARK MODE

### Implementação com Tailwind

```jsx
// Exemplo de classe com suporte a dark mode
<div className="bg-white dark:bg-dark-bg text-brown-dark dark:text-dark-text">
  Conteúdo adaptativo
</div>

// Botão de toggle
const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-cream dark:bg-dark-card"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-brown-light" />
      )}
    </button>
  );
};
```

### Variáveis CSS para Dark Mode

```scss
:root {
  // Light mode (default)
  --color-bg: #F6EDE4;
  --color-card: #FFFFFF;
  --color-text: #3D2B22;
  --color-text-muted: #7B5544;
  --color-primary: #A3B18A;
  
  // Dark mode
  &.dark {
    --color-bg: #1F2937;
    --color-card: #374151;
    --color-text: #E5E7EB;
    --color-text-muted: #9CA3AF;
    --color-primary: #8A9A7B;
  }
}

// Uso
body {
  background-color: var(--color-bg);
  color: var(--color-text);
}
```

## 📱 RESPONSIVIDADE

### Princípios Mobile-First

```scss
// Base (mobile)
.card {
  padding: 1rem;
  margin-bottom: 1rem;
}

// Tablet
@media (min-width: $breakpoint-md) {
  .card {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

// Desktop
@media (min-width: $breakpoint-lg) {
  .card {
    padding: 2rem;
    margin-bottom: 2rem;
  }
}
```

### Adaptações Específicas

```scss
// Navegação responsiva
.nav {
  // Mobile: menu vertical
  display: flex;
  flex-direction: column;
  
  // Desktop: menu horizontal
  @media (min-width: $breakpoint-md) {
    flex-direction: row;
    gap: 2rem;
  }
}

// Grid responsivo
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: $breakpoint-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: $breakpoint-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: $breakpoint-xl) {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## 🧠 PRINCÍPIOS DE ACESSIBILIDADE

### Contraste e Legibilidade

```scss
// Garantir contraste adequado
.text-on-sage {
  // Texto sobre fundo verde sage
  color: white; // WCAG AA: contraste 4.5:1
}

// Tamanho mínimo de texto
body {
  font-size: 16px; // Mínimo para boa legibilidade
}

// Espaçamento de linha adequado
p {
  line-height: 1.6; // Bom espaçamento para legibilidade
}
```

### Estados de Foco

```scss
// Estilo de foco consistente
:focus {
  outline: 2px solid $sage;
  outline-offset: 2px;
}

// Foco visível apenas com teclado
:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid $sage;
  outline-offset: 2px;
}
```

### Atributos ARIA

```jsx
// Exemplo de uso de ARIA em componentes
<button
  aria-label="Fechar menu"
  aria-expanded={isOpen}
  onClick={toggleMenu}
>
  <X className="w-6 h-6" />
</button>

<div role="alert" aria-live="assertive">
  Mensagem de alerta
</div>
```

## 📏 IMPLEMENTAÇÃO COM TAILWIND CSS

### Extensão do Tema Tailwind

```js
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#F6EDE4',
        sage: '#A3B18A',
        'sage-dark': '#7A8A6A',
        'sage-light': '#C3D1AA',
        'brown-light': '#7B5544',
        'brown-dark': '#3D2B22',
        'brown-muted': '#9B8579',
        'dark-bg': '#1F2937',
        'dark-card': '#374151',
        'dark-text': '#E5E7EB',
        'dark-text-muted': '#9CA3AF',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'button': '0.5px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '