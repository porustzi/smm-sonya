/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F8F7F4',
        primary: '#FFB46A',
        'primary-hover': '#FF9C42',
        raspberry: '#E91E63',
        'raspberry-hover': '#C2185B',
        dark: '#111827',
        secondary: '#6B7280',
        card: '#FFFFFF',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '30px',
      },
    },
  },
  plugins: [],
};
