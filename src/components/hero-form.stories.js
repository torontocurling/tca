import React from 'react'

import { HeroForm } from './hero-form'
import { renderLearnToCurlFilterForm } from '../pages/learn-to-curl.form'
import { renderSelectALeagueFilterForm } from '../pages/select-a-league.form'

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
