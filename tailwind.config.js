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
        'lets':'linear-gradient(270deg, #DF8908 80%, #B415FF 100%)',
        'btn':'linear-gradient(264deg, #DF8908 -5.90%, #B415FF 106.28%)',
        'service':'linear-gradient(270deg, #DF8908 50%, #B415FF 100%)',
      },
      fontFamily: {
        outfit: ['Outfit'], // Add the Outfit font
      },
    },
  },
  plugins: [],
}

