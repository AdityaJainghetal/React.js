import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { colorChange } from "./counterSlice";

const App = () => {
    const myclr = useSelector((state) => state.mycolor.color);
    const dispatch = useDispatch();

    return (
        <>
            <h1>My Color Program</h1>
            <button onClick={() => dispatch(colorChange())}>Click here</button>
            <br />
            <br />
            <div
                style={{ width: "300px", height: "250px", backgroundColor: myclr }}
            ></div>
        </>
    );
};

export default App;