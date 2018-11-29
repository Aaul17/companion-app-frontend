import React from 'react'
import { Card, Icon, Button, Header, Image, Modal } from 'semantic-ui-react'
import DeleteNoteModal from './DeleteNoteModal'

const Note = ({currentUser, handleChange, notes, note, deleteNote}) => {
  return (
    <>
    <br/>
    <Card className="note-div">
      <Card.Content header={note.title} />
      <Card.Content>
        <p>{note.body}</p>
      </Card.Content>
      <Card.Content extra>
        <DeleteNoteModal note={note} deleteNote={deleteNote}/>
      </Card.Content>
    </Card>
    </>
  )
}

export default Note
