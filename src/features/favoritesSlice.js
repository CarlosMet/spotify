import { createSlice } from "@reduxjs/toolkit";

 export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: null
    },
    reducers:{
        SET_FAVORITES : (state, action) => {
            state.favorites = action.payload
        }
    }
 })

 export const {SET_FAVORITES} =favoritesSlice.actions
 export const selectFavorites = (state) => state.favorites.favorites
 export default favoritesSlice.reducer
