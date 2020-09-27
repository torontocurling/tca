import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HeroForm } from '../components/hero-form'
import { EmptyState } from '../components/empty-state'
import { renderLearnToCurlFilterForm } from '../page-support/learn-to-curl.form'

const LearnToCurl = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const menus = data.allWpMenu.edges

  return (
    <Layout
      {...{ location, pageContext: { ...pageContext, menus } }}
      title={siteTitle}
    >
      <SEO title="Learn to Curl" />
      <HeroForm
        onSubmit={() => {}}
        text={
          'Curling facilities in Toronto offer "Learn to Curl" sessions and beginner events throughout the season. We can help you find one close by.'
        }
      />
      <EmptyState listingType="learn to curl" />
    </Layout>
  )
}

export default LearnToCurl

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
