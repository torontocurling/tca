import React from 'react'

import { HorizontalSelector } from './horizontal-selector'
import { weekdayOptions } from '../constants/weekdays'

export default {
  title: 'Components/HorizontalSelector',
  component: HorizontalSelector,
}

const Template = args => <HorizontalSelector {...args} />

export const DaysOfTheWeek = Template.bind({})
DaysOfTheWeek.args = {
  options: weekdayOptions,
  onChange: () => {},
  value: [0, 3],
}
