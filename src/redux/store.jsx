import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todoReducer";

export const store = configureStore({
  reducer: todoSlice,
});
