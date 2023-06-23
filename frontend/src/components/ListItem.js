import React from 'react'

const ListItem = ({note}) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  )
}
export default ListItem
