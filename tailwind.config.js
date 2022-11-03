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
        brand: {
          50: '#fff2f8',
          100: '#ffe6f0',
          200: '#ffbfda',
          300: '#ff99c3',
          400: '#ff4d96',
          500: '#ff0069',
          600: '#e6005f',
          700: '#bf004f',
          800: '#99003f',
          900: '#7d0033'
        },
        insta: {
          50: '#fdf2fc',
          100: '#fbe6f9',
          200: '#f4bff1',
          300: '#ed99e8',
          400: '#e04dd6',
          500: '#d300c5',
          600: '#be00b1',
          700: '#9e0094',
          800: '#7f0076',
          900: '#670061'
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
