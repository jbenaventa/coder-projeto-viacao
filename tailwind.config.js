/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      'marca': {
        25: '#FAFFFC',
        50: '#F5FFFA',
        100: '#EBFFF5',
        200: '#D7FED9',
        300: '#A0EE99',
        400: '#8DDB59',
        500: '#629E3A',
        600: '#0E804B',
        700: '#095F36',
        800: '#053E21',
        900: '#001D0C', 
      }
    },

    extend: {},
  },
  plugins: [
    require('flowbite/plugin')],
}

