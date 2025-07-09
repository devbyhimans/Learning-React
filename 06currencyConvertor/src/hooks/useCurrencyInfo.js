import { useEffect, useState } from "react";

//creating a custom hook to fetch currency data
// This hook takes a currency code as an argument and returns the currency information
function usecurrencyInfo(currency){
    //using useState hook to create a state variable 'data' to store the currency information
    // The initial state is set to an empty object
    const[data,setData] = useState({})

    useEffect(()=>{

        //making an API call to fetch currency data
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // as soon we get the response we convert it to json
            // and then we set the data in the state
            .then((res)=>res.json())
            .then((res)=>setData(res[currency]))
        
        //currency is dependency of useEffect hook
        // so whenever currency changes, the useEffect hook will be called again
    },[currency])

    //returning the data state variable which contains the currency information
    // This data can be used in the component where this hook is used
    return data
}

//we are exporting the usecurrencyInfo hook so that it can be used in other components
// This allows us to fetch currency information in any component by simply calling this hook,basically we returing the whole method and we will data access of data from this method
// This is a common pattern in React to encapsulate logic and make it reusable across components.
export default usecurrencyInfo;