// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        modeg: ["'Mode G'", "sans-serif"], // Agregue nueva fuente al proyecto
      },
      boxShadow: {
        'text': '0 4px 6px rgba(0, 0, 0, 0.1)', 
      }
    },
  },
  plugins: [],
}
