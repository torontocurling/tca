import React, { useCallback, useState } from 'react'
import { Colors } from '../constants/colors'

const optionStyle = {
  flex: 1,
  textAlign: 'center',
  minHeight: 35,
  lineHeight: 2,
  cursor: 'pointer',
}

const optionStyleForIndex = index =>
  index === 0
    ? null
    : {
        borderLeft: `1px solid ${Colors.darkBlue}`,
      }

const optionStyleIfActive = active =>
  active ? { backgroundColor: Colors.grey } : null

const valueArray = value =>
  value?.length && typeof value === 'object' ? value : []

export const HorizontalSelector = ({ value, onChange, options }) => {
  const [selected, setSelected] = useState(valueArray(value))

  const onSelect = useCallback(
    selectedId => {
      if (selected.includes(selectedId)) {
        setSelected(selected.filter(value => value !== selectedId))
      } else {
        setSelected([...selected, selectedId])
      }
      onChange(selected)
    },
    [selected, setSelected, onChange]
  )

  return (
    <div
      style={{
        borderRadius: 3,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        border: `1px solid ${Colors.darkBlue}`,
        overflow: 'hidden',
      }}
    >
      {options.map((option, i) => (
        <div
          onClick={() => onSelect(option.id)}
          style={{
            ...optionStyle,
            ...optionStyleForIndex(i),
            ...optionStyleIfActive(selected.includes(option.id)),
          }}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}
