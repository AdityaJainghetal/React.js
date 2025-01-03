import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./counterSlice"; 
const store =  configureStore({
    reducer:{
        mycounter:myreducer
    }
})

export default store;