import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myobj = { //creating an object and passing it to props(properties)
    name: "Himanshu", 
    Age: 22,
    isActive: true,}

    let newArray = [1, 2, 3, 4, 5]; //creating an array and passing it to props

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-pink-500 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Tailwind is Working! 🎉</h1>

    <Card username="test" someobj={myobj} someobj1={newArray} bio="Testing"/> {/* whatever you pass here will be available in the card component as props */}

    
    {/* so i can pass value from one component to another component and that value will be available to that component in function defination*/ }

    <Card username="Himanshu" bio="firstname"/>
    <Card username="choudhary" bio="lastname"/>


    </div>
  );
}

export default App;


