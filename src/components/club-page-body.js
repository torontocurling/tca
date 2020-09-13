import React from 'react'
import Layout from './layout'
import { Link } from './link'
import { ClubMap } from './club-map'
import { Colors } from '../constants/colors'
import { rhythm } from '../utils/typography'

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
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
          {logo && <img src={logo} style={{ maxWidth: 180 }} />}
        </nav>
        <article style={{ flexGrow: 1 }}>
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
        </article>
      </div>
    </Layout>
  )
}
