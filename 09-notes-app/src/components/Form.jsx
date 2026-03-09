import React, { useState } from 'react'

const Form = () => {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if(title === '' || note === ''){
      // alert('Please fill all the fields');
      return;
    }

    const copyNotes = [...notes];
    copyNotes.push({
      title,
      note
    });

    setNotes(copyNotes);

    setTitle('');
    setNote('');
  }

  return (
    <div className='h-1/3 lg:h-full w-full lg:w-1/3' >
      <form 
        action="" 
        className='flex flex-col gap-5 p-5'
        onSubmit={(e)=>{
          submitHandler(e);
        }}
      >
        {/* Heading for form */}
        <h1 className='text-2xl font-bold'>Create New Note</h1>

        {/* Title input */}
        <input 
          type="text" 
          placeholder='Title' 
          className='w-full p-2 bg-gray-700 text-white outline-none rounded text-2xl' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        />

        {/* Note input */}
        <textarea 
          name="" 
          id="" 
          placeholder='Note' 
          className='w-full h-7/8 p-2 bg-gray-700 text-white outline-none rounded text-xl' 
          value={note}
          onChange={(e)=>{
            setNote(e.target.value);
          }}
        >
        </textarea>

        {/* Submit button */}
        <button 
          type='submit' 
          className='bg-white text-black cursor-pointer p-2 text-xl rounded active:scale-95 transition-all duration-100'>
          Add Note
        </button>
      </form>
    </div>
  )
}

export default Form