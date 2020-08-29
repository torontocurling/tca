import { graphql } from 'gatsby'
import { PageBody } from '../components/page-body'

const PageTemplate = PageBody

export default PageTemplate

export const pageQuery = graphql`
  query PageById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wpPage(id: { eq: $id }) {
      id
      content
      title
    }
  }
`
