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

export const LongDescription = Template.bind({})
LongDescription.args = {
  title: 'Hello World',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus mauris, luctus commodo ex ac, accumsan maximus felis. Pellentesque nec consectetur dolor. Morbi consectetur urna leo. Aliquam luctus neque a.',
}
