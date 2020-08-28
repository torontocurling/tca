import React from 'react'
import Layout from './layout'
import SEO from './seo'

import { rhythm, scale } from '../utils/typography'

export const PageBody = ({ data, location }) => {
  const post = data.wpPage
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
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
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  )
}
