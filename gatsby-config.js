/**
 * The file gatsby-config defines your site’s metadata, plugins
 * and other general configuration. 
 * (More info: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/)
 */

module.exports = {
  siteMetadata: {
    title: `The Frog Blog`,
    author: {
      name: `Guyliane`,
      summary: `Hi! 👋 I'm Guyliane, I've been passionate about development for so long that I've spent many sleepless nights exploring our favorite site like Stack Overflow to get unstuck.`,
    },
    description: `Welcome to The Frog Blog, I decided to open my Blog to share with you all my tips all my problems all my findings so that you too can sleep a little more! 🤞`,
    siteUrl: `https://www.thefrogblog.uk`,
    social: {
      twitter: `guyliane`,
    },
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-thefrogblog-netlify-app`
      }
    }
  ],
};
