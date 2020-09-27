import React from 'react'
import { Form } from 'react-final-form'
import { Colors } from '../constants/colors'

export const HeroForm = props => {
  return (
    <div
      style={{
        backgroundColor: Colors.blue,
        padding: '30px 40px 10px 40px',
        borderRadius: 5,
        ...props.style,
      }}
    >
      <h3 style={{ color: 'white', lineHeight: 1.3, textAlign: 'center' }}>
        {props.text}
      </h3>
      {props.renderForm && (
        <Form
          onSubmit={props.onSubmit}
          validate={props.validate}
          render={props.renderForm}
        />
      )}
    </div>
  )
}
