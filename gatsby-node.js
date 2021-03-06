const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const {
  parseEventContent,
  getEventMenuLinks,
} = require('./src/page-support/event')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const newsPostTemplate = path.resolve(`./src/templates/news-post.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const eventPageTemplate = path.resolve(`./src/templates/event.js`)
  const clubPageTemplate = path.resolve(`./src/templates/club-page.js`)

  const result = await graphql(
    `
      {
        allWpPost(limit: 10) {
          edges {
            node {
              id
              uri
            }
          }
        }

        allWpPage {
          edges {
            node {
              id
              uri
            }
          }
        }

        allWpClub {
          edges {
            node {
              id
              uri
            }
          }
        }

        allWpEvent(filter: { title: { regex: "/TCA/" } }) {
          edges {
            node {
              id
              uri
              content
            }
          }
        }

        allWpMenu {
          edges {
            node {
              name
              locations
              id
              menuItems {
                nodes {
                  label
                  id
                  path
                  childItems {
                    nodes {
                      id
                      label
                      path
                    }
                  }
                  url
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const menus = result.data.allWpMenu.edges

  const posts = result.data.allWpPost.edges

  posts.forEach((post, index) => {
    createPage({
      path: post.node.uri,
      component: newsPostTemplate,
      context: {
        id: post.node.id,
        menus,
      },
    })
  })

  const pages = result.data.allWpPage.edges

  pages.forEach((page, index) => {
    createPage({
      path: page.node.uri,
      component: pageTemplate,
      context: {
        id: page.node.id,
        uri: page.node.uri,
        menus,
      },
    })
  })

  const clubs = result.data.allWpClub.edges

  clubs.forEach((page, index) => {
    createPage({
      path: page.node.uri,
      component: clubPageTemplate,
      context: {
        id: page.node.id,
        uri: page.node.uri,
        menus,
      },
    })
  })

  const events = result.data.allWpEvent.edges

  events.forEach((page, index) => {
    const baseUri = page.node.uri // ie: events/tca-something-or-other
    const eventSections = parseEventContent(page.node.content)
    if (!eventSections) {
      const uri = baseUri

      createPage({
        path: uri,
        component: eventPageTemplate,
        context: {
          id: page.node.id,
          uri,
          menus,
          eventMenu: [],
          eventSection: {
            body: page.node.content,
          },
        },
      })

      return
    }

    const eventMenu = getEventMenuLinks({ baseUri, eventSections })

    eventSections.forEach((eventSection, sectionIndex) => {
      const uri = sectionIndex === 0 ? baseUri : `${baseUri}/${eventSection.id}`

      createPage({
        path: uri,
        component: eventPageTemplate,
        context: {
          id: page.node.id,
          uri,
          menus,
          eventMenu,
          eventSection,
        },
      })
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
