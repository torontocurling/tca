import React, { useEffect, useState } from 'react'
import SEO from './seo'
import Layout from './layout'
import { PageNavLayout } from './page-nav-layout'
import { EventSidebarSummary } from './event-sidebar-summary'
import { Colors } from '../constants/colors'
import { rhythm } from '../utils/typography'

const findMenu = ({ uri, menus }) => {
  const primaryMenu = menus.find(menu => menu.node.name === 'Primary')
  if (!primaryMenu) return

  return primaryMenu.node.menuItems.nodes.find(({ url }) => uri.includes(url))
}

const regFormResponses = {} // keyed by eventId

const getRegForm = async eventId => {
  if (regFormResponses[eventId]) {
    return Promise.resolve(regFormResponses[eventId])
  }

  return fetch(`https://torontocurling.com/eventform.php?evid=${eventId}`)
    .then(response => response.json())
    .then(json => {
      regFormResponses[eventId] = json
      return json
    })
}

const addFormLink = (menuItems, formResponse) => [
  ...menuItems,
  {
    path: formResponse?.form?.id
      ? `https://torontocurling.com/event-register?fid=${formResponse.form.id}`
      : undefined,
    label: 'Online Entry',
  },
]

export const EventPageBody = ({ data, location, pageContext }) => {
  const { uri, menus, eventMenu, eventSection } = pageContext
  const post = data.wpEvent

  const siteTitle = data.site.siteMetadata.title
  const pageMenu = findMenu({ uri, menus })
  let menuItems = pageMenu?.childItems?.nodes || []

  const [formResponse, setFormResponse] = useState({})
  menuItems = [...addFormLink(menuItems, formResponse), ...eventMenu]

  useEffect(() => {
    getRegForm(post.databaseId)
      .then(form => setFormResponse(form))
      .catch(err => console.error('Failed to load form', err))
  }, [])

  const topMenu = <EventSidebarSummary eventNode={post} />

  return (
    <Layout {...{ location, pageContext }} title={siteTitle}>
      <SEO
        title={
          eventSection.header
            ? `${post.title} - ${eventSection.header}`
            : post.title
        }
      />
      <PageNavLayout {...{ menuItems, pageMenu, topMenu }} hideParent>
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
        <section dangerouslySetInnerHTML={{ __html: eventSection.body }} />
      </PageNavLayout>
    </Layout>
  )
}
