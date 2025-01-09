import React, { createContext, useState } from 'react';



const myContext = createContext();
const App = () => {
  const [user,Setuser] = useState("pink");

  return (
    <>
    <myContext.Provider value={{user, Setuser}}>

    <div>
      <div style={{width:"500px", height:"500px", backgroundColor:user}}>

      </div>
      <button onClick={()=>{Setuser("yellow")}}>Click here</button>
    </div>
   
    </myContext.Provider>
   
    </>
  )
}

export default App