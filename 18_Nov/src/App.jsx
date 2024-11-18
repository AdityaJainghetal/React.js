// import { useState } from "react";
// const App=()=>{
//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");

//   const handleSubmit=()=>{
//     alert("name: " + name + " city: "+ city)
//   }



// return(
//   <>
//   <h1>Appliction form</h1>
//   Enter your name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//   <br />

//   Enter your city: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//   <br />
//   <button onClick={handleSubmit}>Click here</button>
//   </>
// )
// }
// export default App;





// import { useState } from "react";
// const App=()=>{
//   const [roll, setRoll] = useState("")
//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");

//   const handleSubmit=()=>{
//     console.log({roll:roll,name:name,city:city})
//   }



// return(
//   <>
//   <h1>Appliction form</h1>
//   Enter your roll : <input type="text" value={roll} onChange={(e)=>{setRoll(e.target.value)}}/>
//   <br />
//   Enter your name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//   <br />

//   Enter your city: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//   <br />
//   <button onClick={handleSubmit}>Click here</button>
//   </>
// )
// }
// export default App;





import { useState } from "react";
const App=()=>{

  //multiply operator
  const [input, setInput] = useState({})


  const handleSubmit=(e)=>{
    // console.log({roll:roll,name:name,city:city})
    let name= e.target.name;
    let value= e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input)
  }



return(
  <>
  <h1>Appliction form</h1>
  Enter your roll : <input type="text" name="rollno" onChange={handleSubmit}/>
  <br />
  Enter your name : <input type="text"  name="name" onChange={handleSubmit}/>
  <br />

  Enter your city: <input type="text"  name="city" onChange={handleSubmit}/>
  <br />
  <button onClick={handleSubmit}>Click here</button>
  </>
)
}
export default App;