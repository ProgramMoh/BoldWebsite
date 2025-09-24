/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Make sure this is set to 'class'
  theme: {
    extend: {
      // Add these new properties
      colors: {
        'brand-dark': '#111013',
        'brand-accent': '#c9eb55',
        'brand-light': '#e5e5e5',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}