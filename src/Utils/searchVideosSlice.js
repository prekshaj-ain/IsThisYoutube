import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "searchVideo",
    initialState: {
        error: false,
        loading: false,
        videos: []
    },
    reducers: {
        SEARCH_FETCH_START : (state)=>{
            state.loading = true;

        },
        SEARCH_FETCH_SUCCESS : (state,action)=>{
            state.loading = false;
            state.videos = action.payload;
        },
        SEARCH_FETCH_FAIL : (state)=>{
            state.error = true;
            state.loading = false;
        } 
    }
})
export default videoSlice.reducer;
export const {SEARCH_FETCH_START,SEARCH_FETCH_FAIL,SEARCH_FETCH_SUCCESS} = videoSlice.actions;