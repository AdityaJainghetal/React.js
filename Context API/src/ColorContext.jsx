import React, { createContext, useState } from 'react'

export const myContext = createContext();


const ColorContext = ({children}) => {
    const [color, setColor] = useState("red")
  return (
    <>

    <myContext.Provider value={{color, setColor}}>
        {children}
    </myContext.Provider>

    </>
  )
}

export default ColorContext