import React from 'react'
import { Outlet } from 'react-router-dom'

function JobLayout() {
    return (
            
        <div>
            <h1>Job Openings</h1>
            <p>List of Current Job Openings in our Company</p>
            <Outlet/>
        </div>

        

    )
}

export default JobLayout

