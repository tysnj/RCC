import React, { useState } from 'react';
import './OrderedList1.css';

const OrderedList1 = () => {
  const [list, setList] = useState([])
  const [newItem, setNewItem] = useState('')
  const [desc, setDesc] = useState(false)

  const handleSort = (data) => {
    if (!desc) {
      return data.sort((a, b) => {
        if (a < b) {
          return -1
        } else {
          return 1
        }
      })
    } else {
      return data.sort((a, b) => {
        if (a > b) {
          return -1
        } else {
          return 1
        }
      })
    }
  }

  const changeSort = () => {
    return list.reverse()
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && newItem.length) {
      setList(handleSort([...list, newItem]))   
      setNewItem('')
    } 
  }

  const mapItems = () => {
    return list.map(item => (
      <li key={`id${item}`}>
        {item}
      </li>
    ))
  }

  return (
    <div className='ordered-list-container'>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyDown={(e) => handleSubmit(e)}
      />
      
      <button 
        className='sort-list-button'
        onClick={() => {
          setDesc(!desc)
          setList(changeSort())
        }}
      >{!desc ? '⬇️' : '⬆️'}
      </button>

      <button
        className='clear-list-button' 
        onClick={() => {
          setList([])
          setNewItem('')
        }}
      >CL
      </button>
      
      {!!list.length &&       
        <ul>
          {mapItems()}
       </ul> 
      }

    </div>
  )
}

export default OrderedList1
