

import { useState } from "react";
import Comp1 from "./Comp1";


const App=()=>{
  const [name,setName]=useState("Aditya")
  return(
    <>
    <h1>Welcome to cybrom:</h1>
    <Comp1 user={name} />
    </>
    


  )
}

export default App;