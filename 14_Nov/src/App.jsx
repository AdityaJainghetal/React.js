// const App=()=>{
  
  
//   const display=()=>{
//     alert("Event examplet")
//   }
  
  
  
//   return(
//     <>
//   <h1>Welcome</h1>
//   <button onClick={display}>click here</button>
    
//     </>
//   )
// }

// export default App;




const App=()=>{
  
  const myname=(nm)=>{
    alert(`My name is : ${nm}`)
  }
  
  
  
  return(
    <>
  <h1>Welcome</h1>
  <button onClick={()=>{myname  ("Aditya")}}>click here</button>
    
    </>
  )
}

export default App;




// const App=()=>{
  
//   const display=(nm,e)=>{
//     console.log(e)
//     alert(`My name is : ${nm} Event:${e.type}`)
//   }
  
  
  
//   return(
//     <>
//   <h1>Welcome</h1>
//   <button onClick={(e)=>{display  ("Aditya", e)}}>Click here</button>
    
//     </>
//   )
// }

// export default App;


//same function different method

// const App=()=>{
  
//   const display=(e)=>{
  
//     alert("Hello frined event: "+  e.type)
//   }
  
  
  
//   return(
//     <>
//   <h1>Welcome</h1>
//   <button onClick={display}>Click here</button>
    
//     </>
//   )
// }

// export default App;




// const App=()=>{
//   const getval=(e)=>{
//     // console.log(e);
//     let nm= e.target.name;
//     let val = e.target.value;
//     console.log({name:nm, value:val})
    
//   }
 
  
  
//   return(
//     <>
//   <h1>Welcome</h1>
//   <input type="text" name="Aditya" onChange={getval}/>
    
//     </>
//   )
// }

// export default App;