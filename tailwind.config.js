module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        accent: '#FFB600',
        darkblue: '#1B273D',
        gray: {
          DEFAULT: '#8E9799',
          light: '#E5E7EB',
          dark: '#4B5563',
        },
        black: '#000000',
      },
      boxShadow: {
        'accent': '0 4px 14px 0 rgba(255, 182, 0, 0.4)',
        'accent-md': '0 6px 20px 0 rgba(255, 182, 0, 0.3)',
      },
      animation: {
        'glow': 'glow 1.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 5px #FFB600' },
          '50%': { 'box-shadow': '0 0 20px #FFB600' },
        },
    
      },
      fontFamily: {
      sans: ['var(--font-montserrat)'],
      serif: ['var(--font-ibm-plex-serif)'],
    },
    },
    filter: { // if not already present
        'none': 'none',
        'sepia-30': 'sepia(30%)',
        'brightness-90': 'brightness(90%)',
        'saturate-120': 'saturate(120%)',
        'contrast-110': 'contrast(110%)',
        'hue-rotate-15': 'hue-rotate(15deg)',
      },
  },
  plugins: [ require('tailwindcss-filters'),],
}