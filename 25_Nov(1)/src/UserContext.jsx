import { useState ,createContext } from "react";
const myContext = createContext();



const useContext=({children})=>{



const [user,setUser] = useState("Aditya");
 return(
    <>
    <myContext.Provider value={{user,setUser}}>
        {children} 

    </myContext.Provider>
    
    
    
    </>
 )
}

 export default useContext;
 export {myContext};