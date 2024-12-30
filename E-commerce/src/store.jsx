import { configureStore } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import proReducer from "./productSlice";

const persistConfig = {
    key: "root",
    storage,
  };


  const persistedReducer = persistReducer(persistConfig, proReducer);
const store= configureStore({
    reducer:{
        myproduct:persistedReducer
    }
})

export const persistor = persistStore(store);
export default store;