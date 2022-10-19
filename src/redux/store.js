import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
export const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
  },
});
