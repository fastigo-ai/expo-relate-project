/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
        source: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
