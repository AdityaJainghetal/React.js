import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice';

const App = () => {
  const cnt = useSelector((state)=>state.mycounter.count);
  const dispatch = useDispatch();

  return (
    <>
  
    <div style={{textAlign:"center"}}>
    <h1>Welcome</h1>
    <button onClick={()=>{dispatch(increment())}}>Increment</button> 
    <h1>{cnt}</h1>
    <button onClick={()=>{dispatch(decrement())}}>Decrement</button> 
    </div>
    </>
  )
}

export default App