import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { parseEvent } from './event.helpers'
import { EventDateSummary } from './event-date-summary'
import { Colors } from '../constants'

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  min-height: 180px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const RightSide = styled('div')`
  flex: 1;
  margin-left: 20px;
  padding-top: 15px;
`

export const EventRow = ({ eventNode }) => {
  const {
    month,
    firstDay,
    firstDate,
    secondDay,
    secondDate,
    info,
  } = useMemo(() => parseEvent(eventNode), [eventNode])

  return (
    <Container>
      <EventDateSummary
        style={{ marginTop: 10 }}
        {...{
          month,
          firstDay,
          firstDate,
          secondDay,
          secondDate,
          info,
        }}
      />
      <RightSide>
        <h3>
          <Link
            to={eventNode.uri}
            style={{ color: Colors.blue, textDecoration: 'none' }}
          >
            {eventNode.title}
          </Link>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: eventNode.excerpt }} />
      </RightSide>
    </Container>
  )
}
