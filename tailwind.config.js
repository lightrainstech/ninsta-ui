const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      serif: ['Kaisei HarunoUmi', ...defaultTheme.fontFamily.serif],
      sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        green: {
          50: '#f6fbf2',
          100: '#edf7e6',
          200: '#d1ecbf',
          300: '#b5e099',
          400: '#7ec84d',
          500: '#BAF247',
          600: '#409f00',
          700: '#358500',
          800: '#2b6a00',
          900: '#235700'
        }
      }
    },
    container: {
      center: true
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
