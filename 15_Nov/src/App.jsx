// import { useState } from "react";


// const App=()=>{
//   const[city, setCity] = useState("Bhopal");
//   const myval=()=>{
//     setCity("Indore")
//   }
//   return(
//     <>
//     <h1>Welcome  to cybrom: {city}</h1>
//     <button onClick={myval}>Click here</button>
    
//     </>
//   )
// }

// export default App;




// import { useState } from "react";


// const App=()=>{
//   const[color, setColor] = useState("red");
 
//   return(
//     <>
//     <h1 style={{color:color}}>Welcome  to cybrom: {color}</h1>
//     <button onClick={()=>{setColor("Yellow")}}>Click here</button>
//     <button onClick={()=>{setColor("green")}}>Click here</button>
//     <button onClick={()=>{setColor("blue")}}>Click here</button>
//     <button onClick={()=>{setColor("orange")}}>Click here</button>
    
//     </>
//   )
// }

// export default App;







import { useState } from "react";


const App=()=>{
  const[cnt, setCnt] = useState(0);
  const myInc=()=>{
    setCnt(cnt+1)
  }

  const myDec=()=>{
    if(cnt<=0){
      alert("Your can not decrement less than zero");
    }

    else{
    setCnt(cnt-1)
    }
  }

  


  
 
  return(
    <>
    
    <center>
    <h1>Count : {cnt}</h1>
    <button onClick={myInc}>Increment</button>
    <button onClick={myDec}>Decrement</button>
    <button onClick={()=>(setCnt(0))}>Resert value</button>
    </center>  
    </>
  )
}

export default App;