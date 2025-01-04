import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },

    reducers:{
        addtoCart:(state,actions)=>{
            const Data = state.cart.filter((key)=>key.id==actions.payload.id);
            if(Data.length>1){
                alert("Already added")
            }
            else{
                state.cart.push(actions.payload);
            }
           
        },
        qntyInc:(state, actions)=>{
            for(var i=0; i<state.cart.length; i++){
                if(state.cart[i].id==actions.payload.id){
                    state.cart[i].qnty++
                }
            }
        },

        qntyDec:(state, actions)=>{
            for(var i=0; i<state.cart.length; i++){
                if(state.cart[i].id==actions.payload.id){
                    if(state.cart[i].qnty<=1){
                        alert("Qunatity less then one");
                    }
                    else{
                        state.cart[i].qnty--    
                    }
                               
                }
            }
        },

        dataDelete:(state, actions)=>{
            state.cart=state.cart.filter((key)=>key.id!=actions.payload.id)
        }
    }

})

export const {addtoCart, qntyInc, qntyDec, dataDelete} = cartSlice.actions;
export default cartSlice.reducer