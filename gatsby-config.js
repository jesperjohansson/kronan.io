module.exports = {
  siteMetadata: {
    title: 'Kronan - Svenska Kronans Värde',
    description:
      'Visar svenska kronans nuvarande värde och presenterar grafer för att se nuvarande kurs samt jämförelser mot andra valutor.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kronan - Svenska Kronans Värde',
        short_name: 'Kronan',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
      },
    },
  ],
}
