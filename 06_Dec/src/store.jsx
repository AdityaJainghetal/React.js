import {configureStore} from "@reduxjs/toolkit";
import clrReduce from "./colorSlice";

const store= configureStore({
    reducer:{
        mycolor:clrReduce,
    }
})
export default store;