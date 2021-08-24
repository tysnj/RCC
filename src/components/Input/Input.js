import React from 'react'

const Input = ({className, placeholder, controlledValue, forwardedRef, typeAction, submitAction}) => {
  
  return (
    <span className='input-wrapper'>
      <input
        className={className}
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
