import { useState, useMemo } from "react";

const App=()=>{
  const [mynum, setMynum] = useState(0);
  const [nm,setNm] = useState("");
  const heavyFun= useMemo(()=>{
    for (var i=0;i<=100000000;i++){

    }
    return mynum*2;
  },[mynum])

    return(
      <>
      <h1>Welcome to my form</h1>
      <h1>{heavyFun}</h1>
      <input type="number" value={mynum} onChange={(e)=>{setMynum(e.target.value)}} />
      <input type="text" value={nm} onChange={(e)=>{setNm(e.target.value)}} />
      </>


    )
}

export default App;