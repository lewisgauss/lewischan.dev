require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: process.env.SITE_TITLE,
  },
  // jsxRuntime: 'automatic', // Not available yet
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        anonymize: true,
        respectDNT: true,
        enableWebVitalsTracking: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
