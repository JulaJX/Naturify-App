/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
          'primary': '#6B8D00',
          'opacity': 'rgba(128, 128, 128, 0.403)',
          'darkOpacity' : 'rgba(24, 24, 24, 0.84)',
          'dark1':'rgba(38, 38, 38, 1)',
          'dark2' : 'rgba(24, 24, 24, 1)',


      },
    },
  },
  plugins: [],
}
