import React from 'react'

import { ThumbnailRow } from './thumbnail-row'

export default {
  title: 'Components/Thumbnail Row',
  component: ThumbnailRow,
}

const Template = args => <ThumbnailRow {...args} />

export const NoImage = Template.bind({})
NoImage.args = {
  title: 'Hello World',
  description: 'This is a description',
}
