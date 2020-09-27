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
      databaseId
      excerpt # required to avoid it disappearing on index page on hard reload (??)
      title
      contact
      emaill
      start
      end
      fee
      flyer
      phone
    }
  }
`
