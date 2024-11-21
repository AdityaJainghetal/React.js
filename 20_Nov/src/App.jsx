import { useState, useEffect } from "react";
import axios from "axios";

const App=()=>{
  const [mydata,setMydata] = useState([]);
  const loadData=()=>{
    let api="http://localhost:3000/student";
    axios.get(api).then((res)=>{
      setMydata(res.data);
      console.log(res.data);
    })
  }

  // useEffect(()=>{
  //   loadData();
  // },[])

  const ans= mydata.map((key)=>{
    return(
      <>
      <tr style={{fontFamily:"cursive", backgroundColor:"lightgrey"}}>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
      
      
      </>
    )
  })

  return(

    <>
    <h1>live APi</h1>
    <button onClick={loadData}>Click here</button>

    <table border="1" width="100%" >
      <tr style={{backgroundColor:"red", fontSize:"20px"}}>
        <th>roll</th>
        <th>name</th>
        <th>city</th>
        <th>fees</th>

      </tr>
{ans}
    </table>
    
    </>
  )
}

export default App;