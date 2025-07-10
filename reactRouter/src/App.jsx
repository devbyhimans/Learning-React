import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import {Routes ,Route} from 'react-router-dom'



function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
      </div>

    </div>
  )
}

export default App
