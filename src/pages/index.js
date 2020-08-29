import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { CarouselHero } from '../components/carousel-hero'
import { ThumbnailRow } from '../components/thumbnail-row'

const parseContent = content => {
  const plainText = content.replace(/(<([^>]+)>)/gi, '')
  if (plainText.length > 150) {
    const shorter = plainText.substr(0, 150)
    if (/[^a-z0-9]/.test(shorter[shorter.length - 1])) {
      return `${shorter.trim()}...`
    }

    const parts = shorter.split(/\s/)
    parts.pop()
    return `${parts.join(' ')}...`
  }

  return plainText
}

const PostItem = ({ title, content, slug }) => {
  const textContent = useMemo(() => parseContent(content), [content])

  return (
    <ThumbnailRow title={title} description={textContent} link={`/${slug}`} />
  )
}

const FrontPage = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allWpPost.edges

  return (
    <Layout {...{ location, pageContext }} title={siteTitle}>
      <SEO title="All posts" />
      <CarouselHero label="Your GTA Curling Hub" style={{ marginBottom: 35 }} />
      {posts.map(({ node }) => (
        <PostItem {...node} />
      ))}
    </Layout>
  )
}

export default FrontPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpPost(limit: 3) {
      edges {
        node {
          date
          slug
          title
          content
        }
      }
    }
  }
`
