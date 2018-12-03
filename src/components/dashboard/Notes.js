import React from 'react'
import Note from './Note'
import { Card } from 'semantic-ui-react'

const Notes = ({currentUser, handleChange, notes, fillInNoteModal, editNote, noteTitle, noteBody, deleteNote}) => {
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
        fillInNoteModal={fillInNoteModal}
        editNote={editNote}
        noteTitle={noteTitle}
        noteBody={noteBody}
        deleteNote={deleteNote}
        />
      )}
    </Card.Group>
  )
}

export default Notes
