import React, { useMemo } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { EventDateSummary } from './event-date-summary'
import { Colors } from '../constants'

const Container = styled('div')`
  display: flex;
  flex-direction: row;
`

const parseEvent = ({ start, end }) => {
  const startDate = new Date(start * 1000)
  const endDate = new Date(end * 1000)

  const month = format(startDate, 'MMMM')
  const firstDate = format(startDate, 'd')
  const firstDay = format(startDate, 'E')
  const secondDate = format(endDate, 'd')
  const secondDay = format(endDate, 'E')

  return { month, firstDate, firstDay, secondDate, secondDay }
}

export const EventRow = ({ eventNode }) => {
  const { month, firstDay, firstDate, secondDay, secondDate } = useMemo(
    () => parseEvent(eventNode),
    [eventNode]
  )

  return (
    <Container>
      <EventDateSummary
        {...{ month, firstDay, firstDate, secondDay, secondDate }}
      />
    </Container>
  )
}
