/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#404040',
          400: '#525252',
          500: '#666666',
          600: '#7a7a7a',
          700: '#8c8c8c',
          800: '#a3a3a3',
          900: '#b8b8b8',
        },
        light: {
          100: '#ffffff',
          200: '#fafafa',
          300: '#f5f5f5',
          400: '#f0f0f0',
          500: '#e6e6e6',
          600: '#d9d9d9',
          700: '#cccccc',
          800: '#bfbfbf',
          900: '#b3b3b3',
        },
        gold: {
          400: '#ffd700',
          500: '#ffcc00',
          600: '#e6b800',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  }
};
