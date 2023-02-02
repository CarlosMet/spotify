import { createSlice } from "@reduxjs/toolkit";

 export const renderSlice = createSlice({
    name: "render",
    initialState: {
        render: {
            home: true,
            search: false,
            library: false,
            playlistPreview: false
        },
    },
    reducers:{
        SET_RENDER : (state, action) => {
            state.render = action.payload
        }
    }
 })

 export const {SET_RENDER} =renderSlice.actions
 export const selectRender = (state) => state.render.render
 export default renderSlice.reducer
