import React from 'react'
import * as Gatsby from 'gatsby'
import { Colors } from '../constants/colors'

export const Link = props => (
  <Gatsby.Link
    {...props}
    style={{
      ...props.style,
      color: Colors.blue,
      textDecoration: 'none',
    }}
  />
)
