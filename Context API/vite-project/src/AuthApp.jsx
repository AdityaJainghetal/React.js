import  { useContext } from 'react';
import { myloginConext } from './LoginContext';


const AuthApp = () => {
    const {user,logout} = useContext(myloginConext);
  return (
    <>
    <h1>Auth welcome to your app {user.name}</h1>
<button onClick={logout}>logout</button>
    
    
    
    
        
    </>
  )
}

export default AuthApp