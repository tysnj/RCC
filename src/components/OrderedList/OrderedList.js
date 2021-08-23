import React, { useState, useEffect, useRef } from 'react';
import './OrderedList.css';

const OrderedList = () => {
  const [list, setList] = useState([])
  const [newItem, setNewItem] = useState('')
  const [desc, setDesc] = useState(false)
  const inputField = useRef(null);

  useEffect(() => {
    inputField.current.focus()
  },[desc, list])
  
  const handleSort = (data) => {
      return data.sort((a, b) => {
        return a === b ? 0 : a > b ? 1 : -1;
      })
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && newItem.length) {
      setList(handleSort([...list, newItem]))   
      setNewItem('')
    } 
  }

  const mapItems = () => {
    if (desc) {
      const temp = []
      for (let i = list.length; i !== 0; i--) {
        temp.push((
          <li className='list-item' key={`${list[i-1]}-${i-1}`}>
            {list[i-1]}
          </li>
        ))
      }
      return temp
    }
    return list.map((item, index) => (
      <li className='list-item' key={`id-${item}-${index}`}>
        {item}
      </li>
    ))
  }

  return (
    <div className='ordered-list-container'>
      <div className='modifier-wrapper'>
        <span className='input-wrapper'>
          <input
            className='input-field'
            placeholder='Press enter to submit item'
            value={newItem}
            ref={inputField}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
          />
        </span>
        <span className='button-wrapper'>
          <button 
            className='sort-list-button'
            onClick={() => {
              setDesc(!desc)
            }}
          >{!desc ? '↓' : '↑'}
          </button>
        </span>
        <span className='button-wrapper'>
          <button
            className='clear-list-button' 
            onClick={() => {
              setList([])
              setNewItem('')
            }}
          >Clear List
          </button>
        </span>
      </div>
      <ul className='list-wrapper'>
        {!!list.length &&       
          mapItems()
        }
      </ul> 
    </div>
  )
}

export default OrderedList
