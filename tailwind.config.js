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
          accent: '#FFB600',  // Din gule farve
          darkblue: '#1B273D',
          gray: {
            DEFAULT: '#8E9799',
            light: '#E5E7EB',
            dark: '#4B5563',
          },
          black: '#000000',
        },
        // Tilføj shadow (valgfrit - du kan tilpasse efter behov)
        boxShadow: {
          'accent': '0 4px 14px 0 rgba(255, 182, 0, 0.4)', // Skygge med din gule farve
          'accent-md': '0 6px 20px 0 rgba(255, 182, 0, 0.3)',
          // I din tailwind.config.js under `extend`
        animation: {
            'glow': 'glow 1.5s ease-in-out infinite',
        },
        keyframes: {
            glow: {
            '0%, 100%': { 'box-shadow': '0 0 5px #FFB600' },
            '50%': { 'box-shadow': '0 0 20px #FFB600' },
            },
  }
        },
      },
    },
    plugins: [],
  };