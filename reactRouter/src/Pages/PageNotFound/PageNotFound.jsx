import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const navigate = useNavigate(); 

    return (
        <div>
            <h2>404 | Page Not Found</h2>
            <br />
            <button onClick={()=>navigate('/',{replace:true})}>Go TO Homepage</button>
        </div>
    )
}

export default PageNotFound
