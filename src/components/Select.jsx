import React from 'react'

function Select({onChange, options, value, setCallback, disabled, elementId, label}) {
  return (
    <div>
    <label htmlFor={elementId}>
        {label}
      </label>
        <select id={elementId} disabled={disabled} onChange={(e) => onChange(e, setCallback)} value={value}>
          {options.map((name) => <option key={name}>{name}</option>)}
        </select>
      
    </div>
  )
}

export default Select
