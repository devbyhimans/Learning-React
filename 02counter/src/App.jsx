import './App.css'
import { useState } from 'react'; //getting the hook


function App() {
  
  let [counter, setCounter] = useState(15) //using the useState hook for UI updation of counter

  // let counter = 5; this value of counter was not propogating everywhere in the UI on updation

  const addValue = ()=>{
    //if(counter<20)
    // counter++;

    // setCounter(counter);

    //**important */
    // this will not work as expected because the value of counter is not updated immediately, so it will not work as expected cause a batch is created for state updates in React .it will update the state in a batch and not immediately so it will run only once and not 4 times
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);


    // this will work as expected because the value of counter is updated immediately, so it will work as expected cause a batch is created for state updates in React .it will update the state in a batch and not immediately so it will run only once and not 4 times
    
    // setCounter((prevcounter)=>prevcounter+1); actaully the setcounter fuction expects a callback function which will be called with the previous value of the counter and it will return the new value of the counter
    setCounter(prevcounter => prevcounter+1);
    setCounter(prevcounter => prevcounter+1);
    setCounter(prevcounter => prevcounter+1);
    setCounter(prevcounter => prevcounter+1);
    


  }

  const DecValue = ()=>{
    if(counter>0)
    counter--;

    setCounter(counter);
  }

  return (
   <>
   <h1>React with Himanshu</h1>
   <h2>Counter Value :{counter}</h2>

   <button onClick={addValue}>Add Value</button>
   <br />
   <button onClick={DecValue}>Decrease Value</button>
   </>
  )
}

export default App
