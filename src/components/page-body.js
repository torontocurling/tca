import React from 'react'
import Layout from './layout'
import SEO from './seo'
import { Link } from './link'
import { Colors } from '../constants/colors'
import { rhythm, scale } from '../utils/typography'

const findMenu = ({ uri, menus }) => {
  const primaryMenu = menus.find(menu => menu.node.name === 'Primary')
  if (!primaryMenu) return

  return primaryMenu.node.menuItems.nodes.find(({ url }) => url === uri)
}

export const PageBody = ({ data, location, pageContext: { uri, menus } }) => {
  const post = data.wpPage
  const siteTitle = data.site.siteMetadata.title
  const pageMenu = findMenu({ uri, menus })
  const menuItems = pageMenu?.childItems?.nodes || []

  console.log({ menus, uri, pageMenu })

  return (
    <Layout location={location} title={siteTitle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {menuItems.length > 0 && (
          <nav
            style={{
              minWidth: 200,
              marginRight: 20,
              paddingRight: 20,
              borderRightStyle: 'solid',
              borderRightWidth: 2,
              borderRightColor: Colors.grey,
            }}
          >
            <ul style={{ listStyle: 'none', marginLeft: 0 }}>
              {menuItems.map(menuItem => (
                <li key={menuItem.path} style={{ marginTop: 20 }}>
                  <Link to={menuItem.path}>{menuItem.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <article style={{ flexGrow: 1 }}>
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
        </article>
      </div>
    </Layout>
  )
}