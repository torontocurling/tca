import React from 'react'
import { Link, graphql } from 'gatsby'
import { NewsPost } from '../components/news-post'

import { rhythm, scale } from '../utils/typography'

const NewsPostTemplate = NewsPost

export default NewsPostTemplate

export const pageQuery = graphql`
  query NewsPostById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wpPost(id: { eq: $id }) {
      id
      date
      content
      title
    }
  }
`
