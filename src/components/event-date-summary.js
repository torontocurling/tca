import React from 'react'
import styled from 'styled-components'
import { Colors } from '../constants'

const Container = styled('div')`
  width: 180px;
  height: 120px;
  display: flex;
  flex-direction: column;
`

const CrossBar = styled('div')`
  background-color: #eee;
  text-align: center;
  padding: 5px 0;
`

const DateRange = styled('div')`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
`

const Date = styled('div')`
  flex: 1;
  font-size: 30px;
  text-align: center;
  padding: 4px 0;
  display: flex;
  flex-direction: column;
`

const Chevron = styled('span')`
  ::before {
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    border-color: ${Colors.red};
    border-radius: 10%;
    content: '';
    display: inline-block;
    height: 0.8em;
    left: 45%;
    position: absolute;
    top: 45%;
    transform: rotate(45deg);
    vertical-align: top;
    width: 0.8em;
  }
`

const PendingDate = styled(Date)`
  font-size: 30px;
  color: #ccc;
`

export const EventDateSummary = ({
  month,
  firstDate,
  secondDate,
  info,
  style,
}) => (
  <Container style={style}>
    <CrossBar>{!firstDate && !secondDate ? 'Planned' : month}</CrossBar>
    <DateRange>
      {!firstDate && !secondDate ? (
        <PendingDate>TBD</PendingDate>
      ) : (
        <>
          <Date>
            <span>{firstDate}</span>
          </Date>
          {secondDate && secondDate !== firstDate && (
            <>
              <Chevron />
              <Date>
                <span>{secondDate}</span>
              </Date>
            </>
          )}
        </>
      )}
    </DateRange>
    <CrossBar>{info}</CrossBar>
  </Container>
)
