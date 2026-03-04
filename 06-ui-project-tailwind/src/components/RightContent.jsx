import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto p-6 w-2/3'>
        <div className='h-full flex flex-nowrap gap-10 animate-scroll-once'>
            {props.users.map((user, index) => (
                <RightCard key={index} idx={index} user={user} />
            ))}
        </div>
    </div>
  )
}

export default RightContent