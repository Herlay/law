/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FDBB2B',
        'brand-dark': '#1A1A1A',
      },
      fontFamily: {
        'cursive': ['"Great Vibes"', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}