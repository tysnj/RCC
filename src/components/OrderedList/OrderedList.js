import React, { useState, useEffect, useRef } from 'react';
import { useStickyState } from '../../hooks/useStickyState';
import { mapListItems } from './OrderedList.functions';
import { Order } from '../../constants/order';
import Input from '../Input/';
import Button from '../Button/';
import './OrderedList.css';
import { v4 as uuidv4 } from 'uuid';

const OrderedList = () => {
  // state and ref
  const [list, setList] = useStickyState([], 'list')
  const [newItem, setNewItem] = useState('')
  const [listOrder, setListOrder] = useStickyState(Order.ASCENDING, 'listOrder')
  const inputField = useRef(null);

  useEffect(() => { // keeps input field in focus
    inputField.current.focus()
  },[listOrder, list])

  const handleChange = (e) => setNewItem(e.target.value) // controls form

  const handleSubmit = (e) => { // adds item to object store and resets input field
    if (e.key === 'Enter' && newItem.length) {
      const timestamp = new Date()
      const newItemObj = {
        createdAt: timestamp.toGMTString(),
        id: uuidv4(),
        value: newItem
      }
      setList([...list, newItemObj])   
      setNewItem('')
    } 
  }

  const handleListOrder = (direction) => { // toggles ascending/descending
    if (direction === Order.ASCENDING) return setListOrder(Order.DESCENDING);
    if (direction === Order.DESCENDING) return setListOrder(Order.ASCENDING);
  } 
  
  const handleClear = () => { // resets list and input field
    setList([])
    setNewItem('')
  }

  return (
    <div className='ordered-list-container'>
      <div className='modifier-wrapper'>
        <Input
          placeholder='Press enter to submit item'
          controlledValue={newItem}
          forwardedRef={inputField}
          typeAction={handleChange}
          submitAction={handleSubmit}
        />
        <Button 
          className='sort-list-button'
          callBack={handleListOrder}
          data={listOrder}
        />
        <Button
          className='clear-list-button' 
          callBack={handleClear}
          label='Clear List'
        />
      </div>
      <div className='list-wrapper'>
        <ul className='list'>
          {list.length > 0 && mapListItems(list, listOrder, 'value')}
        </ul> 
      </div>
    </div>
  )
}

export default OrderedList