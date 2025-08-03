import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/Todo/TodoSlice.js";

export const store = configureStore({
  reducer: todoReducer,
});
