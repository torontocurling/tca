import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const maxImageWidth = 180
const maxImageHeight = 120

const styleForPlaceholder = `
  background-color: #bbb;
  background-size: cover;
  opacity: 0.3;
`

const styleForFeatureImage = `
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Thumbnail = styled('div')`
  width: ${maxImageWidth}px;
  height: ${maxImageHeight}px;
  width: 200px;
  textalign: center;

  background-image: ${props =>
    props.uri
      ? `url('${props.uri}')`
      : `url('${require('../assets/logo+transparent+grey.png')}')`};

  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  ${props => (props.uri ? styleForFeatureImage : styleForPlaceholder)}

  @media (max-width: 768px) {
    display: none;
  }
`

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  min-height: ${maxImageHeight}px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const RightSide = styled('div')`
  margin-left: 20px;
  padding-top: 15px;
`

export const ThumbnailRow = ({ imageUri, title, description, link }) => (
  <Container>
    <Link to={link}>
      <Thumbnail uri={imageUri} />
    </Link>
    <RightSide>
      <h3>
        <Link to={link} style={{ color: '#3275b8', textDecoration: 'none' }}>
          {title}
        </Link>
      </h3>
      <p>{description}</p>
    </RightSide>
  </Container>
)
