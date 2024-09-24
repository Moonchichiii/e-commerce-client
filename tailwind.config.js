const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          light: '#FFFFFF',
          dark: '#F5F5F5',
        },
        accent1: {
          DEFAULT: '#FFD1DC',
          light: '#FFE5ED',
          dark: '#FFBDCB',
        },
        accent2: {
          DEFAULT: '#BDFCC9',
          light: '#D6FDE0',
          dark: '#A4FBB2',
        },
        accent3: {
          DEFAULT: '#CAF1DE',
          light: '#E0F8EB',
          dark: '#B4EAD1',
        },
        background: {
          light: '#FFFFFF',
          dark: '#F0F0F0',
        },
        text: {
          light: '#666666',
          dark: '#333333',
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '5xl': '3rem',
      },
      borderRadius: {
        'md': '0.375rem',
      },
    },
  },
  plugins: [],
};