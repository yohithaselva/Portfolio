/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkOrangeBrown: '#161513',
      },
      backgroundImage: {
        'custom-hover-gradient': 'linear-gradient(40deg, #3f0028, #58230F)',
        'lets': 'linear-gradient(270deg, #DF8908 80%, #B415FF 100%)',
        'btn': 'linear-gradient(264deg, #DF8908 -5.90%, #B415FF 106.28%)',
        'service': 'linear-gradient(270deg, #DF8908 50%, #B415FF 100%)',
      },
      fontFamily: {
        outfit: ['Outfit'], // Add the Outfit font
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        typing: 'typing 3s steps(16) 1s forwards, blink 0.75s step-end infinite', // Adjust steps to match your text length
        'slide-in-left': 'slideInLeft 1s ease-out', // Add slide-in from left animation
        'slide-in-right': 'slideInRight 1s ease-out', // Add slide-in from right animation
      },
    },
  },
  plugins: [],
}
