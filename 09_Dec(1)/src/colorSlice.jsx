import {createSlice} from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        clr:"orange",
    },
    reducers:{
        changeColor:(state,actions)=>{
            console.log(actions.payload.myclr);
            state.clr=actions.payload.myclr;
            
        }
        
    }
})
export const {changeColor}=colorSlice.actions;
export default colorSlice.reducer;