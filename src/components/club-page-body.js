import React from 'react'
import SEO from './seo'
import Layout from './layout'
import { ClubMap } from './club-map'
import { Colors } from '../constants/colors'
import { rhythm } from '../utils/typography'
import { PageNavLayout } from './page-nav-layout'

const findMenu = ({ uri, menus }) => {
  const primaryMenu = menus.find(menu => menu.node.name === 'Primary')
  if (!primaryMenu) return

  return primaryMenu.node.menuItems.nodes.find(({ url }) => uri.includes(url))
}

const formatLink = url => url.replace(/^https?:\/\/(www\.)?/, '')

export const ClubPageBody = ({ data, location, pageContext }) => {
  const { uri, menus } = pageContext
  const club = data.wpClub
  const siteTitle = data.site.siteMetadata.title
  const pageMenu = findMenu({ uri, menus })
  const menuItems = pageMenu?.childItems?.nodes || []
  const logo = club.featuredImage?.node?.mediaItemUrl

  return (
    <Layout {...{ location, pageContext }} title={siteTitle}>
      <SEO title={club.title} />
      <PageNavLayout {...{ logo, menuItems, pageMenu }}>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              color: Colors.blue,
            }}
          >
            {club.title}
          </h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: club.content }} />
        <section>
          {club.address && <p>{club.address}</p>}
          {club.clubLink && (
            <p>
              <a href={club.clubLink} target="_blank">
                {formatLink(club.clubLink)}
              </a>
            </p>
          )}
          {club.contact && (
            <p>
              {club.contact}
              {club.phone ? (
                <>
                  <br />
                  {club.phone}
                </>
              ) : null}
            </p>
          )}
        </section>
        <ClubMap clubs={[club]} initialZoom={12} />
      </PageNavLayout>
    </Layout>
  )
}
