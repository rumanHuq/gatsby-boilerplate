/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-remove-serviceworker",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      },
    },
    {
      resolve: "gatsby-plugin-stylelint",
      options: { files: ["**/*.tsx"] }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {"@": require("path").resolve(__dirname, 'src')},
        extensions: ["js", "ts", "tsx", "jsx"]
      }
    }
  ],
};
