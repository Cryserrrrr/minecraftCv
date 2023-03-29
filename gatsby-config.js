/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `minecraftcv`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",  
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/minecraftIcon.png',
      },
    },
  ]
};