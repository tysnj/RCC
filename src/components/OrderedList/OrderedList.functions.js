import { Order } from '../../constants/order';

export const mapListItems = (data, order, prop) => {
  const ascSortedData = data.sort((a, b) => a[prop].toLowerCase() < b[prop].toLowerCase() ? -1 : 1)
  if (order === Order.DESCENDING) { // sorts descending
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
