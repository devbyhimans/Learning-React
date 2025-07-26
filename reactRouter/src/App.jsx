import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import About from './Pages/About/About'
import {Route, createBrowserRouter, RouterProvider,createRoutesFromElements} from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import ContactLayout from './Layout/ContactLayout'
import ContactInfo from './components/ContactInfo/ContactInfo'
import ContactForm from './components/ContactInfo/ContactForm'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import JobLayout from './Layout/JobLayout'
import Jobs, { JobsLoader } from './Pages/Jobs/Jobs'


function App() {


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='about' element={<About />} />

      <Route path='contact' element={<ContactLayout />}>
        <Route path='info' element={<ContactInfo />} />
        <Route path='form' element={<ContactForm />} />
      </Route>

      <Route path='jobs' element={<JobLayout/>}>

      {/* using router loader to first load the data and then render the jobs page */}
        <Route index element={<Jobs />} loader={JobsLoader}/>
      </Route>

      {/* 404 Page Component and path */}
      <Route path='*' element={<PageNotFound />} />

    </Route>
  )
)


  return (
      <RouterProvider router={router}/>
  )
}

export default App
