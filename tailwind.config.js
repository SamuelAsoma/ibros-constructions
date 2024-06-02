
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          'roboto': ['Roboto', 'sans-serif'],
        },
        colors: {
          primary: '#1e3a8a',
          secondary: '#d1d5db',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

