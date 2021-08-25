import React, { useState, useEffect, useRef } from 'react';
import { useStickyState } from '../../hooks/useStickyState';
import { Order } from '../../constants/order';
import { sortListItems } from './OrderedList.functions';
import FlexContainer from '../FlexContainer/';
import FormWrapper from '../FormWrapper/';
import Input from '../Input/';
import Button from '../Button/';
import UnorderedList from './List/UnorderedList';
import ListItem from './List/ListItem';
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

  const handleChangeAction = (e) => setNewItem(e.target.value) // controls form

  const handleSubmitAction = (e) => { // adds item to object store and resets input field 
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

  const handleSortAction = () => { // toggles ascending/descending
    if (listOrder === Order.ASCENDING) return setListOrder(Order.DESCENDING);
    if (listOrder === Order.DESCENDING) return setListOrder(Order.ASCENDING);
  } 
  
  const handleClearAction = () => { // resets list and input field
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
            typeAction={handleChangeAction}
            submitAction={handleSubmitAction}
          />
          <Button 
            className='sort-list-button'
            callBack={handleSortAction}
            label={listOrder === Order.ASCENDING ? '↓' : '↑'}
            bgColor='#2B78D7'
          />
          <Button
            className='clear-list-button' 
            callBack={handleClearAction}
            label='Clear List'
            bgColor='#F03A18'
          />
        </FlexContainer>
      </FormWrapper>
      <FlexContainer className='list-container' justifyContent='flex-start' margin="15px 0px 0px 10px"> 
        <UnorderedList>
          {list.length > 0 && sortListItems(list, listOrder, 'value').map(item => (
                <ListItem className='list-item' key={item.id} data={item.value}/>
            ))}        
        </UnorderedList>
      </FlexContainer>
    </FlexContainer>
  )
}

export default OrderedList;
