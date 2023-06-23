import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const NotePage = ({ match }) => {

  let { id } = useParams();
  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [id])

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}/`)
    let data = await response.json()
    console.log("DATA:",{data})
    setNote(data)
  }
    
  return (
    <div>
      <h1>{note?.title}</h1>
      <h3>{note?.content}</h3>
    </div>
  )
}

export default NotePage
