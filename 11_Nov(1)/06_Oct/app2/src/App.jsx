import EmpData from "./EmpData"
// import style from "./assets/"
import EmpDesign from "./EmpDesign"


const ans= EmpData.map((key)=><EmpDesign
empo={key.EmpId}
emnm ={key.Name}
empdeg = {key.City}
empsal= {key.fees}


/>
 
)

const App=()=>{
  return(

    <>
    {/* <h1>Welcome to cybrom</h1> */}
    <div id="empo">
      {ans}
      </div>
   
    </>
  )
}

export default App;