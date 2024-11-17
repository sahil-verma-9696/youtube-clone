import React from 'react'
import NoteAddBtn from './NoteAddBtn'
const NoNoteFound = () => {
  return (
    <div className='w-full bg-gray-100 h-full flex justify-center items-center rounded-lg'>
      <div className='flex flex-col items-center'>
        <NoteAddBtn/>
        <p className='text-xs font-semibold text-gray-700 mt-2'>Create your First note.</p>
      </div>
    </div>
  )
}

export default NoNoteFound
