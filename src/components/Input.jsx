import React from 'react'

function Input({elementId, label, value, type,
   onChange, setCallback, name, disabled, attr}) {
  return (
    <div>
      <label htmlFor={elementId}>
        {label}
      </label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e, setCallback)}
          id={elementId}
          name={name}
          disabled={disabled}
        />
      {attr ? <p>Sum: 210</p> : ''}
      {label === 'Imagem' ?
       <button className="imageInputBtn" onClick={(e) => {e.preventDefault(); setCallback('')}}>X</button> : ''}
    </div>
  )
}

export default Input
