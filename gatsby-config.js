const meta = require('./content/meta.json')

module.exports = {
  siteMetadata: {
    siteUrl: `${meta.url}`,
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/styles`],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `${meta.googleanalytics}`,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
