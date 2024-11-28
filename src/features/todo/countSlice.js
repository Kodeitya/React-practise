import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const countSlice = createSlice({
    name:'count',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count += 1;
        },
        decrement:(state,action)=>{
            state.count -= 1;
        },  
        setValue:(state,action)=>{
            state.count = action.payload; 
        }
    }
})

export const {increment,decrement,setValue} = countSlice.actions;
export default countSlice.reducer;