import React from 'react'

import { Footer } from './footer'

export default {
  title: 'Components/Footer',
  component: Footer,
}

const Template = args => <Footer {...args} />

export const DefaultFooter = Template.bind({})
DefaultFooter.args = {
  menus: [
    {
      node: {
        name: 'Footer',
        menuItems: {
          nodes: [
            { label: 'Main header', path: '/something-else/', childItems: {} },
            {
              label: 'Another header',
              path: '/some-page/',
              childItems: {
                nodes: [
                  { label: 'Some Page', path: '/some-page' },
                  { label: 'Some longer page title', path: 'long-page' },
                  {
                    label: 'Some longer than the other long page title',
                    path: 'long-page',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  ],
}
