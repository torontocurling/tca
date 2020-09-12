import React from 'react'
import { Field } from 'react-final-form'
import { HorizontalSelector } from '../components/horizontal-selector'
import { weekdayOptions } from '../constants/weekdays'

export const renderSelectALeagueFilterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <div
        style={{ textAlign: 'center', display: 'flex', flexDirection: 'row' }}
      >
        <Field
          name="type"
          component="select"
          style={{ minWidth: 160, minHeight: 35, marginRight: 20 }}
          disabled
        >
          <option value="all" selected>
            All League Types
          </option>
        </Field>
        <div style={{ flex: 1 }}>
          <Field name="weekday" disabled>
            {props => (
              <HorizontalSelector {...props.input} options={weekdayOptions} />
            )}
          </Field>
        </div>
      </div>
    </div>
  </form>
)
