import React, { useContext } from 'react'
import {myContext} from "./ColorContext"
const ChangeColor = () => {
    const {color, setColor} = useContext(myContext);

    return (
    <>
    <button onClick={()=>{setColor("blue")}}>Click here</button>

    <div style={{width:"300px", height:"150px", borderRadius:"10px" ,backgroundColor:color}}></div>
        
    
    </>
  )
}

export default ChangeColor