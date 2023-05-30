/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        center: '0 1 auto',
      },
      maxWidth: {
        'image': '300px', // Замените на нужный вам размер для картинок
      },
    },
  },
  plugins: [],
}