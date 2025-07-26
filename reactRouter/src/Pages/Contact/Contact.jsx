import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



function Contact() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Contact Page</h1>
            <div className='contact-buttons'>
                <button onClick={()=>navigate('info')}>Contact Info</button>
                <button onClick={()=>navigate('form')}>Contact form</button>
            </div>
        </div>
    )
}

export default Contact
