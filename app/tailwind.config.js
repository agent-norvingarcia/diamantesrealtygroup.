/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        premium: {
          50: '#f4f4f5',
          500: '#d4af37',
          900: '#0a0a0a'
        }
      },
      boxShadow: {
        premium: '0 10px 30px rgba(212, 175, 55, 0.15)'
      }
    }
  },
  plugins: []
};
