import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute h-full w-full bottom-0 left-0 right-0 p-6 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-medium'>{props.idx+1}</h2>
        <div>
            <p className='text-lg leading-normal text-white font-medium mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptates numquam aspernatur tempora obcaecati iure.</p>
            <div>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-full'>{props.user.tag}</button>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent