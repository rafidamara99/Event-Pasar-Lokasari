/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '25px',
        lg: '55px'
      },
    },
    extend: {
      fontFamily: {
        Inter: ['"Inter", sans-serif;'],
      },
    },
  },
  plugins: [],
}

