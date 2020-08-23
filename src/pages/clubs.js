import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

const ClubIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const clubs = data.allWpClub.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Curling Facilities" />
      {clubs.map(({ node }) => (
        <div>{node.title}</div>
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
    allWpClub {
      edges {
        node {
          title
          lat
          lng
          contact
          phone
          address
        }
      }
    }
  }
`
