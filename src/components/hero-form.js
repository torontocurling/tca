import React from 'react'
import { Form, Field } from 'react-final-form'
import { Colors } from '../constants/colors'

export const HeroForm = props => {
  return (
    <div
      style={{
        backgroundColor: Colors.blue,
        padding: '30px 40px 10px 40px',
        borderRadius: 5,
      }}
    >
      <h3 style={{ color: 'white', lineHeight: 1.3 }}>
        Curling facilities in Toronto offer "Learn to Curl" sessions and
        beginner events throughout the season. We can help you find one close
        by.
      </h3>
      <Form
        onSubmit={props.onSubmit}
        validate={props.validate}
        render={({ handleSubmit }) => (
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
        )}
      />
    </div>
  )
}
