import { configureStore } from "@reduxjs/toolkit";
import proReducer from "./productSlice";
const store= configureStore({
    reducer:{
        myproduct:proReducer
    }
})

export default store;