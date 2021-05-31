module.exports = {
  siteMetadata: {
    title: "Mercedes Landing Page",
  },
  plugins: [
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `m4w3zg4xlj2p`,
        accessToken: `_OjdIAgP4_ESd0JQWeqfwltJVPsCpwj_Rjdm0YN7xbc`,
      },
    },
  ],
};
