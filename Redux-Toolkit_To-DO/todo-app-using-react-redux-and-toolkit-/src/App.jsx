import { useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { addTask, delTask, editSave } from "./todoSlice";
const App=()=>{
  const [mytask, setMytask]=useState("");
  const [btnStatus, setBtnStatus]=useState(true);
  const [myid, setMyid]= useState("");
  const dispatch= useDispatch();
  const MyTask= useSelector((state)=>state.todo.task);



  const deltask=(id)=>{
    dispatch(delTask({id:id}))
  }


  const edittask=(id, task)=>{
    setMytask(task)
    setMyid(id)
    setBtnStatus(false);
  }

  const editsave=()=>{
       dispatch(editSave({id:myid, task:mytask}));
       setMytask("");
       setBtnStatus(true);
  }

  let no=0;

  const ans=MyTask.map((key)=>{
    no++;
    return(
       <>
          <tr>
            <td>[{no}]. </td>
            <td> {key.task}</td>  
            <td>
                <button onClick={()=>{deltask(key.id)}}>delete</button>
              </td>
              <td>
              <button onClick={()=>{edittask(key.id, key.task)}}>edit</button>
              </td>
          </tr>   
      </>
    )
  })



  return(
    <>
      <h1> To Do App</h1>
      <hr />
      Enter Task : 
      <input type="text" value={mytask} 
      onChange={(e)=>{setMytask(e.target.value)}} /> 
   
   
 {btnStatus?(
  <>
  <button onClick={()=>{dispatch(addTask({id:Date.now(), task:mytask}))}}>Add</button> 
  </>
 ):(
  <>
    <button onClick={()=>{editsave()}}>Edit Save</button>
  </>
 )}   
    
      <hr />

      <table>
        <tr>
          <th>#</th>
          <th>Your Work</th>
          <th> </th>
          <th> </th>
        </tr>
        {ans}
      </table>
    </>
  )
}

export default App;