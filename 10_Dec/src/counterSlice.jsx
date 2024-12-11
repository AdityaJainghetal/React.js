import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"yellow"
    },
    reducers:{
        colorChange:(state)=>{
            state.color="blue"
        }
    }
})
export const {colorChange} = counterSlice.actions;
export default counterSlice.reducer;