module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        '350': '350ms'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
