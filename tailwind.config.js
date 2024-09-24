const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.lightBlue,
        secondary: colors.orange,
        accent: colors.purple,
        background: {
          light: '#FFFFFF',
          dark: '#F7F7F7',
        },
        text: {
          light: '#4A4A4A',
          dark: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        ...defaultTheme.fontSize,
        '5xl': '3rem',
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        'md': '0.375rem',
      },
    },
  },
  plugins: [],
};
