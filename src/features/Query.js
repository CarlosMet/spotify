import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
    name: "query",
    initialState: {
        query: ""       
    },
    reducers: {
        SET_QUERY: (state, action)=>{
            state.query = action.payload
        }
    }
})

export const {SET_QUERY} = querySlice.actions;
export const selectQuery = (state) => state.query.query
export default querySlice.reducer;