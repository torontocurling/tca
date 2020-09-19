import React, { useCallback, useState } from 'react'
import {
  GrInstagram,
  GrTwitter,
  GrFacebook,
  GrCheckmark,
  GrStatusWarning,
} from 'react-icons/gr'
import styled from 'styled-components'
import { Form, Field } from 'react-final-form'
import { Colors } from '../constants'

const Container = styled('div')`
  text-align: center;
  padding: 50px 20px;
  margin-top: 40px;
  background-color: #eee;
`

const Header = styled('h3')`
  font-size: 24px;
`

const Body = styled('p')``

const EmailInput = styled(Field)`
  margin-right: 10px;
  padding: 5px;
  min-width: 220px;
`

const SubscribeButton = styled('button')`
  padding: 5px 12px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`

const EmailForm = ({ handleSubmit, loading }) => (
  <form onSubmit={handleSubmit}>
    <EmailInput name="email" component="input" placeholder="your@email.com" />
    <SubscribeButton type="submit">
      {loading ? 'Subscribing...' : 'Subscribe'}
    </SubscribeButton>
  </form>
)

const IconBox = styled('div')`
  margin-top: 40px;
  font-size: 35px;

  a {
    color: #aaa;
  }

  a:hover {
    color: ${Colors.blue};
  }

  a:first-child {
    margin-right: 20px;
  }

  a:last-child {
    margin-left: 20px;
  }
`

const subscribe = async ({ email }) =>
  fetch('https://torontocurling.com/wp-json/tca/v1/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

const formatError = code => {
  switch (code) {
    case 'rest_missing_callback_param':
      return 'Please specify your email address to subscribe.'
    case 'rest_invalid_param':
      return 'Please check that your provided email is correct.'
    default:
      return 'An unexpected error occurred. Please try again later.'
  }
}

const SuccessMessage = styled('p')``
const ErrorMessage = styled('p')`
  color: ${Colors.red};
`

export const SocialSubscribe = () => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setError] = useState()
  const [subscribed, setSubscribed] = useState(false)

  const validate = useCallback(() => {}, [])
  const onSubmit = useCallback(
    subscribeFormValues => {
      if (loading) return
      setLoading(true)
      setError()
      subscribe(subscribeFormValues)
        .then(response => {
          return response.json().then(json => ({ response, json }))
        })
        .then(({ response, json }) => {
          if (!response.ok) {
            setError(formatError(json.code))
            return
          }

          setSubscribed(true)
        })
        .catch(err => {
          console.log('Fatal request error', err)
          setError(formatError())
        })
        .finally(() => setLoading(false))
    },
    [loading, setError, setSubscribed]
  )

  return (
    <Container>
      <Header>Let's Connect!</Header>
      <Body>
        Get the latest event updates & GTA curling news delivered straight to
        your inbox.
      </Body>
      {subscribed ? (
        <SuccessMessage>
          <GrCheckmark
            style={{
              position: 'relative',
              top: 2,
              marginRight: 10,
            }}
          />
          Thank you! Please check your email to confirm your subscription.
        </SuccessMessage>
      ) : (
        <>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            loading={loading}
            render={EmailForm}
          />
          {errorMessage && (
            <ErrorMessage>
              <GrStatusWarning
                style={{
                  position: 'relative',
                  top: 2,
                  marginRight: 10,
                }}
              />
              {errorMessage}
            </ErrorMessage>
          )}
        </>
      )}
      <IconBox>
        <a href="https://instagram.com/torontocurling">
          <GrInstagram />
        </a>
        <a href="https://twitter.com/torontocurling">
          <GrTwitter />
        </a>
        <a href="http://www.facebook.com/#%21/pages/Toronto-Curling-Association/225152384208614">
          <GrFacebook />
        </a>
      </IconBox>
    </Container>
  )
}
