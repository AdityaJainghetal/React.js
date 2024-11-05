import React from "react";
const data ="Indore";
import React from "react";
// import App from "./cybrom";
// import React from "react";
import React from "./College";
const salary =3450;

const App=()=>{
  return(
    <>
    <h1>Hello {data} and salary {salary}</h1>
    <h2>hello</h2>
    <h1 className="head">Application form</h1>
    Name: <input type="text"/>
    <br />
    City : <input type="text" />
    <hr size="4" color="red"/>
    <button>Save</button>
    </>
  )
}
export default App;