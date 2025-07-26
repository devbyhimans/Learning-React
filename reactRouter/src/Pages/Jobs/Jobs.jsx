import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Jobs() {

    const jobsData =useLoaderData();

    return (
        <div className='jobs'>
            {jobsData.map((job)=>{
                return <Link to={job.id.toString()} key={job.id}>
                    <h4>{job.title}</h4>
                    <p>{job.company}</p>
                    <p>{job.location}</p> 
                    
                    
                </Link>
            })}
        </div>
    )
}

export default Jobs

//getting jobs data from our locally made api data.json

 export const JobsLoader = async()=>{
    const res = await fetch("http://localhost:5000/jobs");
    return res.json();
}