import React from 'react'

import { Button } from './button'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const LinkButton = Template.bind({})
LinkButton.args = {
  to: '',
  children: 'I am a button',
}
