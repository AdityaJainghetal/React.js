import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import proReducer from "./productSlice";

const persistConfig = {
    key: "cartData",
    storage:localStorage,
  };


const store= configureStore({
    reducer:{
        myproduct: persistReducer(persistConfig, proReducer)
    }
})

export const persistor = persistStore(store);
export default store;