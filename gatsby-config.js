const siteUrl = 'https://mercedesretailsitemaster.gatsbyjs.io'
const siteMap = 'https://mercedesretailsitemaster.gatsbyjs.io/sitemap/sitemap-0.xml'
module.exports = {
  siteMetadata: {
    title: "Mercedes Sài Gòn",
    siteUrl: siteUrl,
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: siteMap ,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "273968871",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Query',
        fieldName: 'graphql_gatsby',
        url: 'https://graphql.contentful.com/content/v1/spaces/m4w3zg4xlj2p',
        headers: {
          Authorization: `Bearer ${'_OjdIAgP4_ESd0JQWeqfwltJVPsCpwj_Rjdm0YN7xbc'}`,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        collectionTypes: [
          "car-classes",
          "cars",
          "discount-programs",
          "seller-informations", 
          "sliders", 
        ],
        queryLimit: 1000,
      },
    },
  ],
};
