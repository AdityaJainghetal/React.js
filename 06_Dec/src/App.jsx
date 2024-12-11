import { useSelector,useDispatch } from "react-redux";
import { changColor } from "./colorSlice";



const App=()=>{
   const myclr=useSelector((state)=>state.mycolor.color);
   const dispatch= useDispatch();
   return(
      <>
     
      <h1>hello</h1>
      <button onClick={()=>{dispatch(changColor())}}>click here</button>
      <br /><br />
      <div style={{width:"300px",height:"300px",backgroundColor:myclr}}></div>
     
     
      </>
   )
}
export default App; 