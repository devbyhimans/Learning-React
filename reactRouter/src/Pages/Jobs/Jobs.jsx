import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Jobs() {

    const jobsData =useLoaderData();

    return (
        <div className='jobs'>
            {jobsData.map((job)=>{
//using to attribute and key we get job id and link that job details with that particular job details
  // Each job item is rendered as a Link
  // The 'to' attribute sets the route to the job's detail page using the job ID
  // The 'key' prop helps React track list items efficiently
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
     
    //if api call fails to get data error elment will show
    if(!res.ok){
        throw new Error("Could not found job Details");
    }
    return res.json();
}