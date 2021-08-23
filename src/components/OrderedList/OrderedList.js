import React, { useState, useEffect, useRef } from 'react';
import './OrderedList.css';

const OrderedList = () => {
  const useStickyState = (defaultValue, key) => { // gets local storage
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => { // sets local storage
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }
  // state and ref
  const [list, setList] = useStickyState({}, 'currentList')
  const [newItem, setNewItem] = useState('')
  const [isDesc, setIsDesc] = useStickyState(false, 'isDesc')
  const inputField = useRef(null);

  useEffect(() => { // keeps input field in focus
    inputField.current.focus()
  },[isDesc, list])

  const handleChange = (e) => setNewItem(e.target.value) // controls form

  const handleSubmit = (e) => { // adds item to object store and resets input field
    if (e.key === 'Enter' && newItem.length) {
      setList({...list, [`item-${Object.keys(list).length+1}`]: newItem})   
      setNewItem('')
    } 
  }

  const handleSort = () => setIsDesc(!isDesc) // toggles ascending/descending
  
  const handleClear = () => { // resets list and input field
    setList({})
    setNewItem('')
  }

  const mapListItems = () => {
    if (isDesc) { // sorts descending
      return Object.entries(list)
      .sort((a, b) => a[1].toLowerCase() > b[1].toLowerCase() ? -1 : 1)
      .map(item => (
        <li className='list-item' key={item[0]}>
          {item[1]}
        </li>
      ))
    } else { // sorts ascending
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
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleSubmit(e)}
          />
        </span>
        <span className='button-wrapper'>
          <button 
            className='sort-list-button'
            onClick={() => handleSort()}
          >{isDesc ? '↑' : '↓'}
          </button>
        </span>
        <span className='button-wrapper'>
          <button
            className='clear-list-button' 
            onClick={() => handleClear()}
          >Clear List
          </button>
        </span>
      </div>
      <div className='list-wrapper'>
        <ul className='list'>
          {Object.keys(list).length > 0 && mapListItems()}
        </ul> 
      </div>
    </div>
  )
}

export default OrderedList