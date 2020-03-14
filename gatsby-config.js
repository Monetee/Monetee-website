module.exports = {
  siteMetadata: {
    title: `Monetee`,
    description: `Monetee description`,
    author: `@csscoder`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-sass-resources",
      options: {
        resources: ['./src/scss/_csscoder-lib.scss', './src/scss/_variables.scss'],
      },
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     // develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     whitelist: ['.ReactStickyHeader*'], // Don't remove this selector
    //     ignore: ['scss/_base.scss', 'scss/_normalize.scss','react-sticky-header/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   }
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Monetee Website`,
        short_name: `Monetee`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#9473eb`,
        display: `minimal-ui`,
        icon: `src/images/monetee.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
