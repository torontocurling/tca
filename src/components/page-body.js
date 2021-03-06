import React from 'react'
import SEO from './seo'
import Layout from './layout'
import { PageNavLayout } from './page-nav-layout'
import { Colors } from '../constants/colors'
import { rhythm } from '../utils/typography'

const findMenu = ({ uri, menus }) => {
  const primaryMenu = menus.find(menu => menu.node.name === 'Primary')
  if (!primaryMenu) return

  return primaryMenu.node.menuItems.nodes.find(({ url }) => uri.includes(url))
}

export const PageBody = ({ data, location, pageContext }) => {
  const { uri, menus } = pageContext
  const post = data.wpPage
  const siteTitle = data.site.siteMetadata.title
  const pageMenu = findMenu({ uri, menus })
  const menuItems = pageMenu?.childItems?.nodes || []

  if (typeof window === 'object' && uri === '/event-register/') {
    window.location.reload()
  }

  return (
    <Layout {...{ location, pageContext }} title={siteTitle}>
      <SEO title={post.title} />
      <PageNavLayout {...{ menuItems, pageMenu }}>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              color: Colors.blue,
            }}
          >
            {post.title}
          </h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.content }} />
      </PageNavLayout>
    </Layout>
  )
}
