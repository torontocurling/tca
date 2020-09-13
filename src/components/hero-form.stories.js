import React from 'react'

import { HeroForm } from './hero-form'
import { renderLearnToCurlFilterForm } from '../page-support/learn-to-curl.form'
import { renderSelectALeagueFilterForm } from '../page-support/select-a-league.form'
import { renderFindAnEventFilterForm } from '../page-support/find-an-event.form'

export default {
  title: 'Components/HeroForm',
  component: HeroForm,
}

const Template = args => <HeroForm {...args} />

export const LearnToCurl = Template.bind({})
LearnToCurl.args = {
  onSubmit: () => {},
  validate: () => {},
  text: 'So you want to Learn to Curl...',
  renderForm: renderLearnToCurlFilterForm,
}

export const SelectALeague = Template.bind({})
SelectALeague.args = {
  onSubmit: () => {},
  validate: () => {},
  text: 'So you want to Select a League...',
  renderForm: renderSelectALeagueFilterForm,
}

export const FindAnEvent = Template.bind({})
FindAnEvent.args = {
  onSubmit: () => {},
  validate: () => {},
  text: 'So you want to Find an Event...',
  renderForm: renderFindAnEventFilterForm,
}
