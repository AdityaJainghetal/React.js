import React, { useContext, useState } from 'react'
import { myloginConext } from './LoginContext'


const UnAuthApp = () => {
    const [uname,SetuName] = useState("");
    const {login} = useContext(myloginConext)
  return (
    <>
    
    Enter your name <input type="text" value={uname} onChange={(e)=>{SetuName(e.target.value)}}/>
    
    <button onClick={()=>{login(uname)}}>Login</button>
   </>
  )
}

export default UnAuthApp