// const App=()=>{
//   const name=["Aditya", "Ram","Ankur","Pawan"];
//   const data=name.map((item)=>{
//     return(
//       <>
//         <h1> {item} </h1>
//       </>
//     )
//   })
//   return(
//     <>
//       {data}
//     </>
//   )
// }

// export default App;




// const App=()=>{
//   const name=["Aditya", "Ram","Ankur","Pawan"];
//   const data=name.map((item)=>{
//     return(
//       <>
//         <li> {item} </li>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>Welcome</h1>
//     <ol>
//       {data}
//       </ol>
//     </>
//   )
// }

// export default App;







// const App=()=>{
//   const name=["Aditya", "Ram","Ankur","Pawan"];
//   const data=name.map((item)=><option> {item} </option>
   
//     )
//   return(
//     <>
//     <h1>Welcome</h1>
//     <select>
//       {data}
//       </select>
//     </>
//   )
// }

// export default App;

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