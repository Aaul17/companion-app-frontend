import React from 'react'
import DeleteNoteModal from './DeleteNoteModal'
import EditNoteModal from './EditNoteModal'

const Note = ({currentUser, handleChange, notes, note, fillInNoteModal, editNote, noteTitle, noteBody, deleteNote}) => {
  return (
    <>
    <br/>
    <div className="note-card" style={{backgroundColor: '#f9e777'}}>
      <h2 style={{fontFamily: "'Caveat', cursive"}}>{note.title}</h2>
      <p style={{fontFamily: "'Caveat', cursive", fontSize: '20px'}}>{note.body}</p>
      <br />
      <EditNoteModal
      fillInNoteModal={fillInNoteModal}
      editNote={editNote}
      noteTitle={noteTitle}
      noteBody={noteBody}
      note={note}
      handleChange={handleChange}
      /> | <DeleteNoteModal note={note} deleteNote={deleteNote}/>
    </div>
    </>
  )
}

export default Note
