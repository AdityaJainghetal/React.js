const Student=[
  {
    "rollno":121,
    "name":"Aditya",
    "city":"Bhopal"
  },
  {
    "rollno":122,
    "name":"Ram",
    "city":"Indore"
  },
  {
    "rollno":123,
    "name":"Pawan",
    "city":"Pune"
  },
  {
    "rollno":124,
    "name":"Ankur",
    "city":"Bhopal"
  }

]


const ans=Student.map((key)=>{
  return(
    <>
    <tr>
    <td>{key.rollno}</td>
    <td>{key.name}</td>
    <td>{key.city}</td>
    </tr>
    </>
  )
})


const App=()=>{
  return(

    <>
      <h1>welcome</h1>
      <table width="50%" border="1" align="center" bgcolor="aqua">
        <tr>
          <th> Roll no </th>
          <th> Name </th>
          <th> City </th>
        </tr>
        {ans}
      </table>
    </>
  )
}






export default App;