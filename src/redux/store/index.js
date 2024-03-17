import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../slice/registerSlice";

const store = configureStore({
  reducer: {
    R1: registerReducer,
  },
});

export default store;
