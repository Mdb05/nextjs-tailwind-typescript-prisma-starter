const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', ...fontFamily.sans],
    },
    extend: {
      colors: {
        white: '#F8FAFC',
        black: '#1a1b21',
        'black-secondary': '#30313a',
        'white-secondary': '#F1F5F9',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
