/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand gradient colors
        'brand-pink': '#ec5ba2',
        'brand-sky': '#c7e8f9',
        'brand-coral': '#ed9395', 
        'brand-lavender': '#9889c0',
        'brand-purple': '#bd6fad',
        
        // Optional semantic names
        'brand-primary': '#ec5ba2',
        'brand-secondary': '#9889c0'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #ec5ba2 0%, #ed9395 35%, #9889c0 70%, #bd6fad 100%)'
      }
    },
  },
  plugins: [],
}
