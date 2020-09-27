import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HeroForm } from '../components/hero-form'
import { EmptyState } from '../components/empty-state'
import { renderSelectALeagueFilterForm } from '../page-support/select-a-league.form'

const SelectALeague = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const menus = data.allWpMenu.edges

  return (
    <Layout
      {...{ location, pageContext: { ...pageContext, menus } }}
      title={siteTitle}
    >
      <SEO title="Select a League" />
      <HeroForm
        onSubmit={() => {}}
        text={'Find a weekly curling league that fits your schedule'}
      />
      <EmptyState listingType="league" />
    </Layout>
  )
}

export default SelectALeague

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
  }
`
