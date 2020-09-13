import React from 'react'
import { Field } from 'react-final-form'

export const renderLearnToCurlFilterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <div style={{ textAlign: 'center' }}>
        <Field
          name="age"
          component="select"
          style={{ minWidth: 120, minHeight: 35 }}
          disabled
        >
          <option value="all" selected>
            All Ages
          </option>
        </Field>
        <Field
          name="postalCode"
          component="input"
          placeholder="Enter your postal code"
          style={{ minWidth: 200, minHeight: 35, marginLeft: 10 }}
          disabled
        />
        <button
          type="submit"
          style={{ minWidth: 50, minHeight: 35, marginLeft: 10 }}
          disabled
        >
          Go
        </button>
      </div>
    </div>
  </form>
)
