import { Order } from '../../constants/order';

export const sortListItems = (data, order, category) => {
  const ascSortedData = data.sort((a, b) => a[category].toLowerCase() < b[category].toLowerCase() ? -1 : 1)
  if (order === Order.DESCENDING) { // sorts descending
    return ascSortedData.reverse()
  } else { // sorts ascending
    return ascSortedData
  }
}