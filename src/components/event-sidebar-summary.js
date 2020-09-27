import React, { useMemo } from 'react'
import styled from 'styled-components'
import { BiCalendarPlus } from 'react-icons/bi'
import { AddToCalendar } from './add-to-calendar'
import { startOfDay, endOfDay, format } from 'date-fns'
import { parseEvent } from './event.helpers'

const Container = styled('div')`
  font-size: 14px;
  border-bottom: 1px solid #eee;
  padding-bottom: 14px;
`

const InfoItemContainer = styled('div')`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`

const InfoItemLabel = styled('div')`
  font-weight: 700;
  min-width: 50px;
`

const InfoItemValue = styled('div')``

const InfoItem = ({ label, value }) => (
  <InfoItemContainer>
    <InfoItemLabel>{label}</InfoItemLabel>
    <InfoItemValue>{value}</InfoItemValue>
  </InfoItemContainer>
)

const CalendarAddIcon = styled(BiCalendarPlus)`
  position: relative;
  top: 2px;
  margin-right: 4px;
`

const getCalendarEvent = ({ title, excerpt, startDate, endDate }) => ({
  title,
  description: excerpt,
  location: '',
  startTime: startDate ? startOfDay(startDate).toISOString() : undefined,
  endTime: endDate
    ? (endDate ? endOfDay(endDate) : endOfDay(startDate)).toISOString()
    : undefined,
})

const infoItemDateFormat = 'MMM. do, yyyy'

export const EventSidebarSummary = ({ eventNode }) => {
  const { calendarEvent, parsedEvent } = useMemo(() => {
    const parsedEvent = { ...eventNode, ...parseEvent(eventNode) }
    return { calendarEvent: getCalendarEvent(parsedEvent), parsedEvent }
  }, [eventNode])

  return parsedEvent.month ? (
    <Container>
      {parsedEvent.startDate && (
        <InfoItem
          label="Start:"
          value={format(parsedEvent.startDate, infoItemDateFormat)}
        />
      )}
      {parsedEvent.endDate && (
        <InfoItem
          label="End:"
          value={format(parsedEvent.endDate, infoItemDateFormat)}
        />
      )}
      {parsedEvent.startDate && (
        <>
          <CalendarAddIcon />
          <AddToCalendar event={calendarEvent} />
        </>
      )}
    </Container>
  ) : null
}
