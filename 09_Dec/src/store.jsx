import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./counterSlice";
const store= configureStore({
    reducer:{
        mycolor:colorReducer
    }
})
export default store;


