import React from 'react'
import { Link } from './link'
import { Colors } from '../constants'

export const Button = props => (
  <Link
    to={props.to}
    style={{
      borderColor: Colors.blue,
      borderWidth: 2,
      borderStyle: 'solid',
      textTransform: 'uppercase',
      fontSize: 12,
      fontWeight: 700,
      padding: '10px 30px',
      borderRadius: 40,
    }}
  >
    {props.children}
  </Link>
)
