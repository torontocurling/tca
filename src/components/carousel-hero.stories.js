import React from 'react'
import { bodyContainerStyle } from './layout.styles'
import { CarouselHero } from './carousel-hero'

export default {
  title: 'Components/CarouselHero',
  component: CarouselHero,
}

const Wrapper = props => (
  <div style={{ ...bodyContainerStyle, position: 'relative' }}>
    {props.children}
  </div>
)

const Template = args => (
  <Wrapper>
    <CarouselHero {...args} />
  </Wrapper>
)

export const DefaultCarouselHero = Template.bind({})
DefaultCarouselHero.args = {
  label: 'Your GTA Curling Hub',
}
