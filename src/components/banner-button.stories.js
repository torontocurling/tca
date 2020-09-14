import React from 'react'

import { BannerButton } from './banner-button'

export default {
  title: 'Components/BannerButton',
  component: BannerButton,
}

const Template = args => <BannerButton {...args} />

export const Default = Template.bind({})
Default.args = {
  to: '',
  children: 'COVID-19: Read the latest updates on return to curling guidelines',
}
