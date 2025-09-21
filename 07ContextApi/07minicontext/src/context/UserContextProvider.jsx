import React from "react";;
import UserContext from "./UserContext";

/*children here simply means joh bhi aa rha hai woh as it as pass krdo by wrapping into
provider and by using the value property of provider
we can state to which values we are giving access
*/
const UserContextProvider = ({children}) =>{
const [user,setUser] = React.useState(null)

 return(
  <UserContext.Provider value={{user,setUser}}>
   {children}
  </UserContext.Provider>
 )

}

export default UserContextProvider