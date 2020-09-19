import React, { useMemo } from 'react'
import styled from 'styled-components'
import { add, format } from 'date-fns'
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

const estOffset = { hours: 5 }

const parseEvent = ({ start, end, eventcat, eventtype }) => {
  const startDate = start ? add(new Date(start * 1000), estOffset) : null
  const endDate = end ? add(new Date(end * 1000), estOffset) : null

  let month
  let firstDate
  let firstDay
  let secondDate
  let secondDay

  if (start) {
    month = `${format(startDate, 'MMMM')} ${format(startDate, 'yyyy')}`
    firstDate = format(startDate, 'd')
    firstDay = format(startDate, 'E')
  }

  if (end) {
    secondDate = format(endDate, 'd')
    secondDay = format(endDate, 'E')
  }

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
