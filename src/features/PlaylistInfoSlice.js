import { createSlice } from "@reduxjs/toolkit";

 export const playlistInfoSlice = createSlice({
    name: "playlistInfo",
    initialState: {
        playlistInfo: null,
    },
    reducers:{
        SET_PLAYLISTINFO: (state, action) => {
            state.playlistInfo = action.payload
        }
    }
 })

 export const {SET_PLAYLISTINFO} =playlistInfoSlice.actions
 export const selectPlaylistInfo = (state) => state.playlistInfo.playlistInfo
 export default playlistInfoSlice.reducer