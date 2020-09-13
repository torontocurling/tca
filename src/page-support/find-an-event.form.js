import React from 'react'
import { format } from 'date-fns'
import { Field } from 'react-final-form'
import { HorizontalSelector } from '../components/horizontal-selector'

const monthOptions = [9, 10, 11, 12, 1, 2, 3, 4].map(monthNumber => {
  const date = new Date(2020, monthNumber - 1, 1)
  const label = format(date, 'LLL')
  return {
    id: monthNumber,
    label,
  }
})

export const renderFindAnEventFilterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'row' }}>
      <Field
        name="type"
        component="select"
        style={{ minWidth: 150, minHeight: 35, marginRight: 20 }}
        disabled
      >
        <option value="all" selected>
          All Event Types
        </option>
      </Field>
      <div style={{ flex: 1 }}>
        <Field name="month" disabled>
          {props => (
            <HorizontalSelector
              {...props.input}
              options={monthOptions}
              disabled
            />
          )}
        </Field>
      </div>
    </div>
  </form>
)
