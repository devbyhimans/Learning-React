import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = ({ job }) => {
  return (
    <div className='card'>
      
      {/* Top */}
      <div className="top">
        <img src={job.brandLogo} alt={job.companyName} />
        <button>Save <Bookmark /></button>
      </div>

      {/* Center */}
      <div className="center">
        <h3>
          {job.companyName} <span>{job.datePosted}</span>
        </h3>

        <h2>{job.post}</h2>

        <div className='tag'>
          <h4>{job.tag1}</h4>
          <h4>{job.tag2}</h4>
        </div>
      </div>

      {/* Bottom */}
      <div className="bottom">
        <div>
          <h3>{job.pay}</h3>
          <p>{job.location}</p>
        </div>

        <button>Apply</button>
      </div>

    </div>
  )
}

export default Card;
