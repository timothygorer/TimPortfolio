
module.exports = {
  siteMetadata: {
	title: 'iBubble',
	description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
	keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
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
