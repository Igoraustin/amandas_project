/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6EDE4',
        sage: '#A3B18A',         // Valor correto do verde sálvia
        'sage-dark': '#7A8A6A',  // Valor ajustado
        'sage-light': '#C3D1AA', // Valor ajustado
        'brown-light': '#7B5544',
        'brown-dark': '#3D2B22',
        'brown-muted': '#9B8579',
        'white-off': '#FAF9F7',
        // Cores funcionais
        'success': '#52C41A',
        'warning': '#FAAD14',
        'error': '#F5222D',
        'info': '#1890FF',
        // Cores para dark mode
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
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};