import React, { useState } from 'react';
import './OrderedList1.css';

const OrderedList1 = () => {
  const [data, setData] = useState([])
  const [item, setItem] = useState('')
  const [desc, setDesc] = useState(false)

  const handleSort = () => {
    if (!desc) {
      return setData(data.sort((a,b) => a - b))
    } 
      return setData(data.sort((a,b) => b - a))
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && item.length) {
      setData([...data, item])
      setItem('')
    } 
  }

  return (
    <div className='ordered-list-container'>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={(e) => handleSubmit(e)}
      />
      
      <button 
        className='sort-list-button'
        onClick={() => {
          setDesc(!desc)
          handleSort()
        }}
      >{!desc ? '⬇️' : '⬆️'}
      </button>

      <button
        className='clear-list-button' 
        onClick={() => {
          setItem('')
          setData([])
        }}
      >CL
      </button>

    </div>
  )
}

export default OrderedList1
