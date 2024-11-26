import { useContext } from "react";
import { myContext } from "./UserContext";



const Cybrom=()=>{

    const {user,setUser} = useContext(myContext)
    return(
        <>
        <h1>Welcome to Cybrom: {user}</h1>
        <button onClick={()=>{setUser("Jain")}}>Click here</button>
        </>

    )
}

export default Cybrom;