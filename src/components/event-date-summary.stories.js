import React from 'react'

import { EventDateSummary } from './event-date-summary'

export default {
  title: 'Components/EventDateSummary',
  component: EventDateSummary,
}

const Template = args => <EventDateSummary {...args} />

export const DateRangeSummary = Template.bind({})
DateRangeSummary.args = {
  month: 'January',
  firstDate: '12',
  firstDay: 'Fri',
  secondDate: '15',
  secondDay: 'Sun',
  info: 'Mixed',
}

export const SingleDateSummary = Template.bind({})
SingleDateSummary.args = {
  month: 'January',
  firstDate: '12',
  firstDay: 'Fri',
  info: 'Mixed',
}

export const NoDate = Template.bind({})
NoDate.args = {
  info: 'Mixed',
}
