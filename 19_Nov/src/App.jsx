// import { useState, useEffect } from "react";
// const App=()=>{
//   const [count, setCount] =useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count+1)
//     },1000);
//   })

//   return(
//     <>
//     <h1>My counter: {count}</h1>
//     </>
//   )
// }

// export default App;



// import { useState, useEffect } from "react";
// const App=()=>{
//   const [count, setCount] =useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count+1)
//     },5000);
//   },[])                                 //dependance run only one time

//   return(
//     <>
//     <h1>My counter: {count}</h1>
//     </>
//   )
// }

// export default App;






// import { useState, useEffect } from "react";
// const App=()=>{
//   const [count, setCount] =useState(0);
//  const [multi,setMulti] = useState(0)
//  const mycounter=()=>{
//   setCount(count+1);
//  }
 
 
 
//   useEffect(()=>{
//     setMulti(count*2)

//   },[count])                                 //dependance run only one time

//   return(
//     <>
//     <h1>My counter: {count}</h1>
//     <h2>Multi : {multi}</h2>
//     <button onClick={mycounter}>Click here</button>
//     </>
//   )
// }

// export default App;




//excuse



import { useState, useEffect } from "react";
const App=()=>{
  const [count, setCount] =useState(0);
 const [multi,setMulti] = useState(0)
 const mycounter=()=>{
  setCount(count+1);
 }
 
 
 
  useEffect(()=>{
    setMulti(count*2)

  },[count])                                 //dependance run only one time

  return(
    <>
    <h1>My counter: {count}</h1>
    <h2>Multi : {multi}</h2>
    <button onClick={mycounter}>Click here</button>
    </>
  )
}

export default App;