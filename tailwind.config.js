const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      serif: ['Kaisei HarunoUmi', ...defaultTheme.fontFamily.serif],
      sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      mono: defaultTheme.fontFamily.mono
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
      },
      extend: {
        aspectRatio: {
          '4/3': '4 / 3'
        },
        keyframes: {
          'fade-in-down': {
            '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            }
          }
        },
        animation: {
          'fade-in-down': 'fade-in-down 0.2s ease-out'
        }
      }
    },
    container: {
      center: true
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
