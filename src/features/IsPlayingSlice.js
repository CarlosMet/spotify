import { createSlice } from "@reduxjs/toolkit";

export const isPlayingSlice = createSlice({
    name: "isPlaying",
    initialState: {
        isPlaying: null
    },
    reducers: {
        SET_ISPLAYING: (state, action) => {
            state.isPlaying = action.payload
        }
    }

})

export const {SET_ISPLAYING} = isPlayingSlice.actions;
export const selectIsPlaying = (state) => state.isPlaying.isPlaying
export default isPlayingSlice.reducer;