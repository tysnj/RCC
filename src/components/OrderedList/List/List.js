import React from 'react'
import { Order } from '../../../constants/order';

const List = ({data, sort, category}) => {
  const mapListItems = () => {
    const ascSortedData = data.sort((a, b) => a[category].toLowerCase() < b[category].toLowerCase() ? -1 : 1)
    if (sort === Order.DESCENDING) { // sorts descending
      return ascSortedData.reverse().map(item => (
        <li className='list-item' key={item.id}>
          {item.value}
        </li>
      ))
    } else { // sorts ascending
      return ascSortedData.map(item => (
        <li className='list-item' key={item.id}>
          {item.value}
        </li>
      ))
    }
  }

  return (
    <ul className='list-wrapper'>
      {data.length > 0 && mapListItems()}
    </ul> 
  )
}

export default List
