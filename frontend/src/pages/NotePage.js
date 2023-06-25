import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { csrftoken } from '../components/csrfToken'

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

  let updateNote = async () => {
    let response = await fetch(`/api/notes/${id}/`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(note)
    })
    
  }
    
  return (
    <div>
      <textarea onChange={(e) => { setNote({...note, 'title': e.target.value})}} defaultValue={note?.title}></textarea>
      <textarea onChange={(e) => { setNote({...note, 'title': e.target.value})}} defaultValue={note?.content}></textarea>
      <button onClick={updateNote}>Save</button>
    </div>
  )
}

export default NotePage
