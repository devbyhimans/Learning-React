import React from 'react'

function Card(props) {

  console.log("props", props) // This will log the props passed to the Card component from the parent component which is App.jsx

  //we can also directly get the props like this function Card({ channel, someobj, someobj1 }) 

  //we can use access the props like this
  // console.log(channel) // "Himanshu"
  // console.log(someobj) // { name: "Himanshu", Age: 22, isActive: true }
  // console.log(someobj1) // [1, 2, 3, 4, 5]

    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            
            {props.username } {/* This will display the username passed as a prop */}

          </span>

          <h2 className="text-xl font-semibold tracking-wide">{props.bio}</h2>
          {/* This will display the bio passed as a prop */}

        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}

export default Card
