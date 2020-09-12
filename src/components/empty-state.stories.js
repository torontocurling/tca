import React from 'react'

import { EmptyState } from './empty-state'

export default {
  title: 'Components/EmptyState',
  component: EmptyState,
}

const Template = args => <EmptyState {...args} />

export const DefaultEmptyState = Template.bind({})
DefaultEmptyState.args = {
  listingType: 'learn to curl',
}
