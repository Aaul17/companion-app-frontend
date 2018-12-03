import React from 'react'
import { Card } from 'semantic-ui-react'
import DeleteNoteModal from './DeleteNoteModal'
import EditNoteModal from './EditNoteModal'

const Note = ({currentUser, handleChange, notes, note, fillInNoteModal, editNote, noteTitle, noteBody, deleteNote}) => {
  return (
    <>
    <br/>
    <Card className="note-div">
      <Card.Content header={note.title} />
      <Card.Content>
        <p>{note.body}</p>
      </Card.Content>
      <Card.Content extra>
        <EditNoteModal
        fillInNoteModal={fillInNoteModal}
        editNote={editNote}
        noteTitle={noteTitle}
        noteBody={noteBody}
        note={note}
        handleChange={handleChange}
        />
        <DeleteNoteModal note={note} deleteNote={deleteNote}/>
      </Card.Content>
    </Card>
    </>
  )
}

export default Note
