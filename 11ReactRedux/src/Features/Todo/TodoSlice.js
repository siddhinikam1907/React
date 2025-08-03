import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  //initial state can be arrays or object
  todos: [{ id: 1, text: "Hello World" }],
};
//reducer is object with properties and functions

/* function sayhello(){
  console.log('heyy');

} */
export const todoSlice = createSlice({
  name: "ChaiRedux",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    }, //instead of giving callback you can give reference of actual function like addTodo:sayhello.
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; //used in components so export them
export default todoSlice.reducer; // all reducers are need to be exported to store to get them registered in store

// Parameter  	What it is	                   Example
// state	      Current data in the slice	     Current array of todos
// action	      What happened + data sent	     { type: "addTodo", payload: {...} }
// In Redux, payload is the data you send along with an action — it’s the extra information your reducer needs to update the state.

// Term	                                      Meaning
// createSlice	                              Creates a slice of Redux state and its logic
// initialState	                              Default data (like { todos: [] })
// addTodo	                                  Reducer to handle adding todos
// action.payload	                            The data passed in when the action is called
// nanoid()	                                  Generates a unique ID for each todo item

// You write this	Redux sees this internally
// dispatch(addTodo("Milk"))	              { type: 'Chai and Redux/addTodo', payload: 'Milk' }
// action.payload                         	"Milk"
//action.type                               'Chai and Redux/addTodo'
