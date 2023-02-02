import { createSlice } from "@reduxjs/toolkit";

export const releaseSlice = createSlice({
    name: "release",
    initialState: {
        release: null        
    },
    reducers: {
        SET_RELEASE: (state, action)=>{
            state.release = action.payload
        }
    }
})

export const {SET_RELEASE} = releaseSlice.actions;
export const selectRelease = (state) => state.release.release
export default releaseSlice.reducer;