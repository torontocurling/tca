import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ThumbnailRow } from '../components/thumbnail-row'
import { ClubMap } from '../components/club-map'

const ClubIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const clubs = data.allWpClub.edges

  return (
    <Layout {...{ location, pageContext }} title={siteTitle}>
      <SEO title="Curling Facilities" />
      <ClubMap clubs={clubs} />
      {clubs.map(({ node }) => (
        <ThumbnailRow
          title={node.title}
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
  }
`
