import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ThumbnailRow } from '../components/thumbnail-row'
import { ClubMap } from '../components/club-map'

const ClubIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const clubs = data.allWpClub.edges
  const menus = data.allWpMenu.edges

  return (
    <Layout
      {...{ location, pageContext: { ...pageContext, menus } }}
      title={siteTitle}
    >
      <SEO title="Curling Facilities" />
      <ClubMap clubs={clubs} />
      {clubs.map(({ node }) => (
        <ThumbnailRow
          title={node.title}
          link={node.uri}
          description={node.address}
          imageUri={node.featuredImage.node.mediaItemUrl}
        />
      ))}
    </Layout>
  )
}

export default ClubIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpClub(sort: { fields: [title], order: [ASC] }) {
      edges {
        node {
          title
          lat
          lng
          uri
          contact
          phone
          address
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
