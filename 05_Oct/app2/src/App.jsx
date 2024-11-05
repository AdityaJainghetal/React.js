// const App=()=>{
//   return(
//     <>
//     <h1 style={{color:"red", fontFamily:"verdana"}}>Welcome to cybrom</h1>
//     <div style={{border:"2px solid black", margin:"25px", backgroundColor:"yellow" ,borderRadius:"5px",width:"40%",padding:"10px"} }>
//     <div style={{border:"2px solid black",margin:"25px", backgroundColor:"aqua" ,borderRadius:"5px"} }>
//     <div style={{border:"2px solid black",margin:"25px", backgroundColor:"greenyellow",borderRadius:"5px"} }>
//       <h1 style={{textAlign:"center",color:"red"}}>Cybrom</h1>
      
//        </div>


//     </div>

//     </div>

//     </>
//   )
// }

// export default App;

const data={
  color:"red",
  fontfamily:"verdana",
  textDecoration:"uderline"
}

const mydata={
  color:"blue",
  fontfamily:"arial",
  textDecoration:"overline",
  backgroundColor:"yellow"
}





const App=()=>{
  return(
    <>
   <h1 style={data}>Welcome to cybrom</h1>
   <h2 style={mydata}>Welcome to cybrom</h2>

    </>
  )
}

export default App;