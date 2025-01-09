import React, { useContext } from 'react'
import { mycon } from './App'
const Comp1 = () => {
  
  const {user,setUser} =useContext(mycon);
  
  return (
    <>
    <div style={{width:"100px" , height:"100px"}}>
      
<button onClick={()=>{setUser("yellow")}}></button>
    </div>
    
    </>
  )
}

export default Comp1