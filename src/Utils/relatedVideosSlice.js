import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "relatedVideo",
    initialState: {
        error: false,
        loading: false,
        videos: []
    },
    reducers: {
        RELATED_FETCH_START : (state)=>{
            state.loading = true;

        },
        RELATED_FETCH_SUCCESS : (state,action)=>{
            state.loading = false;
            state.videos = action.payload;
        },
        RELATED_FETCH_FAIL : (state)=>{
            state.error = true;
            state.loading = false;
        } 
    }
})
export default videoSlice.reducer;
export const {RELATED_FETCH_START,RELATED_FETCH_FAIL,RELATED_FETCH_SUCCESS} = videoSlice.actions;