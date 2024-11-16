import React from 'react'
import NoteHeader from './NoteHeader'
import NoteMain from './NoteMain'

const Note = () => {
  return (
    <div className='w-full h-3/4'>
      <NoteHeader/>
      <NoteMain/>
    </div>
  )
}

export default Note
