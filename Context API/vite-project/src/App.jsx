import React from 'react'
import AuthApp from './AuthApp'
import UnAuthApp from './UnAuthApp';
import { useContext } from 'react';
import { myloginConext } from './LoginContext';
const App = () => {
  const {user} = useContext(myloginConext);
  return (
    <>
  
    <div style={{textAlign:"center", border:"2px solid black", width:"500px", marginLeft:"500px",marginTop:"100px",backgroundColor:"aquamarine",padding:"10px"}}>
    <h1>Welcome to Login page</h1>
    {user.auth ? <AuthApp/> : <UnAuthApp/>}
    </div>
    
    </>
  )
}

export default App