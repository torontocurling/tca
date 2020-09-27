import * as Gatsby from 'gatsby'
import styled from 'styled-components'
import { Colors } from '../constants/colors'

export const Link = styled(Gatsby.Link)`
  color: ${Colors.blue};
  text-decoration: none;
`

export const FakeLink = styled('span')`
  color: ${Colors.darkGrey};
`
