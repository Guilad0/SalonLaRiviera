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
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],

        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'text': '0 4px 6px rgba(0, 0, 0, 0.1)', 
      }
    },
  },
  plugins: [],
}
