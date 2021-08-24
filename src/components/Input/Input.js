import React from 'react'
import './Input.css';

const Input = ({placeholder, controlledValue, forwardedRef, typeAction, submitAction}) => {
  
  return (
    <span className='input-wrapper'>
      <input
        className='input-field'
        placeholder={placeholder}
        value={controlledValue}
        ref={forwardedRef}
        onChange={(e) => typeAction(e)}
        onKeyDown={(e) => submitAction(e)}
      />
    </span>
  )
}

export default Input
