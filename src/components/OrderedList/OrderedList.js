import React, { useState, useEffect, useRef } from 'react';
import './OrderedList.css';

const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

const OrderedList = () => {
  const [list, setList] = useStickyState({}, 'currentList')
  const [newItem, setNewItem] = useState('')
  const [isDesc, setIsDesc] = useStickyState(false, 'isDesc')
  const inputField = useRef(null);

  useEffect(() => {
    inputField.current.focus()
  },[isDesc, list])

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && newItem.length) {
      setList({...list, [`item-${Object.keys(list).length+1}`]: newItem})   
      setNewItem('')
    } 
  }

  const mapListItems = () => {
    if (isDesc) {
      return Object.entries(list)
      .sort((a, b) => a[1].toLowerCase() > b[1].toLowerCase() ? -1 : 1)
      .map(item => (
        <li className='list-item' key={item[0]}>
          {item[1]}
        </li>
      ))
    } else {
      return Object.entries(list)
      .sort((a, b) => a[1].toLowerCase() < b[1].toLowerCase() ? -1 : 1)
      .map(item => (
        <li className='list-item' key={item[0]}>
          {item[1]}
        </li>
      ))
    }
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
              setIsDesc(!isDesc)
            }}
          >{isDesc ? '↑' : '↓'}
          </button>
        </span>
        <span className='button-wrapper'>
          <button
            className='clear-list-button' 
            onClick={() => {
              setList({})
              setNewItem('')
            }}
          >Clear List
          </button>
        </span>
      </div>
      <ul className='list-wrapper'>
        {Object.keys(list).length > 0 && mapListItems()}
      </ul> 
    </div>
  )
}

export default OrderedList