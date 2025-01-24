import React, { useState } from 'react'
import { createContext } from 'react';
const myloginConext= createContext()

const LoginContext = ({children}) => {
    const [user,setUser]= useState({name:"",auth:false})

    const login=(username)=>{
        setUser({name:username,auth:true})
    }

    const logout=()=>{
        setUser({name:"",auth:false})
    }

  return (
    <>
    <myloginConext.Provider value={{user,login,logout}}>

        {children}
    </myloginConext.Provider>
    
    
    
    
    </>
  )
}
export {myloginConext}
export default LoginContext