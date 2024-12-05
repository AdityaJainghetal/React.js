import {increment, decrement} from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Cybrom=()=>{
    const myval=useSelector(state=>state.mycounter.count);
        const dispatch=useDispatch();
    return(
        
        <>
        <h1> Welcome to counter program</h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <h1>{myval}</h1>
        <button onClick={()=>{dispatch(decrement())}}>decrement</button>
        </>
    )
}
export default Cybrom;