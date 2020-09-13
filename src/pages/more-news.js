import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { CarouselHero } from '../components/carousel-hero'
import { PostList } from '../page-support/post-list'

const MoreNews = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allWpPost.edges
  const menus = data.allWpMenu.edges

  return (
    <Layout
      {...{ location, pageContext: { ...pageContext, menus } }}
      title={siteTitle}
    >
      <SEO title="More News" />
      <PostList posts={posts} />
    </Layout>
  )
}

export default MoreNews

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpPost(
      limit: 10
      sort: { fields: [date], order: DESC }
      filter: { status: { eq: "publish" }, date: { ne: null } }
    ) {
      edges {
        node {
          date
          slug
          title
          content
          featuredImage {
            node {
              mediaItemUrl
            }
          }
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
