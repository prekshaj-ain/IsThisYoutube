import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "homeVideo",
    initialState: {
        error: false,
        loading: false,
        videos: []
    },
    reducers: {
        FETCH_START : (state)=>{
            state.loading = true;

        },
        FETCH_SUCCESS : (state,action)=>{
            state.loading = false;
            state.videos = action.payload;
        },
        FETCH_FAIL : (state)=>{
            state.error = true;
            state.loading = false;
        } 
    }
})
export default videoSlice.reducer;
export const {FETCH_START,FETCH_FAIL,FETCH_SUCCESS} = videoSlice.actions;