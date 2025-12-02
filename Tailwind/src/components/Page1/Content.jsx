import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props) => {
  return (
    <div className='px-16 pb-4 flex items-center gap-10 h-[80vh] '>
      <LeftContent/>
      <RightContent cars={props.cars}/>
    </div>
  )
}

export default Content
