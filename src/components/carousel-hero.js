import styled from 'styled-components'
import React, { useState } from 'react'
import { useTimeout } from '../utils/use-timeout'

const images = [
  require('../assets/women.jpg'),
  require('../assets/rink.jpg'),
  require('../assets/men.jpg'),
]

const HeroImage = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: ${props => `url('${props.src}')`};
  background-size: cover;
  opacity: ${props => (props.visible ? 1 : 0.5)};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transition: visibility 0s, opacity 0.5s linear;
`

const HeroContainer = styled('div')`
  position: relative;
  min-height: 400px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    min-height: 200px;
  }
`

export const CarouselHero = ({ label, style }) => {
  const [currentIndex, setIndex] = useState(0)

  useTimeout(() => {
    let nextIndex = currentIndex + 1
    if (nextIndex >= images.length) {
      nextIndex = 0
    }
    setIndex(nextIndex)
  }, 5000)

  return (
    <div style={style}>
      <HeroContainer>
        {images.map((imgName, i) => (
          <HeroImage key={imgName} src={imgName} visible={i === currentIndex} />
        ))}
        <h2
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            margin: 0,
            padding: 20,
            backgroundColor: 'rgba(255,255,255,0.6)',
          }}
        >
          {label}
        </h2>
      </HeroContainer>
    </div>
  )
}
