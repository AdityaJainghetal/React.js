import Loader from "./Loader";
import { useState } from "react";
const CheckOut=()=>{
    const [load, setLoad]= useState(true);


     setTimeout(()=>{
        setLoad(false);
     }, 2000);


    return(
        <>
        


        {load ? (<div style={{width:"100px", margin:"auto"}}>
        <Loader/>
        </div>) : (<h1> Thanks To Purchasing This Product</h1> )}
        
            
        
        
        
               
        </>
    )
}

export default CheckOut;