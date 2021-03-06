import React from 'react'
import styled from 'styled-components'
import { graphql, navigate } from 'gatsby'
import { GrCircleInformation } from 'react-icons/gr'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { BannerButton } from '../components/banner-button'
import { CarouselHero } from '../components/carousel-hero'
import { PostList } from '../page-support/post-list'
import { Button } from '../components/button'
import { SocialSubscribe } from '../components/social-subscribe'

const InfoIcon = styled('div')`
  display: inline-block;
  position: relative;
  top: 2px;
  margin-right: 10px;

  path {
    stroke: white;
  }
`

const FrontPage = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allWpPost.edges
  const menus = data.allWpMenu.edges

  return (
    <Layout
      {...{ location, pageContext: { ...pageContext, menus } }}
      title={siteTitle}
    >
      <SEO title="TCA Home" />
      <BannerButton
        onClick={() => navigate('/covid-19')}
        style={{ marginBottom: 20, color: 'white' }}
      >
        <InfoIcon>
          <GrCircleInformation />
        </InfoIcon>
        COVID-19 Updates and helpful resources for curling facilities
      </BannerButton>
      <CarouselHero label="Your GTA Curling Hub" style={{ marginBottom: 35 }} />
      <PostList posts={posts} />
      <div style={{ textAlign: 'center', padding: 20 }}>
        <Button to="more-news">More News</Button>
      </div>
      <SocialSubscribe />
    </Layout>
  )
}

export default FrontPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpPost(
      limit: 3
      sort: { fields: [date], order: DESC }
      filter: { status: { eq: "publish" }, date: { ne: null } }
    ) {
      edges {
        node {
          date
          slug
          title
          content
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
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
