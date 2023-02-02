import { createSlice } from "@reduxjs/toolkit";

 export const playingSlice = createSlice({
    name: "playing",
    initialState: {
        playing: null,
    },
    reducers:{
        SET_PLAYING: (state, action) => {
            state.playing = action.payload
        }
    }
 })

 export const {SET_PLAYING} =playingSlice.actions
 export const selectPlaying = (state) => state.playing.playing
 export default playingSlice.reducer