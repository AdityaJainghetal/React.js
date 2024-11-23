import { useState } from "react";
import Comp1 from "./Comp1";

import { createContext } from "react";


const myContext = createContext();


const App=()=>{
  const [name,setName]=useState("Aditya")
  return(
    <>
    <h1>Welcome to cybrom: {name}</h1>

    <myContext.Provider value={{name}}>

    <Comp1 user={name} />

    </myContext.Provider>
   
    </>
    


  )
}

export default App;
export {myContext};