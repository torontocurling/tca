import React from 'react'

import { HeroForm } from './hero-form'

export default {
  title: 'Components/HeroForm',
  component: HeroForm,
}

const Template = args => <HeroForm {...args} />

export const DefaultHeroForm = Template.bind({})
DefaultHeroForm.args = {
  onSubmit: () => {},
  validate: () => {},
}
