module.exports = {
  siteMetadata: {
    title: 'The Barber Theme',
    description: 'Barber is a blog theme for Gatsby built by Thomas Vaeth for Samesies using HTML, Sass, and JavaScript.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: ''
      }
    },
    'gatsby-plugin-offline'
  ]
};
