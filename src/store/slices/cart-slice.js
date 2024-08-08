// using redux toolkit for state managenent
// createSlice (import)
// initialize initial state
// slice(create) - mention intial state, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartReduccer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTodo(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeTodo(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = cartReduccer.actions;
export default cartReduccer.reducer;
