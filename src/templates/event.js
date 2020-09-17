import { graphql } from 'gatsby'
import { EventPageBody } from '../components/event-page-body'

const PageTemplate = EventPageBody

export default PageTemplate

export const pageQuery = graphql`
  query EventById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wpEvent(id: { eq: $id }) {
      id
      content
      title
    }
  }
`
