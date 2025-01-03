
import { createSlice } from '@reduxjs/toolkit';

const colourSlice = createSlice({
    name:"mycolor",
    initialState:{
        clr:"orange",
    },
    reducers:{
        changeColor:(state, actions)=>{
            console.log(actions.payload.myclr);
            state.clr = actions.payload.myclr;


        }
    }
})

export const {changeColor} = colourSlice.actions;
export default colourSlice.reducer;