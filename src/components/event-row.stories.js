import React from 'react'

import { EventRow } from './event-row'

const exampleSingleDayTcaEvent = {
  id: 'cG9zdDoxOTU1',
  uri: '/events/tca-business-womens-championship/',
  title: 'TCA Business Women’s Championship',
  contact: 'Joanne Stewart',
  excerpt:
    '<p>Sponsor For sponsorship opportunities please contact Joanne Stewart. Format Our event has been cancelled this season.   We hope to see you in November 2021. 24 teams     6 events Each team will play two games on Saturday and one game on Sunday Draw times on Saturday are 8:45 a.m., 11 a.m., 1:45 p.m. and 3:45 p.m. Draw […]</p>\n',
  emaill: 'bw@torontocurling.com',
  start: 1637366400,
  end: 1637452800,
  eventcat: '',
  eventtype: 'tca',
  eventformat: '',
  fee: '300',
  flyer: '',
  phone: '',
}

const exampleTwoDayTcaEvent = {
  id: 'cG9zdDoyMjk5',
  uri: '/events/tca-mixed-doubles/',
  title: 'TCA Hugh Murphy Mixed Doubles Championship',
  contact: 'Chris Wai',
  excerpt:
    '<p>TCA Hugh Murphy Mixed Doubles Championships will be hosted by The Thornhill Club in 2021. Format Tier 2 World Mixed Doubles Tour https://worldcurl.com/events 24 teams Two tiers Competitive Tier | 16 teams | 4 A-qualifiers, 4 B-qualifiers Club Tier | 8 teams | 6 qualifiers $400/team 3 games guaranteed (6 pools of 4); 5 games max […]</p>\n',
  emaill: 'chris@oakvillecurlingclub.com',
  start: 1616803200,
  end: 1616889600,
  eventcat: 'Mixed Doubles',
  eventtype: 'tca',
  eventformat: '',
  fee: '$400',
  flyer: '',
  phone: '905-844-6982',
}

export default {
  title: 'Components/EventRow',
  component: EventRow,
}

const Template = args => <EventRow {...args} />

export const SingleDayEvent = Template.bind({})
SingleDayEvent.args = {
  eventNode: exampleSingleDayTcaEvent,
}

export const TwoDayEvent = Template.bind({})
TwoDayEvent.args = {
  eventNode: exampleTwoDayTcaEvent,
}
