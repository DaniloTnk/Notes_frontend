import React from 'react'
import { Link } from 'react-router-dom'

const CreateNote = () => {
  return (
    <Link to="/note/new">
      <h1> Create </h1>
    </Link>
  )
}

export default CreateNote
