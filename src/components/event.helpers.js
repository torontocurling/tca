import { add, format } from 'date-fns'

const estOffset = { hours: 5 }

export const parseEvent = ({ start, end, eventcat, eventtype }) => {
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

  return {
    month,
    firstDate,
    firstDay,
    secondDate,
    secondDay,
    info,
    startDate,
    endDate,
  }
}
