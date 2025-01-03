import {createSlice} from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"yellow",
    },
    reducers:{
        changColor:(state)=>{
            state.color="aqua";
        }
        
    }
})
export const {changColor}=colorSlice.actions;
export default colorSlice.reducer;