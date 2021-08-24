import React from 'react'
import { Order } from '../../constants/order';
import './Button.css'

const Button = ({className, callBack, data, label}) => {
  
  return (
    <span className='button-wrapper'>
      <button className={className} onClick={() => callBack()}>
        {data === Order.ASCENDING ? '↓' : data === Order.DESCENDING ? '↑' : label}
      </button>
    </span>
  )
}

export default Button