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

const DayName = styled('span')`
  font-size: 12px;
  text-transform: 'uppercase';
`

export const EventDateSummary = ({
  month,
  firstDate,
  firstDay,
  secondDay,
  secondDate,
  info,
}) => (
  <Container>
    <CrossBar>{month}</CrossBar>
    <DateRange>
      <Date>
        <span>{firstDate}</span>
        <DayName>{firstDay}</DayName>
      </Date>
      {secondDate && secondDate !== firstDate && (
        <>
          <Chevron />
          <Date>
            <span>{secondDate}</span>
            <DayName>{secondDay}</DayName>
          </Date>
        </>
      )}
    </DateRange>
    <CrossBar>{info}</CrossBar>
  </Container>
)
