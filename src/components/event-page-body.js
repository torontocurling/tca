import React, { useEffect, useMemo, useState } from 'react'
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

const getRegForm = async eventId =>
  fetch(
    `https://torontocurling.com/eventform.php?evid=${eventId}`
  ).then(response => response.json())

const addFormLink = (menuItems, formResponse) =>
  formResponse?.form?.id
    ? [
        ...menuItems,
        {
          path: `https://torontocurling.com/event-register?fid=${formResponse.form.id}`,
          label: 'Online Entry',
        },
      ]
    : menuItems

const addSectionLinks = (menuItems, sections) => [
  ...menuItems,
  ...sections
    .filter(
      ({ header }) => /[<>]/.test(header) === false && header.trim().length > 0
    )
    .map(({ id, header }) => ({
      path: `#${id}`,
      label: header,
    })),
]

const urlifyHeader = header =>
  header.replace(/\s+/, '-').replace(/[^a-z0-9-]/gi, '')

const parseContent = pageContent => {
  if (!pageContent) return []
  const parts = pageContent.split(/<h1>/gi)
  return parts.map(part => {
    const header = part.split(/<\/h1>/i).shift()
    const id = urlifyHeader(header)
    const startTag = `<h1 id="${id}">`
    const body = `${startTag}${part}`
    return { header, body, id }
  })
}

export const EventPageBody = ({ data, location, pageContext }) => {
  const { uri, menus } = pageContext
  const post = data.wpEvent
  const sections = useMemo(() => parseContent(post.content), [post.content])

  const siteTitle = data.site.siteMetadata.title
  const pageMenu = findMenu({ uri, menus })
  let menuItems = pageMenu?.childItems?.nodes || []

  const [formResponse, setFormResponse] = useState({})
  menuItems = addSectionLinks(addFormLink(menuItems, formResponse), sections)

  useEffect(() => {
    getRegForm(post.databaseId)
      .then(form => setFormResponse(form))
      .catch(err => console.error('Failed to load form', err))
  }, [])

  const topMenu = <EventSidebarSummary eventNode={post} />

  return (
    <Layout {...{ location, pageContext }} title={siteTitle}>
      <PageNavLayout
        {...{ menuItems, pageMenu, topMenu }}
        hideParent
        pinOnScroll
      >
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
        {sections.map(({ body }) => (
          <section dangerouslySetInnerHTML={{ __html: body }} />
        ))}
      </PageNavLayout>
    </Layout>
  )
}
