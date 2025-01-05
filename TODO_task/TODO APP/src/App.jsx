import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addTask , delTask, editSave, completeTask, uncompleteTask} from './TodoSlice';

const App = () => {
  const [mytask, setMytask]= useState("");
  const [btnStatus,setBtnStatus] = useState(true)
  const [btnnStatus,setBtnnStatus] = useState(true)
  const [myid,setMyid] = useState("")
  const dispatch = useDispatch()
  const MyTask = useSelector((state)=>(state.todo.task))


    // const handleSubmit=()=>{
    //   dispatch(addTask({id:Date.now(), task:mytask, status:"uncomplete"}))
    // }


  const deltask=(id)=>{
    dispatch(delTask({id:id}))
  }


  const editsave=()=>{
      dispatch(editSave({id:myid, task:mytask}))
      setMytask("")
      setBtnStatus(true)
  }

  const edittask=(id, task)=>{
    setMytask(task)
    setMyid(id)
    setBtnStatus(false)
  }

  const taskComp=(id)=>{
    dispatch(completeTask({id:id}))
    setBtnnStatus(false)
  }

  const taskUnComp=(id)=>{
      dispatch(uncompleteTask({id:id}))
      setBtnnStatus(true)
  }



  let no=0
  const ans= MyTask.map((key)=>{
    no++;
    return(
     
      <>
      <tr style={{fontSize:"20px", backgroundColor:"whitesmoke"}}>
      <td>[{no}]. </td>
      <td>{key.task}</td>
      <td>
        <button onClick={()=>{deltask(key.id)}}>Delete</button>
      </td>
      <td>
        <button  onClick={()=>{edittask(key.id, key.task)}}>Edit</button>
      </td>



      <td style={{gap:"20px",padding:"10px"}}>

              {key.status=="uncomplete"?(
                <>
                   <button onClick={()=>{taskComp(key.id)}} > Complete </button>
                </>
              ):(
                <>
             
               
                <button onClick={()=>{taskUnComp(key.id)}} >Uncomplete</button> 
                </>
              )}
               </td>





      </tr>
      </>
    )
  })


  return (
    <>
      <h1>To do App</h1>
      <hr />

      Enter Task: <input type="text" value={mytask} onChange={(e)=>{setMytask(e.target.value)}}/>

      {btnStatus?(
        <>
         <button onClick={()=>{dispatch(addTask({id:Date.now(),task:mytask, status:"complete"}))}}>Add</button>

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
        <th>Your work</th>
        <th></th>
      </tr>
      {ans}
    </table>
    </>
  )
}

export default App