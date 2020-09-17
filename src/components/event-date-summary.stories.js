import React from 'react'

import { EventDateSummary } from './event-date-summary'

export default {
  title: 'Components/EventDateSummary',
  component: EventDateSummary,
}

const Template = args => <EventDateSummary {...args} />

export const DefaultEventDateSummary = Template.bind({})
DefaultEventDateSummary.args = {
  month: 'January',
  firstDate: '12',
  firstDay: 'Fri',
  secondDate: '15',
  secondDay: 'Sun',
  info: 'Mixed',
}
