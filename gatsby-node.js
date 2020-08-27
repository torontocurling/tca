const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const newsPostTemplate = path.resolve(`./src/templates/news-post.js`)
  const result = await graphql(
    `
      {
        allWpPost(limit: 3) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allWpPost.edges

  posts.forEach((post, index) => {
    createPage({
      path: post.node.slug,
      component: newsPostTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
