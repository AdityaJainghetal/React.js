import { useSelector,useDispatch } from "react-redux";
import { changeColor } from "./colorSlice";
import { useState } from "react";

const App=()=>{
   const color=useSelector((state)=>state.mycolor.clr);
   const[mycolor,setmyColor]=useState("");

   const dispatch= useDispatch();
   const setColor=()=>{
      dispatch(changeColor({myclr:mycolor}))
   }
   return(
      <>
      
      <h1>Change color</h1>
      enter color:<input type="text" value={mycolor}
      onChange={(e)=>{setmyColor(e.target.value)}}/>
      <button onClick={setColor}>Click here</button>
      <br /><br />
      <div style={{width:"300px",height:"300px",backgroundColor:color,borderRadius:"50%", border:"2px solid black"}}>
   </div>
      
      
      
      
      </>
   )
}
export default App; 