/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#22C55E',
        'secondary': '#14532D',
        'secondary-bg': "#ECFDF5",
       
      }
    },
  },
  plugins: [],
}

