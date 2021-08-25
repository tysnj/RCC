import React, { useState, useEffect, useRef } from 'react';
import { useStickyState } from '../../Hooks/useStickyState';
import { Order } from '../../constants/order';
import FormWrapper from '../FormWrapper/';
import FlexContainer from '../FlexContainer/';
import Input from '../Input/';
import Button from '../Button/';
import List from './List'
import './OrderedList.css';
import { v4 as uuidv4 } from 'uuid';

const OrderedList = () => {
  const [list, setList] = useStickyState([], 'list')
  const [newItem, setNewItem] = useState('')
  const [listOrder, setListOrder] = useStickyState(Order.ASCENDING, 'listOrder')
  const inputField = useRef(null);

  useEffect(() => { // keeps input field in focus
    inputField.current.focus()
  },[listOrder, list])

  const handleChange = (e) => setNewItem(e.target.value) // controls div

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

  const handleListOrder = () => { // toggles ascending/descending
    if (listOrder === Order.ASCENDING) return setListOrder(Order.DESCENDING);
    if (listOrder === Order.DESCENDING) return setListOrder(Order.ASCENDING);
  } 
  
  const handleClear = () => { // resets list and input field
    setList([])
    setNewItem('')
  }

  return (
    <FlexContainer className='ordered-list-container'>
      <FormWrapper>
        <FlexContainer className='modifier-container' > 
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
            label={listOrder === Order.ASCENDING ? '↓' : '↑'}
          />
          <Button
            className='clear-list-button' 
            callBack={handleClear}
            label='Clear List'
          />
        </FlexContainer>
      </FormWrapper>
      <FlexContainer className='list-container' justifyContent='flex-start' margin="15px 0px 0px 10px"> 
        <List
          data={list}
          order={listOrder}
          category='value'
        />
      </FlexContainer>
    </FlexContainer>
  )
}

export default OrderedList