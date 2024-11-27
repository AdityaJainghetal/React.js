import { createContext, useState } from "react";
const myContext = createContext();
const CounterContext = ({children})=>{
    const [cnt, setCnt] = useState(0);
    return(
        <>
        <myContext.Provider value={{cnt,setCnt}}>
            {children}

        </myContext.Provider>
        
        </>
    )
}

export default CounterContext;
export {myContext};