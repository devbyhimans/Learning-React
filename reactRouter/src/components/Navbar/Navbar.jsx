import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink,useNavigate } from 'react-router-dom'

const Navbar= ()=> {

const navigate =useNavigate();

    return (
        <div className='navbar'>
           <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}> 
            <img style={{ height: '50px',objectFit: 'cover' }} src={logo} alt="Logo" />
            <h1>Router</h1>
            </div>

            <ul>
               <NavLink to='/'> <li>Home</li></NavLink>
                <NavLink to='/products'><li>Products</li></NavLink>
                <NavLink to='/about'> <li>About</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
                <NavLink to='/jobs'><li>Jobs</li></NavLink>

            </ul>
            <button onClick={()=>navigate('/about',{replace:true})}>Get Started</button>
        </div>
    )
}

export default Navbar
