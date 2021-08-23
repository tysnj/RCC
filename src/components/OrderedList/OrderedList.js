import React, { useState } from 'react';
import './OrderedList.css';

const OrderedList = () => {
  const [list, setList] = useState([])
  const [newItem, setNewItem] = useState('')
  const [desc, setDesc] = useState(false)

  const handleSort = (data) => {
    if (!desc) {
      return data.sort((a, b) => {
        return a === b ? 0 : a > b ? 1 : -1;
      })
    } else {
      return data.sort((a, b) => {
        return a === b ? 0 : a < b ? 1 : -1;
      })
    }
  }

  const reverseSort = (data) => {
    return data.reverse()
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && newItem.length) {
      setList(handleSort([...list, newItem]))   
      setNewItem('')
    } 
  }

  const mapItems = () => {
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
            placeholder='Use enter to submit item'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
          />
        </span>
        <span className='button-wrapper'>
          <button 
            className='sort-list-button'
            onClick={() => {
              setDesc(!desc)
              setList(reverseSort(list))
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
      {!!list.length &&       
        <ul className='list-wrapper'>
          {mapItems()}
       </ul> 
      }
    </div>
  )
}

export default OrderedList
