import React from 'react'
import Note from './Note'

const Notes = () => {
  return (
    <div className='h-3/5 lg:h-full w-full lg:w-2/3 p-5'>
        <h1 className='text-2xl font-bold'>Your Notes</h1>
        <div className='h-7/8 w-full flex items-start gap-5 mt-5 flex-wrap overflow-y-auto' id="notes-container" >
            <Note />
        </div>
    </div>
  )
}

export default Notes