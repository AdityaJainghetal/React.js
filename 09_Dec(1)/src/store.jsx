import {configureStore} from "@reduxjs/toolkit";
import clrReducer from "./colorSlice";

const store= configureStore({
    reducer:{
        mycolor:clrReducer,
    }
})
export default store;