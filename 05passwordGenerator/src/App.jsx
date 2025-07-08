import React, { useState, useCallback, useEffect, useRef } from "react";
import './index.css';

function App() {

  const [length,setlength] = useState(8);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const[characterAllowed,setcharacterAllowed] = useState(false);
  const [password,setpassword] = useState('');


  //useRef hook is used to take reference of a value .We create a variable for using useRef
  // and assign it to the variable passwordRef. This allows us to access the current value
  const passwordRef = useRef(null);

 // useCallback hook is used to memoize the password generation function
  // so that it does not get recreated on every render unless its dependencies change.
  // This is useful for performance optimization, especially if the function is passed down to child components
  // or used in effects that depend on it.
  // The dependencies are length, numberAllowed, and characterAllowed, which means the function will
  // only be recreated if any of these values change.
  // The function generates a random password based on the specified length and whether numbers and special characters
  // are allowed. It constructs a string of possible characters and randomly selects characters from it to
  // create the password. The generated password is then set in the state using setpassword.
const passwordgenerator = useCallback(()=>{
  let pass="";
  let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklmnbvcxz";

  if(numberAllowed) str+="0123456789";
  if(characterAllowed) str+="!@#$%^&*-+~`";

  for(let i=1;i<=length;i++){
    let ind = Math.floor(Math.random()*str.length+1);

    pass += str.charAt(ind);
  }

  setpassword(pass);

  //these are the dependencies of the useCallback hook
} ,[length,numberAllowed,characterAllowed,]);

  // The copyPasswordToClipboard function is used to copy the generated password to the clipboard.
  // It uses the navigator.clipboard API to write the password to the clipboard.
  // If the passwordRef is not null, it accesses the current value of the password input
  // and writes it to the clipboard. If the copy operation is successful, and using useCallback for performance optimization.
  const copyPasswordToClipboard = useCallback(() => {

    //this gives user effect that the password is copied to clipboard making UI more interactive
    passwordRef.current?.select();

    //thss line sets the selection range of the input element to cover the entire password,
    passwordRef.current?.setSelectionRange(0, length);
     
    window.navigator.clipboard.writeText(password)
  },[password])

//useeffect hook is used to call the passwordgenerator function whenever
// the length, numberAllowed, or characterAllowed state changes.
// This ensures that the password is regenerated whenever these values are updated,
// keeping the password in sync with the user's preferences.
//It takes two arguments: a function to execute and an array of dependencies juslike useCallback.
useEffect(()=>{
  passwordgenerator();
},[length,numberAllowed,characterAllowed,passwordgenerator]);

  return (
    <>
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-4 my-8 text-orange-500 bg-gradient-to-r from-blue-500 to-pink-500'>

    <h1 className="text-white text-center text-4xl mb-2">Password Generator</h1>

    <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50">
    <input 
    type="text"
    value={password}
    className="outline-none w-full py-1 px-3"
    placeholder="password"
    readOnly
    ref={passwordRef} // The passwordRef is used to reference the input element, allowing us to access its value directly if needed.

    />
    <button onClick={copyPasswordToClipboard}  className="outline-none bg-amber-200 text-black px-3 py-1 shrink-0 hover:bg-amber-400 hover:text-white transition-colors duration-200">Copy</button>

    </div>

    

    <div className="flex text-sm gap-x-2 text-black mb-4">

    <div className="flex items-center gap-x-1">

      <input 
      type="range"
      min={8}
      max={30}
      value={length}
      className="cursor-pointer"

      // The setlength function cannot be used directly in the onChange event handler because it may not work as expected. Instead, a callback function is used that takes the event as an argument and updates the length state. This ensures the length state is updated correctly when the range input changes. The value of the range input is bound to the length state, reflecting the current length value. The onChange event handler is triggered whenever the user changes the value of the range input by dragging the slider or clicking on the track. The setlength function updates the length state with the new value from the event, allowing the user to dynamically adjust the length of the password being generated.
      onChange={(event)=>{setlength(event.target.value)}}
      />
      <label >Length:{length}</label>
    </div>

    <div className="flex items-center gap-x-1">
      <input type="checkbox"
      defaultChecked={numberAllowed}
      id="numberInput"

      // The onChange event handler toggles the state of numberAllowed when the checkbox is clicked.
      // It uses the setnumberAllowed function to update the state.
      // The previous state is accessed using the prev parameter, and the new state is set to
      // the opposite of the previous state (i.e., if it was true, it becomes false, and vice versa).
      // This allows the user to enable or disable the inclusion of numbers
      // in the generated password by checking or unchecking the checkbox.
      onChange={(event)=>{setnumberAllowed((prev)=>!prev);}}
      />
      <label htmlFor="numberInput">Numbers</label>
    </div>

    <div className="flex items-center gap-x-1">
      <input type="checkbox"
      defaultChecked={characterAllowed}
      id="characterInput"
      onChange={(event)=>{setcharacterAllowed((prev)=>!prev);}}
      />
      <label htmlFor="characterInput">Characters</label>
    </div>

    

    </div>

    </div>
    </>
  )
}

export default App
