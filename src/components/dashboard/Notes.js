import React from 'react'
import Note from './Note'

const Notes = ({currentUser, handleChange, notes}) => {
  const myNotes = notes.filter(noteObj => noteObj.user_id === currentUser.id)
  return (
    <div>
      {myNotes.map(noteObj =>
        <Note
        key={noteObj.id}
        currentUser={currentUser}
        note={noteObj}
        notes={notes}
        handleChange={handleChange}
        />
      )}
    </div>
  )
}

export default Notes
