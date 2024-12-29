import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const cartSlice = createSlice({
  name: "flipcart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qnty += 1;
        message.info("Item quantity increased.");
      } else {
        state.cart.push({ ...action.payload, qnty: 1 });
        message.success("Item added to cart.");
      }
    },

    qntyIncrement: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.qnty += 1;
      } else {
        message.error("Item not found in cart.");
      }
    },

    qntyDecrement: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        if (item.qnty <= 1) {
          message.warning("Quantity cannot be less than one.");
        } else {
          item.qnty -= 1;
        }
      } else {
        message.error("Item not found in cart.");
      }
    },

    itemRemove: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1);
        message.success("Item removed from cart.");
      } else {
        message.error("Item not found in cart.");
      }
    },
  },
});

export const { addtocart, qntyIncrement, qntyDecrement, itemRemove } = cartSlice.actions;
export default cartSlice.reducer;
