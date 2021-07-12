module.exports = {
  sassOptions: {
    includePaths: ['./'],
    prependData: `@import "scss/abstracts/variables.scss";
            @import "scss/abstracts/mixins.scss";`
  },
  images: {
    domains: ['images.unsplash.com', "lh3.googleusercontent.com"],
  }
}