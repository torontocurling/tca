import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HeroForm } from '../components/hero-form'
import { EmptyState } from '../components/empty-state'
import { renderFindAnEventFilterForm } from '../page-support/find-an-event.form'

const FindAnEvent = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const menus = data.allWpMenu.edges

  return (
    <Layout
      {...{ location, pageContext: { ...pageContext, menus } }}
      title={siteTitle}
    >
      <SEO title="Find An Event" />
      <HeroForm
        onSubmit={() => {}}
        text={'Find an event to participate in this season'}
        renderForm={renderFindAnEventFilterForm}
      />
      <EmptyState listingType="event" />
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
          content
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
