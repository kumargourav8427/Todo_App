import { createSlice } from "@reduxjs/toolkit";

// const items = localStorage.getItem('todos') != null ? JSON.parse(localStorage.getItem('todos')): [] ;
// console.log(items);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoData: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todoData.push(action.payload);
      // localStorage.setItem('todos', JSON.stringify(state.todoData)) 

    },
    removeTodo(state, action) {
      state.todoData.splice(action.payload,1)
    },
    delAllData() {
      return  [];
    },

  },
});

export const { addTodo,removeTodo,delAllData } = todoSlice.actions;
export default todoSlice.reducer;
