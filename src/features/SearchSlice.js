import { createSlice } from "@reduxjs/toolkit";

 export const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: null,
    },
    reducers:{
        SET_SEARCH: (state, action) => {
            state.search = action.payload
        }
    }
 })

 export const {SET_SEARCH} =searchSlice.actions
 export const selectSearch = (state) => state.search.search
 export default searchSlice.reducer


