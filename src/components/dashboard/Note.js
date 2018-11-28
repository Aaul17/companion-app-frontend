import React from 'react'
import { Card, Icon, Button, Header, Image, Modal } from 'semantic-ui-react'

const Note = ({currentUser, handleChange, notes, note}) => {
  return (
    <>
    <br/>
    <Card>
      <Card.Content header={note.title} />
      <Card.Content>
        <p>{note.body}</p>
      </Card.Content>
      <Card.Content extra>
        <p>Edit  -  Delete</p>
      </Card.Content>
    </Card>
    </>
  )
}

export default Note
