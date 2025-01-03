import { useDispatch, useSelector } from "react-redux"
import { changeColor } from "./colorSlice"
import { useState } from "react"

const App = () => {
  const color= useSelector((state)=>state.mycolor.clr);
  const [mycolour, setmycolour] = useState("")
  const dispatch = useDispatch();
  const setColour=()=>{
    dispatch(changeColor({myclr:mycolour}))
  }



  return (
    <>
      <h1>Chnage color</h1>
      Enter colour: <input type="text" value={mycolour} onChange={(e)=>{setmycolour(e.target.value)}} />
      <button onClick={setColour}>Click here</button>
        <br />
        <br />
        <div style={{width:"300px", height:"300px", backgroundColor:color}}></div>
    </>
  )
}

export default App