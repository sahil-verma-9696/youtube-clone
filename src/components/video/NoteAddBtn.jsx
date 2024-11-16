import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NoteAddBtn = () => {
  return (
    <button className='size-7 rounded-full bg-purple-200'>
      <FontAwesomeIcon size='lg' icon={faPlus} />
    </button>
  )
}

export default NoteAddBtn
