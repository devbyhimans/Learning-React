import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import {Route, createBrowserRouter, RouterProvider,createRoutesFromElements} from 'react-router-dom'
import RootLayout from './Layout/RootLayout'


function App() {


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)


  return (
      <RouterProvider router={router}/>
  )
}

export default App
