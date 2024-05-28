/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage:{
        'study-session-bg': "url('/images/study-session.jpg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
