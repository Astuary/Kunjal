const data = require('./src/data/data');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  pathPrefix: "/Kunjal",
  siteMetadata: {
    title: data.SiteTitle,
    description: data.SiteDescription,
    author: data.SiteAuthor,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
      {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 90
        }
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/src/data/blog`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/data/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/data/education`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/data/research`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `art`,
        path: `${__dirname}/src/assets/art`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/assets/img/portfolio-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GATSBY_GITHUB_API_TOKEN,
        graphQLQuery: data.githubApiQuery,
        variables: data.githubApiVariables,
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //       trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
    //       head: true,
    //   },
    // },
    // Disable offline caching to avoid stale image assets.
    `gatsby-plugin-remove-serviceworker`,
  ],
}
