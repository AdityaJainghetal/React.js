import { useSelector,useDispatch } from "react-redux";
import { addTask, deleteTask, editDataSave } from "./todoSlice";
import { useState } from "react";

const App=()=>{
   const Data=useSelector((state)=>state.todo.task);
   const dispatch=useDispatch();
const [val,setVal]=useState("");
const [btnStatus, setBtnStatus] = useState(true);
const [newid, setNewid] = useState("")
console.log(Data);

const handleSubmit=()=>{
   dispatch(addTask({id:Date.now(), work:val}))

}

const recDel = (id)=>{
   dispatch(deleteTask({id:id}))
}

const editTask=(id, work)=>{
   setBtnStatus(false);
   setVal(work)
   setNewid(id)
}

const editSave=()=>{
   dispatch(editDataSave({id:newid, work:val}));
   setBtnStatus(true);
}



let sn=0;
const ans=Data.map((key)=>{
   sn++;
   return(
      <>
      <tr>
         <td>{sn}</td>
         <td>{key.work}</td>
         <td>
            <button onClick={()=>{recDel(key.id)}}>Delete</button>
         </td>
         <td>
            <button onClick={()=>{editTask(key.id, key.work)}}>Edit</button>
         </td>
      </tr>
      
      </>
   )
})
   return(
      <div style={{backgroundColor:"yellow"}}>
      <>
      
      <h1>TO Do App

      </h1>

      Enter Task:<input type="taxt" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
      <br /> <br />
    { btnStatus? <button onClick={handleSubmit}>Add</button>:
     <button onClick={()=>{editSave()}}>editSave</button>}
      <hr size="1"  color="red"/>
      <table>
         <tr>
            <th>Sno</th>
            <th>Work</th>
         </tr>
         {ans}
      </table>
      
      
      </>
      </div>
   )
}
export default App;