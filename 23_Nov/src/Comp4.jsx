import { useContext } from "react";
import { myContext } from "./App";
const Comp4=({user})=>{
    
    const {name} = useContext(myContext);
    
    return(

        
        <>
        <h1>Welcome: {user} </h1>
        
        </>
    )
}
export default Comp4;