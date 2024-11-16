import React from 'react'
import NoteAddBtn from './NoteAddBtn'
import NoteSearch from './NoteSearch'

const NoteHeader = () => {
  return (
    <div className='flex justify-between items-center px-2 my-2 ' >
      <h2 className='font-bold text-xl'>Notes</h2>
      <NoteSearch/>
      <NoteAddBtn/>
    </div>
  )
}

export default NoteHeader
