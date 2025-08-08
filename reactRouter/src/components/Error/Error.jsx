import React from "react";
import {useNavigate, useRouteError} from 'react-router-dom'

const Error=()=>{

 const error=useRouteError();
 const navigate =useNavigate();

 return(
  <div className="jobDetails">
   <h3>An error occured</h3>
   {/* showing the erroe message passed */}
   <p>{error.message}</p>
   <button onClick={()=>navigate('/')}>Go To Homepage</button>
  </div>
 )
}

export default Error