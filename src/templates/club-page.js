import { graphql } from 'gatsby'
import { ClubPageBody } from '../components/club-page-body'

const PageTemplate = ClubPageBody

export default PageTemplate

export const pageQuery = graphql`
  query ClubById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wpClub(id: { eq: $id }) {
      title
      content
      lat
      lng
      clubLink
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
`
