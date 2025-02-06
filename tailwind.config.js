// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        caudex: ['Caudex', 'serif'],
        carter: ['Carter One', 'cursive'], // Add Carter One
      },
    },
  },
  plugins: [],
};