import React from 'react'

const Recommended = () => {
  return (
    <div className=' h-full p-2'>
      <h3 className='text-xl font-bold'>Recommended</h3>
      <div className='w-full p-2 flex flex-col gap-2 h-[350px] overflow-y-scroll'>
        <div className='w-full min-h-36 bg-purple-200 rounded-lg'></div>
        <div className='w-full min-h-36 bg-purple-200 rounded-lg'></div>
        <div className='w-full min-h-36 bg-purple-200 rounded-lg'></div>
      </div>
    </div>
  )
}

export default Recommended
