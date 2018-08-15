
module.exports = {
  siteMetadata: {
	title: 'Major Blazers',
	description: 'The Major Blazers Glass Blunt is the perfect tool for weed smokers who want a fast and easy way to smoke anywhere, anytime.',
	keywords: 'major blazers, blaze, weed, joint, blunt, best smoke bong, best bong, best pipe, best smoke accessories'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ggb5eziaudfi',
        accessToken: '6945f3b2401d2af7d783ef4823098db0fd816f94b375f95497436ceb8cb9388a'
      }
    }
  ],
}
