module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        nav:"12%",
        main:"88%",
        "nav-xl":"8%",
        "main-xl":"92%"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
