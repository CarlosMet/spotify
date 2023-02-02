import { createSlice } from "@reduxjs/toolkit";

export const recentSlice = createSlice({
    name: "recent",
    initialState : {
        recent : []
    },
    reducers: {
        SET_RECENT : (state, action) =>{
            state.recent = action.payload
        }
    }
})

export const {SET_RECENT} = recentSlice.actions;
export const selectRecent = (state) => state.recent.recent
export default recentSlice.reducer;