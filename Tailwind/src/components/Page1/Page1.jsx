import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Page1 = (props) => {
  return (
    <div className='h-screen w-full bg-white overflow-hidden'>
      <Navbar/>
      <Content cars={props.cars}/>
    </div>
  )
}

export default Page1
