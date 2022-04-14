module.exports = {
  siteMetadata: {
    title: `maple-terrace-full-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Maple Terrace`,
        short_name: `Maple Terrace`,
        start_url: `/`,
        "icon": "src/assets/images/icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: false,
        defaults: {
          formats: [`auto`],
          placeholder: `none`,
          quality: 90,
          breakpoints: [750, 1080, 1366, 1600, 1920, 2560],
          backgroundColor: `transparent`,
          jpgOptions: { chromaSubsampling: "4:4:4" },
          pngOptions: { chromaSubsampling: "4:4:4" },
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-tslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/index.tsx`),
      },
    },
  ]
};