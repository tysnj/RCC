import React from 'react'

const ListItem = ({className, data}) => {
  return (
    <li className={className}>
      {data}
    </li>
  )
}

export default ListItem
