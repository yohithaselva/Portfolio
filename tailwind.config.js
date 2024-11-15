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
      },
    },
  },
  plugins: [],
}

