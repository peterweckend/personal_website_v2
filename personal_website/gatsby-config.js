module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peter Weckend Portfolio Site`,
        short_name: `Peter Weckend`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#37447d`,
        display: `standalone`,
        icon: 'src/images/favicon.png', // todo: https://favicon.io/favicon-generator/ after theme colors decided
      },
    },
  ],
};
