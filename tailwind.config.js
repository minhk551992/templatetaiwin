module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-bg': "url('../images/bg-header.svg')",
        'footer-bg': "url('../images/bg-footer.svg')",
       })
    },
  },
  variants: {},
  plugins: [],
};
