module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        nav:"12vh",
        main:"88vh",
        "nav-xl":"8vh",
        "main-xl":"92vh"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
