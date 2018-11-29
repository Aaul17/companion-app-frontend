import React from 'react'
import Note from './Note'
import { Card } from 'semantic-ui-react'

const Notes = ({currentUser, handleChange, notes, deleteNote}) => {
  const myNotes = notes.filter(noteObj => noteObj.user_id === currentUser.id)
  return (
    <Card.Group className="notes-div">
      {myNotes.map(noteObj =>
        <Note
        key={noteObj.id}
        currentUser={currentUser}
        note={noteObj}
        notes={notes}
        handleChange={handleChange}
        deleteNote={deleteNote}
        />
      )}
    </Card.Group>
  )
}

export default Notes
