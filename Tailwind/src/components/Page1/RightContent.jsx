import React from 'react'
import Card from './Card'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto  flex-nowrap gap-10 p-6 w-2/3'>
      {props.cars.map((elem,idx)=>{
        return <Card key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
      })}
      
    </div>
  )
}

export default RightContent
