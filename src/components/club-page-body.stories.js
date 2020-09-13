import React from 'react'

import { ClubPageBody } from './club-page-body'

export default {
  title: 'Components/Club Page Body',
  component: ClubPageBody,
}

const Template = args => <ClubPageBody {...args} />

const defaultProps = {
  site: {
    siteMetadata: {
      title: 'Toronto Curling Association',
    },
  },
}

const clubExample = {
  title: 'Oshawa Golf & Curling Club',
  content:
    '<p>Winter’s most fun activity is available for everyone from juniors to adults and seniors. The Oshawa Golf & Curling Club has a very active and creative curling membership. <!--more-->All types of leagues are available for men, ladies, business women, mixed and junior curling, be it morning, afternoon or evening.</p>\n<p>Curling is an important and valued part of our overall program and provides the continuity required for a year-round facility. Curlers also have full use of the club’s facilities for the entire year. Our curling club boasts a six-sheet rink with spectacular viewing from our own curling lounge including an in-house camera system that provides spectators with a clear look at the rocks in play at the far end of the rink.</p>\n<p>The club has many schools and organizations that use our facilities for curling and socializing. We also host four of Durham’s most popular bonspiels and originated a high profile professional “Skins” curling competition with teams from across Canada.</p>\n<p> </p>\n',
  lat: 43.9062306,
  lng: -78.8764057,
  clubLink: 'http://www.oshawagolf.com',
  contact: 'Jacqueline Deschenes, Curling Coordinator',
  phone: '(905) 409-0440 Ext. 305 - curling@oshawagolf.com',
  address: '160 Alexandra St. Oshawa, ON L1G 2C4',
  featuredImage: {
    node: {
      mediaItemUrl:
        'https://torontocurling.com/wp-content/uploads/2016/10/i_logo-2.png',
    },
  },
}

export const JustText = Template.bind({})
JustText.args = {
  data: {
    ...defaultProps,
    wpClub: clubExample,
  },
  pageContext: {
    menus: [
      {
        node: {
          name: 'Primary',
          menuItems: {
            nodes: [
              { url: '/something-else/', childItems: [] },
              {
                url: '/some-page/',
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
    uri: '/some-page/',
    id: 'some-id',
  },
}
