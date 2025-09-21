import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
 
  return (
    <UserContextProvider>
      <h1>Context Api Learning</h1>

      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
