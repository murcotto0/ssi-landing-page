/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-850': '#0b1220',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(56, 189, 248, 0.4)',
      }
    },
  },
  plugins: [],
}