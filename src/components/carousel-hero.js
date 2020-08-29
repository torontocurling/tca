import React, { useState } from 'react'
import { useTimeout } from '../utils/use-timeout'

const Image = ({ src, visible }) => (
  <div
    className="carousel-hero-img"
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      opacity: visible ? 1 : 0.5,
      visibility: visible ? 'visible' : 'hidden',
    }}
  />
)

const images = [
  require('../assets/women.jpg'),
  require('../assets/rink.jpg'),
  require('../assets/men.jpg'),
]

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
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `
      .carousel-hero-img {
        transition: visibility 0s, opacity 0.5s linear;
      }
    `,
        }}
      ></style>
      <div
        className="carousel-hero"
        style={{
          position: 'relative',
          minHeight: 400,
          overflow: 'hidden',
          borderRadius: 4,
          marginBottom: 20,
        }}
      >
        {images.map((imgName, i) => (
          <Image src={imgName} visible={i === currentIndex} />
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
      </div>
    </div>
  )
}
