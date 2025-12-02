import React from 'react'
import CardContent from './CardContent'

const Card = (props) => {
  return (
    <div className=' relative shrink-0 h-full w-80 overflow-hidden rounded-4xl'>

      <img className='h-full w-full object-cover ' src={props.img} alt="" />

      <CardContent tag={props.tag} intro={props.intro} id={props.id}/>
    </div>
  )
}

export default Card
