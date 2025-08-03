import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/Todo/TodoSlice.js";

export const store = configureStore({
  reducer: todoReducer,
});

/* 
Then your global state looks like:
{
  todos: 
  [ { id: 1, text: "Hello World" } ]
} */

/* So in your component:

from Todos.jsx
const todos = useSelector((state) => state.todos);
This works correctly because state.todos directly gives you the array of todos */



Concept                                             	Meaning
state                                               	Current data your app uses (like list of todos)
store                                           	Central place where state is kept (created with configureStore)
reducer	                                           Function that tells Redux how to update state when actions happen
dispatch()	                                           Sends an action to the reducer to change state
useSelector()	                                           Reads data (state) from the store
Provider	                                           React component that connects the Redux store to your app