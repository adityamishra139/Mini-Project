/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


"./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        wave: 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  plugins: [],
}}