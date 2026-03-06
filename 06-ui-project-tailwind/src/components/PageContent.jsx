import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className='py-10 px-15 h-[88vh] w-full flex items-center gap-10'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default PageContent