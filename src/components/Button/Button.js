import React from 'react';
import './Button.css';

const Button = ({className, callBack, label, type = 'button', bgColor, color }) => {
  return (
    <span className='button-wrapper'>
      <button 
        type={type} 
        className={className} 
        onClick={() => callBack()}
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}` || '#fff'
        }}
      >
        {label}
      </button>
    </span>
  )
}

export default Button;
