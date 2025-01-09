import React from 'react'
import EmpDesign from './EmpDesign'
import Empdata from './Empdata'

const ans = Empdata.map((key)=><EmpDesign
nm={key.name}
des={key.designation}
sal={key.salary}
/>
 

) 

const App = () => {
  return (
    <>
    <table border={2}>
      <tr>
        <th>name 1</th>
        <th>name 2</th>
        <th>name 3</th>
        <th>name 4</th>
      </tr>
      {ans}

    </table>
    </>
  )
}

export default App
