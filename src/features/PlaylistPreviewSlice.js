import { createSlice } from "@reduxjs/toolkit";

 export const playlistPreviewSlice = createSlice({
    name: "playlistPreview",
    initialState: {
        playlistPreview: {
            img: "",
            title: "playlist"
        }
    },
    reducers:{
        SET_PLAYLISTPREVIEW: (state, action) => {
            state.playlistPreview = action.payload
        }
    }
 })

 export const {SET_PLAYLISTPREVIEW} =playlistPreviewSlice.actions
 export const selectPlaylistPreview = (state) => state.playlistPreview
 export default playlistPreviewSlice.reducer