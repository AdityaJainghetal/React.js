import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./TodoSlice";

const store=configureStore({
    reducer:{
        todo:myReducer
    }
})

export default store