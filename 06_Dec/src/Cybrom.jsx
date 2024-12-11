import {increment,decrement} from "./counterSlice";
import { useSelector,useDispatch } from "react-redux";


const Cybrom=()=>{
    const myval=useSelector(state=>state.mycounter.count);
    const dispatch= useDispatch();
    return(
        <>
        
        <h1>Welcome to counter </h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <h2> {myval} </h2>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

        </>
    )
}
export default Cybrom;