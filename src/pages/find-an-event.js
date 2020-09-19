import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HeroForm } from '../components/hero-form'
import { EmptyState } from '../components/empty-state'
import { EventRow } from '../components/event-row'
import { renderFindAnEventFilterForm } from '../page-support/find-an-event.form'

const today = Date.now()

const filterSortEvents = eventNodes =>
  eventNodes
    .filter(({ node }) => !node.start || node.start * 1000 > today)
    .sort((a, b) => a.node.start - b.node.start)

const FindAnEvent = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const menus = data.allWpMenu.edges
  const events = useMemo(() => filterSortEvents(data.allWpEvent.edges), [
    data.allWpEvent.edges,
  ])

  return (
    <Layout
      {...{ location, pageContext: { ...pageContext, menus } }}
      title={siteTitle}
    >
      <SEO title="Find An Event" />
      <HeroForm
        style={{ marginBottom: 20 }}
        onSubmit={() => {}}
        text={'Find an event to participate in this season'}
        renderForm={renderFindAnEventFilterForm}
      />
      {events.length > 0 ? (
        events.map(({ node }) => <EventRow eventNode={node} />)
      ) : (
        <EmptyState listingType="event" />
      )}
    </Layout>
  )
}

export default FindAnEvent

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpMenu {
      edges {
        node {
          name
          locations
          id
          menuItems {
            nodes {
              label
              id
              path
              childItems {
                nodes {
                  id
                  label
                  path
                }
              }
              url
            }
          }
        }
      }
    }

    allWpEvent {
      edges {
        node {
          id
          uri
          title
          contact
          excerpt
          emaill
          start
          end
          eventcat
          eventtype
          eventformat
          fee
          flyer
          phone
        }
      }
    }
  }
`
