import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobDetails = () =>{

 const jobdet = useLoaderData()
    return (
         <div className='jobDetails'>
            <p><b>Job Title:</b> {jobdet.title}</p>
            <p><b>Company:</b> {jobdet.company}</p>
            <p><b>Location:</b> {jobdet.location}</p>
            <p><b>Description:</b> {jobdet.description}</p>
            <button>Apply Now</button>
        </div>

    )
}

export default JobDetails

export const jobDetailsLoader = async ({params})=>{
    const {id} = params;

    // here / after jobs and +id is very important to get the details of job with that particular id 
    
    const res = await fetch("http://localhost:5000/jobs/"+id) 
    
    return res.json();
}