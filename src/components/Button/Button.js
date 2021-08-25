import React from 'react'
import './Button.css'

const Button = ({className, callBack, label}) => {
  return (
    <span className='button-wrapper'>
      <button className={className} onClick={() => callBack()}>
        {label}
      </button>
    </span>
  )
}

export default Button