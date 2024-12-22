import { createSlice } from "@reduxjs/toolkit";
const productSlice= createSlice({
    name:"myproduct",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state, actions)=>{
            state.cart.push(actions.payload);
        },


        qntyIncrement:(state, actions)=>{
            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
            }
            console.log(actions.payload);
        },

        qntyDecrement:(state, actions)=>{

            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    if (state.cart[i].qnty<=1)
                    {
                        alert("Quantity not less than one!")
                    }
                    else 
                    {
                        state.cart[i].qnty--;
                    }

                   
                }
                
            }

        },

        itemRemove:(state, actions)=>{
            console.log(actions.payload.id);
            state.cart=state.cart.filter(item=>item.id!=actions.payload.id);
        }
    }
})
export const{addToCart, qntyIncrement, qntyDecrement, itemRemove} = productSlice.actions;
export default productSlice.reducer;

