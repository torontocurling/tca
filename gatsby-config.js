module.exports = {
  siteMetadata: {
    title: `Toronto Curling Association`,
    description: `Your GTA Curling Hub`,
    siteUrl: `https://torontocurling.com/`,
    social: {
      twitter: `@torontocurling`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL || 'https://torontocurling.com/graphql',
        schema: {
          typePrefix: 'Wp',
          timeout: 60 * 1000 * 2, // 2 mins
          perPage: 5, // required b/c our server has memory issues
          queryDepth: 5,
        },
        debug: {
          graphql: {
            showQueryVarsOnError: true,
            writeQueriesToDisk: true,
          },
        },
        excludeFieldNames: [
          'category',
          'categories',
          'contentType',
          'contentTypes',
          'comment',
          'comments',
          'mediaItem',
          'mediaItems',
          'menu',
          'menus',
          'menuItem',
          'menuItems',
          // 'page',
          // 'pages',
          // 'post',
          // 'posts',
          'postFormat',
          'postFormats',
          'tag',
          'tags',
          'taxonomy',
          'taxonomies',
          'user',
          'users',
          'userRole',
          'userRoles',
        ],
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Toronto Curling Association`,
        short_name: `TCA`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
