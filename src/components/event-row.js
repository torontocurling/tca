import React, { useMemo } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { Link } from 'gatsby'
import { EventDateSummary } from './event-date-summary'
import { Colors } from '../constants'

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  min-height: 180px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
`

const RightSide = styled('div')`
  flex: 1;
  margin-left: 20px;
  padding-top: 15px;
`

const parseEvent = ({ start, end, eventcat, eventtype }) => {
  const startDate = new Date(start * 1000)
  const endDate = new Date(end * 1000)

  const month = `${format(startDate, 'MMMM')} ${format(startDate, 'yyyy')}`
  const firstDate = format(startDate, 'd')
  const firstDay = format(startDate, 'E')
  const secondDate = format(endDate, 'd')
  const secondDay = format(endDate, 'E')

  const info = eventcat || (eventtype === 'tca' ? 'TCA' : 'Club')

  return { month, firstDate, firstDay, secondDate, secondDay, info }
}

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
            style={{ color: '#3275b8', textDecoration: 'none' }}
          >
            {eventNode.title}
          </Link>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: eventNode.excerpt }} />
      </RightSide>
    </Container>
  )
}
