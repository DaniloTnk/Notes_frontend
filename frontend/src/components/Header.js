import React from 'react'
import CreateNote from './CreateNote'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='app-header'>
      <Link to="/"><h1>List</h1></Link>
      <h1> Details </h1>
      <CreateNote />
    </div>
  )
}

export default Header
