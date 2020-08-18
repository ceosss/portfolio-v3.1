module.exports = {
  siteMetadata: {
    title: `Swaraj's Portfolio`,
    siteUrl: `https://ceo-sss.netlify.app`,
    description: `Portfolio Website of Swaraj Samant Singh, a Full Stack Software Engineer`,
    author: "@ceo.sss",
    twitterUsername: "@swarajsamant",
    image: "/screenshot.png",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`blogs`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          `gatsby-remark-images`,
          `gatsby-remark-images-zoom`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Swaraj's Portfolio`,
        short_name: `Swaraj's Portfolio`,
        start_url: `/`,
        background_color: `#007bff`,
        theme_color: `#007bff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
