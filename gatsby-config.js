const siteUrl = 'https://www.tragopmercedes.com'
const siteMap = 'https://www.tragopmercedes.com/sitemap/sitemap-0.xml'
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
    'gatsby-plugin-cname',
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-WZLSJCFW5V", // Google Analytics / GA
          

        ],
        
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WMDMB2P",
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
};
