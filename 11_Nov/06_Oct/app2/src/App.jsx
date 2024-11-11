import Student from "./StuData";


const ans= Student.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.rollno}</td>
      <td>{key.Name}</td>
      <td>{key.City}</td>
      <td>{key.fees}</td>
    </tr>
    </>
  )
})

const App=()=>{
  return(

    <>
    <h1>Welcome to cybrom</h1>
    <table width="50%" border="1" style={{textAlign:"center" } }>
      <tr>
        <th>rollno</th>
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