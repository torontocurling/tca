import React from 'react'
import { Link, graphql } from 'gatsby'
import { NewsPost } from '../components/news-post'

import { rhythm, scale } from '../utils/typography'

const PageTemplate = NewsPost

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
      date
      content
      title
    }
  }
`
