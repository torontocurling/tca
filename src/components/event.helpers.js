import { add, format } from 'date-fns'

const estOffset = { hours: 5 }

export const parseEvent = ({ start, end, eventcat, eventtype }) => {
  const startDate =
    typeof start === 'number' && start > 0
      ? add(new Date(start * 1000), estOffset)
      : null
  const endDate =
    typeof end === 'number' && end > 0
      ? add(new Date(end * 1000), estOffset)
      : null

  let month
  let firstDate
  let firstDay
  let secondDate
  let secondDay

  if (startDate) {
    month = `${format(startDate, 'MMM')}. ${format(startDate, 'yyyy')}`
    firstDate = format(startDate, 'd')
    firstDay = format(startDate, 'E')
  }

  if (endDate) {
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
