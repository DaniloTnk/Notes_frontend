import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { csrftoken } from '../components/csrfToken'

const NotePage = ({ match, history }) => {

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

  let navigate = useNavigate()

  let updateNote = async () => {
    let response = await fetch(`/api/notes/${id}/`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(note)
    })
    navigate('/')
  }

  let deleteNote = async () => {
    let response = await fetch(`/api/notes/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
    })
    navigate('/')
  }
    
  return (
    <div>
      <textarea onChange={(e) => { setNote({...note, 'title': e.target.value})}} defaultValue={note?.title}></textarea>
      <textarea onChange={(e) => { setNote({...note, 'title': e.target.value})}} defaultValue={note?.content}></textarea>
      <button onClick={updateNote}>Save</button>
      <button onClick={deleteNote}>Delete</button>
    </div>
  )
} 

export default NotePage
