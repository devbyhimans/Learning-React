import React from 'react'

const CardContent = (props) => {

  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
       <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>

       <div>
        <p className='text-shadow-gray-950 text-xl leading-relaxed text-white font-bold mb-14'>{props.intro}</p>

       <div className='flex justify-between '>
        <button className='bg-white txet-white font-semibold px-8 py-2 rounded-full'>{props.tag}</button>
        <button className='bg-white txet-white font-semibold px-4 py-2 rounded-full'><i className='ri-arrow-right-line'></i></button>
       
       </div>

      </div>

     </div>
  )
}

export default CardContent
