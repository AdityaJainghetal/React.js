import { useState, useEffect } from "react";
import axios from "axios";

const App=()=>{
  const [mydata,setMydata] = useState([]);
  const loadData=()=>{
    let api="https://jsonplaceholder.typicode.com/posts";
    axios.get(api).then((res)=>{
      setMydata(res.data);
      console.log(res);
    })
  }

  useEffect(()=>{
    loadData();
  },[])

  const ans= mydata.map((key)=>{
    return(
      <>
      <tr style={{fontFamily:"cursive", backgroundColor:"lightgrey"}}>
        <td>{key.userId}</td>
        <td>{key.Id}</td>
        <td>{key.title}</td>
        <td>{key.body}</td>
      </tr>
      
      
      </>
    )
  })

  return(

    <>
    <h1>live APi</h1>

    <table border="1" width="100%" >
      <tr style={{backgroundColor:"red", fontSize:"20px"}}>
        <th>userid</th>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>

      </tr>
{ans}
    </table>
    
    </>
  )
}

export default App;