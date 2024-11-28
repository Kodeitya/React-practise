import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import countSlice from "../features/todo/countSlice";
// export const store = configureStore({
//     reducer: {todoReducer,countSlice}
   

// });

export const store = configureStore({
    reducer: countSlice
})