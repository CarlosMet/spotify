import { createSlice } from "@reduxjs/toolkit";

 export const listQuerySlice = createSlice({
    name: "listQuery",
    initialState: {
        listQuery: ""
    },
    reducers:{
        SET_LISTQUERY : (state, action) => {
            state.listQuery = action.payload
        }
    }
 })

 export const {SET_LISTQUERY} =listQuerySlice.actions
 export const selectList = (state) => state.listQuery.listQuery
 export default listQuerySlice.reducer
