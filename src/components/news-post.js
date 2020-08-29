import React from 'react'
import Layout from './layout'
import SEO from './seo'

import { rhythm, scale } from '../utils/typography'

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const formatDate = dateString => {
  return new Intl.DateTimeFormat('en-CA', dateOptions).format(
    new Date(dateString)
  )
}

export const NewsPost = ({ data, location, pageContext }) => {
  const post = data.wpPost
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout {...{ location, pageContext }} title={siteTitle}>
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
              color: '#3275b8',
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          >
            {formatDate(post.date)}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  )
}
